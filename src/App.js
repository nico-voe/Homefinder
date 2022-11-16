import "./App.css";
import Signup from "./components/Signup";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <div className="box-1">
          <div className="btn btn-one">
            <span>SIGN UP AS A GUEST</span>
          </div>
        </div>

        <div className="box-2">
          <div className="btn btn-two">
            <span>SIGN UP AS A HOMEOWNER</span>
          </div>
        </div>

        <div className="box-3">
          <div className="btn btn-three">
            <span>LOGIN</span>
          </div>
        </div>
      </div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      </Container>
    </div>
  );
}

export default App;
