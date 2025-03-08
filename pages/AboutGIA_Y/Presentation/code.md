# DEPENDENCIES CONFIGURATION

This guide provides instructions for installing all the necessary dependencies to enable Email notifications using JavaMail in the project.

## Prerequisites

Before proceeding, ensure that your system meets the following requirement

[![Spring Data Cassandra](https://img.shields.io/badge/Spring%20Data%20Cassandra-Supported-green.svg?logo=spring)](https://spring.io/projects/spring-data-cassandra) <br>
[![JavaMailSender](https://img.shields.io/badge/JavaMailSender-Supported-orange.svg?logo=maildotru)](https://javaee.github.io/javamail/)  <br>
[![Thymeleaf Templates](https://img.shields.io/badge/Thymeleaf%20Templates-Supported-yellow.svg?logo=thymeleaf)](https://www.thymeleaf.org/)  

## Installing Dependencies

Follow the steps below to install the necessary dependencies for integrating Twilio's WhatsApp API with your Spring Boot application.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-cassandra</artifactId>
</dependency>

<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-mail</artifactId>
</dependency>

<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```

Save the file and run the following command to update your Maven project:

```sh
mvn clean install
```

## Configure Application Properties

To use JavaMail services, you need to store your credentials securely in `application.yml` or `application.properties`.

### Example Configuration using `application.properties`:

```properties
spring.mail.username=your_gmail_username
spring.mail.password=your_gmail_password
```

## Verifying Installation

Once dependencies are installed, verify by checking the Maven dependencies tree:

```sh
mvn dependency:tree
```


After completing these steps, the necessary dependencies for JavaMail integration should be properly installed.