import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import logo from './pcm.png'

export default function Register() {
  const [form, setForm] = useState({
    full_name: "",
    gender: "",
    address: "",
    baptism_status: "",
    email: "",
    phone: "",
    course: "",
    year_of_study: "",
    leadership_position: "",
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    try {
      await axios.post("https://registration.nardio.online/api/register", form);
      setMsg("Registration successful!");
      setForm({
        full_name: "",
        gender: "Male",
        address: "",
        baptism_status: "Baptized",
        email: "",
        phone: "",
        course: "",
        year_of_study: "",
        leadership_position: "",
      });
    } catch (err) {
      console.error(err);
      setMsg("Error: " + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="card">
         <div className="profileImage">
              <img
                alt="pcm"
                src={logo}
              />
            </div>
           <h2 className="subtitle typing">REGISTER WITH TUCASA TIA MBEYA<span className="dots">...</span></h2>



        <form className="form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input
              name="full_name"
              value={form.full_name}
              placeholder="Full name"
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              placeholder="Phone number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Gender
            <select name="gender" value={form.gender} onChange={handleChange}>
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </label>

          <label>
            Address
            <input
              name="address"
              placeholder="eg. DSM"
              value={form.address}
              onChange={handleChange}
            />
          </label>

          <label>
            Baptism Status
            <select
              name="baptism_status"
              value={form.baptism_status}
              onChange={handleChange}
            >
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </label>

          <label>
            Course
            <input
              name="course"
              placeholder="eg. BAC, BPLM"
              value={form.course}
              onChange={handleChange}
            />
          </label>

          <label>
            Year of Study
            <input
              name="year_of_study"
              placeholder="eg. 3"
              value={form.year_of_study}
              onChange={handleChange}
            />
          </label>
          <label>
            Leadership Position (optional)
            <input
              name="leadership_position"
              placeholder="eg. chairman"
              value={form.leadership_position}
              onChange={handleChange}
            />
          </label>

          <button className="btn" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "SUBMIT"}
          </button>

          {msg && <p className="msg">{msg}</p>}
        </form>
        <div className="lastquote">
                <p>Tucasa-tia@2025</p>
              </div>
      </div>
      <div className="bg-animation">
        <img src="./tucasa2.jpg" alt="bg1" />
        <img src="./tucasa.jpg" alt="bg2" />
        <img src="./tucasa2.jpg" alt="bg3" />
      </div>
    </div>
  );
}
