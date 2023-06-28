import {
  WraaperButton,
  ContentButton,
  ButtonProfile,
  TextAuxiliary,
} from "./style";

export const Button = () => {
  return (
    <WraaperButton>
      <ContentButton>
        <TextAuxiliary>Teste</TextAuxiliary>
        <ButtonProfile />
      </ContentButton>
    </WraaperButton>
  );
};
