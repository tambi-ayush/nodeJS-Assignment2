let path=require("path");
let fs=require("fs");

function fn(){
    console.log("list of all the commands:");
}
let cm1="node main.js tree ";
let cm2="node main.js organise ";
let cm3="node main.js help ";
module.exports={
    fxn:fn,
    v1:cm1,
    v2:cm2,
    v3:cm3
}