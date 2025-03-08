# Sms Implementation

This API allows sending and managing SMS notifications using Twilio and Spring Boot. It provides endpoints for creating, retrieving, updating, and deleting SMS notifications, as well as handling Twilio callbacks.

## DTO (Data Transfer Object)

```java
public class SmsNotificationDTO {
    private String number;
    private String message;
    private String type;
    private Float priority;

    public SmsNotificationDTO() {}

    public SmsNotificationDTO(String number, String message, String type, Float priority) {
        this.number = number;
        this.message = message;
        this.type = type;
        this.priority = priority;
    }

    public String getNumber() { return number; }
    public void setNumber(String number) { this.number = number; }
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    public Float getPriority() { return priority; }
    public void setPriority(Float priority) { this.priority = priority; }
}
```

## Model

```java
import java.util.UUID;
import org.springframework.data.cassandra.core.mapping.Column;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table("sms_notifications")
public class SmsNotification {
    @PrimaryKey
    @Column("notification_id")
    private UUID notificationId;
    @Column("number")
    private String number;
    @Column("message")
    private String message;
    @Column("type")
    private String type;
    @Column("priority")
    private Float priority;
}
```

## Service Layer

```java
package ProjetDeSyntheseNotification.notification.model;

import java.util.UUID;
import org.springframework.data.cassandra.core.mapping.Column;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table("sms_notifications")
public class SmsNotification {
    @PrimaryKey
    @Column("notification_id")
    private UUID notificationId;
    @Column("number")
    private String number;
    @Column("message")
    private String message;
    @Column("type")
    private String type;
    @Column("priority")
    private Float priority;
}
```

## Notes

- Twilio credentials should be stored securely using environment variables.

- Ensure WebSocket configuration is set up properly.


