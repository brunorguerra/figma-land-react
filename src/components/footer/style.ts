import styled from "styled-components";

export const Container = styled.footer`
    padding: 10.7rem 5rem;
    margin-top: 10rem;
    width: min(110rem, 90%);
    margin: 0 auto;
    .contentFooter {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: flex-start;
        gap: 5rem;

        .leftFooter {
            display: flex;
            flex-flow: row wrap;
            gap: 7.5rem;
            .link {
                h4 {
                    font-size: 2rem;
                    font-weight: 500;
                    color: var(--white-text);
                }

                ul {
                    margin-top: 4rem;
                    li {
                        margin-bottom: 1.9rem;
                        a {
                            font-size: 1.6rem;
                            font-weight: 400;
                            color: var(--second-text);
                            &:hover {
                                text-decoration: underline;
                            }
                        }
                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                }
            }
        }

        .rightFooter {
            p {
                display: flex;
                align-items: center;
                margin-bottom: 2rem;
                img {
                    width: 3rem;
                    margin-right: 0.6rem;
                }
                span {
                    font-size: 1.6rem;
                    font-weight: 500;
                }
            }
            .socials {
                margin-top: 4rem;
                display: flex;
                align-items: center;
                gap: 2.4rem;
                a {
                    color: var(--white);
                    transition: 0.2s ease;
                    &:hover {
                        color: var(--blue);
                    }
                }
            }
        }
    }

    @media (max-width: 1000px) {
        .contentFooter {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;
