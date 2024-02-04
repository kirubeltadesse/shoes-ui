import "./App.css";
import "./input.css";
import Home from "./components/Home";
import Filters from "./components/Filters";
import { Header } from "./components/Header";
import "../node_modules/react-refresh/runtime.js";
// interface HeaderProps {
//   onLogin: () => void;
//   onLogout: () => void;
//   onCreateAccount: () => void;
// }

const onLoginHandler = () => {
  console.log("Login");
};
const onLogoutHandler = () => {
  console.log("Logout");
};
const onCreateAccountHandler = () => {
  console.log("Create Account");
};

function App() {
  return (
    <div className="App">
      {/* <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} /> */}
      <Header
        onLogin={onLoginHandler}
        onLogout={onLogoutHandler}
        onCreateAccount={onCreateAccountHandler}
      />

      <Filters />
      <Home />
    </div>
  );
}

export default App;
