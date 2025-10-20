import "./App.css";
/*
import { Greet } from "./components/Great";
import logo from "./logo.svg";
import Welcome from "./components/welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Welcome from "./components/welcome";
import { Dprops1 } from "./components/Dprops1";
import Dprops2 from "./components/Dprops2";
*/

import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";

function App() {
  return (
    <div className="App">
      <FunctionClick></FunctionClick>
      <ClassClick />
    </div>
    /*
    <div>
      <Dprops1 name="tle" heroName="Thor">
        <p>This is children props</p>
      </Dprops1>

      <Dprops2 name="Clark" heroName="Superman">
        <p>This is children props</p>
      </Dprops2>
    </div>
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message name="tle" heroName="Thor">
          <p>This is children props</p>
        </Message>
        <Counter addValue={1} />
        <Greet name="tle" heroName="Thor">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Welcome />
        <Hello />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
