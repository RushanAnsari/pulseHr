import {
  Routes, 
  Route,
  Navigate,
} from "react-router-dom";
import Employees from "./pages/employees/Employees";
import Attendance from "./pages/attendance/Attendance";
function App() {
  return (
    <Routes>
      <Route 
      path="/"
      element={
        <Navigate to="/employees"
        />
      }
      />

      <Route path="/employees"
      element={<Employees/>}
      />
      <Route path="/attendance"
      element={<Attendance/>}
      />
    </Routes>
  );
}

export default App;