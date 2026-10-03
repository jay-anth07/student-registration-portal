import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Success from "./pages/Success";

export default function App() {
  const [student, setStudent] = useState(null);
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Registration</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration setStudent={setStudent} />} />
        <Route path="/success" element={<Success student={student} />} />
      </Routes>
    </>
  );
}
