import { Container } from "./style";

interface Props {
    children: string;
}

export const Button = ({ children }: Props) => {
    return <Container>{children}</Container>;
};
