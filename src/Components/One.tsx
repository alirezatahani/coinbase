import { goBack, popToTop } from "@modules/extensionRouter";
import * as React from "react";

const One = () => {
  return (
    <div className="App">
      <h1>this is first component</h1>
      <button onClick={() => goBack()}>pop to top</button>
    </div>
  );
};
export default One;
