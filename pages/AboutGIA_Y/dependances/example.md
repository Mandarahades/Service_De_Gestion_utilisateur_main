# Endpoints and Testing

## Endpoints

| Method | Endpoint | Description |
|--------|---------|-------------|
| POST   | `/sms`  | Send an SMS notification |
| POST   | `/smscallback` | Handle Twilio callbacks |


## Sending Various SMS

- Transactional SMS: Sent automatically to users for updates, confirmations, or alerts.

- Promotional SMS: Used for marketing campaigns and promotions.

- OTP (One-Time Password) SMS: Sent for authentication and security verification.


### Example Request for Sending SMS

- **Method** : `POST`
- **URL** : `/sms`
- **Content-Type** : application/json

```json
{
  "number": "+1234567890",
  "message": "Your order has been shipped!",
  "type": "transactional",
  "priority": 1.0
}
```

### Response
```json
{
  "number": "+1234567890",
  "message": "Your order has been shipped!",
  "type": "transactional",
  "priority": 1.0
}
```