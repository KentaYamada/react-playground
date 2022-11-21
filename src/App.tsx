import { FunctionComponent, StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from "./router";
import { RecoilRoot } from 'recoil'

const App: FunctionComponent = () => {
  return (
  <StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </StrictMode>
  );
};

export default App;