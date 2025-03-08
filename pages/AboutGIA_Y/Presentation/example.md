# Endpoints

## Email Sending Service

The service supports sending styled emails based on predefined templates. The templates include:
- `otp-template`

- `alert-template`

- `reservation-template`

- `feedback-template`

- `reset-password-template`

- `reservation-confirmation-template`

- `confirmation-template`

- `rappel-template`

- `activation-organisation`

- `echec-paiement`

- `succes-paiement`

- `produit-disponible`

- `arret-emission`

- `creation-appareil`

- `suppression-appareil`

- `erreur-appareil`

The sendStyledEmail method processes and sends emails using the appropriate template.

## Create Email Notification

- **Method** : `POST`
- **URL** : `/api/notifications/email`
- **Content-Type**: `application/json`
- **Request Body**:
```json
{
  "email_id": "uuid",
  "message": "Message content",
  "subject": "Subject here",
  "type": "OTP",
  "email": "user@example.com",
  "priority": 1.0
}
```
- **Response** : 
```json
{
  "email_id": "uuid",
  "message": "Message content",
  "subject": "Subject here",
  "type": "OTP",
  "email": "user@example.com",
  "priority": 1.0
}
```

## 2. Get All Email Notifications

- **Method** : `GET`
- **URL** : `/api/notifications/email`
- **Response** : 
```json
[
  {
    "email_id": "uuid",
    "message": "Message content",
    "subject": "Subject here",
    "type": "ALERTE",
    "email": "user@example.com",
    "priority": 1.0
  }
]
```

## Get Email Notification by ID

- **Method** : `GET`
- **URL** : `/api/notifications/email/{id}`
- **RequestParameter** : `id`
- **Response** : 
```json
{
  "email_id": "uuid",
  "message": "Message content",
  "subject": "Subject here",
  "type": "OTP",
  "email": "user@example.com",
  "priority": 1.0
}
```

## Update Email Notification

- **Method** : `PUT`
- **URL** : `/api/notifications/email/{id}`
- **RequestParameter** : `id`
- **Request Body** : 
```json
{
  "message": "Updated message content",
  "subject": "Updated Subject",
  "type": "ALERTE",
  "email": "updated@example.com",
  "priority": 2.0
}
```
- **Response** : 
```json
{
  "message": "Updated message content",
  "subject": "Updated Subject",
  "type": "ALERTE",
  "email": "updated@example.com",
  "priority": 2.0
}
```

## Delete Email Notification

- **Method** : `DELETE`
- **URL** : `/api/notifications/email/{id}`
- **RequestParameter** : `id`
- **Response** : 
```json
{
  "status": "No Content"
}
```

## Error Handling

- `400 BAD REQUEST` - Invalid input data

- `404 NOT FOUND` - Email Notification not found

- `500 INTERNAL SERVER ERROR` - Failure in sending email