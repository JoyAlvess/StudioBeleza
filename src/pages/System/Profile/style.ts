import styled from "styled-components";

export const Container = styled.div`
  background: #dad7d7;
  height: 100vh;
`;

export const Background = styled.div`
  background: var(
    --liner-gradiente-roxo,
    linear-gradient(
      180deg,
      rgba(219, 60, 187, 0) 0%,
      rgba(255, 77, 163, 0.04) 6.56%,
      rgba(171, 38, 219, 0.37) 100%
    )
  );
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;
