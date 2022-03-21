import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ModalSalaDeTrofeuContext } from "../../context/ModalSalaDeTrofeuContext";
import { ButtonActionsPlayer, ButtonBackHome, ButtonTrophy, CirclePlayer, CircleWrapperPlayer, ContainerPlayer, ContentPlayer, DataPlayer, ImgPlayer, PlayerStyles } from "../../styles/components/PerfilPlayer";
import PowerSkill from "../PowerSkill";

export default function PerfilPlayer() {

    const { modalVisible, setModalVisible, player } = useContext(ModalSalaDeTrofeuContext);
    const router = useRouter();

    const { imagem, nome, posicao, nacionalidade, melhorDoMundo  } = player;

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
                            <ButtonTrophy type="button" onClick={() =>setModalVisible(true)}>TROFÉUS</ButtonTrophy>
                            <ButtonBackHome type="button" onClick={() => router.push('/')}>
                                X
                            </ButtonBackHome>
                        </ButtonActionsPlayer>
                        <DataPlayer>
                            <section>
                                <span>Nome: {nome}</span>
                                <span>Posição: {posicao}</span>
                                <span>País: {nacionalidade.nome}</span>
                                <div>
                                    <img alt="Bola de Ouro" src="/player/ballon-door.png" />
                                    <span>{melhorDoMundo}</span>
                                </div>
                            </section>
                            <section>
                                <ul>
                                    <li>Pontos por Conquistas</li>
                                    <li>Copa do Mundo: 10</li>
                                    <li>Champions League: 8</li>
                                    <li>Libertadores: 8</li>
                                    <li>Ballon d'Or: 5</li>
                                </ul>
                                <PowerSkill 
                                    playerSkill={player}
                                />
                            </section>
                        </DataPlayer>
                    </ContentPlayer>
                </PlayerStyles>
                :
                ''
            }
        </ContainerPlayer>
    )
}