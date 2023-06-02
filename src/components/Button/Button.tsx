import { ButtonProps } from "./Button.types";
import { StyledButton } from "./style";
import "./style";

export const Button: React.FC<ButtonProps> = ({
  width,
  height,
  mTop,
  text,
  fSize,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      width={width}
      height={height}
      mTop={mTop}
      fSize={fSize}
      {...props}
    >
      {text}
    </StyledButton>
  );
};
