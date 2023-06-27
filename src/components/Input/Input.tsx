import { InputProps } from "./Input.types";
import { Container, Inbox, Icon } from "./style";

export const Input: React.FC<InputProps> = ({
  alt,
  img,
  placeholder,
  type,
}) => {
  return (
    <Container>
      <Icon>
        <img src={img} alt={alt} />
      </Icon>

      <Inbox placeholder={placeholder} type={type} />
    </Container>
  );
};
