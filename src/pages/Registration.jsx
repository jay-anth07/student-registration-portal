import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration({ setStudent }) {
  const [form, setForm] = useState({ name: "", email: "", department: "", year: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudent(form);
    navigate("/success");
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Student Registration</h2>
      <input name="name" placeholder="Student Name" value={form.name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="department" placeholder="Department" value={form.department} onChange={handleChange} required />
      <input name="year" placeholder="Year" value={form.year} onChange={handleChange} required />
      <button className="btn" type="submit">Register</button>
    </form>
  );
}
