import styles from '../../styles/Home.module.css';
import Footer from '../Footer';
import Header from '../Header';
import Content from '../Content';
import Player from '../../interfaces/Player';


interface CardProps {
    player: Player
}

export default function Card(props: CardProps) {
    console.log(props, 'card')
    return (
        <div className={styles.card}>
            <Header player={props.player} />
            <Content player={props.player} />
            <Footer player={props.player} />
        </div>
    )
}