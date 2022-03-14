import axios from "axios";
import PerfilPlayer from "../../components/PerfilPlayer";
import { ModalSalaDeTrofeuProvider } from "../../context/ModalSalaDeTrofeuContext";
import Player from "../../interfaces/Player";
import styles from '../../styles/Home.module.css';
import HeaderSite from "../../components/HeaderSite";

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

const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/craques`;

export async function getStaticPaths() {
    const res = await axios(baseUrl)
    const players = await res.data;
  
    const paths = players.map((player: Player) => ({
      params: { id: player.id.toString() },
    }))
  
    return { paths, fallback: false }
  }
  
export async function getStaticProps({ params }) {
    const res = await axios(`${baseUrl}/${params.id}`)
    const player = await res.data;
  
    return { props: { player } }
}