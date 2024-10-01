import styles from "../../styles/Promocao.module.css"
import drop from "../../assets/DropDown.svg"

function Promocao() {
    return (
        <div id={styles.promocao}>
            <div id={styles.texto}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                <a href="#" className={styles.link}><strong>ShopNow</strong></a>
            </div>
            <select name="idioma" id={styles.idioma}>
                <option value="English">English</option>
                <option value="Portuguese">Portuguese</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
            </select>
        </div>
    )
}

export default Promocao