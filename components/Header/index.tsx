import Player from '../../interfaces/Player';
import styles from '../../styles/Home.module.css'

interface HeaderProps {
    player: Player
}

export default function Header(props: HeaderProps) {
    const player = props.player;
    console.log(player);
    return (
        <header className={styles.header}>
            <h2>{player.nome}</h2>
            <img src={player.nacionalidade.bandeira} 
                alt={player.nacionalidade.nome} 
                className={styles.bandeira}
            />
        </header>
    )
}