import styled from "styled-components";

export const Container = styled.section`
    background-color: #343434;
    width: min(120rem, 90%);
    border-radius: 3.3rem;
    margin: 15rem auto;
    padding: 3rem 0 0;

    display: flex;
    gap: 6rem;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    .text {
        padding: 3rem 0 6rem 7rem;
        h4 {
            font-size: 5.2rem;
            font-weight: 400;
            max-width: 50rem;
        }
        Button {
            margin-top: 3.7rem;
        }
    }
    .imageModel {
        width: 59rem;
        height: 40rem;
        background: transparent url(/modelSite.png) no-repeat top/cover;
    }

    @media (max-width: 1100px) {
        flex-direction: column;
        align-items: center;
        padding: 6rem 3rem 0;
        .text {
            padding: 0;
            h4 {
                font-size: 3.9rem;
            }
        }
        .imageModel {
            max-width: 100%;
            width: 100%;
            height: 30rem;
            background: transparent url(/modelSite.png) no-repeat center/contain;
        }
    }
    @media (max-width: 340px) {
        padding: 4rem;
        .text h4 {
            font-size: 3rem;
        }
        .imageModel {
            display: none;
        }
    }
`;
