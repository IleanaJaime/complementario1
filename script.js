// traductor de animales en español al ingles //

let animalEsp
let test=""

do{
    animalEsp=prompt("Ingrese el animal que desea traducir al Ingles")
} while(animalEsp==test)

switch(animalEsp){
    case"vaca":
    alert("cow");
    break
    case"gato":
    alert("cat");
    break
    case"perro":
    alert("dog");
    break
    case"rana":
    alert("frog");
    break
    case"pez":
    alert("fish");
    break
    case"caballo":
    alert("horse");
    break
    case"obeja":
    alert("sheep");
    break
    default:
        alert("Lo siento, ese animal aun no esta traducido")
}