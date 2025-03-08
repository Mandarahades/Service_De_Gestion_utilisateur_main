# REQUIREMENTS

Welcome to **GIA_Y** 🎉! This guide will provide you with instructions to install all the dependencies required to run the GIA_Y project on your system.

## Prerequisites

Before you begin, make sure your system meets the following requirements:

[![Ubuntu Linux](https://img.shields.io/badge/Ubuntu%20Linux-18.04.6%20LTS%20or%20Higher-blue.svg?logo=ubuntu)](https://releases.ubuntu.com/18.04/?C=N;O=D) <br>
[![Java](https://img.shields.io/badge/Java-21%20or%20higher-blue.svg?logo=openjdk)](https://adoptium.net/)
<br>
![Maven](https://img.shields.io/badge/Maven-3.6.3%2B-blue?logo=apache-maven)
<br>
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-2.6.0-green?logo=spring-boot) 
<br>
![Apache HttpClient](https://img.shields.io/badge/Apache%20HttpClient-5.1-red)
<br>
![Twilio](https://img.shields.io/badge/Twilio-Latest-red?logo=twilio) 
<br>
![OpenAPI](https://img.shields.io/badge/SpringDoc%20OpenAPI-1.6.x-lightgrey?logo=openapiinitiative)
<br>




## Installing Dependencies

Follow the steps below to install the necessary dependencies:

### 1. Java Development Kit (JDK)

GIA_Y requires Java 21 or higher. Install it using the following command:

```shell
sudo apt update && sudo apt install openjdk-21-jdk
```

Verify the installation:

```shell
java -version
```

### 2. Apache Maven

Maven is required to build and manage dependencies. Install it using:

```shell
sudo apt install maven
```

Verify the installation:

```shell
mvn -version
```
### 4. Required Dependencies in `pom.xml`

GIA_Y is built using Spring Boot and requires the following dependencies:

- **Spring Boot Starter Web**
- **Spring Boot Starter Mail**
- **Spring Boot Starter WebSocket**
- **Spring Boot Starter Data Cassandra**
- **Spring Boot DevTools** (for development)
- **Spring Boot Starter Test** (for testing)
- **Apache HttpClient5** (for external API communication)
- **Twilio SDK** (for WhatsApp & SMS integration)
- **Squareup okhttp3** (for http/https rquest with Whatsapp Cloud API)
- **SpringDoc OpenAPI** (for API documentation)

To install all dependencies, navigate to the project root and run:

```shell
mvn clean install
```

After following these steps, your system should be ready to run the GIA_Y project.

