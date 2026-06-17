package com.marcenariareis.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class RateLimitFilter extends OncePerRequestFilter {

    private final Map<String, Deque<Long>> requestsByIp = new ConcurrentHashMap<>();

    @Value("${app.security.rate-limit.max-requests:120}")
    private int maxRequests;

    @Value("${app.security.rate-limit.window-ms:60000}")
    private long windowMs;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        if (isBlockedPath(request)) {
            response.sendError(HttpStatus.FORBIDDEN.value(), "Acesso negado");
            return;
        }

        String clientIp = resolveClientIp(request);
        if (isRateLimited(clientIp)) {
            response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());
            response.getWriter().write("Muitas requisições. Tente novamente em instantes.");
            return;
        }

        response.setHeader("X-Content-Type-Options", "nosniff");
        response.setHeader("X-Frame-Options", "DENY");

        filterChain.doFilter(request, response);
    }

    private boolean isBlockedPath(HttpServletRequest request) {
        String uri = request.getRequestURI().toLowerCase();
        return uri.contains("..")
            || uri.contains("/.git")
            || uri.contains("/backend/")
            || uri.contains("/web-inf")
            || uri.contains("/meta-inf")
            || uri.endsWith(".env")
            || uri.endsWith(".sql");
    }

    private boolean isRateLimited(String clientIp) {
        long now = System.currentTimeMillis();
        Deque<Long> timestamps = requestsByIp.computeIfAbsent(clientIp, key -> new ArrayDeque<>());

        synchronized (timestamps) {
            while (!timestamps.isEmpty() && now - timestamps.peekFirst() > windowMs) {
                timestamps.pollFirst();
            }
            if (timestamps.size() >= maxRequests) {
                return true;
            }
            timestamps.addLast(now);
        }
        return false;
    }

    private String resolveClientIp(HttpServletRequest request) {
        String forwarded = request.getHeader("X-Forwarded-For");
        if (forwarded != null && !forwarded.isBlank()) {
            return forwarded.split(",")[0].trim();
        }
        return request.getRemoteAddr();
    }
}
