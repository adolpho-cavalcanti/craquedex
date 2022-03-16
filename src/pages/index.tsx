import { useMemo, useState } from 'react';
import Card from '../components/Card'
import HeaderSite from '../components/HeaderSite';
import api from '../services/api';
import Player from '../interfaces/Player';
import { GetServerSideProps } from 'next';
import { Page, Container, BarraDePesquisa } from '../styles/pages/Home';

interface IPlayerProps {
  players: Player[];
}

export default function Home({players}: IPlayerProps) {

  const [search, setSearch] = useState('');

  const playersSearched = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return players.filter(({ nome }) => nome.toLowerCase().includes(lowerSearch));
  }, [players, search]);
  
  return (
    <Page>
      <HeaderSite />
      <BarraDePesquisa>
        <input 
          type="text"
          placeholder="Procurar a Lenda..." 
          id="playerSearch"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </BarraDePesquisa>
      <Container>
          {playersSearched.map((player) => (
              <Card 
                key={player.id}
                player={player}
              />
          ))}
      </Container>
    </Page>
  )
}

export const getServerSideProps: GetServerSideProps<IPlayerProps> = async () => {
  const result = await api.get('/');
  const players = await result.data;
  return { 
    props: { 
      players
    }
  }
}
