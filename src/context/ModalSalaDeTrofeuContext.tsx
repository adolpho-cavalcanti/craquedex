import { createContext, ReactNode, useEffect, useState } from 'react';
import ModalSalaDeTrofeu from '../components/ModalSalaDeTrofeu';
import Player from '../interfaces/Player';

interface ModalSalaDeTrofeuProviderData {
    modalVisible: boolean;
    setModalVisible: (value: boolean) => void;
    // handleCloseModal: () => void; 
}

interface ModalSalaDeTrofeuProviderProps {
    children: ReactNode;
    valor: Player;
}

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