// Je veux créer une calculatrice //
// 1. je veux récupérer chaque bouton (querySelector)
// 2. J'ajoute un écouteur d'évènement sur button1
// 3. lorsque l'évènement est activé, dans une callback, j'affiche dans la console sa valeur
// 4. faire pareil pour toutes les touches et vérifier que je récupère bien toutes les valeurs
// 5. Récupérer l'élément HTML "screen"
// 6. Lorsque je clique sur une touche, afficher sa valeur dans l'élément HTML "screen"

// Déclaration des variables contenant les éléments HTML
const num1 = document.querySelector("#button1");
const num2 = document.querySelector("#button2");
const num3 = document.querySelector("#button3");
const num4 = document.querySelector("#button4");
const num5 = document.querySelector("#button5");
const num6 = document.querySelector("#button6");
const num7 = document.querySelector("#button7");
const num8 = document.querySelector("#button8");
const num9 = document.querySelector("#button9");
const num0 = document.querySelector("#button0");
const buttonPoint = document.querySelector("#button_point");
const buttonCancel = document.querySelector("#button_cancel");
const buttonPlus = document.querySelector("#button_plus");
const buttonMinus = document.querySelector("#button_minus");
const buttonCross = document.querySelector("#button_cross");
const buttonSlash = document.querySelector("#button_slash");
const buttonEqual = document.querySelector("#button_equal");
const screen = document.querySelector(".screen");


// Déclaration des variables contenant les éléments du calcul
let firstNumber;  // je déclare une variable sans valeur qui contiendra le premier chiffre du calcul
let secondNumber; // je déclare une variable sans valeur qui contiendra le premier chiffre du calcul
let operator;     // je déclare une variable sans valeur qui contiendra l'opérateur du calcul
let result;       // je déclare une variable sans valeur qui contiendra le resultat du calcul


const calculate = (numberOne, numberTwo, operator) => {

    numberOne = parseFloat(numberOne); // la fonction parseInt() permet de convertir une string et s'écrit ainsi parseInt("98") => 98
    numberTwo = parseFloat(numberTwo); // La fonction parseFloat() fait pareil en prenant en compte les chiffres à virugule

    if(operator === "+"){
        return numberOne + numberTwo;
    } 
    else if(operator === "-"){
        return numberOne - numberTwo;
    } 
    else if(operator === "x"){
        return numberOne * numberTwo;
    } 
    else if(operator === "/"){
        return numberOne / numberTwo;
    }    
};

const resetScreenAfterResult = () => {
    if(result){
        screen.innerHTML = "";
    }
    result = null;
}

num1.addEventListener("click", () => {
    resetScreenAfterResult();
    screen.innerHTML = screen.innerHTML + num1.innerHTML;
});

num2.addEventListener("click", () => {
    resetScreenAfterResult();
    screen.innerHTML = screen.innerHTML + num2.innerHTML;    
});

num3.addEventListener("click", () => {
    resetScreenAfterResult();
    screen.innerHTML = screen.innerHTML + num3.innerHTML;
});

num4.addEventListener("click", () => {
    resetScreenAfterResult();
    screen.innerHTML = screen.innerHTML + num4.innerHTML;    
    
});

num5.addEventListener("click", () => {
    resetScreenAfterResult();
    screen.innerHTML = screen.innerHTML + num5.innerHTML;
});

num6.addEventListener("click", () => {
    resetScreenAfterResult();
    screen.innerHTML = screen.innerHTML + num6.innerHTML;
});

num7.addEventListener("click", () => {
    resetScreenAfterResult();
    screen.innerHTML = screen.innerHTML + num7.innerHTML;
});

num8.addEventListener("click", () => {
    resetScreenAfterResult();
    screen.innerHTML = screen.innerHTML + num8.innerHTML;
});

num9.addEventListener("click", () => {
    resetScreenAfterResult();
    screen.innerHTML = screen.innerHTML + num9.innerHTML;
});

num0.addEventListener("click", () => {
    resetScreenAfterResult();
    screen.innerHTML = screen.innerHTML + num0.innerHTML;
});

buttonPoint.addEventListener("click", () => {
    resetScreenAfterResult();
    screen.innerHTML = screen.innerHTML + buttonPoint.innerHTML;
});

buttonCancel.addEventListener("click", () => {
    screen.innerHTML = "";
});

buttonPlus.addEventListener("click", () => {
    operator = buttonPlus.innerHTML;
    firstNumber = screen.innerHTML; 
    screen.innerHTML = ""; 

});

buttonMinus.addEventListener("click", () => {
    operator = buttonMinus.innerHTML;
    firstNumber = screen.innerHTML;
    screen.innerHTML = ""; 
});

buttonCross.addEventListener("click", () => {
    operator = buttonCross.innerHTML;
    firstNumber = screen.innerHTML;
    screen.innerHTML = ""; 
});

buttonSlash.addEventListener("click", () => {
    operator = buttonSlash.innerHTML;
    firstNumber = screen.innerHTML;
    screen.innerHTML = ""; 
});

buttonEqual.addEventListener("click", () => {
    secondNumber = screen.innerHTML;    
    result = calculate(firstNumber, secondNumber, operator);
    screen.innerHTML = result;
});