import React from "react";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillPhone,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <ul>
          <li>
            <a className="Linka" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="Linka" href="/registration">
              Registration
            </a>
          </li>
          <li>
            <a className="Linka" href="/members">
              Members
            </a>
          </li>
          <li>
            <a className="Linka" href="/contact">
              Contact
            </a>
          </li>
          <li>
            <a
              className="Linka"
              target="_blank"
              href="mailto:philixbob@gmail.com"
            >
              <span className="contact_list">Email</span>
            </a>
          </li>

          <li>
            <a className="Linka" href="tel:+2348108850572">
              <span className="contact_list">Phone </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>2022 Copyright &copy; All Rights Reserved</p>
      </div>
    </div>
  );
}
