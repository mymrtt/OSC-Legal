import React from "react";
import CreateFisicalPerson from "./screens/login/createFisicalPerson";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <CreateFisicalPerson />
      </div>
    </Provider>
  );
}

export default App;
