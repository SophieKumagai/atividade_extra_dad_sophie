import React from 'react';
import styles from '../../styles/Footer.module.css'; // Importa o arquivo de estilos CSS
import Qrcode from "../../assets/Qrcode 1.svg"
import AppStore from "../../assets/AppStore.svg"
import GooglePlay from "../../assets/GooglePlay.svg"
import facebook from "../../assets/icon-Facebook.svg"
import insta from "../../assets/icon-Instagram.svg"
import linkedin from "../../assets/icon-Linkedin.svg"
import tt from "../../assets/icon-Twitter.svg"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h3>Exclusive</h3>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <form>
              <input className={styles.input} type="email" placeholder="Enter your email" />
            </form>
          </div>
          <div className={styles.col}>
            <h3>Support</h3>
            <p>111 Bijoy sarani, Dhaka,</p>
            <p>DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className={styles.col}>
            <h3>Account</h3>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
          <div className={styles.col}>
            <h3>Quick Link</h3>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div className={styles.col}>
            <h3>Download App</h3>
            <p>Save $3 with App New User Only</p>
            <div className={styles.app_stores}>
              <img style={{gridArea: "Qrcode"}} src={Qrcode} alt="qrcode" />
              <img style={{gridArea: "GooglePlay"}} src={GooglePlay} alt="GooglePlay" />
              <img style={{gridArea: "AppStore"}} src={AppStore} alt="AppStore" />
            </div>
            <ul className={styles.social_media}>
              <li><a href="#"><img src={facebook} alt="facebook" /></a></li>
              <li><a href="#"><img src={tt} alt="twitter" /></a></li>
              <li><a href="#"><img src={insta} alt="instagram" /></a></li>
              <li><a href="#"><img src={linkedin} alt="linkedin" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;