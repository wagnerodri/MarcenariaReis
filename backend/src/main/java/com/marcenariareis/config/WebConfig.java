package com.marcenariareis.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Path;
import java.nio.file.Paths;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Value("${app.static.mode:file}")
    private String staticMode;

    @Value("${app.static.root:..}")
    private String staticRoot;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        if ("classpath".equalsIgnoreCase(staticMode)) {
            registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/static/")
                .setCachePeriod(3600);
            return;
        }

        Path siteRoot = Paths.get(staticRoot).toAbsolutePath().normalize();
        registry.addResourceHandler("/**")
            .addResourceLocations("file:" + siteRoot + "/")
            .setCachePeriod(3600);
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("forward:/index.html");
    }
}
