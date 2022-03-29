import { DescriptionSection } from "./style";
interface Props {
    children: string;
}

export const Description = ({ children }: Props) => {
    return <DescriptionSection>{children}</DescriptionSection>;
};
