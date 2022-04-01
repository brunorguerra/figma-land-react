import styled from "styled-components";

export const Container = styled.section`
    padding: 15rem 5rem 5rem;
    width: min(110rem, 90%);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .contentTestimonials {
        margin-top: 5rem;
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        gap: 2.3rem;
        .card-testimonial {
            border: 0.1rem solid rgb(222, 222, 222);
            max-width: 43rem;
            width: 100%;
            padding: 4rem;
            border-radius: 1rem;
            .title-testimonial {
                display: flex;
                gap: 1.3rem;
                align-items: center;
                .img-person {
                    width: 5rem;
                    height: 5rem;
                    border-radius: 50%;
                    overflow: hidden;
                    img {
                        max-width: 100%;
                        width: auto;
                    }
                }
                .name-person {
                    display: flex;
                    flex-direction: column;
                    h4,
                    p {
                        font-size: 1.6rem;
                        font-weight: 500;
                        color: var(--white-text);
                    }
                }
            }
            .description-testimonial {
                margin-top: 3rem;
                p {
                    font-size: 1.6rem;
                    font-weight: 400;
                    color: var(--white-text);
                }
            }
        }
    }
`;
