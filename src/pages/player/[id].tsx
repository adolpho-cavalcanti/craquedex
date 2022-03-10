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

const BASE_URL = 'https://craquedex.vercel.app/api/craques';
const BASE_URL_LOCAL = 'http://localhost:3000/api/craques';

export async function getStaticPaths() {
    const res = await axios(BASE_URL)
    const players = await res.data;
  
    const paths = players.map((player: Player) => ({
      params: { id: player.id.toString() },
    }))
  
    return { paths, fallback: false }
  }
  
export async function getStaticProps({ params }) {
    const res = await axios(`${BASE_URL}/${params.id}`)
    const player = await res.data;
  
    return { props: { player } }
}