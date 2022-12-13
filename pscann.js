const portscanner = require("portscanner")
const readline = require("readline")
const execSync = require("child_process").execSync

 console.log(execSync("clear", {encoding: "utf-8"}));

const ports = [20,21,22,23,25,42,45,60,80,88,110,120,130,150,443,445,3306,500,550,600,700,800,2000,3000,4000,5000,6000,7000,8000,8080,9000]

const input = readline.createInterface({
  nput: process.stdin, output: process.stdout})
  console.log("==========================================\n      Port Scann     \n==========================================\n\n");
  input.question("Digite o host: ",
   function(answer){
  const host = answer
   input.close();
  
    for (let p of ports) {
      portscanner.checkPortStatus(p, host).then(status =>{
       console.log(`\nPORTA ${p}  `+status)}).catch(err => console.log(err))
    };
})
