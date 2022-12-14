import { FunctionComponent } from "react";
import { css } from "@emotion/react";
import "@/App.css";
import "@/index.css";
import { useRecoilState } from "recoil";
import { counterState } from "../../states/counter-state";
import reactLogo from "@/assets/react.svg";

const style = css({
  color: "blue"
});

const PageA: FunctionComponent = () => {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 css={style}>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default PageA;
