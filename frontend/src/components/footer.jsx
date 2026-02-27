import React from "react";
import img from "../assets/logoGema2.png";
import "../stylesheets/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__title">Social</h3>
        <ul className="footer__list">
          <li className="footer__item">
            <i className="fa-brands fa-instagram"></i> Instagram
          </li>
          <li className="footer__item">
            <i className="fa-brands fa-facebook"></i> Facebook
          </li>
          <li className="footer__item">
            <i className="fa-brands fa-x-twitter"></i> Twitter
          </li>
          <li className="footer__item">
            <i className="fa-brands fa-snapchat"></i> Snapchat
          </li>
        </ul>
      </div>
      <div className="footer__container">
        <h3 className="footer__title">Contact</h3>
        <ul className="footer__list">
          <li className="footer__item">
            <i className="fa-regular fa-envelope"></i> gema@gmail.com
          </li>
          <li className="footer__item">
            <i className="fa-solid fa-phone"></i> +55 674 233 2439
          </li>
          <li className="footer__item">
            <i className="fa-solid fa-globe"></i> In his house # 230
          </li>
        </ul>
      </div>
      <div className="footer__container">
        <h3 className="footer__title">Copyright</h3>
        <ul className="footer__list">
          <li className="footer__item">
            <i className="fa-regular fa-copyright"></i> GEMA project 2025
          </li>
        </ul>
      </div>
      <div className="footer__container footer__container--extends">
        <h3 className="footer__title">GEMA</h3>
        <img className="footer__logo" src={img} alt="Logo Gema" />
      </div>
    </footer>
  );
}
