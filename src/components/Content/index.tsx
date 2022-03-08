import Player from '../../interfaces/Player';
import styles from '../../../styles/Home.module.css';

interface HeaderProps {
    player: Player
}

export default function Content(props: HeaderProps) {
    const player = props.player;

    const qtdBolaDeOuro = () => {
        var rows = [];
        for (var i = 1; i <= player.melhorDoMundo; i++) {
            rows.push(<img key={i} alt="Bola de Ouro" src="/player/ballon-door.jpg" />);
        }
        return rows
    }
    return (
        <div className={styles.content}>
            <section className={styles.bolaDeOuro}>
                {qtdBolaDeOuro()}
            </section>
            <section className={styles.fotoJogador}>
                <img src={player.imagem} alt={`Foto ${player.nome}`} />
            </section>
        </div>
    )
}