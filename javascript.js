console.log("Hi Jason");

const conainer = document.querySelector("div#container");
const height = 220;

const btn = document.querySelector("button");
const input = document.querySelector("input");


btn.addEventListener("click", (event) => {
    console.log(input.value);
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    console.log("done");
    
    makeGrid(input.value, input.value);
});

col = 15;
rows = 15;


function makeGrid(col, rows){
    for(let i = 0; i < col; i++){
        const aCol = document.createElement("div");
        aCol.textContent;
        aCol.classList.add("flexy");
        container.appendChild(aCol);
        for(let i = 0; i < rows; i++){
            const item = document.createElement("div");
            item.style.opacity = 1;
            let paddingStr = "" + (height/col) +"px " + (height/rows) + "px";
            console.log(paddingStr);
            item.style.padding = paddingStr;
            item.addEventListener("mouseenter", (event) => {
                if(item.style.opacity <= 0){
                    item.style.opacity = 1;
                }else{
                    item.style.opacity -= 0.1;
                }
                
                item.style.backgroundColor = "green";
            });
            item.classList.add("item");
            aCol.appendChild(item);
        }
    }
}

makeGrid(15, 15);
