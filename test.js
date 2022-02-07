let start = false;
let el = document.getElementById("root");
let el_start = document.getElementById("start");

async function sleep(ms){
    await new Promise(resolve => setTimeout(resolve, ms));
}

async function Start(){
    if (start == false){
        console.log("Start");
        // remove el_start
        el_start.outerHTML = "";
    }
}

// get space bar pressed
document.addEventListener("keydown", function(event) {
    if(event.key == " ") {
        Start();
        start = true
    }
});