import { useEffect, useState } from "react";
import { BarraDePesquisa } from "../../styles/pages/Home";

export default function InputSearch({ onSearch }) {
    const [search, setSearch] = useState('');

    useEffect(() => {
        onSearch(search);
    }, [search]);

    return (
        <BarraDePesquisa>
            <input 
                type="text"
                placeholder="Procurar a Lenda..." 
                id="playerSearch"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </BarraDePesquisa>
    )
}