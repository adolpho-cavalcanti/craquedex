import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import Card from '../components/Card'
import styles from '../styles/Home.module.css';
import HeaderSite from '../components/HeaderSite';

const BASE_URL = 'https://craquedex.vercel.app/api/craques';
const BASE_URL_LOCAL = 'http://localhost:3000/api/craques';

export default function Home() {

  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState('');

  const playersSearched = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return players.filter(({ nome }) => nome.toLowerCase().includes(lowerSearch));
  }, [players, search]);

  useEffect(() => {
      const data = async () => {
        const result = await axios(
          BASE_URL,
        );
        setPlayers(result.data);
      };
      data();
  }, []);
  
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
