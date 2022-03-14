import styles from '../../styles/Home.module.css';
import Footer from '../Footer';
import Header from '../Header';
import Content from '../Content';
import Player from '../../interfaces/Player';
import Link from 'next/link';


interface CardProps {
    player: Player
}

export default function Card({ player }: CardProps) {
    return (
        <Link href={`/player/${player.id}`}>
            <a className={styles.linkCard}>
                <div className={styles.card}>
                    <Header nation={player.nacionalidade} nome={player.nome} />
                    <Content player={player} />
                    <Footer posicao={player.posicao} nation={player.nacionalidade} />
                </div>
            </a>
        </Link>
    )
}