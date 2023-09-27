import React, { useRef } from 'react';
import './footer.styles.css';
import emailjs from '@emailjs/browser';

const Footer = () => {
    const form = useRef();
    const serviceId = "service_44botzw";
    const templateId = "template_mz08lnq";
    const publicKey = "uCrsPEyakNRLUAnci";

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((response) => {
            console.log(response.text);
        })
        .catch((error) => {
            console.log(error.text);
        })

        e.target.reset();
    }

    return (
        <section className="footer-container">
            <div className="container">
              <p>Contact Us </p>
                <p>&copy; 2023 Adhayay. All Rights Reserved.</p>
            </div>
        </section>
    )
}

export default Footer;