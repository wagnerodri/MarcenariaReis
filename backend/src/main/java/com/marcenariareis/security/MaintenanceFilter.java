package com.marcenariareis.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@Order(0)
public class MaintenanceFilter extends OncePerRequestFilter {

    @Value("${app.maintenance.enabled:false}")
    private boolean maintenanceEnabled;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        if (!maintenanceEnabled || request.getRequestURI().startsWith("/actuator")) {
            filterChain.doFilter(request, response);
            return;
        }

        response.setStatus(HttpServletResponse.SC_SERVICE_UNAVAILABLE);
        response.setContentType("text/html;charset=UTF-8");
        response.getWriter().write("""
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Marcenaria Reis - Em manutenção</title>
                <style>
                    body { font-family: Arial, sans-serif; background: #1a1a2e; color: #fff; display: flex;
                           align-items: center; justify-content: center; min-height: 100vh; margin: 0; text-align: center; }
                    .box { max-width: 520px; padding: 2rem; }
                    h1 { color: #d4a574; }
                </style>
            </head>
            <body>
                <div class="box">
                    <h1>Marcenaria Reis</h1>
                    <p>Site temporariamente fora do ar para ajustes.</p>
                    <p>Voltamos em breve. Obrigado!</p>
                </div>
            </body>
            </html>
            """);
    }
}
