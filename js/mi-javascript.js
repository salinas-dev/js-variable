function saludar2(){
    //Declara variables : let
    //Input Dialog: prompt
    let nombre = prompt("Ingresa tu nombre");
    alert("Bienvenido: " + nombre + " a JavaScript");
}

function variables(){
    //Ya tipea el dato en JavaScript(no es necesario ingresar el tipo de datos).
    //Hay 2 tipos de declarar variables y 1 para constantes.
    /*
    1.- Utilizando var(no recomendable en la actualidad).
        var permite una declaración de variables.

        Example:
        Aqui solo imprimira la segunda variable y valor 1200.

            var salario = 15000
            var salario = 1200
            alert("Variable var = " + salario);
    */
    var salario = 15000
    var salario = 1200
    alert("Variable var = " + salario);





    /*
    2.- Utilizando let.
        let no permite redeclaraciones de variables 
        y viven o su alcance solo en un scope(es un bloque de instrucciones entre llaves).

            Example:
            Error:
                let edad = 17;
                let edad = 18;



            Vive en otro scope y no marca ellos porque esta en otro  
               let edad = 17;
                if(true){
                    let edad = 18;
                }      



            Primero 18 despues 17
            Como es un if declara primero 18 y despues 17
                    let edad = 17;
                    if(true){
                        let edad = 18;
                        console.log("Edad = " + edad);
                    }
                    console.log("Edad = " + edad);
    */
    let edad = 17;
    if(true){
        let edad = 18;
        console.log("Edad = " + edad);
    }
    console.log("Edad = " + edad);
     
    



    /*
    3.- const define constantes(el valor No cambian).
        Para objetos los valores si pueden cambiar.

            Example:
            Error:
                const PI = 3.1416;
                PI = 3.14;
                console.log(PI);


            Correcto:
                const PI = 3.1416;
                console.log(PI);

    */
    const PI = 3.1416;
    console.log(PI);
    
    //Array de objetos
    const superHeroes = [
        {nombre: "Iron Man"},
        {nombre: "Spider Man"},
        {nombre: "Thor"}
    ]
    console.log(superHeroes);
    superHeroes.push({nombre: "Shrek"});
    console.log(superHeroes);
}