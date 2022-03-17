import dynamic from "next/dynamic";
import { createContext, ReactNode, useEffect, useState } from 'react';
import Loading from "../components/Loading";
// import ModalSalaDeTrofeu from '../components/ModalSalaDeTrofeu';
import Player from '../interfaces/Player';

interface ModalSalaDeTrofeuProviderData {
    modalVisible: boolean;
    setModalVisible: (value: boolean) => void;
}

interface ModalSalaDeTrofeuProviderProps {
    children: ReactNode;
    valor: Player;
}

const ModalSalaDeTrofeu = dynamic(
    () => import("../components/ModalSalaDeTrofeu"), 
    { loading: () => <Loading mensagem="Carregando..." />, ssr: true }
);

export const ModalSalaDeTrofeuContext = createContext({} as ModalSalaDeTrofeuProviderData);

export function ModalSalaDeTrofeuProvider({children, valor}: ModalSalaDeTrofeuProviderProps) {

    const [modalVisible, setModalVisible] = useState(false);

    return(
        <ModalSalaDeTrofeuContext.Provider value={{
            modalVisible,
            setModalVisible
        }}>
            {children}
            {modalVisible &&
                <ModalSalaDeTrofeu valorPlayer={valor}/> 
            }

        </ModalSalaDeTrofeuContext.Provider>
    );
}