//File System Module allow work create, read, delete file from OS system
const fs = require('fs');
//create a file
// fs.writeFile('example.txt',"this is an example",'utf8',(err)=>{
//     if(err)
//     //print out the error
//         console.log(err);
//     else{
//         console.log('File successfully create');
//         fs.readFile('example.txt','utf8',(err,file)=>{ //this will print out the content
//         //fs.readFile(file want to read, encoding (number), (err,file))
//         //utf8 là hệ chuyển đổi unicode 8-bit, là một bộ mã hóa ký tự
//         //nếu ko có utf8 thì sẽ cho ra một dãy con số buffer chưa được mã hóa
//             if(err)
//                 console.log(err);
//             else
//                 console.log(file);
//         });
//     }      
// });


// fs.rename('example.txt','example2.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('Successfully renamed the file')
// });


// fs.appendFile('example2.txt', 'Some data being appended', (err)=>{
//     if(err)
//         console.log (err);
//     else
//         console.log('Successfully appended data to the file')
// })


fs.unlink('example.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('Successfully delete the file')
})