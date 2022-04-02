import { Container } from "./style";

interface Props {
    children: string;
    typeStyle?: string;
}

export const Button = (props: Props) => {
    return <Container typeStyle={props.typeStyle}>{props.children}</Container>;
};
