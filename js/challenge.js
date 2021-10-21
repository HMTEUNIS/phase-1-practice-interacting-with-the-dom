const form = document.querySelector("#comment-form");
liker = document.querySelector("#heart")
currentNum = function () {
    parseInt(counterDiv.innerHTML)
}
const pause = document.querySelector("#pause")
buttons = {
    minus,
    plus,
    liker,
    currentNum,
    form}

function pRButton (){
    minus.disabled=
}
pause.addEventListener("click", pRButton())



//set a variable to the location of the value I needed to update

let counterDiv = document.querySelector("#counter")

//reads the innerhtml of cD and parsese it


//make a function that adds 1 to currentNum every second
function updateCounter (){
//assigned a new variable to a parsed value for the counter
 let cN = parseInt(counterDiv.innerHTML)
//took my new variable to add 1 to it and set it back to my original variable
 counterDiv.innerHTML = cN + 1
}
//told it to run every second
setInterval( updateCounter, 1000)


// //make the value decrease by one when the button gets clicked
minus = document.querySelector("#minus")
minus.addEventListener('click', 
function subtractOne () {
    let cNs = parseInt(counterDiv.innerHTML)
    counterDiv.innerHTML = cNs - 1
})


// //now inverse it for the up button
plus = document.querySelector("#plus")
plus.addEventListener('click',
function addOne(){
    let cNa = parseInt(counterDiv.innerHTML)
    counterDiv.innerHTML = cNa + 1
})

//make the liker button add a like to the box on a specific number and log it
//"6 has been logged 1 time"
count = 0
liker.addEventListener('click',
function clockLike (){
    count = count + 1
    node = document.createElement("LI");                 // Create a <li> node
    textnode = document.createTextNode(`${counterDiv.innerHTML} has been liked ${count} times.`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.querySelector("body ul").appendChild(node);     // Append <li> to <ul> with
 
})
function counterReset () {
    count = 0
}
setInterval( counterReset, 1000)




form.addEventListener("submit", function(event) {
    const input = document.querySelector("#comment-input").value;
    const commentsList = document.querySelector("#list")
    textnode = document.createTextNode(input);         
    commentsList.appendChild(textnode);                             
event.preventDefault();
}, false);
