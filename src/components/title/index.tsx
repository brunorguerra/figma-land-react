import { TitleSection } from "./style";
interface Props {
    children: string;
}

export const Title = ({ children }: Props) => {
    return <TitleSection>{children}</TitleSection>;
};
