import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  return (
    <div>
      <form>
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
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
