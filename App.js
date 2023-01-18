import React from "react";
import ReactDOM from "react-dom/client";

// JSX ??

const heading = (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

const HeaderComponent = () => (
<div>
  {heading}
  <h2>Namaste React functional component</h2>
  <h2>This is a h2 tag</h2>
</div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(<HeaderComponent />);
