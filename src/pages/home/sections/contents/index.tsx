import { Button } from "../../../../components/button";
import { DescriptionSection } from "../../../../components/description/style";
import { TitleSection } from "../../../../components/title/style";
import { Container } from "./style";
import imageMacbook from "../../../../assets/img-macbook.png";
import imageDashboard from "../../../../assets/img-boardNotifications.png";

export const Contents = () => {
    return (
        <Container>
            <TitleSection>Contents</TitleSection>
            <DescriptionSection>
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
            </DescriptionSection>

            <div className="content">
                <div className="card">
                    <h3>Work</h3>
                    <p>
                        Ever wondered if you're too reliant on a client for
                        work? Slate helps you identify .
                    </p>

                    <Button>Sign Up</Button>

                    <div className="image">
                        <img src={imageMacbook} alt="" />
                    </div>
                </div>

                <div className="card">
                    <h3>Design with real data</h3>
                    <p>
                        Ever wondered if you're too reliant on a client for
                        work? Slate helps you identify .
                    </p>

                    <Button>Try For Free</Button>

                    <div className="image">
                        <img src={imageDashboard} alt="" />
                    </div>
                </div>
            </div>
        </Container>
    );
};
