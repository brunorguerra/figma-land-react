import styled from "styled-components";

export const Container = styled.button<{ typeStyle?: string }>`
    background-color: ${(props) =>
        props.typeStyle === "outlined" ? "transparent" : " var(--blue)"};
    color: var(--light-text);
    border: 0.2rem solid
        ${(props) =>
            props.typeStyle === "outlined"
                ? "var(--light-background)"
                : "transparent"};

    padding: 1.35rem 4.6rem;
    font-size: 1.7rem;
    font-weight: 500;
    transition: all 0.2s ease;
    &:hover {
        background-color: ${(props) =>
            props.typeStyle === "outlined"
                ? "var(--white)"
                : "var(--blueHover)"};
        border-color: ${(props) =>
            props.typeStyle === "outlined" ? "var(--white)" : "transparent"};
        opacity: ${(props) => (props.typeStyle === "outlined" ? "0.5" : "1")};
    }
`;
