import { useEffect, useMemo, useState } from 'react';
import Card from '../components/Card'
import styles from '../styles/Home.module.css';
import HeaderSite from '../components/HeaderSite';
import api from '../services/api';

export default function Home({data}) {

  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
        setPlayers(data);
  }, []);

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

export const getServerSideProps = async () => {
  const result = await api.get('/');
  const data = await result.data;
  return { 
    props: { 
      data
    }
  }
}
