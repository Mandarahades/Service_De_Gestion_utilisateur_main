# Quick Start

Welcome to **GIA_Y**! 🚀 This guide will help you quickly set up and launch the project to start using its messaging functionalities, including WhatsApp, SMS, Gmail, and Push Notifications.

## Installation

1. **Clone the GIA_Y repository from GitHub:**

   ```shell
   https://github.com/foupouagnigni/gestion-des-identite-et-des-acces.git
   ```
2. **Navigate to the project directory:**

   ```shell
   cd SERVICE_GIA_Y
   ```
3. **Ensure [serveur keycloak-26.0.5](https://github.com/foupouagnigni/gestion-des-identite-et-des-acces/tree/final/serveur%20keycloak-26.0.5 "serveur keycloak-26.0.5") is installed and running:**

   - Install Keycloak if not already installed: [keycloak-26.0.5 download](https://www.keycloak.org/downloads "keycloak-26.0.5 downmload")
4. **run on windows command:**

   ```shell
   $ bin\kc.bat
   ```
5. **run on windows Linux/Unix:**
6. ```shell
   $ bin/kc.sh
   ```
7. **To try Keycloak out in development mode, run:**
   **on Linux/Unix:**

   ```shell
   $ bin/kc.sh start-dev
   ```

   **on Windows:**

   ```shell
   $ bin/kc.bat start-dev
   

   ** After the server boots, open http://localhost:8080 in your web browser. The welcome page will indicate that the server is running.

To get started, check out the configuration guides. **
## Running the Project

### 1. Set Up Environment Variables

Before running the application, please make sure you have java 21 install in your environnement Path : JAVA_HOME


### 2. Build and Run the Spring Boot Application

1. **Ensure Java 21 and Maven are installed.**

   - Verify installation:
     ```shell
     java -version
     mvn -version
     ```
2. **Run the application:**

   ```shell
   mvn spring-boot:run
   ```
3. **Verify the API is running:**
   Open a browser or use Postman to check:

   ```shell
   curl http://localhost:8080/api/health
   ```
