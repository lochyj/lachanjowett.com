let start = false;
let el = document.getElementById("root");
let el_start = document.getElementById("start");
let Console_input = document.getElementById("console_input");
let Console = document.getElementById("console");
let bottom = document.getElementById("bottom");

async function sleep(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
}

let Cvalue = `<div id="console"></div>`;
let CIvalue = '<input id="console_input" type="text" placeholder="Type a command...">';

async function Start() {
    if (start == false) {
        console.log("Start");
        // remove el_start
        //el_start.outerHTML = "";
        //bottom.innerHTML = CIvalue;
    }
}

function log(info, cmd) {
    let text = `<span class="cmd-start">>  ${cmd}</span><br><span class="item"><span class="cmd-start">></span>  ${info}</span><br>`;
    let e = Console.innerHTML + text;
    Console.innerHTML = e;
}

function runCMD(cmd) {
    cmd = cmd.toLowerCase();
    if (cmd == "github") {
        console.log(cmd);
        log('<a href="https://github.com/lochyj">https://github.com/lochyj</a>', cmd);
    } else if (cmd == "sites") {
        console.log(cmd);
    } else if (cmd == "help") {
        console.log(cmd);
    } else if (cmd == "github") {
        console.log(cmd);
    } else {
        console.log(`${cmd} is not a valid command`);
    }
}


// get space bar pressed
document.addEventListener("keydown", function(event) {
    if (event.key == " ") {
        Start();
        start = true
    }
    if (event.key == "Enter") {
        let command = Console_input.value;
        Console_input.value = "";
        if (command != "") {
            runCMD(command);
        } else {
            console.log("Please enter a command");
        }
    }
});