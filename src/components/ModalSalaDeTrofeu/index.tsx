import { useContext } from 'react';
import { ModalSalaDeTrofeuContext } from '../../context/ModalSalaDeTrofeuContext';
import Player from '../../interfaces/Player';
import { ButtonBackPlayer, ButtonTrophyTwo, ContainerModal, HeaderModal, Modal, PlacaDourada, Prateleira } from '../../styles/components/ModalSalaDeTrofeu';

interface PlayerTrofeuProps {
    valorPlayer: Player;
}

export default function ModalSalaDeTrofeu({valorPlayer}: PlayerTrofeuProps) {

    const { setModalVisible } = useContext(ModalSalaDeTrofeuContext);

    const { nome, titulos } = valorPlayer;

    const qtdDeTrofeus = () => {
        var rows = [];
        var increment = 0;
        titulos.map(titulo =>{
            for (var i = 1; i <= titulo.qtdTitulos; i++) {
                increment++;
                rows.push(<img key={increment} alt={titulo.nome} src={titulo.imagem} />);
            }
        });
        return rows;
    };

    return (
        <ContainerModal>
            <Modal>
                <HeaderModal>
                    <h3>{nome}</h3>
                    <ButtonBackPlayer onClick={() => setModalVisible(false)}>X</ButtonBackPlayer>
                </HeaderModal>
                <PlacaDourada>
                    <ButtonTrophyTwo disabled>Sala de Troféus</ButtonTrophyTwo>
                </PlacaDourada>
                <Prateleira>
                    {qtdDeTrofeus()}
                </Prateleira>
            </Modal>
        </ContainerModal>
    )
}