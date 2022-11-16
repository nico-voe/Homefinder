import { Card, Form, Button } from "react-bootstrap";
import { useRef } from "react";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Signup</h2>
          <Form>
            <Form.Group id="email">Email</Form.Group>
            <Form.Control type="email" ref={emailRef} required />
            <Form.Group id="password">Password</Form.Group>
            <Form.Control type="email" ref={passwordRef} required />
            <Form.Group id="password-confirm">Password Confirmation</Form.Group>
            <Form.Control type="password" ref={passwordConfirmRef} required />
            <Button className="w-100" type="submit">
              SIGN UP
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Signup;
