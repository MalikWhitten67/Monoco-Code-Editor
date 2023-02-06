var fs = nw.require('fs')
var path  = nw.require('path')
var editor = ace.edit("editor");
var fileexplorer = {
    create: function (path, name) {
        fs.writeFileSync(path + '/' + name, '');
        var element = document.createElement("p");
        element.innerHTML = `${name}`;
        element.id = name
        
        element.onclick = () =>{
             
            fileexplorer.open(path + '/' + name);
            fs.writeFileSync('./name.txt',path + '/' + name)
            editor.setValue(fs.readFileSync(path, + '/' + name, 'utf8'));
           
        }
        if(!document.getElementById(name)){
            document.getElementById("folder").appendChild(element);
        }

    },
    open: function (path) {
        try {
            if(path.endsWith('.html')){
                editor.session.setMode("ace/mode/html");
            }else if(path.endsWith('.css')){
                editor.session.setMode("ace/mode/css");

            }
            else if(path.endsWith('.js')){
                editor.session.setMode("ace/mode/javascript");
            }else if(path.endsWith('.json')){
                editor.session.setMode("ace/mode/json");
            }
            else if(path.endsWith('.py')){
                editor.session.setMode("ace/mode/python");
            } else if(path.endsWith('.txt')){
                editor.session.setMode("ace/mode/text");
            }
            else if(path.endsWith('.md')){
                editor.session.setMode("ace/mode/markdown");
            }else if(path.endsWith('.cpp')){
                editor.session.setMode("ace/mode/c_cpp");
            }
            else if(path.endsWith('.hpp')){
                editor.session.setMode("ace/mode/c_cpp");
            }else if(path.endsWith('.c')){
                editor.session.setMode("ace/mode/c_cpp");
            }else if(path.endsWith('.h')){
                editor.session.setMode("ace/mode/c_cpp");
            }else if(path.endsWith('.java')){
                editor.session.setMode("ace/mode/java");
            }else if(path.endsWith('.cs')){
                editor.session.setMode("ace/mode/csharp");
            }else if(path.endsWith('.php')){
                editor.session.setMode("ace/mode/php");
            }else if(path.endsWith('.rb')){
                editor.session.setMode("ace/mode/ruby");
            }else if(path.endsWith('.go')){
                editor.session.setMode("ace/mode/golang");
            }else if(path.endsWith('.rs')){
                editor.session.setMode("ace/mode/rust");
            }
             
            
            editor.setValue(fs.readFileSync(path,'utf8'));
        } catch (error) {
            swal.fire({
                title: 'Error',

                text: `The file ${path} could not be opened`,
                icon: 'error',
                confirmButtonText: 'Ok'
                
            })
        }
    },
    openfolder: function (path) {
        fs.writeFileSync('./folder.txt',path)
        swal.fire({
            title: 'Do you want to open this folder?',
            text: `The folder ${path} will be opened in your file explorer`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Open Folder',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                try {
             
                    fs.readdir(path, (err, files) => {
                        if (err) {
                            process.exit(1);
                        }
                
                        files.forEach((file, index) => {
                            var element = document.createElement("p");
                            element.innerHTML = `${file}`;
                            element.id = file
                            element.setAttribute('path', path + '/' + file)
                            element.onclick = (event) =>{
                                fileexplorer.open(path + '/' + file);
                                fs.writeFileSync('./name.txt',path + '/' + file)
                              
                                element.onmouseup = (event) =>{
                                    if(event.button == 2){
                                        swal.fire({
                                            title:"Options",
                                            html: `<button id="delete" class="swal2-confirm">Delete</button>
                                            <button id="rename" class="swal2-confirm">rename</button>
                                            `,
                                            showConfirmButton: false,
                                            showCancelButton: true,
                                            cancelButtonText: 'Close'
            
                                        })
                                                 
                                        document.getElementById('delete').onclick = () =>{
                                            try {
                                                fileexplorer.delete(element.getAttribute('path'));
                                            } catch (error) {
                                                alert(error)
                                            }
                                            document.getElementById("folder").removeChild(element);
                                            swal.fire({
                                                title: 'File Deleted',
                                                text: `The file ${file} has been deleted`,
                                                icon: 'success',
                                                confirmButtonText: 'Ok'
                                            });
                                        }
                                        document.getElementById('rename').onclick = () =>{
                                            swal.fire({
                                                title: 'Rename File',
                                                html: `<input type="text" id="name" class="swal2-input" placeholder="name of the file">`,
                                                confirmButtonText: 'Rename File',
                                                focusConfirm: false,
                                                preConfirm: () => {
                                                    const file = Swal.getPopup().querySelector('#name').value
                                                    return { file:file};
                                                }
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    fileexplorer.rename(element.getAttribute('path'), path + '/' + result.value.file);
                                                    element.innerHTML = result.value.file;
                                                    element.id = result.value.file;
                                                    element.setAttribute('path', path + '/' + result.value.file);
                                                    swal.fire({
                                                        title: 'File Renamed',
                                                        text: `The file ${file} has been renamed to ${result.value.file}`,
                                                        icon: 'success',
                                                        confirmButtonText: 'Ok'
                                                    });
                                                }
                                            });
                                        }
                                    } 
                                    
                                }
                                
                            }
                            if(document.getElementById("folder").contains(element)){
                               
                            }else{
                                if(!document.getElementById(file)){
                                    document.getElementById("folder").appendChild(element);
        
                                }
                            }
                            
                           
    
                        });
                    });
            } catch (error) {
                swal.fire({
                    title: 'Error',
                    text: `The folder ${path} could not be opened`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            } 
            }else if(result.isDismissed){
                swal.fire({
                    title: 'Cancelled',
                    text: `The folder ${path} was not opened`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }
        })
        
    },
    delete: function (path, name) {
        try {
            fs.unlink(path + name);
        } catch (error) {
            swal.fire('error', `${error}`, 'error');
        }
    },
    rename: function (path,newname) {
        fs.rename(path, newname,)
        

    },

}

// Path: src\components\fileexplorer.js


// creating a new file
document.getElementById('createfile').onclick = () => {
    Swal.fire({
        title: 'Create File',
        html: `<input type="text" id="name" class="swal2-input" placeholder="name of the file">
        <input type="file" id="directory" class="swal2-input" webkitdirectory directory multiple="false" placeholder="Password">`,
        confirmButtonText: 'Create File',
        focusConfirm: false,
        preConfirm: () => {
            const file = Swal.getPopup().querySelector('#name').value
            const directoryfirst = Swal.getPopup().querySelector('#directory').files[0].path
            const directory = path.dirname(directoryfirst);
            return { file:file, directory: directory };
        }
    }).then((result) => {
        if (result.value) {
            fileexplorer.create(result.value.directory, result.value.file);
        }
        Swal.fire({
            title: 'File Created',
            text: `The file ${result.value.file} has been created in ${result.value.directory}`,
            icon: 'success',
            confirmButtonText: 'Ok'

        });
    });
};

// opening files
document.getElementById('openfile').onclick = () =>{
    swal.fire({
        title: 'Open File',
        html: `
        
        <input  type="file" id="name" class="swal2-input">`,
        preConfirm: () => {
            const file = Swal.getPopup().querySelector('#name').files[0].path
            const filename = path.basename(file);
            return { file:file, filename: filename};
        }
    })
    
    .then((result) => {
        Swal.fire({
            title: 'File Opened',
            text: `The file ${result.value.file} has been opened`,
            icon: 'success',
            confirmButtonText: 'Ok'

        });
        fileexplorer.open(result.value.file);

    })
}

document.getElementById('openfolder').onclick = () =>{
    swal.fire({
        title: 'Open Folder',
        html: `<input type="file" id="name" class="swal2-input" webkitdirectory directory multiple="false">`,
        preConfirm: () => {
            const file = Swal.getPopup().querySelector('#name').files[0].path
            return { file:file};
        }
    })
    
    .then((result) => {
        const file = result.value.file;
        const folder = path.dirname(result.value.file)
    
        Swal.fire({
            title: 'Folder Opened',
            text: `The folder ${folder} has been opened`,
            icon: 'success',
            confirmButtonText: 'Ok'
        });
        fileexplorer.openfolder(folder);

    })
}

if(fs.existsSync('./folder.txt')){
    swal.fire({
        icon: 'question',
        title: 'session found',
        text: 'Do you want to open the last opened folder?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            var folder = fs.readFileSync('./folder.txt', 'utf-8');
            var files = fs.readdirSync(folder);
            files.forEach(file => {
                var li = document.createElement('p');
                li.innerHTML = file;
                li.setAttribute('class', 'file');
                li.setAttribute('id', file);
                li.setAttribute('onclick', 'openfile(this.id)')
                
                document.getElementById('folder').appendChild(li);
                li.onclick  = () =>{
                    fileexplorer.open(folder + '/' + file);
                    fs.writeFileSync('./name.txt',folder + '/' + file)
                    fs.writeFileSync('./folder.txt', folder)
                }
            });
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })
   }
   // save file
window.onkeyup = function(e) {
    if(e.ctrlKey && e.key == 's') {
        var file = fs.readFileSync('./name.txt', 'utf-8');
        fs.writeFile(file, editor.getValue())
    }
}