function myFirstApp (name,age){
	alert("привет меня зовут " + name + " моя первая программа")

	function showSkills() {
		let skills = ['html','css','photoshop'];
		for (var i = 0; i < skills.length; i++) {
			document.write("я владею " +  skills[i]  +  "<br>" );
		}
    }

        showSkills();


        function checkAge () {
         	
         	if (age > 18){

         		alert("все получится")
         	}
         	else {
         		
         		alert("должно получится)")
         	}
         } 
        checkAge();

        function calcPow (num) {

        	console.log(num * num);

        }
        calcPow(5);
    }
        myFirstApp("sasha",32)

      

