import { useState } from 'react';
import './LoginForm.css';

// Define a LoginForm component that manages password visibility
export function LoginForm() {
  // Initialize a state variable to track if the password should be shown
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the 'showPassword' state
  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <div>
        <input
          placeholder="Email"
          className="login-input"
        />
      </div>
      <div>
        <input
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
          className="login-input"
        />
        <button
          className="show-button"
          onClick={toggleShowPassword}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
      <button className="login-button">Login</button>
      <button className="login-button">Sign up</button>
    </>
  );
}