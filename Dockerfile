FROM eclipse-temurin:17-jdk-jammy AS build
WORKDIR /app
COPY . .
WORKDIR /app/backend
RUN chmod +x mvnw && ./mvnw -q -DskipTests package

FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
COPY --from=build /app/backend/target/marcenaria-reis-security-1.0.0.jar app.jar
ENV SPRING_PROFILES_ACTIVE=prod
ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
