import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { JournalItem } from "./components/JournalItem/JournalItem";
import { Button } from "./components/Button/Button";

function App() {
  const [count, setCount] = useState(0);

  const data = [
    {
      title: "Подготовка к обновлению",
      date: new Date(),
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur eius adipisci blanditiis iure. Enim sed odio et tenetur, odit quis beatae, inventore veritatis dicta quae explicabo vero tempore illum sint.",
    },
    {
      title: "Подготовка к ",
      date: new Date(),
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur eius adipisci blanditiis iure. Enim sed odio et tenetur, odit quis beatae, inventore veritatis dicta quae explicabo vero tempore illum sint.",
    },
    {
      title: "Подготовка ",
      date: new Date(),
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur eius adipisci blanditiis iure. Enim sed odio et tenetur, odit quis beatae, inventore veritatis dicta quae explicabo vero tempore illum sint.",
    },
  ];

  return (
    <>
      <Button />
      <JournalItem data={data} />
    </>
  );
}

export default App;
