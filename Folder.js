/*Example 1
const fs = require ('fs');
fs.mkdir('tutorial', (err) =>{
//mkdir = make directory
    if(err)
        console.log(err);
    else{
        //if we run the second time, it will give error bc it's already created
        console.log('Folder successfully created');
        //create file inside the folder
        fs.writeFile('./tutorial/example.txt','123',(err) =>{
            if (err)
                console.log(err);
            else{
                console.log('Successfully created file');
        }
    });
}
});

//To delete the folder, we need to delete the file first, then the folder
//because rmdir used to delete empty folder
fs.unlink('./tutorial/example.txt', (err) => {
    if(err)
        console.log(err);
    else{
        console.log('Successfully deleted the file');
    }
});
fs.rmdir('tutorial',(err) =>{
    if(err)
        console.log(err);
    else{
        console.log('Successfully deleted the folder');
        //if we run the second time, it will give error bc it's already created
    }
});
*/

/*Example 2: If we have folder name example with files 'a.txt' and 'b.txt'
const fs = require ('fs');
fs.readdir ('example', (err,files) => {
    //read the folder examples
    if(err)
        console.log(err);
    else{
        console.log(files);
        for(let file of files){
            fs.unlink('./example/' + file, (err) => {
            if(err)
                console.log(err);
            else{
                console.log('Successfully deleted files');
            }
            });
        }
    }
});
fs.rmdir('example',(err) =>{
    if(err)
        console.log(err);
    else{
        console.log('Successfully deleted the folder');
        //if we run the second time, it will give error bc it's already created
    }
});
*/
