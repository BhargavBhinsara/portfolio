import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="containet">
        <h2>Get in touch</h2>
        <div className="form">
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Phone" />
            <textarea placeholder="type your message here"></textarea>
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
