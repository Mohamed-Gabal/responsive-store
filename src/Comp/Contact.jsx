import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <div className="contact-container">
        <div className="contact">
          <h2># Contact</h2>
          <div className="from">
            <form method="POST">
              <input
                value={user.Name}
                type="text"
                name="Name"
                placeholder="Enter Your Full Name"
                autoComplete="off"
                onChange={data}
              ></input>
              <input
                value={user.Email}
                type="email"
                name="E-mail"
                placeholder="Enter Your E-mail"
                autoComplete="off"
                onChange={data}
              ></input>
              <input
                value={user.Subject}
                type="text"
                name="Subject"
                placeholder="Enter Subject"
                autoComplete="off"
                onChange={data}
              ></input>
              <textarea
                value={user.Message}
                name="Message"
                placeholder="Your Message"
                autoComplete="off"
                onChange={data}
              ></textarea>
              <button type="submit">send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
