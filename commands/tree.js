const { Console } = require("console");
let fs=require("fs");
let path=require("path");

function treefn(src){
    let fileArr=fs.readdirSync(src);
    console.log(path.basename(src));
    for(let i=0;i<fileArr.length;i++){
        console.log("   "+"└──"+fileArr[i]);
    }
}
 
 
//├──

module.exports={
    fxn:treefn
}
