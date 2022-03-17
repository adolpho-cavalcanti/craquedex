import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ModalSalaDeTrofeuContext } from "../../context/ModalSalaDeTrofeuContext";
import Player from "../../interfaces/Player";
import { ButtonActionsPlayer, ButtonBackHome, ButtonTrophy, CirclePlayer, CircleWrapperPlayer, ContainerPlayer, ContentPlayer, DataPlayer, ImgPlayer, PlayerStyles } from "../../styles/components/PerfilPlayer";

interface PlayerTrofeuProps {
    valor: Player;
}

export default function PerfilPlayer({valor}: PlayerTrofeuProps) {

    const { modalVisible, setModalVisible } = useContext(ModalSalaDeTrofeuContext);
    const router = useRouter();

    const { imagem, nome, posicao, nacionalidade, melhorDoMundo  } = valor;

    return(
        <ContainerPlayer>
            {!modalVisible 
                ? 
                <PlayerStyles>
                    <CircleWrapperPlayer>
                        <CirclePlayer />
                    </CircleWrapperPlayer>
                    <ImgPlayer>
                        <motion.img
                            src={imagem} alt={nome}
                            layoutId={imagem}
                            transition={{ duration: 0.5 }}
                        />                        
                    </ImgPlayer>
                    <ContentPlayer>
                        <ButtonActionsPlayer>
                            <ButtonTrophy type="button" onClick={() =>setModalVisible(true)}>SALA DE TROFÉUS</ButtonTrophy>
                            <ButtonBackHome type="button" onClick={() => router.push('/')}>
                                X
                            </ButtonBackHome>
                        </ButtonActionsPlayer>
                        <DataPlayer>
                            <span>Nome: {nome}</span>
                            <span>Posição: {posicao}</span>
                            <span>País: {nacionalidade.nome}</span>
                            <div>
                                <img alt="Bola de Ouro" src="/player/ballon-door.png" />
                                <span>{melhorDoMundo}</span>
                            </div>
                        </DataPlayer>
                    </ContentPlayer>
                </PlayerStyles>
                :
                ''
            }
        </ContainerPlayer>
    )
}