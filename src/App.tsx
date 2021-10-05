// import FormTest from "./test/react-form2";
// import MaterialTest from "./materialUi";
import "./App.css";

import tw, { styled } from "twin.macro";
export const StyledApp = styled.div`
  ${tw`flex justify-center items-center h-screen bg-red-200 text-3xl `}
`;
export default function App() {
  return (
    <div className="App bg-white">
      <StyledApp>vu khai hoan</StyledApp>
    </div>
  );
}
