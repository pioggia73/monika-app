import React from "react";
import styled from "styled-components";
import contactBcg from "../assets/ContactImg.jpg";
import Title from "../components/Title";
import Overlay from "../components/Overlay";
import { CoursesContext } from "../context/CoursesContext";

const Contact = () => {
  const { isOpen } = React.useContext(CoursesContext);

  return (
    <ContactWrapper>
      {isOpen ? <Overlay /> : null}
      <section className="section contact-section">
        <Title title="contact me" />
        <article className="section-center">
          <form className="form-container">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                id="name"
                className="form-control"
                placeholder="your name ..."
                required
              />
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                placeholder="your email ..."
                required
              />
              <label htmlFor="email" className="form-label">
                Full Name
              </label>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                row="25"
                placeholder="your message here ..."
              />
            </div>
            <button type="submit" className="btn btn-submit">
              submit
            </button>
          </form>
        </article>
      </section>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.section`
  .contact-section {
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.8)
      ),
      url(${contactBcg});
    background-position: center;
    background-size: cover;
    height: calc(100vh - 80px);
  }

  .form-container {
    width: 60vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .form-group input[type="text"],
  input[type="text"],
  textarea {
    width: 100%;
    font-size: 0.7rem;
    padding: 1vh 1vw;
    border: none;
    display: block;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--clr-dirty-pink);
    color: var(--clr-white);
    margin-top: 5vh;
    font-family: inherit;

    &:focus {
      outline: none;
      border-bottom: 1px solid var(--clr-dirty-blue);
      box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.95);
    }
  }

  input:invalid {
    box-shadow: none;
  }

  .btn-submit {
    color: var(--clr-white);
    margin-top: 5vh;
    text-transform: uppercase;
  }

  input:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-0.2rem);
  }

  label {
    font-size: 2vh;
    display: block;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    color: var(--clr-dirty-pink);
    padding: 0 1vw;
  }

  @media screen and (min-width: 800px) {
    .form-container {
      width: 40vw;
    }
  }
`;

export default Contact;
