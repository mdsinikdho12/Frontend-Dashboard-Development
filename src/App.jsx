import { Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PriveteRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PriveteRoute>
            <Dashboard />
          </PriveteRoute>
        }
      />
    </Routes>
  );
}

export default App;
