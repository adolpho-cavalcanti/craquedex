import { useRouter } from "next/router";
import { useContext } from "react";
import { ModalSalaDeTrofeuContext } from "../../context/ModalSalaDeTrofeuContext";
import Player from "../../interfaces/Player";
import styles from '../../styles/Home.module.css'

interface PlayerTrofeuProps {
    valor: Player;
}

export default function PerfilPlayer({valor}: PlayerTrofeuProps) {

    const { modalVisible, setModalVisible } = useContext(ModalSalaDeTrofeuContext);
    const router = useRouter();

    const { imagem, nome, posicao, nacionalidade, melhorDoMundo  } = valor;

    return(
        <div className={styles.containerPlayer}>
            {!modalVisible 
                ? 
                <div className={styles.player}>
                    <div className={styles.imgPlayer}>
                        <img src={imagem} alt={nome} />
                    </div>
                    <div className={styles.contentPlayer}>
                        <div className={styles.buttonActionsPlayer}>
                            <button className={styles.buttonTrophy} type="button" onClick={() =>setModalVisible(true)}>SALA DE TROFÉUS</button>
                            <button className={styles.buttonBackHome} type="button" onClick={() => router.push('/')}>
                                X
                            </button>
                        </div>
                        <div className={styles.dataPlayer}>
                            <span>Nome: {nome}</span>
                            <span>Posição: {posicao}</span>
                            <span>País: {nacionalidade}</span>
                            <div>
                                <img alt="Bola de Ouro" src="/player/ballon-door.jpg" />
                                <span>{melhorDoMundo}</span>
                            </div>
                        </div>
                    </div>
                </div>
                :
                ''
            }
        </div>
    )
}