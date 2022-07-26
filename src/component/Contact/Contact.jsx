import React from "react";
import "./Contact.css";
import { contact } from "../../portfolio";
export const Contact = () => {
  return (
    <div className="contact">
      <h2>Let's stay in touch.</h2>
      <div className="box">
        <div className="containet">
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
        <div className="c_detail">
          <div className="phone">
            <h4>Phone Number:</h4>
            <p>+91 {contact.phone}</p>
          </div>
          <div className="phone">
            <h4>Email:</h4>
            <p> {contact.email}</p>
          </div>
          <div className="phone">
            <h4>Adress:</h4>
            <p> {contact.adress}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
