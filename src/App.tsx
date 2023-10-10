import { css } from "@emotion/react";

function App() {
  return (
    <section>
      <button
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: pink;
          }
        `}
      >
        Submit
      </button>
    </section>
  );
}

export default App;
