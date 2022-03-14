import axios from "axios";
import PerfilPlayer from "../../components/PerfilPlayer";
import { ModalSalaDeTrofeuProvider } from "../../context/ModalSalaDeTrofeuContext";
import Player from "../../interfaces/Player";
import styles from '../../styles/Home.module.css';
import HeaderSite from "../../components/HeaderSite";
import api from "../../services/api";
import { GetStaticPaths, GetStaticProps } from "next";

interface PlayerPageProps {
    player: Player
}

export default function PlayerPage({ player }: PlayerPageProps) {
 
    const legendPlayer = player[0];
    return (
        <ModalSalaDeTrofeuProvider valor={legendPlayer}>
            <div className={styles.page}>
                <HeaderSite />
                <PerfilPlayer valor={legendPlayer} />
            </div>
        </ModalSalaDeTrofeuProvider>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await api.get('/');
    const players = await res.data;
  
    const paths = players.map((player: Player) => ({
      params: { id: player.id.toString() },
    }))
  
    return { paths, fallback: false }
  }
  
export const getStaticProps: GetStaticProps<PlayerPageProps> = async ({ params }) => {
    const res = await api.get(`/${params.id}`);
    const player = await res.data;
  
    return { props: { player } }
}