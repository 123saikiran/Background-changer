let colors=['orange','red','green','blue'];

let back = document.getElementById('click');
function change(){
    let num=Math.floor(Math.random()*4);
    console.log(num);
  document.body.style.background=colors[num];
}
back.addEventListener("click",change);