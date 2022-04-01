import styled from "styled-components";

export const Container = styled.section`
    padding: 15rem 5rem 5rem;
    width: min(110rem, 90%);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .partners {
        width: 100%;
        margin-top: 5rem;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        gap: 7.4rem;
        img {
            max-width: 100%;
            width: auto;
        }
    }
    Button {
        margin-top: 5rem;
        background-color: transparent;
        border-color: var(--white);
    }
`;
