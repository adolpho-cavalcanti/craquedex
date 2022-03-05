import Player from '../../interfaces/Player';
import styles from '../../styles/Home.module.css';

interface FooterProps {
    player: Player
}

export default function Footer(props: FooterProps) {
    return (
        <footer>
            <span>{props.player.posicao}</span>
        </footer>
    )
} 