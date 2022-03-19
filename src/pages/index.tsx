import { useMemo, useState } from 'react';
import HeaderSite from '../components/HeaderSite';
import api from '../services/api';
import Player from '../interfaces/Player';
import { GetServerSideProps } from 'next';
import { Page, Container, BarraDePesquisa } from '../styles/pages/Home';
import CardAnimation from '../components/Cardanimation';
import InputSearch from '../components/InputSearch';

interface IPlayerProps {
  players: Player[];
}

export default function Home({players}: IPlayerProps) {

  const [search, setSearch] = useState('');

  function quandoEscrever(texto) {
    setSearch(texto);
  }

  const playersSearched = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return players.filter(({ nome }) => nome.toLowerCase().includes(lowerSearch));
  }, [players, search]);
  
  return (
    <Page>
      <HeaderSite />
      <InputSearch onSearch={quandoEscrever}/>
      <Container>
          {playersSearched.map((player) => (
              <CardAnimation 
                key={player.id}
                player={player}
                layoutId={player.imagem}
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
