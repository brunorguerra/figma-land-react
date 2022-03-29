import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 16.2rem 5rem 5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .content {
        margin: 8rem auto 0;
        width: min(108rem, 90%);

        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        gap: 2.7rem;

        .image {
            max-width: 75.2rem;
            img {
                max-width: 100%;
                width: auto;
            }
        }

        .columnText {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            gap: 6rem;
            padding: 2rem;

            max-width: 30rem;

            .card {
                h3 {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    max-width: 21rem;
                    span {
                        font-size: 2rem;
                        font-weight: 500;
                        max-width: 16rem;
                    }
                    img {
                        padding-top: 0.6rem;
                        font-size: 2rem;
                    }
                }
                p {
                    margin-top: 2.5rem;
                    font-size: 1.6rem;
                    font-weight: 400;
                    max-width: 27rem;
                }
            }
        }
    }
`;
