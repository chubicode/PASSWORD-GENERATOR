const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];








function generate(){
let password1EL= document.getElementById("password1-el")
password1EL.textContent = ""


for(let i = 0; i < 10; i ++){
let randomPassword = Math.floor(Math.random()*characters.length)
password1EL.textContent += characters[randomPassword]

}
let password2EL= document.getElementById("password2-el")
password2EL.textContent = ""
for(let i = 0; i < 10; i++) {
let randomPassword = Math.floor(Math.random() * characters.length)
password2EL.textContent += characters[randomPassword]

}

}