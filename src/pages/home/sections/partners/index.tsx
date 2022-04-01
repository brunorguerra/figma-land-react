import { Button } from "../../../../components/button";
import { Description } from "../../../../components/description";
import { Title } from "../../../../components/title";
import { Container } from "./style";

export const Partners = () => {
    return (
        <Container>
            <Title>Partners</Title>
            <Description>
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
            </Description>

            <div className="partners">
                <img src="./apple.svg" alt="logo Apple" />
                <img src="./apiary.svg" alt="logo Apiary" />
                <img src="./android.svg" alt="logo Android" />
                <img src="./basecamp.svg" alt="logo Basecamp" />
                <img src="./airbnb.svg" alt="logo Airbnb" />
                <img src="./ibm.svg" alt="logo IBM" />
            </div>

            <Button>All Partners</Button>
        </Container>
    );
};
