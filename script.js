//Declaracion de constantes donde seleccionaremos los elementos de html que interactuaran con Javascript
const textArea = document.querySelector(".text-area");//Aqui asignamos el primer elemento de la calse texarea de html a la vaiablre declarada
const message = document.querySelector(".menssage");//Aqui asignamos el primer elemento de la calse message de html a la vaiablre declarada
const copy = document.querySelector(".copy");
copy.style.display = "none"// Ocultamos el elemento copy que hace referencia al botond e copyr en la interfaz grafica


function validateText(){ //Funcion que se encargara de validar el texto cumpla con las normas de ser solo minusculas y sin acentos
    let textwrten= document.querySelector(".text-area").value; // Se declara variabale que tendra el valor(cadena) del text area 
    let validator = textwrten.match(/^[a-z]*$/); // Se crea variable para indicar el texto valido para el encriptador
    //Es muy importante esta parte ya que se esta usando expresiones regualres donde ^[a-z]*$ indica que solo aceptaran valores de la a-z minusculas
    //y el ultimo * es para inidcar que es toda la linea y que los espacios antes y despues del ultimo valor sean contados tambien 

    console.log(validator);
    console.log(!validator);

    if(!validator || validator === 0) {// Operacion logica or para derteminar el uso de los caracteres especiales
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();// Es una rofa de refrescar la pagina, es decir como darle F5 en el navegador
        return true;
    }
}


function btnEncrypt(){//Funcion de encrypt llamada desde el boton del mismo nombre
    
    if(!validateText()) {// Operacion logica que manda a llamar la funcion validar texto para ver que sean caracteres validos
        const encryptedtext = Encrypt(textArea.value) //en caso de ser true se da de alta nnueva variable para texto encriptado que manda a llamar funcion Encrypt y nos regresa el valor encriptado
        message.value = encryptedtext //Se coloca evalor de la variable texto encriptado en el text area que corresponden al resultado de Encrypt la informacion
        message.style.backgroundImage = "none"//Se oculta imagen del muñeco
        textArea.value = "";//Se borra el valor del text area donde se ingreso el primer texto
        copy.style.display = "block" //Se muestra boton copyr en el menu para que el usuario lo visualice
    
    }
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`


function Encrypt(stringencrypt){
    let matrizCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; // Aqui se declara un array multidimencional para este caso de 2x5
    stringencrypt = stringencrypt.toLowerCase() //Esta linea nos convertira todas las letras ingresadas en la variable string encriptada en minusculas

    for(let i = 0; i < matrizCode.length; i++){//For para recorrer toda la matriz (matrizCode.length= tamaño de la matriz)
        if(stringencrypt.includes(matrizCode[i][0])){// Concicion indica que si en la matriz incluye la posision 0,0(seria una e) nos devuelve true y realiza la accion 
            stringencrypt = stringencrypt.replaceAll(matrizCode[i][0], matrizCode[i][1])//Donde aqui nos indica que se remplace la posicion de ejemplo inicial 0,0 por 0,1

        }

    }
    return stringencrypt // Se regresa el valor de varibale utilizada.
}



function btnDesEncrypt(){ // Funcion para decrypt
    const encryptedtext = decrypt(textArea.value)//Se crea variable con el resultado de la funcion decrypt donde se manda llamar esta funcion
    message.value = encryptedtext // se coloca el resultado de la desencriptaicon en el textarea del message
    textArea.value = ""; //Se borra la informacion del text area
    
}


function decrypt(stringdecrypt){ // Funcion decrypt
    let matrizCode = [["i", "imes"],["e", "enter"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; // Aqui se declara un array multidimencional para este caso de 2x5

    for(let i = 0; i < matrizCode.length; i++){// condicion para recorrer el array
        if(stringdecrypt.includes(matrizCode[i][1])){ // Concicion indica que si en la matriz incluye la posision 0,1(seria un enter) nos devuelve true y realiza la accion 
            stringdecrypt = stringdecrypt.replaceAll(matrizCode[i][1] , matrizCode[i][0])//Donde aqui nos indica que se remplace la posicion de ejemplo inicial 0,1 por 0,0

        }

    }
    return stringdecrypt//Se retona el valor de la variable utilizada
}


function clipboard(){ //Funcion copyr
    message.select();//Se selecciona el elemento que este en el message
    navigator.clipboard.writeText(message.value) // Se copy a portapapeles
    message.value = "";// Se elimina el message copiado
    alert("Texto Copiado")//Se manda un message de texto copiado.
}