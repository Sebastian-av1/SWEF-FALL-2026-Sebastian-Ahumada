import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login.jsx";
import Landing from "./Landing.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
