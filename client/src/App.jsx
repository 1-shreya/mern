import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Museums from "./Museums";
import CreateMuseum from "./CreateMuseum";
import UpdateMuseum from "./UpdateMuseum";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Museums />}></Route>
          <Route path="/create" element={<CreateMuseum />}></Route>
          <Route path="/update/:id" element={<UpdateMuseum />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
