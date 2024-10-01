import React, { useState, useEffect } from 'react';
import styles from '../../styles/Propaganda2.module.css';
import jbl from "../../assets/jbl.svg"
function Propaganda2() {
  // Estado para o tempo restante (dias, horas, minutos, segundos)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  useEffect(() => {
    
    const eventDate = new Date(new Date().getTime() + 
      (5 * 24 * 60 * 60 * 1000) + // 5 dias
      (23 * 60 * 60 * 1000) + // 23 horas
      (59 * 60 * 1000) + // 59 minutos
      (35 * 1000) // 35 segundos
    );
  
    const interval = setInterval(() => {
      const now = new Date();
      const distance = eventDate - now;
  
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, []); 

  return (
    <div className={styles.container}>
      <div className={styles.promo}>
        <div className={styles.texto_promocional}>
          <p className={styles.categoria}>Categories</p>
          <h1>Enhance Your Music Experience</h1>
          <div className={styles.temporizador}>
            <div className={styles.tempo}>
              <span>{timeLeft.days}</span>
              <p>Days</p>
            </div>
            <div className={styles.tempo}>
              <span>{timeLeft.hours}</span>
              <p>Hours</p>
            </div>
            <div className={styles.tempo}>
              <span>{timeLeft.minutes}</span>
              <p>Minutes</p>
            </div>
            <div className={styles.tempo}>
              <span>{timeLeft.seconds}</span>
              <p>Seconds</p>
            </div>
          </div>
          <button className={styles.comprar}>Buy now!</button>
        </div>
        <div className={styles.imagem_produto}>
          <img src={jbl} alt="Caixa de Som" />
        </div>
      </div>
    </div>
  );
}

export default Propaganda2;
