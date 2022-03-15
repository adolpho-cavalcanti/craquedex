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

    const qtdBolaDeOuro = () => {
        var rows = [];
        var increment = 0;
        titulos.map(titulo =>{
            for (var i = 1; i <= titulo.qtdTitulos; i++) {
                increment++;
                rows.push(<img key={increment} alt={titulo.nome} src={titulo.imagem} />);
            }
        });
        return rows;
    }

    return (
        <div className={styles.containerModal}>
            <div className={styles.modal}>
                <div className={styles.headerModal}>
                    <h3>{nome}</h3>
                    <button className={styles.buttonBackPlayer} onClick={() => setModalVisible(false)}>X</button>
                </div>
                <div className={styles.placaDourada}>
                    <button className={styles.buttonTrophyTwo} disabled>Sala de Troféus</button>
                </div>
                <div className={styles.prateleira}>
                    {qtdBolaDeOuro()}
                </div>
            </div>
        </div>
    )
}