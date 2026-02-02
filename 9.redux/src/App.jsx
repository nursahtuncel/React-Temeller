import React from "react";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  return (
    <div className="h-screen flex flex-col
 items-center justify-start mt-10">
      <div>
        <h1>
          Redux <span>CRUD</span>
        </h1>
      </div>
      <Form />
      <List />
    </div>
  );
};

export default App;
