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
            rows.push(<img key={i} alt="Bola de Ouro" src="https://img2.gratispng.com/20180712/vs/kisspng-ballon-d-or-2017-ballon-d-or-2016-2014-fifa-ballon-pallone-5b4813b8ad0819.5918159415314502967088.jpg" />);
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