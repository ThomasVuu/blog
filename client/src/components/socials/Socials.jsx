import "./socials.css";

export default function Socials() {
  return (
    <div className="socials">
      <a
        className="link"
        href="https://github.com/ThomasVuu1"
        target="_blank"
        rel="noreferrer"
      >
        <i className="socialIcon fab fa-github-square"></i>
      </a>
      <a
        className="link"
        href="https://www.linkedin.com/in/thomas-vu-8813bb159/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="socialIcon fab fa-linkedin"></i>
      </a>
      <a
        className="link"
        href="https://www.youtube.com/channel/UCG8aZXSMy0PdOzWBix1Onmg"
        target="_blank"
        rel="noreferrer"
      >
        <i className="socialIcon fab fa-youtube-square"></i>
      </a>
      <a
        className="link"
        href="https://www.instagram.com/thomasvuu/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="socialIcon fab fa-instagram-square"></i>
      </a>
    </div>
  );
}
