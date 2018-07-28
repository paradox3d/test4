 let receiveBtn = document.getElementById("receive"),
     modal = document.querySelector(".modal"),
     close = document.querySelector(".close"),
     nameInput = document.getElementsByClassName("contactform_name")[0],
     text = document.getElementsByName("message")[0];



receiveBtn.addEventListener("click", function() {
	modal.style.display = "block";
});

close.addEventListener("click",function() {
	modal.style.display = "none";
})

nameInput.addEventListener("input", function() {
	text.value = "Мое имя " + nameInput.value + ". И я хочу спросить: ";

	if (nameInput.value == ""){
		text.value = ""
	}
});

