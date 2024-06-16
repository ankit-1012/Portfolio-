import './Contact.css'
// eslint-disable-next-line no-unused-vars
import React from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "8da29b40-28cd-4248-b603-9ba05fffee67");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      alert(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
    }
  };

  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern}/>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let`s Talk</h1>
          <div className="contact-details">
            <div className="contact-detail">
                <img src = {mail_icon} /> <p>anshdubey1012@gmail.com</p>
            </div>
            <div className="contact-detail">
            <img src = {call_icon} /> <p>+91 7879432133</p>
            </div>
            <div className="contact-detail">
            <img src = {location_icon} /> <p>West Bengal India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type = "text" placeholder='Enter Your Name' name='name'></input>
            <label htmlFor="">Your Email</label>
            <input type = "email" placeholder='Enter Your Email' name='email'></input>
            <label htmlFor="">Write Your Message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact