
let helpObj=require("./commands/help");
let organiseObj=require("./commands/organise");
let treeObj=require("./commands/tree");

let inputArr=process.argv
let commandType=inputArr[2];
let pathvalue=inputArr[3];
if(commandType=="tree")
treeObj.fxn(pathvalue);

else if(commandType=="organise")
organiseObj.organisefxn(pathvalue);

else{
    helpObj.fxn();
    console.log(helpObj.v1+pathvalue);
    console.log(helpObj.v2+pathvalue);
    console.log(helpObj.v3+pathvalue);
}
