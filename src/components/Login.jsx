import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { processFirebaseErrors } from "../utils/errors";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(false);

      //go to db
      await login({ email, password });
      setLoading(true);

      //navigate to main page
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.message);
    }
  };
  if (loading) return <>loading...</>;
  return (
    <div>
      <h1>Login</h1>
      {error && <div>{processFirebaseErrors(error)}</div>}

      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input
          type="text"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
