export class Question {
    constructor(public question: string, public answers: string[]) { }
}

export const QUESTIONS: Question[] = [
    new Question("¿Cuál de estas opciones no es una implementación de estrategia de monetización?", ["Todas son implementaciones de estrategias validas", "Banner publicitario","Niveles especiales", "Reducción de tiempo de espera","Venta de personajes o ítems"]),
    new Question("¿Cuáles de estas opciones no es una estrategia de monetización dentro de los videojuegos?", ["Separación", "Restricción", "Personalización", "Jugabilidad"]),    
    new Question("¿Qué estrategia es la más rápida de implementar y monetizar?", ["Restricción", "Personalización", "Jugabilidad", "Personalización"]),
    new Question("¿Qué estrategia es la ideal para videojuegos casuales?", ["Restricción", "Personalización", "Jugabilidad", "Separación"]),
    new Question("¿Qué estrategia se utiliza en videojuegos que necesitan monetizar muy rápido a sus jugadores antes que dejen de jugar?", ["Restricción", "Personalización", "Jugabilidad", "Separación"]),
    new Question("La utilización de la publicidad voluntaria como \"pago\" se da en la estrategia... ", ["Restricción", "Personalización", "Jugabilidad", "Separación"]),
    new Question("Los cosméticos en los videojuegos, ¿A que estrategia pertenecen?", ["Personalización", "Restricción", "Jugabilidad", "Separación"]),
    new Question("¿Qué estrategia aporta buenos ingresos y es muy atractiva aunque es larga y difícil y en definitiva se necesita mucho tiempo?", ["Personalización", "Restricción", "Jugabilidad", "Separación"]),
    new Question("¿Qué estrategia de monetización agrega nuevas posibilidades y combinaciones de juego?", ["Jugabilidad", "Restricción", "Personalización", "Separación"]),
    new Question("¿Qué estrategia es mas difícil de aplicar por que afecta las mecánicas del videojuego?", ["Jugabilidad", "Restricción", "Personalización", "Separación"]),
    new Question("¿Qué estrategia de monetización le permite al jugador disfrutar de nuevos escenarios,mapas, objetos, etc.", ["Jugabilidad", "Restricción", "Personalización", "Separación"]),
    new Question("¿Hay alguna estrategia mejor que otra?", ["No, todas tienen sus ventajas y desventajas", "Si, la Separación es la mas importante", "Si, la restricción ya que no se pueden combinar diferentes estrategias", "Si pero depende del tipo de videojuego"])
];