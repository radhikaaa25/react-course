import { LoginForm } from './components/LoginForm';
import './App.css';

// Define an App component that renders a greeting and the LoginForm
function App() {
  return (
    <>
      <p className="title">Hello, welcome to my website</p>
      <LoginForm />
    </>
  );
}

export default App;