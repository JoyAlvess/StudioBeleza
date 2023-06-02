import { CardProps } from "./Card.types";
import { WrapperCard, CardImg, CardLabel } from "./style";

export const Card: React.FC<CardProps> = ({ img, alt, label }) => {
  return (
    <WrapperCard>
      <CardImg>
        <img src={img} alt={alt} />
      </CardImg>

      <CardLabel>{label}</CardLabel>
    </WrapperCard>
  );
};
