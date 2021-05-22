
console.log("Innovation");

function checkDrives2(id){
	console.log(id)
}
checkDrives2(006);

const toggleButton= document.getElementsByClassName("toggle-button")[0]
const navbarLinks= document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener('click',  ()=>{
	navbarLinks.classList.toggle('active')
})

