import "./Contact.css";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const emailAddress = "varun.dunna2524@gmail.com";
  return (
    <div className="contact-section">
      <header>
        <p id="getintouch">Get in touch</p>
        <p id="contact-heading">Contact me</p>
      </header>
      <div id="contact-box">
        <div id="email">
          <MdEmail size={50} id="email-icon" />

          <a id="email-link" href={`mailto:${emailAddress}`}>
            varun.dunna2524@gmail.com
          </a>
        </div>
        <div id="discord">
          <FaDiscord size={50} id="discord-icon" />
          <a id="discord-link" href="https://discord.com/">
            {" "}
            barbell.dev
          </a>{" "}
        </div>
      </div>
      <footer id="footer">
        Copyright &copy; 2024 Varun Dunna. All rights reserved.
      </footer>
    </div>
  );
}
