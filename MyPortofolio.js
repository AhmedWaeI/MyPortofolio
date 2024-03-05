const intern= document.querySelector(".Intern");
const image= document.querySelector(".Experience .Intern img");
const skills= document.querySelector(".Skills .containerskills");
const header= document.querySelector(".skills h2");

intern.addEventListener("mouseover", function(){
    console.log("Mouse Over");
    image.src="Images/noun-machine-learningdiff-2010152.svg"
});
intern.addEventListener("mouseout", function(){
    console.log("Mouse Out");
    image.src="Images/noun-machine-learning-2010152.svg"
});
skills.addEventListener("mouseover", function(){
    header.style.color= "#58E8C8";
})
skills.addEventListener("mouseout", function(){
    header.style.color= "white";
})