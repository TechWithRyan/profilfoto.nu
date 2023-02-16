import React, { useState } from "react";
import "../components/Contact.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
        color: black;
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220); 
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(19, 124, 252);
    
      color: white;
      border: none;
    }
  }
`;

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_73gdwjn', 'template_5ceqyz3', form.current, '5W1Y5ag_ec8NtBokO')
            .then((result) => {
                console.log(result.text);
                console.log('message sent')
              
            }, (error) => {
                console.log(error.text);
                e.target.reset();
            });
    };


return (
    <>
    <h3 className="banner">Kontakt</h3>
    <StyledContactForm className="form"> 
    <h1>Nå mig här ✉️</h1>
    <form ref={form} onSubmit={sendEmail}>
      <label>Namn</label>
      <input type="text" name="user_name" />
      <label>Epost</label>
      <input type="email" name="user_email" />
      <label>Meddelande</label>
      <textarea name="message" />
      <input type="submit" value="Skicka" />
    </form>
  </StyledContactForm>
    </>
);
};

export default Contact;

