import { motion } from 'framer-motion';
import Image from 'next/image';
import { useContext } from 'react';
import { ModalSalaDeTrofeuContext } from '../../context/ModalSalaDeTrofeuContext';
import { ButtonBackPlayer, ButtonTrophyTwo, ContainerModal, HeaderModal, Modal, PlacaDourada, Prateleira } from '../../styles/components/ModalSalaDeTrofeu';
import Variantes from '../Variantes';

export default function ModalSalaDeTrofeu() {

    const { setModalVisible, player } = useContext(ModalSalaDeTrofeuContext);

    const { nome, titulos } = player;

    const qtdDeTrofeus = () => {
        var rows = [];
        var increment = 0;
        titulos.map(titulo =>{
            for (var i = 1; i <= titulo.qtdTitulos; i++) {
                increment++;
                rows.push(
                    <div>
                        <Image key={increment} alt={titulo.nome} src={titulo.imagem} width="160px" height="220px" />
                    </div>
                );
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
                    <ButtonTrophyTwo disabled>TROFÉUS</ButtonTrophyTwo>
                </PlacaDourada>
                <motion.div
                    transition={{
                        delay: 2
                    }}
                    variants={Variantes}
                    initial="hidden"
                    animate="visible"
                >
                    <Prateleira>
                        {qtdDeTrofeus()}
                    </Prateleira>
                </motion.div>
            </Modal>
        </ContainerModal>
    )
}