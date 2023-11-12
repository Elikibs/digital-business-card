import infopic from "../assets/moringaprofilepic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Info() {
    return (
        <>
            <div className="info">
                <img src={infopic} alt="" />
                <h3 className="info--title">Elisha Kibet</h3>
                <p className="info--role"><em>FullStack Developer</em></p>
                <p className="info--location">Nairobi, Kenya</p>
                <div className="info--buttons">
                    <a href="mailto:info@elishakibet67@gmail.com"><button>Email</button></a>
                    <a href="https://www.linkedin.com/in/elishakibet/"><button>LinkedIn</button></a>
                </div>
            </div>
        </>
    )
}

export default Info;