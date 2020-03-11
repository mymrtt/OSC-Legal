import React from "react";
// import FisicalPerson from "./screens/login/createFisicalPerson/FisicalPerson";
import Login from "./screens/login/login";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <FisicalPerson /> */}
        <Login/>
      </div>
    </Provider>
  );
}

export default App;
