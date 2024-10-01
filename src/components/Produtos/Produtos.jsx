import styles from "../../styles/Produtos.module.css"

function Produtos({lista_produtos, botao}) {
    return (
        <div className={styles.produto}>
            <ul className={styles.produtos_list}>
                {lista_produtos.map((item) => (
                    item
                ))}
            </ul>
            {botao && (
                <button className={styles.see_more}>View All Products</button>
            )}
        </div>
    )
}

export default Produtos