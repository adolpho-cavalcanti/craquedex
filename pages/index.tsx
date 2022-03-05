import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
      const data = async () => {
        const result = await axios(
          'http://localhost:3000/api/craques',
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
