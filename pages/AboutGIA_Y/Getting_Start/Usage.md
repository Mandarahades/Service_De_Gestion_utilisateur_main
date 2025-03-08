# GIA_Y Project Structure

This project follows a specific structure to organize its files and directories. Here is an overview of the GIA_Y project structure:

Here is a well-structured explanation of the most important directories in `notification/`, along with a warning section at the end.

```
Service GIA_Y/
├── .dist
├── .env
├── .gitattributes
├── .gitignore
├── compose.yaml
├── bin
│   ├── kc.bat
│   ├── federation-ssd-setup.sh
│   ├── kc.sh
│   |── kcadm.bat
    ├── client
    |   ├── lib
    |   ├── Keyclok-admin-cli-260.jqr
    |   ├── federation-sssd-setup.sh
|-- confi
│   ├── federation-sssd.conf
│   ├── federation-sssd.conf.sample
|----------------------------------------------------------------    
|----------------------------------------------------------------    
|----------------------------------------------------------------    
├── mvnw
├── mvnw.cmd
├── pom.xml
├── sandbox
│   ├── Postman
│   │   └── notification-sandbox.postman_collection.json
│   ├── docker-compose.yml
│   └── scripts
│       └── mock-data-generator.sh
└── src
    ├── main
    │   ├── java
    │   │   └── ProjetDeSyntheseNotification
    │   │       └── notification
    │   │           ├── NotificationApplication.java
    │   │           ├── Validator
    │   │           │   
    │   │           ├── adapter
    │   │           │   ├── EmailAdapter.java
    │   │           │   ├── NotificationAdapter.java
    │   │           │   ├── PushAdapter.java
    │   │           │   └── SmsAdapter.java
    │   │           ├── config
    │   │           │   ├── CorsConfig.java
    │   │           │   ├── DatabaseConfig.java
    │   │           │   ├── KafkaConfig.java
    │   │           │   ├── ScyllaConfig.java
    │   │           │   ├── SwaggerConfig.java
    │   │           │   ├── WebSocketConfig.java
    │   │           │   ├── WebSocketEventListener.java
    │   │           │   └── schema.cql
    │   │           ├── controller
    │   │           │   ├── AdminController.java
    │   │           │   ├── EmailNotificationController.java
    │   │           │   ├── HomeController.java
    │   │           │   ├── NotificationController.java
    │   │           │   ├── PushNotificationController.java
    │   │           │   ├── SmsNotificationController.java
    │   │           │   └── WhatsAppNotificationController.java
    │   │           ├── dto
    │   │           │   ├── EmailNotificationDTO.java
    │   │           │   ├── GroupDTO.java
    │   │           │   ├── Message.java
    │   │           │   ├── NotificationDTO.java
    │   │           │   ├── PushNotificationDTO.java
    │   │           │   ├── ResponseMessage.java
    │   │           │   ├── SimpleDTO.java
    │   │           │   ├── SmsNotificationDTO.java
    │   │           │   ├── SystemNotificationDTO.java
    │   │           │   
    │   │           ├── model
    │   │           │   ├── EmailNotification.java
    │   │           │   ├── Group.java
    │   │           │   ├── Log.java
    │   │           │   ├── Notification.java
    │   │           │   ├── PushNotification.java
    │   │           │   ├── Simple.java
    │   │           │   ├
    │   │           │   └── enums
    │   │           │       ├── PropertyType.java
    │   │           │       └── PushNotificationType.java
    │   │           ├── repository
    │   │           │   ├── EmailNotificationRepository.java
    │   │           │   ├── GroupRepository.java
    │   │           │   ├── LogRepository.java
    │   │           │   ├── NotificationRepository.java
    │   │           │   ├── PushNotificationRepository.java
    │   │           │   ├── SimpleRepository.java
    │   │           │   ├── SmsNotificationRepository.java
    │   │           │   ├── SystemNotificationRepository.java
    │   │           │  
    │   │           ├── service
    │   │           │   ├── EmailService.java
    │   │           │   ├── LogService.java
    │   │           │   ├── NotificationService.java
    │   │           │   ├── NotificationService1.java
    │   │           │   ├── PriorityService.java
    │   │           │   ├── PushService.java
    │   │           │   ├── SmsService.java
    │   │           │   ├── ValidationService.java
    │   │           │   
    │   │           │   └── pushService1.java
    │   │           └── utils
    │   │               ├── KafkaConsumer.java
    │   │               ├── KafkaProducer.java
    │   │               ├── LogUtils.java
    │   │               └── PriorityManager.java
    │   └── resources
    │       ├── application.properties
    │       ├── application.yml
    │       ├── images
    │       │   └── logo.png
    │       ├── migration.txt
    │       └── templates
    │           ├── activation-organisation.html
    │           ├── AlertX
    │           │   ├── gestionForum
    │           │   │   ├── new-message.html
    │           │   │   └── new-post.html
    │           │   ├── marketplace
    │           │   │   ├── echec-paiement.html
    │           │   │   ├── produit-disponible.html
    │           │   │   └── succes-paiement.html
    │           │   ├── organisation
    │           │   │   ├── activation-organisation.html
    │           │   │   ├── création-organisation.html
    │           │   │   └── desactivation-organisation.html
    │           │   └── service-iot
    │           │       ├── arret-emission.html
    │           │       ├── creation-appareil.html
    │           │       ├── erreur-appareil.html
    │           │       ├── lancement-emission.html
    │           │       ├── limite-atteinte.html
    │           │       ├── modification-appareil.html
    │           │       └── suppression-appareil.html
    │           ├── alert-template.html
    │           ├── arret-emission.html
    │           ├── confirmation-template.html
    │           ├── creation-appareil.html
    │           ├── création-organisation.html
    │           ├── desactivation-organisation.html
    │           ├── echec-paiement.html
    │           ├── email-template.html
    │           ├── erreur-appareil.html
    │           ├── error.html
    │           ├── feedback-template.html
    │           ├── lancement-emission.html
    │           ├── limite-atteinte.html
    │           ├── logo.png
    │           ├── modification-appareil.html
    │           ├── organisation-template.html
    │           ├── otp-template.html
    │           ├── produit-disponible.html
    │           ├── rappel-template.html
    │           ├── reservation-confirmation-template.html
    │           ├── reset-password-template.html
    │           ├── succes-paiement.html
    │           └── suppression-appareil.html
    └── test
        └── java
            └── ProjetDeSyntheseNotfication
                └── notification
                    └── NotificationApplicationTests.java
```

---

Voici une version commentée en se concentrant sur les dossiers importants :

### **notification/**

Le dossier GIA_Y du projet de notification, structuré pour une application Spring Boot permettant la gestion et l’envoi de différents types de notifications : email, SMS, push, WhatsApp, etc.

#### **docs/**

Documentation essentielle du projet.

- **API-SPEC.md** : Spécifications de l'API.
- **DEPLOYMENT.md** : Instructions de déploiement.
- **README.md** : Guide de démarrage et présentation du projet.
- **architecture-diagram.drawio** : Diagramme de l'architecture de l'application.

#### **sandbox/**

Contient des outils pour les tests et le développement local.

- **Postman/** : Collection Postman pour tester les endpoints.

- **scripts/** : Scripts utilitaires, comme `mock-data-generator.sh` pour générer des données fictives.

#### **src/main/java/ProjetDeSyntheseNotification/notification/**

Le cœur de l'application Java, organisé par fonctionnalités.

- **NotificationApplication.java** : Classe principale pour démarrer l’application.
- **Validator/** : Contient des classes de validation pour vérifier les données des notifications (Email, SMS, Push).
- **adapter/** : Adapteurs pour l’intégration avec différents systèmes externes (Email, Push, SMS).
- **config/** : Configuration de l'application (CORS, base de données, Kafka, ScyllaDB, WebSocket, Swagger).
- **controller/** : Contrôleurs REST pour gérer les requêtes liées aux notifications.

- **dto/** : Objets de transfert de données (DTO) utilisés pour transmettre des informations entre les couches.
- **model/** : Modèles représentant les entités de l’application (Notification, Log, Group, etc.).
- **repository/** : Interfaces pour interagir avec la base de données via Spring Data JPA.
- **service/** : Logique métier de l’application (envoi de notifications, gestion des priorités, validation des données).
- **utils/** : Classes utilitaires pour Kafka, gestion des logs et priorités.

#### **src/main/resources/**

Ressources de l'application Spring Boot.

- **application.properties** et **application.yml** : Fichiers de configuration de l’application.
- **templates/** : Modèles HTML pour les emails et notifications. Contient des sous-dossiers pour des fonctionnalités spécifiques :
  - **gestionForum/** : Modèles pour les forums (nouveaux messages et posts).
  - **marketplace/** : Modèles liés au paiement (succès, échec).
  - **service-iot/** : Modèles pour la gestion des appareils IoT (création, suppression, erreurs).
  - **reset-password-template.html** : Modèle pour la réinitialisation de mot de passe.

#### **src/test/java/ProjetDeSyntheseNotification/notification/**

Tests unitaires et d’intégration.

- **NotificationApplicationTests.java** : Classe de test pour l’application principale.

---
