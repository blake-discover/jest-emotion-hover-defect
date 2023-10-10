import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  background-color: aqua;
  &:hover {
    background-color: beige;
  }
`;

const buttonCss = css`
  background-color: aqua;
  &:hover {
    background-color: beige;
  }
`;

function App() {
  return (
    <section>
      <button css={buttonCss}>Styled</button>
      <StyledButton>Styled</StyledButton>
    </section>
  );
}

export default App;
