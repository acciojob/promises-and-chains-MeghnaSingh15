//your JS code here. If required.
let btn = document.getElementById("btn");
btn.addEventListener("click", function() {
	let name = document.getElementById("name").value;
	let age = document.getElementById("age").value;
	let promise = new Promise((resolve,reject) => {
			if(age >= 18){
				setTimeout(() => {
					resolve(`Welcome ${name}. You can vote.`);
			},4000);
			}
		else{
			reject(`Oh sorry ${name}. You aren't old enough.`);
        }
    });
    
    promise.then(message => {
        alert(message);
    }).catch(message => {
        alert(message);
    });
});
