import Nation from '../../interfaces/Nation';
import { Footer } from '../../styles/components/FooterCard';

interface FooterProps {
    posicao: string,
    nation: Nation
}

export default function FooterCard({ posicao, nation }: FooterProps) {
    return (
        <Footer>
            <span><strong>Posição:</strong> {posicao}</span>
            <br/>
            <span><strong>País:</strong> {nation.nome}</span>
        </Footer>
    )
} 