import React from 'react';
import styles from '../../styles/Propaganda3.module.css'; 
import playstation from "../../assets/playstation.svg"
import women from "../../assets/women.svg"
import altofalante from "../../assets/altofalante.svg"
import perfume from "../../assets/perfume.svg"

function ProdutoCard({ imagem, titulo, descricao, botaoTexto, area, margin, height, width, bottom, bDescricao, color }) {
  return (
    <div style={{gridArea: area, backgroundColor: color}}  className={styles.produto_card}>
      <img style={{marginLeft: margin}} className={styles.imagem} src={imagem} alt={titulo} />
      <h2 style={{bottom: bottom}} className={styles.titulo}>{titulo}</h2>
      <p style={{height: height, width: width, bottom: bDescricao}} className={styles.descricao}>{descricao}</p>
      <button className={styles.botao_texto}>{botaoTexto}</button>
    </div>
  );
}

function Propaganda3() {
  return (
    <div className={styles.container}>
      <ProdutoCard
        imagem={playstation}
        titulo="PlayStation 5"
        descricao="Black and White version of the PS5 coming out on sale."
        botaoTexto="Shop Now"
        area="ps5"
        width="50%"
        height="auto"
        bottom="80px"
        bDescricao="40px"
        color="#000000"
      />
      <ProdutoCard
        imagem={women}
        titulo="Women’s Collections"
        descricao="Featured woman collections that give you another vibe."
        botaoTexto="Shop Now"
        area="women"
        margin="40px"
        width="40%"
        height="auto"
        bottom="80px"
        bDescricao="40px"
        color="#0D0D0D"
      />
      <ProdutoCard
        imagem={altofalante}
        titulo="Speakers"
        descricao="Amazon wireless speakers"
        botaoTexto="Shop Now"
        area="speaker"
        color="#0D0D0D"
      />
      <ProdutoCard
        imagem={perfume}
        titulo="Perfume"
        descricao="GUCCI INTENSE OUD EDP"
        botaoTexto="Shop Now"
        area="perfume"
        color="#0D0D0D"
      />
    </div>
  );
}

export default Propaganda3;