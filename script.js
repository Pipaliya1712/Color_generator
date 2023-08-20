// function named Getcolour for generate diff color
const getColour = () => {
    const randumNumber = Math.floor(Math.random()*16777215);
    const randumCode = "#" + randumNumber.toString(16);
    document.body.style.backgroundColor= randumCode
    document.getElementById("btn").style.backgroundColor = randumCode
    document.getElementById("text").innerText = randumCode
    navigator.clipboard.writeText(randumCode)
}

// click event and action on it
document.getElementById("btn").addEventListener(
    "click",
    getColour
) 

// initial getColour call
getColour();