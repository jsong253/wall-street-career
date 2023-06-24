// https://javascript.plainenglish.io/how-to-create-a-feedback-form-with-back-end-using-reactjs-nodemailer-and-gmail-173725d7f650

import "./styles.css";
import { useEffect, useRef, useState } from "react";

export default function Form() {
  const nameRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const handleSubmit = async (e) => {
    setResult("");
    e.preventDefault();
    // validating data
    if (!name || !email || !subject || text?.length < 10) {
      setResult("Please verify your inputs ...");
      return null;
    }
    const data = { name, email, subject, text };

    fetch("https://xchzj7xdca.execute-api.us-east-1.amazonaws.com/prod/feedbacks", {
      method: "POST",
      headers: { "Content-Type": "application/json", "WSC-SHAREDSECRET": "WallStreetCareerSecretValue" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json?.message);
        setResult(`Result: ${json?.message}`);
      })
      .catch((error) => {
        console.log(error?.message);
        setResult(`Error: ${error?.message}`);
      });
  };
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <div className="App">
      <h1>Wall-Street-Smart - Feedback</h1>
      <form onSubmit={handleSubmit} className="form__container">
        <div className="form__controls">
          <label htmlFor="name">Name</label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            className="input__subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="text">Text</label>
          <textarea
            rows="5"
            id="text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <button className="button">Send Feedback</button>
        </div>
      </form>
      <p>{result}</p>
    </div>
  );
}