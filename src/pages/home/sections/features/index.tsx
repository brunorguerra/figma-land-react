import { DescriptionSection } from "../../../../components/description/style";
import { TitleSection } from "../../../../components/title/style";
import { Container } from "./style";
import imageFeatures from "../../../../assets/image-features.png";
import iconSpoons from "../../../../assets/spoons.svg";
import iconMask from "../../../../assets/mask.svg";
import iconInfinite from "../../../../assets/infinite.svg";

export const Features = () => {
    return (
        <Container>
            <TitleSection>features</TitleSection>
            <DescriptionSection>
                Most calendars are designed for teams. Slate is designed for
                freelancers who want a simple way to plan their schedule.
            </DescriptionSection>

            <div className="content">
                <div className="image">
                    <img src={imageFeatures} alt="" />
                </div>
                <div className="columnText">
                    <div className="card">
                        <h3>
                            <img src={iconSpoons} alt="" />
                            <span>A single source of truth</span>
                        </h3>
                        <p>
                            When you add work to your Slate calendar we
                            automatically calculate useful insights
                        </p>
                    </div>

                    <div className="card">
                        <h3>
                            <img src={iconMask} alt="" />
                            <span>Intuitive interface</span>
                        </h3>
                        <p>
                            When you add work to your Slate calendar we
                            automatically calculate useful insights
                        </p>
                    </div>

                    <div className="card">
                        <h3>
                            <img src={iconInfinite} alt="" />
                            <span>Or with rules</span>
                        </h3>
                        <p>
                            When you add work to your Slate calendar we
                            automatically calculate useful insights
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};
