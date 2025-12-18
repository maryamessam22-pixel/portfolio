import React, { useState } from 'react';
import './Formm.css';
import {supabase} from "../Supabase";

const Formm = () => {

  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

async  function sendMsg(){
    const res = await supabase.from("contact_messages").insert({"name":title, "email":email, "message":msg});
    //          await supabase.form("contact_messages").insert({"full_name":title})
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Get in Touch</h2>
      <p className="form-subtitle">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>

      <form className="contact-form">

     
        {/* <div className="form-group" onSubmit={sendMsg}> */}

         <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={title}
            onChange={(i) => { setTitle(i.target.value) }}
            placeholder="Enter your name"
            
          />
        </div>
                     
                 {/* <button onClick={()=>{console.log(title)}}>test value</button> */}

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(i) => { setEmail(i.target.value) }}
            placeholder="Enter your email"
            required
          />
        </div>

    
        <div className="form-group">
          <label>Your Message</label>
          <textarea
            rows="5"
            value={msg}
            onChange={(i) => { setMsg(i.target.value) }}
            placeholder="Type your message here..."
           
          />
        </div>

        <button onClick={sendMsg} type="button" className="submit-btn">
          Send Message
        </button>

      </form>
    </div>
  );
};

export default Formm;
