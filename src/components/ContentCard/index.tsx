import Player from '../../interfaces/Player';
import { BolaDeOuro, Content, FotoJogador } from '../../styles/components/ContentCard';
import styles from '../../styles/Home.module.css';

interface HeaderProps {
    player: Player
}

export default function ContentCard(props: HeaderProps) {
    const player = props.player;

    const qtdBolaDeOuro = () => {
        var rows = [];
        for (var i = 1; i <= player.melhorDoMundo; i++) {
            rows.push(<img key={i} alt="Bola de Ouro" src="/player/ballon-door.png" />);
        }
        return rows
    }
    return (
        <Content>
            <BolaDeOuro>
                {qtdBolaDeOuro()}
            </BolaDeOuro>
            <FotoJogador>
                <img src={player.imagem} alt={`Foto ${player.nome}`} />
            </FotoJogador>
        </Content>
    )
}