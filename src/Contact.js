import React from 'react';
//import '../Styles/Contact.css'
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeIcon from '@material-ui/icons/Home';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
const Contact = () => {
    return (
        <section className="my-5 text-center " >
            <div className="my-5 text-center ">
                <h1 className="text-center tcp"><strong>Contact Me</strong></h1>
                <h3 ><MailOutlineIcon style={{ fill: '#e91e63' }} />  1998shruti.shrivastava@gmail.com</h3>
                <h3 ><PhoneIcon style={{ fill: '#e91e63' }} />: +91-7595824508</h3>
                <h3 ><HomeIcon style={{ fill: '#e91e63' }} />Jharkhand,India</h3>
                <h3 ><a href="https://www.linkedin.com/in/shruti-srivastava-a369b4152" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{ fill: '#e91e63' }} />Shruti Srivastava</a></h3>



            </div>
        </section>
    )
}
export default Contact;