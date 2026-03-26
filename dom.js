// document.writeln("hello");

function result(){
    // take use input and display in h2 heading
    let inputData=document.getElementById("inputText").value;
    document.getElementById('text').textContent=inputData;

    // valid age for vote casting!..
    if(inputData>=18){
        alert("Valid Data");
    }
    else{
        alert("not valid");
    }

    let changeColor=document.getElementById('text');
    changeColor.style.color="yellow";

    let bodyColor=document.getElementsByTagName('body')[0];
    bodyColor.style.backgroundColor="brown";
}




// for making disco
let para=document.getElementById('paratext');      
function changetextColor(){
    para.style.backgroundColor="#" + Math.floor(Math.random()*167777)
}
para.addEventListener('mouseover', changetextColor);


 