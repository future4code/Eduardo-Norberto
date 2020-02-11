type periodoHistoria = {
    nome: string,
    anoInicial: Number,
    anoFinal: Number,
    parametro: string
}

const historia1: periodoHistoria = {
    nome: "Pré-Historia",
    anoInicial: 100000,
    anoFinal: 4001,
    parametro: "AC"
}

const historia2: periodoHistoria = {
    nome: "Idade Antiga",
    anoInicial: 4000,
    anoFinal: 476,
    parametro: "AC"
}
const historia3: periodoHistoria = {
    nome: "Idade Média",
    anoInicial: 477,
    anoFinal: 1453,
    parametro: "DC"
}
const historia4: periodoHistoria = {
    nome: "Idade Moderna",
    anoInicial: 1454,
    anoFinal: 1789,
    parametro: "DC"
}
const historia5: periodoHistoria = {
    nome: "Idade Contemporânea",
    anoInicial: 1790,
    anoFinal: 2020,
    parametro: "DC"
}

const periodos: periodoHistoria[] = [historia1, historia2, historia3, historia4, historia5]

const indicarIdadeHistorica = (ano: Number, parametro?: string) => {
    if (parametro === 'AC') {
        if (ano <= 10000 && ano >= 4001) {
            return "Pré-Historia"
        } else if (ano <= 4000 && ano >= 0) {
            return "Idade Antiga"
        }
    } else if (ano >= 1790) {
        return "Idade Contemporânea"
    } else if (ano <= 1789 && ano >= 1454) {
        return "Idade Moderna"
    } else if (ano <= 1453 && ano >= 477) {
        return "Idade Média"
    } else if (ano <= 477 && ano >= 0) {
        return "Idade Antiga"
    }

}