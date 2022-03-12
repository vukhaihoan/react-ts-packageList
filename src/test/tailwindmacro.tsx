// import FormTest from "./test/react-form2";
// import MaterialTest from "./materialUi";
import "./App.css";
import React, {
  MouseEvent,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import tw, { styled } from "twin.macro";
import MyDropdown from "../taiwind";
export const StyledApp = styled.div`
  /* ${tw`flex justify-center items-center h-screen bg-red-200 text-3xl `} */
  align-items: baseline;
`;

function useDarkmode(): [string, Dispatch<SetStateAction<string>>] {
  const [theme, setTheme] = useState<string>("light");
  const colorTheme = theme === "light" ? "dark" : "light";
  useEffect(() => {
    const root = window.document.documentElement.classList;
    root.remove(colorTheme);
    root.add(theme);
  }, [theme, colorTheme]);
  return [colorTheme, setTheme];
}

export default function App() {
  const [colorTheme, setTheme] = useDarkmode();

  function handleClick() {
    setTheme(colorTheme);
  }
  return (
    <div>
      <div className="App bg-white dark:bg-gray-600">
        test
        <button
          onClick={handleClick}
          className=" bg-purple-600 dark:bg-pink-400"
        >
          {" "}
          button
        </button>
        <MyDropdown />
      </div>
    </div>
  );
}
