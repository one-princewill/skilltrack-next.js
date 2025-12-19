import Link from 'next/link';
import styles from './NavBar.module.css'
import Button from '../Button.jsx';

const Navbar = () => {


    return(
        <nav className={styles.navBarContainer}>
             <div className={styles.navLogo}>
                <img src="/No-text-logo.png" alt="" className={styles.navImg}/>
                <Link href="#Home">SkillTrack</Link>
            </div>
            <div className={styles.navBtns}>
                <div className={styles.navLinks}>
                    <Link href="#Features">Features</Link>
                    <Link href="#Pricing">Pricing</Link>
                    <Link href="#Faq">FAQ</Link>
                    <Link href="/LogIn">Login</Link>
                </div>
                <Button text='Sign Up' className={styles.signUpBtn}/>
            </div>
        </nav>
    )
};

export default Navbar;