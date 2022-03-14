import Nation from '../../interfaces/Nation';
import styles from '../../styles/Home.module.css';

interface HeaderProps {
    nome: string,
    nation: string
}

export default function Header(props: HeaderProps) {
    const nome = props.nome;
    //Remover acento e colocar todas as letras em minúsculo
    const nationLowercase = props.nation.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
    const imgNation = `player/bandeiras/${nationLowercase}.png`;
    return (
        <header className={styles.header}>
            <h2>{nome}</h2>
            <img src={imgNation} 
                alt={nome} 
                className={styles.bandeira}
            />
        </header>
    )
}