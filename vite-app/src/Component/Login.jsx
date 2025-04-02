
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; // ✅ Corrected import
import { loginUserAsync, loginWithGoogle } from "../services/Action/auth.action";
import { Button, Container, Form } from "react-bootstrap";
import { FaGoogle, FaKey } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.userReducer);
  const [inputData, setInputData] = useState({ email: "", password: "" });

  const handleChanged = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserAsync(inputData));
  };

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  return (
    <Container className="login-container">
      <h2 className="login-title">
        <i>🔒</i> Login to Your Account
      </h2>

      {error && <p className="text-danger">{error}</p>}

      <Form onSubmit={handleSubmit} className="login-form">
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

        <Button type="submit" className="signin-btn">
          <FaKey /> Sign In
        </Button>

        <Button onClick={handleGoogleLogin} className="google-login-btn">
          <FaGoogle /> Login with Google
        </Button>
      </Form>

      <p className="register-link">
        <span>📢</span> Create a new account? <Link to="/signup">Register Now</Link>
      </p>
    </Container>
  );
};

export default Login;
