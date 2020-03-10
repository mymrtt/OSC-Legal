import React from "react";
import FisicalPerson from "./screens/login/createFisicalPerson/FisicalPerson";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <FisicalPerson />
      </div>
    </Provider>
  );
}

export default App;
