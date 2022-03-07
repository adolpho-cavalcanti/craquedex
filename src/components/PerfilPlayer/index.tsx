import { useRouter } from "next/router";
import { useContext } from "react";
import { ModalSalaDeTrofeuContext } from "../../context/ModalSalaDeTrofeuContext";
import Player from "../../interfaces/Player";

interface PlayerTrofeuProps {
    valor: Player;
}

export default function PerfilPlayer({valor}: PlayerTrofeuProps) {

    const { setModalVisible } = useContext(ModalSalaDeTrofeuContext);
    const router = useRouter();

    return(
        <div>
            JOGADOR | {valor.nome} - QTD melhor do Mundo:{valor.melhorDoMundo}
            <button type="button" onClick={() =>setModalVisible(true)}>SALA DE TROFÉUS</button>
            <div>
            <button type="button" onClick={() => router.push('/')}>
                Click me
            </button>
            </div>
        </div>
    )
}