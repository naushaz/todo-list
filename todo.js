//todo list
let input=document.querySelector("input");
let button=document.querySelector("button");
let ul=document.querySelector("ul");


button.addEventListener("click",()=>{
    let item=document.createElement("li");
    item.innerText=input.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);

    ul.appendChild(item);
    console.log("clicked");
    console.log(input.value);
    input.value="";
});

//event delegation is used here.

ul.addEventListener("click",function(event){
    console.log(event.target);//target means in the the one which we click.
    console.dir(event.target);
    console.log(event.target.nodeName);
    if(event.target.nodeName=="BUTTON"){//button should be in the caps.
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});
 //the below code doesn't work for all the todo's.


// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         console.log("clocked");
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();

//     });//doubt here bind(this)
// }
