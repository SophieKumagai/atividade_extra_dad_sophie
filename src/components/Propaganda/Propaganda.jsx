import styled from 'styled-components';
import logo_apple from '../../assets/logo_apple.svg';
import phone from '../../assets/phone.svg';
import styles from '../../styles/Propaganda.module.css';

const PropagandaStyle = styled.div`
    width: 60vw;
    height: 50vh;
    background-color: black;
    display: flex;
    align-content: center;
    margin: 0 auto;
    margin-top: 90px;
    color: white;
    justify-content: space-between;
`;

function Propaganda() {
    return (
        <div  className={styles.banner}>
            <div className={styles.banner_container}>
                <div className={styles.banner_content}>
                    <div className={styles.banner_logo}>
                        <img src={logo_apple} alt="Apple Logo" className={styles.apple_logo} />
                        <span className="iphone-series">iPhone <span className="highlight">14</span> Series</span>
                    </div>
                    <div className={styles.banner_text}>
                        <h1>Up to 10% off Voucher</h1>
                        <button className={styles.shop_now_btn}>Shop Now →</button>
                    </div>
                </div>
                <div className={styles.banner_image}>
                    <img src={phone} alt="iPhone" />
                </div>
                <div className={styles.banner_dots}>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={`${styles.dot} ${styles.active}`}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                </div>
            </div>
        </div>
    )
}

export default Propaganda;