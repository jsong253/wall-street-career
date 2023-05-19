import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import Spinner from "../common/Spinner";
import PageNotFound from "../notFound/PageNotFound";

export default function Course() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: course, loading, error } = useFetch(`courses/${id}`);

  if (loading) return <Spinner />;
  if (!course) return <PageNotFound />;
  if (error) throw error;

  return (
    <div id="course">
      <h1>{course.name}</h1>
      <p>{course.description}</p>
      <p id="price">${course.price}</p>
      <p>
        <button className="btn btn-primary" onClick={() => navigate("/cart")}>
          Add to cart
        </button>
      </p>
      <img src={`/images/${course.image}`} alt={course.category} />
    </div>
  );
}