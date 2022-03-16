import Nation from '../../interfaces/Nation';
import { Header } from '../../styles/components/HeaderCard';

interface HeaderProps {
    nome: string,
    nation: Nation
}

export default function HeaderCard(props: HeaderProps) {
    const nome = props.nome
    const nation = props.nation
    return (
        <Header>
            <h3>{nome}</h3>
            <img src={nation.bandeira} 
                alt={nation.nome} 
            />
        </Header>
    )
}