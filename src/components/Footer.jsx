import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/Elikibs" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithubSquare} className="footer--icon" />
      </a>
      <a href="https://www.linkedin.com/in/elishakibet/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="footer--icon" />
      </a>
      <a href="https://twitter.com/elisha__kibet" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="footer--icon" />
      </a>
    </div>
  );
}

export default Footer;