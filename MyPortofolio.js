const intern= document.querySelector(".Intern");
const image= document.querySelector(".Experience .Intern img");

intern.addEventListener("mouseover", function(){
    console.log("Mouse Over");
    image.src="Images/noun-machine-learningdiff-2010152.svg"
});
intern.addEventListener("mouseout", function(){
    console.log("Mouse Out");
    image.src="Images/noun-machine-learning-2010152.svg"
});