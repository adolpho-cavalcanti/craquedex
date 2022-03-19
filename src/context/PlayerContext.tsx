import { createContext, ReactNode, useEffect, useState } from 'react';

interface ModalSalaDeTrofeuProviderProps {
    children: ReactNode;
}


export const PlayerContext = createContext('');// ModalSalaDeTrofeuProviderData);

export function ModalSalaDeTrofeuProvider({children}: ModalSalaDeTrofeuProviderProps) {

    const [search, setSearch] = useState('');

    function quandoEscrever(texto) {
        setSearch(texto);
    }

    return(
        <PlayerContext.Provider value={''}>
            {children}
        </PlayerContext.Provider>
    );
}