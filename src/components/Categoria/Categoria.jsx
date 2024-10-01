import styles from "../../styles/Categoria.module.css"
function Categoria({foto, descricao}) {
    return (
        <div className={styles.container}>
            <img src={foto} alt="categoria" className={styles.imagem}/>
            <p>{descricao}</p>
        </div>
    ) 
}

export default Categoria