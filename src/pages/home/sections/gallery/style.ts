import styled from "styled-components";

export const Container = styled.section`
    width: min(110rem, 90%);
    margin: 0 auto;
    padding: 15rem 5rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .grid1-images {
        margin-top: 4.4rem;
        width: 100%;
        display: grid;
        column-gap: 3.3rem;
        row-gap: 4.4rem;
        grid-template-areas: "card1 card2 card3 card4";

        align-items: center;
        place-items: center;
        justify-content: center;
        .card-img {
            border-radius: 1.2rem;
            width: 22.5rem;
            height: 28.5rem;

            overflow: hidden;
            img {
                width: 100%;
            }
            &.card1 {
                grid-area: card1;
            }
            &.card2 {
                grid-area: card2;
            }
            &.card3 {
                grid-area: card3;
            }
            &.card4 {
                grid-area: card4;
            }
        }
    }

    .grid2-images {
        margin-top: 4rem;
        width: 100%;
        display: grid;
        column-gap: 3.3rem;
        row-gap: 4.4rem;
        grid-template-columns: 2fr 1fr 2fr;

        align-items: center;
        place-items: center;
        justify-content: center;
        .card-img {
            border-radius: 1.2rem;
            width: auto;
            height: 28.5rem;
            overflow: hidden;
            img {
                width: 100%;
                object-fit: cover;
            }
            &.big {
                width: 40rem;
            }
            &.small {
                width: 22.5rem;
            }
        }
    }
    Button {
        margin-top: 4.4rem;
    }

    @media (max-width: 1200px) {
        .grid1-images {
            grid-template-areas:
                "card1 card2"
                "card3 card4";
        }
        .grid2-images {
            display: none;
        }
    }
    @media (max-width: 580px) {
        .grid1-images {
            grid-template-areas:
                "card1"
                "card2"
                "card3"
                "card4";
        }
    }
`;
