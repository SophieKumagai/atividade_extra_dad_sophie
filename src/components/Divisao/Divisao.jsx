import React, { useState, useEffect } from 'react';
import styles from "../../styles/Divisao.module.css"
import ir from "../../assets/ir.svg"
import voltar from "../../assets/voltar.svg"

function Divisao(props) {
  // Estado para o tempo restante (dias, horas, minutos, segundos)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Função para atualizar o tempo restante
  useEffect(() => {
    const interval = setInterval(() => {
      // Lógica para calcular o tempo restante
      const now = new Date();
      const eventDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 20); // Exemplo de 20 minutos a partir de agora

      const distance = eventDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      // Limpar o intervalo quando o tempo expirar
      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.flash_sales}>
      <div className={styles.container}>
          <div className={styles.title_container}>
            <div className={styles.retangulo}></div>
            <span className={styles.today_text}>{props.subtitle}</span>
          </div>
          <h1 className={styles.title}>{props.title}</h1>
      </div>

      {props.showTimer && (
      <div className={styles.timer}>
        <div className={styles.time_block}>
          <span className={styles.number}>{timeLeft.days}</span>
          <span className={styles.label}>Days</span>
        </div>
        <span className={styles.colon}>:</span>
        <div className={styles.time_block}>
          <span className={styles.number}>{timeLeft.hours}</span>
          <span className={styles.label}>Hours</span>
        </div>
        <span className={styles.colon}>:</span>
        <div className={styles.time_block}>
          <span className={styles.number}>{timeLeft.minutes}</span>
          <span className={styles.label}>Minutes</span>
        </div>
        <span className={styles.colon}>:</span>
        <div className={styles.time_block}>
          <span className={styles.number}>{timeLeft.seconds}</span>
          <span className={styles.label}>Seconds</span>
        </div>
      </div>
    )}

      {props.showArrow && (
        <div className={styles.navigation}>
        <button className={`${styles.nav_button} ${styles.prev}`}>
          <img src={voltar} alt="Voltar" />
        </button>
        <button className={`${styles.nav_button} ${styles.next}`}>
          <img src={ir} alt="Ir" />
        </button>
      </div>
      )}

      {props.showButton && (
        <button className={`${styles.buttonViewAll}`}>
          View All
        </button>
      )}
    </div>
  );
};

export default Divisao;
