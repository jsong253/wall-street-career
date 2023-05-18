import React, {useState} from "react";
import "../../App.css";
import Spinner from '../common/Spinner';
import PageNotFound from "../notFound/PageNotFound";
import useFetch from "../customHooks/useFetch";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Courses() {
  const [name, setName] = useState("");
  const { category } = useParams();

  const { data: courses, loading, error } = useFetch(
    "courses?category=" + category
  );

  function renderCourse(c) {
    return (
      <div key={c.id} className="course">
        <Link to={`/${category}/${c.id}`}>
          <img src={`/images/${c.image}`} alt={c.name} />
          <h3>{c.name}</h3>
          <p>${c.price}</p>
        </Link>
      </div>
    );
  }

  const filteredCourses = name
  ? courses.filter((c) => c.title.find((n) => n.name ===name))
  : courses;

if (error) throw error;
if (loading) return <Spinner />;
if (courses.length === 0) return <PageNotFound />;

return (
    <>
      <section id="filters">
        <label htmlFor="size">Filter by Name:</label>{" "}
        <select
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        >
          <option value="">All lessons</option>
          <option value="7">lesson 1</option>
          <option value="8">lesson 2</option>
          <option value="9">lesson 3</option>
        </select>
        {name && <h2>Found {filteredCourses.length} courses</h2>}
      </section>
      <section id="courses">{filteredCourses.map(renderCourse)}</section>
    </>
  );
}
