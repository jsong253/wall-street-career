import React, {useState} from "react";
import "../../App.css";
import Footer from '../footer/Footer';
import Header from "../header/Header";

export default function Courses() {
  const [course, setCourse] = useState();

  function renderCourse(c) {
    return (
      <div key={c.id} className="product">
        <a href="/">
          <img src={`/images/${c.image}`} alt={c.name} />
          <h3>{c.name}</h3>
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <section id="filters">
            <label htmlFor="course">Filter by Course:</label>{" "}
            <select 
                id="course"
                value={course}
                onChange={(e) => {
                    debugger;
                    setCourse(e.target.value)
                }}
            >
              <option value="">All courses</option>
              <option value="1">lession1</option>
              <option value="2">lession2</option>
              <option value="3">lession3</option>
            </select>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
