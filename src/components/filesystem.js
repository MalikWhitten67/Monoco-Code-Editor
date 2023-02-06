var fs = nw.require('fs')
var path  = nw.require('path')
var editor = ace.edit("editor");

var fileexplorer = {
    create: function (path) {
            fs.writeFileSync(path, '')
            swal.fire({
                title: 'Success',
                text: `The file ${path} was created`,
                icon: 'success',
                confirmButtonText: 'Ok'
            })

           
        
    
    
        
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
            else if(path.endsWith('.jsx')){
                editor.session.setMode("ace/mode/jsx");
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
                            var li = document.createElement("p");
                            li.innerHTML = `${file}`;
                            function set_logo(file){
                                if(file.endsWith('.html')){
                                    li.innerHTML = `<img width="20" style="position:absolute; left:-32%" 
                                    src="https://img.icons8.com/color/256/html-5.png"><p id="name">${file}</p>`;
                                }else if(file.endsWith('.css')){
                                    li.innerHTML = `<img width="20" style="position:absolute; left:-32%" 
                                    src="https://img.icons8.com/color/256/css3.png"><p id="name">${file}</p>`;
                                }else if(file.endsWith('.js')){
                                    li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                                    src="https://img.icons8.com/color/256/javascript.png"><p id="name">${file}</p>`;
                                
                                }else if(file.endsWith('.txt')){
                                    li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                                    src="https://img.icons8.com/color/256/notepad.png"><p id="name">${file}</p>`;
                                }else if(file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.gif')){
                                    li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                                    src="https://img.icons8.com/color/256/image-file.png"><p id="name">${file}</p>`;
                                }
                                else if(file.endsWith('.cpp') || file.endsWith('.c') || file.endsWith('.h') || file.endsWith('.hpp')){
                                    li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                                    src="https://img.icons8.com/color/256/c-plus-plus-logo.png"><p id="name">${file}</p>`;
                                }
                                else if(file.endsWith('.py')){
                                    li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                                    src="https://img.icons8.com/color/256/python.png"><p id="name">${file}</p>`;
                                } else if(file.endsWith('.php')){
                                    li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                                    src="https://img.icons8.com/color/256/php.png"><p id="name">${file}</p>`;
                                } else if(file.endsWith('.java')){
                                    li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                                    src="https://img.icons8.com/color/256/java-coffee-cup-logo.png"><p id="name">${file}</p>`;
                                } else if(file.endsWith('.exe')){
                                    li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                                    src="https://img.icons8.com/color/256/windows-10.png"><p id="name">${file}</p>`;
                                }else if(file.endsWith('.md')){
                                    li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                                    src="https://img.icons8.com/color/256/markdown.png"><p id="name">${file}</p>`;
                                }
                                else if(file.endsWith('.json')){
                                    li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                                    src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/512/external-json-javascript-object-notation-is-a-lightweight-data-interchange-format-logo-filled-tal-revivo.png"><p id="name">${file}</p>`;
                                }
                                else if(file.endsWith('.jsx')){
                                    li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                                    src="https://img.icons8.com/color/256/react-native.png"><p id="name">${file}</p>`;
                                }
                            }
                            li.id = file
                            set_logo(file)
                            
                            li.addEventListener("click", function() {
                    
                                if (color === "grey") {
                                   color = "lightgrey";
                                  li.style.color = "#40a3fb"
                                } else {
                                  color = "white";
                                  li.style.color = color;
                                }
                              });
                              
                              document.getElementById("folder").addEventListener("click", function(event) {
                                if (!li.contains(event.target)) {
                                  color = "grey";
                                  
                                  li.style.color = "white";
                                }
                              });

                            li.setAttribute('path', path + '/' + file)
                             li.onmouseup = (e) =>{
                                if(e.button == 0){
                                    fs.writeFileSync('./name.txt',path + '/' + file)
                                    fileexplorer.open(path + '/' + file);
                                }else if(e.button == 2){
                                    fs.writeFileSync('./name.txt',folder + '/' + file)
                                    swal.fire({
                                       icon: 'question',
                                       title: 'Options',
                                       showConfirmButton: true,
                                       confirmButtonText: 'Delete',
                                       showDenyButton: true,
                                       denyButtonText: 'Rename'
                                   }).then((result) => {
                                       //confirm
                                       
                                       if (result.isConfirmed) {
                                           try {
                                               fs.unlink(folder + '/' + file, (err) => {
                                                   if (err) throw err;
                                              
                                               })
           
                                               document.getElementById("folder").removeChild(li)
                                           } catch (error) {
                                               swal.fire({
                                                   icon: 'error',
                                                   title: 'Error',
                                                   text: error,
                                               })
                                           }
                                           swal.fire({
                                               icon: 'success',
                                               title: 'File deleted',
                                               showConfirmButton: false,
                                               timer: 1500
                                           })
                                       } else if (result.isDenied) {
                                           swal.fire({
                                               icon: 'question',
                                               title: 'Rename',
                                               input: 'text',
                                               inputLabel: 'New name',
                                               showCancelButton: true,
                                               confirmButtonText: 'Rename',
                                               showLoaderOnConfirm: true,
                                               preConfirm: (newname) => {
                                                   fs.rename(folder + '/' + file, folder + '/' + newname, (err) => {
                                                       if (err) throw err;
                                                   })
                                                   
                                                   set_logo(newname);
                                               }
           
                                           })
                                            
                                       }
                                    })
                                }
                             }
                                   
                            if(document.getElementById("folder").contains(li)){
                               
                            }else{
                                if(!document.getElementById(file)){
                                    document.getElementById("folder").appendChild(li);
        
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
   if(fs.existsSync('./folder.txt')){
        let folder = fs.readFileSync('./folder.txt').toString();
        swal.fire({
            title: 'Create File',
            html: `
            
            <input  type="text" id="name" class="swal2-input">`,
            preConfirm: () => {
                const name = Swal.getPopup().querySelector('#name').value
                return { name: name};
            }
        }).then((result) => {
            if(fs.existsSync(folder + '/' + result.value.name)){
                swal.fire({
                    title: 'Error',
                    text: `The file ${result.value.name} already exists`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }else{
                fs.writeFileSync(folder + '/' + result.value.name, '')
                swal.fire({
                    title: 'File Created',
                    text: `The file ${result.value.name} has been created`,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                var li  = document.createElement('p');
                li.setAttribute('id', result.value.name)
                li.setAttribute('path', folder + '/' + result.value.name)
                li.setAttribute('class', 'file')
                li.innerHTML = result.value.name;
                li.style.color = "white";
                var file = result.value.name;
                function set_logo(file){
                  
                        if(file.endsWith('.html')){
                            li.innerHTML = `<img width="20" style="position:absolute; left:-32%" 
                            src="https://img.icons8.com/color/256/html-5.png"><p id="name">${file}</p>`;
                        }else if(file.endsWith('.css')){
                            li.innerHTML = `<img width="20" style="position:absolute; left:-32%" 
                            src="https://img.icons8.com/color/256/css3.png"><p id="name">${file}</p>`;
                        }else if(file.endsWith('.js')){
                            li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                            src="https://img.icons8.com/color/256/javascript.png"><p id="name">${file}</p>`;
                        }else if(file.endsWith('.json')){
                            li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                            src="https://img.icons8.com/color/256/json-file-format.png"><p id="name">${file}</p>`;
                        }else if(file.endsWith('.txt')){
                            li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                            src="https://img.icons8.com/color/256/notepad.png"><p id="name">${file}</p>`;
                        }else if(file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.gif')){
                            li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                            src="https://img.icons8.com/color/256/image-file.png"><p id="name">${file}</p>`;
                        }
                        else if(file.endsWith('.cpp') || file.endsWith('.c') || file.endsWith('.h') || file.endsWith('.hpp')){
                            li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                            src="https://img.icons8.com/color/256/c-plus-plus-logo.png"><p id="name">${file}</p>`;
                        }
                        else if(file.endsWith('.py')){
                            li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                            src="https://img.icons8.com/color/256/python.png"><p id="name">${file}</p>`;
                        } else if(file.endsWith('.php')){
                            li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                            src="https://img.icons8.com/color/256/php.png"><p id="name">${file}</p>`;
                        } else if(file.endsWith('.java')){
                            li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                            src="https://img.icons8.com/color/256/java-coffee-cup-logo.png"><p id="name">${file}</p>`;
                        } else if(file.endsWith('.exe')){
                            li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                            src="https://img.icons8.com/color/256/windows-10.png"><p id="name">${file}</p>`;
                        }else if(file.endsWith('.md')){
                            li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                            src="https://img.icons8.com/color/256/markdown.png"><p id="name">${file}</p>`;
                        }else if(file.endsWith('.json')){
                            li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                            src="https://img.icons8.com/color/256/json-file-format.png"><p id="name">${file}</p>`;
                        }
                        else if(file.endsWith('.jsx')){
                            li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                            src="https://img.icons8.com/color/256/react-native.png"><p id="name">${file}</p>`;
                        }
                     
                }
                
                set_logo(file);
                 
                li.onmouseup = (e) =>{
                    if(e.button == 0){
                        fs.writeFileSync('./name.txt',folder + '/' + result.value.name)
                        fileexplorer.open(folder + '/' + result.value.name);
                         
                         
                    }else if(e.button == 2){
                         
                        
                             fs.writeFileSync('./name.txt',folder + '/' + file)
                             swal.fire({
                                icon: 'question',
                                title: 'Options',
                                showConfirmButton: true,
                                confirmButtonText: 'Delete',
                                showDenyButton: true,
                                denyButtonText: 'Rename'
                            }).then((result) => {
                                //confirm
                                
                                if (result.isConfirmed) {
                                    try {
                                        fs.unlink(folder + '/' + file, (err) => {
                                            if (err) throw err;
                                       
                                        })
    
                                        document.getElementById("folder").removeChild(li)
                                    } catch (error) {
                                        swal.fire({
                                            icon: 'error',
                                            title: 'Error',
                                            text: error,
                                        })
                                    }
                                    swal.fire({
                                        icon: 'success',
                                        title: 'File deleted',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                } else if (result.isDenied) {
                                    
                                    li.querySelector('#name').contentEditable = true;
                                    li.querySelector('#name').focus();
                                    li.querySelector('#name').addEventListener('blur', () => {
                                        var newname = li.querySelector('#name').textContent;
                                        set_logo(newname);
                                        fs.writeFileSync('./name.txt', folder + '/' + newname)
                                        li.setAttribute('path', folder + '/' + newname)
                                        fs.rename(folder + '/' + file, folder + '/' + newname, (err) => {
                                            if (err) throw err;
                                        });
                                        
                                    });
                                     
                                           
                                   
                                            
                                   
                                        
    
                                    
                                     
                                }
                             })
                         
                    }
                }
                li.style.cursor = "pointer";
                var color = "grey"
                li.addEventListener("click", function() {
                    
                    if (color === "grey") {
                       color = "lightgrey";
                      li.style.color = "#40a3fb"
                    } else {
                      color = "white";
                      li.style.color = color;
                    }
                  });
                  
                  document.getElementById("folder").addEventListener("click", function(event) {
                    if (!li.contains(event.target)) {
                      color = "grey";
                      
                      li.style.color = "white";
                    }
                  });

                if(!document.getElementById("folder").contains(li)){
                    document.getElementById("folder").appendChild(li);
                }

            }
        })

   }else{
       swal.fire({
           title:'file name',
              input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Save',
                showLoaderOnConfirm: true,
                preConfirm: (name) => {
                    return { name: name};
                }
         }).then((result) => {
            var name = result.value.name
            swal.fire({
                title:'path to save',
                html:`<input type="file" onchange="preventDefault()" class="swal2-input" id="folder"  webkitdirectory directory multiple="false"/>`,
                showConfirmButton: true,
                confirmButtonText: 'Save',
                showLoaderOnConfirm: true,
                preConfirm: () => {
                    const fileInput = Swal.getPopup().querySelector('#folder').files[0];
                    let folderPath = fileInput.path.substring(0, fileInput.path.lastIndexOf("\\"));
                    return { folderPath: folderPath };
                }
            }).then((result) => {
                var folder = result.value.folderPath
                var li = document.createElement("p");
                li.setAttribute('path',folder + '/' + name)
                li.innerText = name;
                function set_logo(file){
                  
                    if(file.endsWith('.html')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-35%" 
                        src="https://img.icons8.com/color/256/html-5.png"><p id="name">${file}</p>`;
                    }else if(file.endsWith('.css')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-35%" 
                        src="https://img.icons8.com/color/256/css3.png"><p id="name">${file}</p>`;
                    }else if(file.endsWith('.js')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-35%"
                        src="https://img.icons8.com/color/256/javascript.png"><p id="name">${file}</p>`;
                    }else if(file.endsWith('.json')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-35%"
                        src="https://img.icons8.com/color/256/json-file-format.png"><p id="name">${file}</p>`;
                    }else if(file.endsWith('.txt')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-35%"
                        src="https://img.icons8.com/color/256/notepad.png"><p id="name">${file}</p>`;
                    }else if(file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.gif')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-35%"
                        src="https://img.icons8.com/color/256/image-file.png"><p id="name">${file}</p>`;
                    }
                    else if(file.endsWith('.cpp') || file.endsWith('.c') || file.endsWith('.h') || file.endsWith('.hpp')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-35%"
                        src="https://img.icons8.com/color/256/c-plus-plus-logo.png"><p id="name">${file}</p>`;
                    }
                    else if(file.endsWith('.py')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-35%"
                        src="https://img.icons8.com/color/256/python.png"><p id="name">${file}</p>`;
                    } else if(file.endsWith('.php')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-35%"
                        src="https://img.icons8.com/color/256/php.png"><p id="name">${file}</p>`;
                    } else if(file.endsWith('.java')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-35%"
                        src="https://img.icons8.com/color/256/java-coffee-cup-logo.png"><p id="name">${file}</p>`;
                    } else if(file.endsWith('.exe')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-35%"
                        src="https://img.icons8.com/color/256/windows-10.png"><p id="name">${file}</p>`;
                    }else if(file.endsWith('.md')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-35%"
                        src="https://img.icons8.com/color/256/markdown.png"><p id="name">${file}</p>`;
                    }else if(file.endsWith('.json')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-35%"
                        src="https://img.icons8.com/color/256/json-file-format.png"><p id="name">${file}</p>`;
                    }
                    else if(file.endsWith('.jsx')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-35%"
                        src="https://img.icons8.com/color/256/react-native.png"><p id="name">${file}</p>`;
                    }
                 
                }
                set_logo(name)
                li.mousedown = (e) => {
                    if(e.button == 0){
                        fileexplorer.open(li.getAttribute('path'));
                    }else if(e.button == 2){
                        fs.writeFileSync('./name.txt',folder + '/' + name)
                                    swal.fire({
                                       icon: 'question',
                                       title: 'Options',
                                       showConfirmButton: true,
                                       confirmButtonText: 'Delete',
                                       showDenyButton: true,
                                       denyButtonText: 'Rename'
                                   }).then((result) => {
                                       //confirm
                                       
                                       if (result.isConfirmed) {
                                           try {
                                               fs.unlink(folder + '/' + name, (err) => {
                                                   if (err) throw err;
                                              
                                               })
           
                                               document.getElementById("folder").removeChild(li)
                                           } catch (error) {
                                               swal.fire({
                                                   icon: 'error',
                                                   title: 'Error',
                                                   text: error,
                                               })
                                           }
                                           swal.fire({
                                               icon: 'success',
                                               title: 'File deleted',
                                               showConfirmButton: false,
                                               timer: 1500
                                           })
                                       } else if (result.isDenied) {
                                           swal.fire({
                                               icon: 'question',
                                               title: 'Rename',
                                               input: 'text',
                                               inputLabel: 'New name',
                                               showCancelButton: true,
                                               confirmButtonText: 'Rename',
                                               showLoaderOnConfirm: true,
                                               preConfirm: (newname) => {
                                                   fs.rename(folder + '/' + name, folder + '/' + newname, (err) => {
                                                       if (err) throw err;
                                                   })
                                                   
                                                   set_logo(newname);
                                               }
           
                                           })
                                            
                                       }
                                    })
                                
                    }
                }
                if(!document.getElementById('folder').contains(li)){
                    document.getElementById('folder').appendChild(li);
                }
                if(result.isConfirmed){
                    fs.writeFileSync(folder + '/' + name, '')
                    fs.writeFileSync('./name.txt',folder + '/' + name)
                    fileexplorer.open(folder + '/' + name);
                }
            })
           
           
         })
       
       
       
   }
}
        
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
        html: `
       
        <input type="file" id="name" class="swal2-input" webkitdirectory directory multiple="false">`,
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
                var color = "grey"
                li.addEventListener("click", function() {
                    
                    if (color === "grey") {
                       color = "lightgrey";
                      li.style.color = "#40a3fb"
                    } else {
                      color = "white";
                      li.style.color = color;
                    }
                  });
                  
                  document.getElementById("folder").addEventListener("click", function(event) {
                    if (!li.contains(event.target)) {
                      color = "grey";
                      
                      li.style.color = "white";
                    }
                  });
                set_logo(file);
                li.setAttribute('class', 'file');
                li.setAttribute('id', file);
                function set_logo(file){
                    if(file.endsWith('.html')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-32%" 
                        src="https://img.icons8.com/color/256/html-5.png"><p id="name">${file}</p>`;
                    }else if(file.endsWith('.css')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-32%" 
                        src="https://img.icons8.com/color/256/css3.png"><p id="name">${file}</p>`;
                    }else if(file.endsWith('.js')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                        src="https://img.icons8.com/color/256/javascript.png"><p id="name">${file}</p>`;
                    }else if(file.endsWith('.json')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                        src="https://img.icons8.com/color/256/json-file-format.png"><p id="name">${file}</p>`;
                    }else if(file.endsWith('.txt')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                        src="https://img.icons8.com/color/256/notepad.png"><p id="name">${file}</p>`;
                    }else if(file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.gif')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                        src="https://img.icons8.com/color/256/image-file.png"><p id="name">${file}</p>`;
                    }
                    else if(file.endsWith('.cpp') || file.endsWith('.c') || file.endsWith('.h') || file.endsWith('.hpp')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                        src="https://img.icons8.com/color/256/c-plus-plus-logo.png"><p id="name">${file}</p>`;
                    }
                    else if(file.endsWith('.py')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                        src="https://img.icons8.com/color/256/python.png"><p id="name">${file}</p>`;
                    } else if(file.endsWith('.php')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                        src="https://img.icons8.com/color/256/php.png"><p id="name">${file}</p>`;
                    } else if(file.endsWith('.java')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                        src="https://img.icons8.com/color/256/java-coffee-cup-logo.png"><p id="name">${file}</p>`;
                    } else if(file.endsWith('.exe')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                        src="https://img.icons8.com/color/256/windows-10.png"><p id="name">${file}</p>`;
                    }else if(file.endsWith('.md')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                        src="https://img.icons8.com/color/256/markdown.png"><p id="name">${file}</p>`;
                    }else if(file.endsWith('.json')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                        src="https://img.icons8.com/color/256/json-file-format.png"><p id="name">${file}</p>`;
                    }
                    else if(file.endsWith('.jsx')){
                        li.innerHTML = `<img width="20" style="position:absolute; left:-32%"
                        src="https://img.icons8.com/color/256/react-native.png"><p id="name">${file}</p>`;
                    }
                }
                document.getElementById('folder').appendChild(li);
                li.style.cursor = 'pointer';
                li.setAttribute('path', folder + '/' + file)
                fs.writeFileSync('./name.txt', li.getAttribute('path'))
                li.onmousedown = (e) =>{
                     
                    if(e.button == 0){
                        fileexplorer.open(li.getAttribute('path'));
                        fs.writeFileSync('./name.txt', li.getAttribute('path'))
                        fs.writeFileSync('./folder.txt', folder)
                    }
                    if(e.button == 2){
                         fs.writeFileSync('./name.txt',folder + '/' + file)
                         swal.fire({
                            icon: 'question',
                            title: 'Options',
                            showConfirmButton: true,
                            confirmButtonText: 'Delete',
                            showDenyButton: true,
                            denyButtonText: 'Rename'
                        }).then((result) => {
                            //confirm
                            
                            if (result.isConfirmed) {
                                try {
                                    fs.unlink(folder + '/' + file, (err) => {
                                        if (err) throw err;
                                   
                                    })

                                    document.getElementById("folder").removeChild(li)
                                } catch (error) {
                                    swal.fire({
                                        icon: 'error',
                                        title: 'Error',
                                        text: error,
                                    })
                                }
                                swal.fire({
                                    icon: 'success',
                                    title: 'File deleted',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            } else if (result.isDenied) {
                                
                                li.querySelector('#name').contentEditable = true;
                                li.querySelector('#name').focus();
                                li.querySelector('#name').addEventListener('blur', () => {
                                    var newname = li.querySelector('#name').textContent;
                                    set_logo(newname);
                                    fs.writeFileSync('./name.txt', folder + '/' + newname)
                                    li.setAttribute('path', folder + '/' + newname)
                                    fs.rename(folder + '/' + file, folder + '/' + newname, (err) => {
                                        if (err) throw err;
                                    });
                                    
                                });
                                 
                                       
                               
                                        
                               
                                    

                                
                                 
                            }
                         })
                    }
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