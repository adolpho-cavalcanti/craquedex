import Nation from '../../interfaces/Nation';
import styles from '../../../styles/Home.module.css';

interface HeaderProps {
    nome: string,
    nation: Nation
}

export default function Header(props: HeaderProps) {
    const nome = props.nome
    const nation = props.nation
    return (
        <header className={styles.header}>
            <h2>{nome}</h2>
            <img src={nation.bandeira} 
                alt={nation.nome} 
                className={styles.bandeira}
            />
        </header>
    )
}