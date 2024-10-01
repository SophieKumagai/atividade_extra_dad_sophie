import styles from "../../styles/Servico.module.css"

function Servico({imagem, texto, titulo}) {
    return (
        <div className={styles.container}>
            <img className={styles.imagem} src={imagem}/>
            <p className={styles.titulo}>{titulo}</p>
            <p className={styles.texto}>{texto}</p>
        </div>
    )
}

export default Servico