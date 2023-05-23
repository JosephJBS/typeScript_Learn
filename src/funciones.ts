//FUNCIONES

function suma(a: number, b: number) {
    let suma = a + b
    console.log(suma)
}


/**
 * 
 * @param nombre varibale opcional 
 */
function saludar(nombre: string = "Joseph") {
    console.log(`Hola ${nombre}`)
}

saludar() // Hola Joseph
saludar("Paola") // Hola paola


/**
 * 
 * @param nombre otra forma de declarar una funcion con varible opcional
 */
function despedida(nombre?: string) {
    if (nombre) {
        console.log(`Adios ${nombre}`)
    } else {
        console.log("Adios")
    }
}

function variosTipos(a: string | number) {
    (typeof (a) === "string") ? console.log("a es un string") : console.log("a es un numero")
}


/**
 * 
 * @param nombre 
 * @param apellido 
 * @returns Se puede definir que tipo de valor retornara
 */
function ejemploReturn(nombre: string, apellido: string): string {
    return `${nombre}${apellido}`
}

/**
 *  
* @param nombres es una lista de nombres de string
*/

function ejemploMultipleParams(...nombres: string[]): void {
    nombres.forEach((nombre) => {
        console.log(nombre)
    })
}

ejemploMultipleParams("Martín");
ejemploMultipleParams("Martin", "Pepe", "Juan", "Alba");

const lista = ["Alberto", "Sandra"]
ejemploMultipleParams(...lista)

function ejemploParamLista(nombres: string[]) {
    nombres.forEach((nombre) => {
        console.log(nombre)
    })
}
ejemploParamLista(lista)


//ARROW Functions
type Empleado = {
    nombre: string
    apellidos: string
    edad: number
}

let empleadoJoseph: Empleado = {
    nombre: "Joseph",
    apellidos: "Bellido Suica",
    edad: 23
}

const mostrarEmpleado = (empleado: Empleado) => `${empleado.nombre} tiene ${empleado.edad}`

//llamamos la funcion 
mostrarEmpleado(empleadoJoseph)


const datosEmpleado = (empleado: Empleado): string => {
    if (empleado.edad > 70) {
        return `Empleado ${empleado.nombre} está en edad de jubilación`
    } else {
        return `Empleado ${empleado.nombre} está en edad laboral`
    }
}

const obtenerSalario = (empleado: Empleado, cobrar: () => string) => {
    if (empleado.edad > 70) {
        return
    } else {
        cobrar() // callback a ejecutar
    }
}

const cobrarEmpleado = (empleado: Empleado) => {
    console.log(`${empleado.nombre} cobra su salario`);
}

obtenerSalario(empleadoJoseph, () => 'Cobrar Martín');


//FUNCIONES ASINCRONAS  

async function ejemploAsync(): Promise<string> {
    await console.log("Tarea a completar antes de seguir con la secuencia de instrucciones")
    console.log("Tarea completada")
    return "Completado"
}

ejemploAsync().then((respuesta) => {
    console.log("Respuesta", respuesta)
}).catch((error) => {
    console.log("Ha habido un error", error)
}).finally(() => "Finalizo")


//GENERADORES

function* ejemploGenerator() {
    // yield --> para emitir valores

    let index = 0;
    while (index < 5) {
        yield index++
    }
}
// Se guarda la funcion generadora en una variable

let generadora = ejemploGenerator()
//Accedemos a los valores generados

console.log (generadora.next().value) // 0
console.log (generadora.next().value) // 1
console.log (generadora.next().value) // 2
console.log (generadora.next().value) // 3


//FUNCION WORKER

function* watcher(valor: number){
    yield valor;                // emite el valor inicial
    yield* worker(valor)        // llamamos a las emisiones del worker
    yield valor + 4             // emitimos el valor final  + 4  
}

function* worker(valor: number){
    yield valor + 1
    yield valor + 2
    yield valor + 3 
}

let generatorSaga = watcher(0)

console.log(generatorSaga.next().value)     // 0 (lo emite el )
console.log(generatorSaga.next().value)     // 1 (lo emite el )
console.log(generatorSaga.next().value)     // 2 (lo emite el )
console.log(generatorSaga.next().value)     // 3 (lo emite el )
console.log(generatorSaga.next().value)     // 4 (lo emite el )