class Persona{
    constructor (nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    obtDetalles(){
        return this.nombre + ", " + this.edad + ", " + this.genero;
    }
}

class  Estudiante extends Persona{
    constructor(nombre, edad, genero){
        super(nombre, edad, genero,curso,grupo);
        this.curso;
        this.grupo;
    }

    registrar(){
    }
}

class Profesor extends Persona{
    constructor(nombre, edad, genero, asignatura, nivel){
        super(nombre, edad, genero)
        this.asignatura = asignatura;
        this.nivel = nivel;
    }

    asignar(){};
}