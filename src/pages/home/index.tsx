import { Container } from "./style";
import { Button } from "../../components/button";
import imageScreenHome from "../../assets/screen-home.svg";
import { Features } from "./sections/features";
import { Contents } from "./sections/contents";
import { Gallery } from "./sections/gallery";
import { Partners } from "./sections/partners";
import { Testimonials } from "./sections/testimonials";

export const Home = () => {
    return (
        <>
            <Container>
                <h1>Work at the speed of thought</h1>
                <p>
                    Most calendars are designed for teams. Slate is designed for
                    freelancers who want a simple way to plan their schedule.
                </p>

                <div className="groupButton">
                    <Button>Try for Free</Button>
                    <Button>Learn More</Button>
                </div>

                <div className="screenHome">
                    <img src={imageScreenHome} alt="" />
                </div>
            </Container>

            <Features />
            <Contents />
            <Gallery />
            <Partners />
            <Testimonials />
        </>
    );
};
