
function calc(event){
	event.preventDefault(); // to avoid form submission

	// var height = document.getElementById("height").value;
	// console.log(height);

	var weight = document.querySelector("#weight").value;
	var height = document.querySelector("#height").value;

	weight = parseInt(weight);
	height = parseInt(height);

	
	height /= 100;
	var bmi = weight / (height * height);

	var message;

	if(bmi>= 22 && bmi <= 27){
		message = "<span class='good'>You are in normal health </span>";
	}else if(bmi < 22){
		message = "<span class='thin'>You are thin </span>";
	}else{
		message = "<span class='fat'>You are FAT </span>";
	}
	document.getElementById("result").innerHTML=message;

/*	var home = document.querySelector("#home");
	var result = document.querySelector("#result");

	home.style.display = 'none';
	result.style.display = 'block';

	document.querySelector("#result h2").innerHTML = message;  */

}


/*function back () {
	window.location = "index.html";
} */