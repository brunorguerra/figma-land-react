import styled from "styled-components";

export const Container = styled.section`
    margin-top: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1 {
        font-size: 8rem;
        font-weight: 500;
        max-width: 75rem;
        padding: 0 5rem;
        @media (max-width: 700px) {
            font-size: 5.2rem;
            max-width: 38rem;
        }
    }
    p {
        font-size: 2rem;
        margin-top: 1.7rem;
        max-width: 64rem;
        padding: 0 5rem;
        color: var(--second-text);
    }
    .groupButton {
        padding: 0 5rem;

        margin-top: 8.5rem;

        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        gap: 3.5rem;
        Button:nth-of-type(2) {
            background-color: transparent;
            border-color: var(--light-background);
        }
    }
    .screenHome {
        margin-top: 5%;
        width: 100%;

        img {
            max-width: 100%;
            width: auto;
        }
    }
`;
