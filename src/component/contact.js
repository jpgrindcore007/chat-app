import React from 'react';
import'./contact.css';

function Contact() {
  return (
    <div className="Contact">
        <img className="avatar" src="https://randomuser.me/api/portraits/men/22.jpg"></img>
            <div> 
                <p className="name">Joseph Brown</p>
                <div className="status">
                    <div className="status-online"></div>
                        <div className="status-text">online</div>
                </div>
            </div>

    </div>
  );
}

export default Contact;
