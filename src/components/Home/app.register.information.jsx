import { Container } from "react-bootstrap";

const RegisterInfomation = () => {
  return (
    <div>
      <div>
        <p>Sign Up For New Information</p>
        <p>
          Please sign up to receive information about agricultural products and
          the latest news from us.
        </p>
      </div>
      <div>
        <input type="email" placeholder="Your email" />
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default RegisterInfomation;
