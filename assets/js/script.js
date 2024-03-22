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
    let jugadaMaquina
    let seleccionHumano
    let jugadaHumano

    for (let index = 1; index <= nroJugadas; index++) {
        seleccionHumano = prompt("1 Pierdra, 2 Papel, 3 Tijera")
        jugadaHumano = parseInt(seleccionHumano)

        while (jugadaHumano < 1 && jugadaHumano >3) {
            alert("Debe Elegir entre los numeros 1, 2, 3")
            seleccionHumano = prompt("1 Pierdra, 2 Papel, 3 Tijera")
        }

        jugadaMaquina = Math.floor(Math.random() * 3)

        switch (jugadaMaquina) {
            case 1:
                if (jugadaHumano == 2) {
                    alert()
                }
                break;

            case 2:
            
            break;

            case 3:
            
            break;
        
            default:
                break;
        }

    }
}