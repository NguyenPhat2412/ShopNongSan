import { Button, Container, Form } from "react-bootstrap";
import "./app.register.css";
import { Link } from "react-router";
import RegisterInformation from "../Home/RegisterInformation/app.register.information";
import AppFooter from "../Footer/app.footer";
import NavBar from "../NavBar/app.navbar";
const AppRegister = () => {
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
          <p>REGISTER PAGE</p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Form.Group
            className="d-flex mb-3 justify-content-between"
            controlId="formBasicCheckbox"
          >
            <Form.Check
              type="checkbox"
              label="I agree to the terms and conditions"
            />
          </Form.Group>
          <Button variant="success" type="submit" className="w-100 ">
            Register
          </Button>
          <Form.Text className="text-muted d-flex justify-content-center gap-1">
            Already have an account?{" "}
            <Link to={"/account/login"} className="text-muted">
              Login here
            </Link>
          </Form.Text>
        </Form>
      </Container>
      <Container>
        <RegisterInformation />
      </Container>
      <div>
        <AppFooter />
      </div>
    </>
  );
};

export default AppRegister;
