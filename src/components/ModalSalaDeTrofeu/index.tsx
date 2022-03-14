import { useContext } from 'react';
import styles from '../../styles/Home.module.css'
import { ModalSalaDeTrofeuContext } from '../../context/ModalSalaDeTrofeuContext';
import Player from '../../interfaces/Player';

interface PlayerTrofeuProps {
    valorPlayer: Player;
}

export default function ModalSalaDeTrofeu({valorPlayer}: PlayerTrofeuProps) {

    const { setModalVisible } = useContext(ModalSalaDeTrofeuContext);

    const { nome, titulos } = valorPlayer;

    return (
        <div className={styles.containerModal}>
            <div className={styles.modal}>
                <div className={styles.headerModal}>
                    <h3>{nome}</h3>
                    <button className={styles.buttonBackPlayer} onClick={() => setModalVisible(false)}>X</button>
                </div>
                <div className={styles.prateleira}>
                    {titulos.map((titulo, i) => 
                        <div key={i} className={styles.prateleiraTrophy}>
                            <img alt={titulo.nome} src={titulo.imagem} width="80px" height="120px" />
                            <span>{titulo.nome}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}