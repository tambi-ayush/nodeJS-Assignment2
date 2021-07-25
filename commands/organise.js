let fs=require("fs");
let path=require("path");
let types={
    media:["mp4","mkv"],
    archieves:["zip","7z","rar","tar","gz","ar","iso"],
    documents:["docx","doc","pdf","xlsx","xls","odt"],
    app:["exe","dmg","pkg","deb"]
}

function organiseFn(src){
     let fileArr=fs.readdirSync(src);
    for(let item in types){
        let pathItem=path.join(src,item);
        fs.mkdirSync(pathItem); //lets first make empty folders
    }            
    for(let i=0;i<fileArr.length;i++){//now iterating each file and getting its extension
                let ext=path.extname(fileArr[i]).substring(1);//now ext will be matched with each object value and put
                for(let item in types){
                for(let k=0;k<types[item].length;k++){
                    if(ext==types[item][k]){
    
                        let adPath=path.join(path.join(src,item),fileArr[i]);
                        fs.copyFileSync(path.join(src,fileArr[i]),adPath);
                    }
                }
            }
          }


}
module.exports={
    organisefxn:organiseFn
}
