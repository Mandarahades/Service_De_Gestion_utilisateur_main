import Link from "next/link";
import classes from "./cards.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket,     // Getting Start 
  faEnvelope,   // SMS Notification 
  faEnvelopeOpenText, // Email Notification
  faBell,       // Push Notification
  faComments,   // WhatsApp Notification
  faCode        // DevZone
} from '@fortawesome/free-solid-svg-icons';

export default function Cards() {
  return (
    <div className={classes.Cards}>
      <div className={classes.Card}>
        <Link href="/AboutGIA_Y/Getting_Start/requirements">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faRocket} className={classes.Icon} /> 
            Gestion complète des utilisateurs
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/AboutGIA_Y/Sms/configure">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faEnvelope} className={classes.Icon} />
            Authentification renforcée et sécurisée
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <a href="/AboutGIA_Y/Email/code">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faEnvelopeOpenText} className={classes.Icon} />
            Gestion dynamique des rôles et permissions
          </span>
        </a>
      </div>

      <div className={classes.Card}>
        <Link href="/AboutGIA_Y/Push">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faBell} className={classes.Icon} />
            API RESTful intuitive et performante
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/AboutGIA_Y/Whatsapp/configure">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faComments} className={classes.Icon} />
            Sécurité avancée et conformité aux standards
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/AboutGIA_Y/Routing/index">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faCode} className={classes.Icon} />
            Audit et journalisation des activités
          </span>
        </Link>
      </div>
    </div>
  );
}
