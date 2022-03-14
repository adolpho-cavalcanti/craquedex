import Nation from '../../interfaces/Nation';
import styles from '../../styles/Home.module.css';

interface FooterProps {
    posicao: string,
    nation: string
}

export default function Footer({ posicao, nation }: FooterProps) {
    return (
        <footer className={styles.footer}>
            <span>Posição: {posicao}</span>
            <br/>
            <span>País: {nation}</span>
        </footer>
    )
} 