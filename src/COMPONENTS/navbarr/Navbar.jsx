import "./navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarele">
        <span className="logo">BlueCoordination</span>
        <div className="buttons">
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
}
