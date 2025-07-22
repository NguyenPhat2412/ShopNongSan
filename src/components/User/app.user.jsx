import { Container } from "react-bootstrap";

import AppFooter from "../Footer/app.footer";
import AppUserBoard from "./app.user.board";
import NavBar from "../NavBar/app.navbar";

const AppUser = () => {
  return (
    <>
      <Container>
        <NavBar />
      </Container>
      <div>
        <img
          src="../../../public/Image/Login/Breadcrumbs (1).png"
          alt="Logo"
        ></img>
      </div>
      <div>
        <AppUserBoard />
      </div>
      <AppFooter />
    </>
  );
};

export default AppUser;
