import styled from "styled-components";

export const Container = styled.header`
    width: min(109.7rem, 90%);
    height: 11.9rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    nav {
        ul {
            display: flex;
            align-items: center;
            justify-content: center;

            gap: 3.1rem;
            li {
                a {
                    font-size: 1.6rem;
                    font-weight: 500;
                    color: var(--light-text);
                    padding: 1rem;

                    transition: all 0.2s ease;
                    &:hover {
                        color: var(--blue);
                    }
                }
                Button {
                    display: none;
                }
            }
        }
    }
    .overlay {
        display: block;
        height: 100vh;
        width: 100%;
        z-index: 2;

        visibility: hidden;
        opacity: 0;
        transition: all 0.25s ease;

        position: fixed;
        right: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.5);
    }

    .groupLogin {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        .menuMobile {
            display: none;
            padding: 1rem;
        }
    }

    @media (max-width: 975px) {
        .groupLogin {
            .menuMobile {
                display: initial;
            }
        }
        nav {
            padding-top: 4.5rem;
            width: 25rem;
            height: 100%;

            transform: translateX(-100%);
            transition: transform 0.25s ease;

            z-index: 3;
            position: fixed;
            inset: 0;
            background-color: var(--darkBlue);
            ul {
                gap: 2rem;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                li {
                    display: flex;
                    width: 100%;
                    a {
                        width: 100%;
                        padding: 1rem 3rem;
                    }
                }
            }
            &.activeNav {
                transform: translateX(0);
            }
        }
        .overlay.activeOverlay {
            display: block;
            visibility: visible;
            opacity: 1;
        }
    }
    @media (max-width: 480px) {
        .groupLogin {
            Button {
                display: none;
            }
        }
        nav ul li {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            Button {
                margin-top: 3rem;
                display: block;
            }
        }
    }
`;
