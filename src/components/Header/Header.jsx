import lupa from '../../assets/pesquisa.svg';
import wishlist from '../../assets/Wishlist.svg';
import carrinho from '../../assets/carrinho.svg';

import styles from '../../styles/Header.module.css';

function Header() {
  return (
    <header>
        <div id={styles.exclusive}><strong>Exclusive</strong></div>
        <nav id={styles.menu}>
            <ul>
              <li className='active'>Home</li>
              <li>Contact</li>
              <li>About</li>
              <li>Sign Up</li>
            </ul>
        </nav>
        
        
        <div id={styles.search}>
          <input type="text" name="search" placeholder="What are you looking for?" /> 
          <div><img src={lupa} alt="Search icon" /></div>
        </div>
        <div id={styles.icones}>
            <div><img src={wishlist} alt="Wishlist icon" /></div>
            <div><img src={carrinho} alt="Cart icon" /></div>
        </div>
    </header>
  );
}

export default Header;
