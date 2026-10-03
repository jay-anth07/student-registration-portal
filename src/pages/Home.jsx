import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="card">
      <h1>Student Registration Portal</h1>
      <p>Register as a student and view your submitted details.</p>
      <Link className="btn" to="/register">Register Now</Link>
    </div>
  );
}
