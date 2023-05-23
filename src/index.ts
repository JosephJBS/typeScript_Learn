console.log("hola typescript");
console.log("hola typescript");
console.log("hola typescript");
console.log("hola typescript");

// DECLARACION DE VARIABLES

var name = "Joseph"         //variable global
let email = "jj@git.com"    //varible de ambito local
const PI: number = 3.1416   //dato no modificable
//tipado fuerte a traves del "number" aunque en typescrip el tipado es fuerte por defecto

console.log("hola" + name)
console.log("How are u?", name, "?")
console.log(`Vacation, ${name}`)
console.log(`Email de ${name} es ${email}`)          // comilla invertida 'alt + 96 '             

var aux: any = "Prueba"     //Puede tomar cualquier tipo de dato ":any"
aux = 3

var error                   //Si se declara la variable sin ningun tipado se vuelve ":any" 
error = false



// INSTANCIA DE MULTIPLES VARIABLES

let a: number, b: string, c: boolean;

a = 5
b = "Test"
c = true

//TIPOS MAS COMPLEJOS
let valueList: String[] = ["Lunes", "Martes", "Miercoles"]
let valueList2: (string | number | boolean)[] = ["Hola", 1, false, true]

//ENUMERADORES
enum Estaciones {
    Verano,
    Primavera,
    Otoño,
    Invierno
}

enum Puesto {
    Primero = 1,
    Segundo,
    Tercero
} //AUTO INCREMENTAL


let estadoSrping = Estaciones.Primavera
let place = Puesto.Primero


//INTERFACES

interface Persona {
    nombre: string,
    puesto: Puesto,
    edad: number
}

let personaTest: Persona = {
    nombre: "Joseph",
    puesto: Puesto.Primero,
    edad: 23
}

console.log("Edad de la persona:" + personaTest.edad)

//TYPE
type Producto = {
    precio: number,
    nombre: string
}

let coche: Producto = {
    precio: 15000,
    nombre: "Nissan"
}

let personaList: Persona[] = [
    {
        nombre: "Erika",
        puesto: Puesto.Primero,
        edad: 45
    },
    {
        nombre: "Javier",
        puesto: Puesto.Segundo,
        edad: 10
    },
    {
        nombre: "Paola",
        puesto: Puesto.Tercero,
        edad: 34
    }
]

// FOR CLASICO
for (let index = 0; index < personaList.length; index++) {
    console.log(`Nombre: ${personaList[index].nombre} 
                con edad: ${personaList[index].nombre}`)

}

// FOREACH

personaList.forEach(
    (hermano: Persona) => {
        console.log(`Nombre: ${hermano.nombre} con edad ${hermano.edad}`)
    }
);

//ASIGNACION MULLTIPLE DE VARIABLES

let miPhone = {
    marca: "Huawei",
    color: "Negro",
    precio: 1500
}

//DECLARACION POR ATRIBUTO INDIVIDUAL
let miMarca = miPhone.marca
let miColor = miPhone.color
let miPrecio = miPhone.precio

// ** Factor Spread (Propagación)

//DECLARACIÓN CON FACTOR DE PROPAGACION
let { marca, color, precio } = miPhone;

//EN LISTAS
let listaCompraLunes: string[] = ["Leche", "Patatas"]
let listaCompraMartes: string[] = [...listaCompraLunes, "Pan", "Huevos"];
let listaCompraMiercoles: string[] = ["Carne", "Pescado"]
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles]

//EN OBJETOS
let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "Bearer1283612783"
}

// Cambiar un valor por propagación
let nuevoEstado = {
    ...estadoApp,
    session: 4
}
