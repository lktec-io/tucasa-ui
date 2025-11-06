import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import back from "./back.png";
import { NavLink } from "react-router-dom";

export default function AllStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);
  async function fetchStudents() {
    try {
      const res = await axios.get("http://your-server.com/api/students");
      setStudents(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const download = () => {
    window.location.href = "http://your-server.com/api/students/download";
  };

  return (
    <div className="page all-page">
      <div className="all">
        <div className="up">
          <NavLink to="/">
            <div className="back">
              <img className="picha" src={back} alt="back" />
            </div>
          </NavLink>
          <div className="top-row">
            <div className="total">Total Registered</div>
            <span className="count">{students.length}</span>
            <button className="btn1" onClick={download}>
              Download
            </button>
          </div>
        </div>

        <div className="table">
          <div className="thead">
            <div>S/N</div>
            <div>Name</div>
            <div>Phone</div>
            <div>Email</div>
            <div>Gender</div>
            <div>Address</div>
            <div>Baptism</div>
            <div>Course</div>
            <div>Year</div>
            <div>Leadership</div>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : (
            students.map((s, i) => (
              <div className="row" key={s.id}>
                <div>{i + 1}</div>
                <div className="name">{s.full_name}</div>
                <div>{s.phone}</div>
                <div>{s.email}</div>
                <div>{s.gender}</div>
                <div>{s.address}</div>
                <div
                  className={
                    s.baptism_status === "Yes" ? "baptized" : "not-baptized"
                  }
                >
                  {s.baptism_status}
                </div>

                <div>{s.course}</div>
                <div>{s.year_of_study}</div>
                <div>{s.leadership_position}</div>
              </div>
            ))
          )}
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
