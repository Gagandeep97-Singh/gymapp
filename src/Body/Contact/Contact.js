import React, { useState, useRef } from "react";
import "./Contact.css";
const Contact = () => {
  const inputname = useRef();
  const inputlastname = useRef();
  const inputemail = useRef();
  const inputphone = useRef();

// taking the helper funtions to make the input valid
const isempty =values=>values.trim()==="";
const isemail=values=>values.includes('@');


  const [store, setstore] = useState([]);
  const [input, setinput] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  });

  const [validinput, setvalidinput] = useState({
    name: true,
    lastname: true,
    phone: true,
    email: true,
    message: true,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setinput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const newstore = { ...input };
    setstore([...store, newstore]);

 const validname=inputname.current.value;
 const validlastname=inputlastname.current.value;
 const validemail=inputemail.current.value;
 const validphone=inputphone.current.value;

 const enterdname=!isempty(validname);
 const enterdlastname=!isempty(validlastname);
 const enterdphone=!isempty(validphone);
const enterdemail=!isemail(validemail)

setvalidinput({
  name: enterdname,
    lastname: enterdlastname,
    phone: enterdphone,
    email: enterdemail,
    
})

const formvalid=enterdname&&enterdlastname&&enterdphone&&enterdemail;
if (!formvalid) {
  return
}
    
    setinput({
      name: "",
      lastname: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact_mean">
      <h1 className="text">Get in touch</h1>
      <form className="contact_box" type="submit" onSubmit={handleSubmit}>
        <div className="name">
          <input
            ref={inputname}
            name="name"
            value={input.name}
            type="text"
            className="name int"
            placeholder="First Name"
            onChange={handleChange}
          />
          {!validinput.name && <p className="error">Please enter Valid Name</p>}
        </div>
        <div className="lastname">
          <input
            ref={inputlastname}
            name="lastname"
            value={input.lastname}
            type="text"
            className="lastname int"
            placeholder="Last Name"
            onChange={handleChange}
          />
          {!validinput.lastname && <p className="error">Please enter Valid lastName</p>}
        </div>
        <div className="email">
          <input
            ref={inputemail}
            name="email"
            value={input.email}
            type="text"
            className="email int"
            placeholder="E-Mail"
            onChange={handleChange}
          />
          {!validinput.email && <p className="error">Please enter Valid email</p>}
        </div>
        <div className="phone">
          <input
            ref={inputphone}
            name="phone"
            value={input.phone}
            type="text"
            className="phone int"
            placeholder="Phone"
            onChange={handleChange}
          />
          {!validinput.phone && <p className="error">Please enter Valid number</p>}
        </div>

        <input
          name="message"
          value={input.message}
          type="text"
          className="message"
          placeholder="Type Message..."
          onChange={handleChange}
        />
        <button className="btn_submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
