import Nation from "./Nation"
import Title from "./Title"

export default interface Player {
    _id: string
    nome: string
    posicao: string
    imagem: string
    nacionalidade?: string
    melhorDoMundo?: number
    titulos?: Title[]
    video?: string
}