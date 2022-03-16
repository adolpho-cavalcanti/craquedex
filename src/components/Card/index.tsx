import FooterCard from '../FooterCard';
import HeaderCard from '../HeaderCard';
import ContentCard from '../ContentCard';
import Player from '../../interfaces/Player';
import Link from 'next/link';
import { CardPlayer, LinkCard } from '../../styles/components/Card';


interface CardProps {
    player: Player
}

export default function Card({ player }: CardProps) {
    return (
        <Link href={`/player/${player.id}`}>
            <LinkCard>
                <CardPlayer>
                    <HeaderCard nation={player.nacionalidade} nome={player.nome} />
                    <ContentCard player={player} />
                    <FooterCard posicao={player.posicao} nation={player.nacionalidade} />
                </CardPlayer>
            </LinkCard>
        </Link>
    )
}