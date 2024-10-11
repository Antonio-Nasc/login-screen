import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disable }: IButtonProps) => {
  return (
    <ButtonContainer onClick={disable ? undefined : onClick} disable={disable}>
      {title}
    </ButtonContainer>
  );
};

export default Button;