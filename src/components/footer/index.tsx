import { Container } from "./style";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";

export const Footer = () => {
    return (
        <Container>
            <div className="contentFooter">
                <div className="leftFooter">
                    <div className="link">
                        <h4>Fingertipe</h4>

                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Examples</a>
                            </li>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                            <li>
                                <a href="#">Updates</a>
                            </li>
                        </ul>
                    </div>

                    <div className="link">
                        <h4>Resources</h4>

                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Examples</a>
                            </li>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                            <li>
                                <a href="#">Updates</a>
                            </li>
                        </ul>
                    </div>

                    <div className="link">
                        <h4>About</h4>

                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Examples</a>
                            </li>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                            <li>
                                <a href="#">Updates</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="rightFooter">
                    <p>
                        <img src="./icon-location.svg" alt="" />
                        <span>7480 Mockingbird Hill undefined </span>
                    </p>

                    <p>
                        <img src="./icon-phone.svg" alt="" />
                        <span>(239) 555-0108</span>
                    </p>

                    <div className="socials">
                        <a href="#">
                            <BsTwitter size={34} />
                        </a>
                        <a href="#">
                            <AiFillFacebook size={37} />
                        </a>
                        <a href="#">
                            <BsLinkedin size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    );
};
