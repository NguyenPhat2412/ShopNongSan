import { Container, Table } from "react-bootstrap";
import AppUser from "../app.user";

import AppUserBoard from "../app.user.board";
import AppFooter from "../../Footer/app.footer";
import NavBar from "../../NavBar/app.navbar";

const UserHistory = () => {
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
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Activity</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2023-10-01</td>
                <td>Login</td>
                <td>User logged in successfully.</td>
              </tr>
              <tr>
                <td>2023-10-02</td>
                <td>Purchase</td>
                <td>User purchased a product.</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </Table>
        </div>
      </div>
      <AppFooter />
    </>
  );
};

export default UserHistory;
