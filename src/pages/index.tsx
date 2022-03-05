import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Card from '../components/Card'
import styles from '../../styles/Home.module.css';

const BASE_URL = 'https://craquedex.vercel.app/api/craques'

export default function Home() {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
      const data = async () => {
        const result = await axios(
          BASE_URL,
        );
        setPlayers(result.data);
      };
      data();
  }, []);
  
  function renderizarJogadores() {
    return players.map((player) => {
        return <Card 
            key={player.id}
            player={player}
        />
    })
  }

  return (
    <div className={styles.container}>
        {renderizarJogadores()}
    </div>
  )
}
