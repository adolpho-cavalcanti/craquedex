import Nation from "./Nation"
import Title from "./Title"

export default interface Player {
    nome: string
    posicao: string
    imagem: string
    nacionalidade?: Nation
    melhorDoMundo?: number
    titulos?: Title
    video?: string
    // clicou?: (e: any) => void
}