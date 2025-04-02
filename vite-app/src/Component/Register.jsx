
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; 
import { registerUserAsync } from "../services/Action/auth.action";
import { Button, Container, Form } from "react-bootstrap";
import { FaRocket } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isCreated, error } = useSelector((state) => state.userReducer);
  const [inputData, setInputData] = useState({ email: "", password: "" });

  const handleChanged = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUserAsync(inputData));
  };

  useEffect(() => {
    if (isCreated) navigate("/");
  }, [isCreated, navigate]);

  return (
    <Container className="register-container">
      <h2 className="register-title">
        <i>📄</i> Create an Account
      </h2>

      {error && <p className="text-danger">{error}</p>}

      <Form onSubmit={handleSubmit} className="register-form">
        <Form.Group className="form-group">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={inputData.email}
            onChange={handleChanged}
            placeholder="Enter Email"
          />
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={inputData.password}
            onChange={handleChanged}
            placeholder="Enter Password"
          />
        </Form.Group>

        <Button type="submit" className="signup-btn">
          <FaRocket /> Sign Up
        </Button>
      </Form>

      <p className="login-link">
        <span>🔒</span> Already have an account? <Link to="/signin">Login Here</Link>
      </p>
    </Container>
  );
};

export default Register;
