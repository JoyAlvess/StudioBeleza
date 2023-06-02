import { ContainerTexts, Title, Description } from "./style";
import { TextsProps } from "./Texts.types";

export const Texts: React.FC<TextsProps> = ({
  title,
  text,
  padding,
  fWeight,
}) => {
  return (
    <ContainerTexts padding={padding}>
      <Title>{title}</Title>
      <Description fWeight={fWeight}>{text}</Description>
    </ContainerTexts>
  );
};
