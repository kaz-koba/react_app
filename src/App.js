import logo from "./logo.svg";
import "./App.css";
import { click } from "./bad/bad1";

const App = () => {
  const userInputText1 = `javascript: alert('Warning!')`;
  while (true) {
    let a = 1;
  }

  // locationオブジェクトへの操作も同様
  // window.location.href = userInputText1;

  return (
    <div>
      <a href={`${userInputText1}/edit`}>link</a>
    </div>
  );
};

export default App;
