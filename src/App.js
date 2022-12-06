import "./App.css";
import Signup from "./components/Signup";
import { Container } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { Link } from "react-router-dom";

function App() {
  const { user, logout } = useAuth();

  if (user)
    return (
      <div>
        <div>{user.email}</div>
        <button onClick={logout}>Logout</button>
        <Link to="/profile">
          <button type="button">Create Profile</button>
        </Link>
      </div>
    );
  return (
    <>
      <h1>Homefinder</h1>
      <h1>Welcome to the Homefinder</h1>
      <Link to="/register">
        <button type="button">Register</button>
      </Link>
      <p>or</p>
      <Link to="/login">
        <button type="button">Login</button>
      </Link>
    </>
  );
}

export default App;
