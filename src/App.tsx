import styled from "@emotion/styled";

const StyledButton = styled.button`
  background-color: aqua;
  &:hover {
    background-color: beige;
  }
`;

function App() {
  return (
    <section>
      <StyledButton>Submit</StyledButton>
    </section>
  );
}

export default App;
