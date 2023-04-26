import { Route, Routes } from "react-router-dom";

import Analytic from "./pages/dashboard/Analytic";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Analytic />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
