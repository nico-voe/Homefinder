import "./App.css";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Container } from "react-bootstrap";
import HomeOwner from "./Pages/HomeOwner";

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
            <span>
              SIGN UP AS A HOMEOWNER
              <HomeOwner />
            </span>
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
