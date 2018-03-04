export class Question {
    constructor(public question: string, public answers: string[]) { }
}

export const QUESTIONS: Question[] = [
    new Question("Cual de estas opciones no es una implementacion de estrategia de monetizacion?", ["Todas son implementaciones de estrategias validas", "Banner publicitario","Niveles especiales", "Reduccion de tiempo de espera","Venta de personajes o items"]),
    new Question("Cuales de estas opciones no es una estrategia de monetizacion dentro de los videojuegos?", ["Separacion", "Restriccion", "Personalizacion", "Jugabilidad"]),    
    new Question("Que estrategia es la mas rapida de implementar y monetizar?", ["Restriccion", "Personalizacion", "Jugabilidad", "Separacion"]),
    new Question("Que estrategia es la ideal para videojuegos casuales?", ["Restriccion", "Personalizacion", "Jugabilidad", "Separacion"]),
    new Question("Que estrategia se utiliza en videojuegos que necesitan monetizar muy rapido a sus jugadores antes que dejen de jugar?", ["Restriccion", "Personalizacion", "Jugabilidad", "Separacion"]),
    new Question("La utilizacion de la publicidad voluntaria como \"pago\" se da en la estrategia... ", ["Restriccion", "Personalizacion", "Jugabilidad", "Separacion"]),
    new Question("Los cosmeticos en los videojuegos a que estrategia pertenecen?", ["Personalizacion", "Restriccion", "Jugabilidad", "Separacion"]),
    new Question("Que estrategia aporta buenos ingresos y es muy atractiva aunque es larga y dificil y en definitiva se necesita mucho tiempo?", ["Personalizacion", "Restriccion", "Jugabilidad", "Separacion"]),
    new Question("Que estrategia de monetizacion agrega nuevas posibilidades y combinaciones de juego?", ["Jugabilidad", "Restriccion", "Personalizacion", "Separacion"]),
    new Question("Que estrategia es mas dificil de aplicar por que afecta las mecanicas del videojuego?", ["Jugabilidad", "Restriccion", "Personalizacion", "Separacion"]),
    new Question("Que estrategia de monetizacion le permite al jugador disfrutar de nuevos escenarios,mapas, objetos, etc.", ["Jugabilidad", "Restriccion", "Personalizacion", "Separacion"]),
    new Question("Hay alguna estrategia mejor que otra?", ["No, todas tienen sus ventajas y desventajas", "Si, la separacion es la mas importante", "Si, la restriccion ya que no se pueden combinar diferentes estrategias", "Si pero depende del tipo de videojuego"])
];