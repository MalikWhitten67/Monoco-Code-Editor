var editor = ace.edit("editor");
var fs = nw.require('fs');
var showdown  = require('showdown')
var converter = new showdown.Converter()
const {c, cpp, node, python, java} = require('compile-run');
var compiler = require('compilex');
var options = {stats : true}; //prints stats on console 
compiler.init(options);
var rimraf = require("rimraf");

document.getElementById('debug').onclick = () => {
        try {
            var path = fs.readFileSync('./name.txt', 'utf8');
            if (path.endsWith('.html')) {

                function init() {
                    popup = window.open("", "newWindow", "width=800, height=600");
                    if (popup){
                        popup.document.write(editor.getValue());
                        popup.document.title = "Monoco Editor HTML Debugger"
                        function update() {
                            popup.document.body.innerHTML = editor.getValue();
                        }
                        editor.on('change', update);
                    }
                    
                }
                
                  function update(){
                 
                        popup.document.body.innerHTML = editor.getValue();
                    
                  
                  }
                  init()
                  
                        
                
                    editor.on('change', update);
                     
                    
            }else if(path.endsWith('.css')){
                        
            }else if(path.endsWith('.js')){
                
        
            }else if(path.endsWith('.md')){
                function init(){
                    popup = window.open("", "newWindow", "width=800, height=600");
                    if (popup){
                       popup.document.body.innerHTML =  converter.makeHtml(editor.getValue())
                    }
                    
                   
                }
                init()
                function update(){
                    popup.document.body.innerHTML =  converter.makeHtml(editor.getValue())
                }
                editor.on('change', update)
                 
            } else if(path.endsWith('.txt')){
                function init(){
                    popup = window.open("", "newWindow", "width=800, height=600");
                    if (popup){
                        popup.document.write(editor.getValue())
                    }
                }
                init()
                function update(){
                    popup.document.write(editor.getValue())
                }
                editor.on('change', update)
            }
            else if(path.endsWith('.py')){
                var envData = { OS : "windows" , cmd : "python"};
                function init(){
                    compiler.flush(function(){
                        console.log('All temporary files flushed !'); 
                        });
                         compiler.compilePython(envData, editor.getValue(), function(data){
                            swal.fire({
                                title: "Output",
                                text: data.output,
                                showConfirmButton: false,
                                showCloseButton: true,
                                 
                            })  
                            var error = data.error
                            if(error){
                                swal.fire({
                                    title: "Error",
                                    text: error,
                                    icon: "error",
                                    confirmButtonText: "Ok"
                                })
                            }
                         })
                       
                    
                }
                init()
            }else if(path.endsWith('.cpp')){
                var envData = { OS : "windows" , cmd : "g++"}; 

                function init(){
                    compiler.flush(function(){
                        console.log('All temporary files flushed !'); 
                        });
                    compiler.compileCPP(envData , editor.getValue(), function(data){
                        swal.fire({
                            title: "Output",
                            text: data.output,
                            showConfirmButton: false,
                            showCloseButton: true,
                        })
                        var error = data.error
                        if(error){
                            swal.fire({
                                title: "Error",
                                text: error,
                                icon: "error",
                                confirmButtonText: "Ok"
                            })
                        }
                    });
                }
               init()
               
            }else if(path.endsWith('.c')){
                var envData = { OS : "windows" , cmd : "gcc"}; 

                function init(){
                    compiler.flush(function(){
                        console.log('All temporary files flushed !'); 
                        });
                    compiler.compileCPP(envData , editor.getValue(), function(data){
                        swal.fire({
                            title: "Output",
                            text: data.output,
                            showConfirmButton: false,
                            showCloseButton: true,
                        }) 
                        var error = data.error
                        if(error){
                            swal.fire({
                                title: "Error",
                                text: error,
                                icon: "error",
                                confirmButtonText: "Ok"
                            })
                        }
                    });
                }
               init()
            }else if(path.endsWith('.java')){
                var envData = { OS : "windows" , cmd : "java"}; 

                function init(){
                    compiler.flush(function(){
                        console.log('All temporary files flushed !'); 
                        });
                    compiler.compileJava(envData , editor.getValue(), function(data){
                        swal.fire({
                            title: "Output",
                            text: data.output,
                            showConfirmButton: false,
                            showCloseButton: true,
                        }) 
                        var error = data.error
                        if(error){
                            swal.fire({
                                title: "Error",
                                text: error,
                                icon: "error",
                                confirmButtonText: "Ok"
                            })
                        }
                    });
                }
               init()
            }
            else if(path.endsWith('.cs')){
                var envData = { OS : "windows" , cmd : "csc"}; 
    
                function init(){
                    compiler.flush(function(){
                        console.log('All temporary files flushed !'); 
                        });
                    compiler.compileCS(envData , editor.getValue(), function(data){
                        swal.fire({
                            title: "Output",
                            text: data.output,
                            showConfirmButton: false,
                            showCloseButton: true,
                        })
                        var error = data.error
                        if(error){
                            swal.fire({
                                title: "Error",
                                text: error,
                                icon: "error",
                                confirmButtonText: "Ok"
                            })
                        }
                    });
                }
               init()
            }
             
        }
        catch (error) {
           swal.fire({
                title: "Error",
                text: error,
                icon: "error",
                confirmButtonText: "Ok"

           })
        }
} 
  
compiler.flush(function(){
    console.log('All temporary files flushed !'); 
});
