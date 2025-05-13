import { Link } from 'react-router-dom'; 

export default function Login() {
  return (
    <div className="login-container">

      <Link to="/" className="login-back-btn">← Back to Home</Link>

      <form className="login-form">
        <h2 className="login-title">Login to Your Account</h2>

        <label className="login-label" htmlFor="email">Email</label>
        <input className="login-input" type="email" id="email" placeholder="Enter your email" />

        <label className="login-label" htmlFor="password">Password</label>
        <input className="login-input" type="password" id="password" placeholder="Enter your password" />

        <button className="login-button" type="submit">Submit</button>
      </form>
    </div>
  );
}
