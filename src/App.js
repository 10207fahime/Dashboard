import { Provider } from "react-redux";
import "./App.css";
import { Dashboard } from "./component/Dashboard";
import { store } from "./store/index.store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </div>
  );
}

export default App;
