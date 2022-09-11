import ProtectedRoute from "./Components/ProtectedRoute";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile";
import Navbar from "./Components/Navbar";
import { Logout } from "./Pages/Logout/Logout";
import Register from "./Pages/Login/Register";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute Component={Dashboard} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute Component={Profile} />}
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;

//https://quizsystemapp.herokuapp.com/quiz
