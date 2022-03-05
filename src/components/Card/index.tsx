import styles from '../../../styles/Home.module.css';
import Footer from '../Footer';
import Header from '../Header';
import Content from '../Content';
import Player from '../../interfaces/Player';


interface CardProps {
    player: Player
}

export default function Card({ player }: CardProps) {
    return (
        <div className={styles.card}>
            <Header nation={player.nacionalidade} nome={player.nome} />
            <Content player={player} />
            <Footer posicao={player.posicao} nation={player.nacionalidade} />
        </div>
    )
}