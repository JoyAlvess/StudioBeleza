import { ContentIconLabel, LabelIcon } from "./style";
import { IconAndLabelProps } from "./IconAndLabel.types";

export const IconAndLabel: React.FC<IconAndLabelProps> = ({
  icon,
  alt,
  adress,
  contact,
  href,
}) => {
  return (
    <ContentIconLabel>
      <img src={icon} alt={alt} />
      <LabelIcon href={href}>
        {adress} <br /> {contact}
      </LabelIcon>
    </ContentIconLabel>
  );
};
