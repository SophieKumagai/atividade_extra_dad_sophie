import styles from "../../styles/Produto.module.css"
import coracao from "../../assets/coracao_circulo.svg"
import olho from "../../assets/olho_circulo.svg"
function Produto({imagem, desconto, produto, preco_atual, preco_original, estrelas, count, desconto_aparece, cor, bolinhas, corBolinha, corBolinha2}) {
    return (
        <div className={styles.product_card}>
            {desconto_aparece && (
                <div style={{backgroundColor: cor}} className={styles.discount_tag}>{desconto}</div>
            )}
            <div className={styles.image_container}>
                <img 
                    src={imagem} 
                    alt="Produto" 
                    className={styles.product_image}
                />
                <div className={styles.action_icons}>
                    <img className={styles.icon_heart} src={coracao} alt="Coração"/>
                    <img className={styles.icon_eye} src={olho} alt="Olho"/>
                </div>
                <button className={styles.add_to_cart}>Add To Cart</button>
            </div>
            <div className={styles.product_details}>
                <h3 className={styles.product_name}>{produto}</h3>
                <div className={styles.product_pricing}>
                    <span className={styles.current_price}>{preco_atual}</span>
                    <span className={styles.original_price}>{preco_original}</span>
                </div>
                <div className={styles.product_rating}>
                    <img className={styles.rating_stars} src={estrelas} alt="Estrelas"/>
                    <span className={styles.rating_count}>({count})</span>
                </div>
                {bolinhas && (
                    <div className={styles.banner_dots}>
                        <span style={{backgroundColor: corBolinha}} className={`${styles.dot} ${styles.active}`}></span>
                        <span style={{backgroundColor: corBolinha2}} className={styles.dot}></span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Produto