alert("A continuación se procederá a jugar CACHIPÚN")

let solicitudJugadas = prompt("¿Cuantas veces desea jugar contra la maquina?")

if (isNaN(solicitudJugadas)) {
    alert("El dato ingresado no es un número")
} else {
    let nroJugadas = parseInt(solicitudJugadas)
    if (nroJugadas > 0) {
        jugadas(nroJugadas)
    } else {
        alert("No se pueden hacer jugadas menor o igual a 0")
    }
}


function jugadas(nroJugadas) {
    let jugadaMaquina = 0
    let seleccionHumano
    let jugadaHumano

    for (let index = 1; index <= nroJugadas; index++) {
        alert("A continuación seleccione una opción para continuar")
        seleccionHumano = prompt("1 Pierdra, 2 Papel, 3 Tijera")
        jugadaHumano = parseInt(seleccionHumano)

        jugadaMaquina = Math.floor(Math.random() * 3)

        switch (jugadaMaquina) {
            case 0:
                if (jugadaHumano == 2) {
                    alert("Ha ganado esta ronda, la maquina usó piedra")
                } else if (jugadaHumano == 1) {
                    alert("Han empatado")
                } else {
                    alert(`Ha ganado la Maquina usando piedra`)
                }
                break;

            case 1:
                if (jugadaHumano == 3) {
                    alert("Ha ganado esta ronda, la maquina usó papel")
                } else if (jugadaHumano == 2) {
                    alert("Han empatado")
                } else {
                    alert(`Ha ganado la Maquina usando papel`)
                }
                break;

            case 2:
                if (jugadaHumano == 1) {
                    alert("Ha ganado esta ronda, la maquina usó tijeras")
                } else if (jugadaHumano == 3) {
                    alert("Han empatado")
                } else {
                    alert(`Ha ganado la Maquina usando tijeras`)
                }
                break;

            default:
                alert(`La maquina sacó ${jugadaMaquina}`)
                break;
        }

        jugadaMaquina = 0

    }
}