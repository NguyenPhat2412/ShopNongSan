import { Button, Container, Form } from "react-bootstrap";
import NavBar from "../Home/NavBar/app.navbar";
import "./app.login.css";
import { Link } from "react-router";
const AppLogin = () => {
  return (
    <>
      <Container>
        <NavBar />
      </Container>
      <img
        src="../../../public/Image/Login/Breadcrumbs (1).png"
        alt="Logo"
      ></img>
      <Container className="login-container">
        <Form>
          <p>LOGIN PAGE</p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group
            className="d-flex mb-3 justify-content-between"
            controlId="formBasicCheckbox"
          >
            <Form.Check type="checkbox" label="Check me out" />
            <Link to={"/forgot-password"} className="text-muted">
              Forget Password
            </Link>
          </Form.Group>
          <Button variant="success" type="submit" className="w-100 ">
            Login
          </Button>
          <Form.Text className="text-muted d-flex justify-content-center gap-1">
            Don't have an account?{" "}
            <Link to={"/account/register"} className="text-muted">
              Register here
            </Link>
          </Form.Text>
        </Form>
      </Container>
    </>
  );
};

export default AppLogin;
