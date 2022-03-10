import Nation from '../../interfaces/Nation';
import styles from '../../styles/Home.module.css';

interface FooterProps {
    posicao: string,
    nation: Nation
}

export default function Footer({ posicao, nation }: FooterProps) {
    return (
        <footer>
            <span>Posição: {posicao}</span>
            <br/>
            <span>País: {nation.nome}</span>
        </footer>
    )
} 