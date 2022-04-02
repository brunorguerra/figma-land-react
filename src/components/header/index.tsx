import { Container } from "./style";
import { Button } from "../button";
import Logo from "../../assets/logo.svg";
import MenuMobile from "../../assets/menu.svg";
import { useState } from "react";

export const Header = () => {
    const [isActiveMenuMobile, setIsActiveMenuMobile] = useState(false);

    function toggleMenuMobile() {
        isActiveMenuMobile
            ? setIsActiveMenuMobile(false)
            : setIsActiveMenuMobile(true);
    }

    return (
        <Container>
            <div className="logo">
                <img src={Logo} alt="Logo da Figma Land" />
            </div>

            <nav className={isActiveMenuMobile ? "activeNav" : ""}>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/product">Product</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <Button typeStyle="outlined">Login</Button>
                    </li>
                </ul>
            </nav>
            <div
                className={`overlay ${
                    isActiveMenuMobile ? "activeOverlay" : ""
                }`}
                onClick={toggleMenuMobile}
            ></div>

            <div className="groupLogin">
                <Button typeStyle="outlined">Login</Button>

                <div className="menuMobile" onClick={toggleMenuMobile}>
                    <img src={MenuMobile} alt="Menu Mobile" />
                </div>
            </div>
        </Container>
    );
};
