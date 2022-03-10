import { useContext } from 'react';
import styles from '../../styles/Home.module.css'
import { ModalSalaDeTrofeuContext } from '../../context/ModalSalaDeTrofeuContext';
import Player from '../../interfaces/Player';

interface PlayerTrofeuProps {
    valorPlayer: Player;
}

export default function ModalSalaDeTrofeu({valorPlayer}: PlayerTrofeuProps) {

    const { setModalVisible } = useContext(ModalSalaDeTrofeuContext);


    return (
        <div className={styles.containerModal}>
            <div className={styles.modal}>
                <h2>Minha modal</h2>
                <p>{valorPlayer.nome} - Dentro do Modal de Troféu</p>
                <button onClick={() => setModalVisible(false)}>X</button>
            </div>
        </div>
    )
}