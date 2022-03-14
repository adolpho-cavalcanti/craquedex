import { useEffect, useMemo, useState } from 'react';
import Card from '../components/Card'
import styles from '../styles/Home.module.css';
import HeaderSite from '../components/HeaderSite';
import api from '../services/api';
import Player from '../interfaces/Player';
import { GetServerSideProps } from 'next';


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
    <div className={styles.page}>
      <HeaderSite />
      <div className={styles.barraDePesquisa}>
        <input 
          type="text"
          placeholder="Procurar a Lenda..." 
          id="playerSearch"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={styles.container}>
          {playersSearched.map((player) => (
              <Card 
                key={player.id}
                player={player}
              />
          ))}
      </div>
    </div>
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
