import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function PersistentButton() {
  return (
    <div>
      <a
        href="https://wa.me/523112881665"
        className="fixed bottom-4 right-4 bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a
        href="https://www.facebook.com/tArmando06"
        className="fixed bottom-16 right-4 bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </div>
  );
}

export default PersistentButton;
