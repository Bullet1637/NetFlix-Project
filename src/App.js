import "./App.css";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
