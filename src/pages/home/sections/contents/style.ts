import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem;

    .content {
        margin-top: 4.4rem;
        width: min(110rem, 90%);

        display: flex;
        justify-content: center;
        flex-flow: row wrap;
        gap: 3.3rem;
        .card {
            background: var(--light-background);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            padding: 4rem 3.5rem;
            border-radius: 1rem;

            h3 {
                text-align: center;
                font-size: 2rem;
                font-weight: 500;
                color: var(--first-text);
            }
            p {
                text-align: center;
                font-size: 1.6rem;
                color: var(--second-text);

                max-width: 30rem;
                margin-top: 1rem;
                padding: 1rem;
            }
            Button {
                margin: 5.7rem 0;
            }
            .image {
                max-width: 40.5rem;
                img {
                    max-width: 100%;
                    width: auto;
                }
            }
        }
    }
`;
