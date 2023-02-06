var editor = ace.edit("editor");
var fs = nw.require('fs');
var showdown = require('showdown')
var converter = new showdown.Converter()
var compiler = require('compilex');
var options = { stats: true }; //prints stats on console 
compiler.init(options);
var rimraf = require("rimraf");

document.getElementById('debug').onclick = () => {

    try {
        var path = fs.readFileSync('./name.txt', 'utf8');
        if (path.endsWith('.html')) {

            function init() {
                popup = window.open("", "newWindow", "width=800, height=600");
                if (popup) {
                    popup.document.body.innerHTML = editor.getValue()
                }


            }
            init()
            function update() {
                popup.document.body.innerHTML = editor.getValue()
            }
            editor.on('input', update)







        } else if (path.endsWith('.css')) {

        }
        else if (path.endsWith('.js')) {


        }
        else if (path.endsWith('.jsx')) {
            function init() {

                popup = window.open("", "newWindow", "width=800, height=600");
                var head = popup.document.head
                try {
                    if (popup) {
                        popup.document.head.innerHTML += `

                           
                            <head>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
                            `
                        popup.document.body.innerHTML = `
                        <div id="root"></div>

    <script type="text/babel">
      ${editor.getValue()}
    </script>
                        `
                        popup.document.onmousedown = (e) => {
                                 if(e.button == 2) {
                                    alert(popup.document.head.innerHTML)
                                 }
                        }
                         
 
                    }

                } catch (error) {
                    alert(error)
                }
            }
            init()
        }
        else if (path.endsWith('.md')) {
            function init() {
                popup = window.open("", "newWindow", "width=800, height=600");
                if (popup) {
                    popup.document.body.innerHTML = converter.makeHtml(editor.getValue())
                }


            }
            init()
            function update() {
                popup.document.body.innerHTML = converter.makeHtml(editor.getValue())
            }
            editor.on('input', update)

        }
        else if (path.endsWith('.txt')) {
            function init() {
                popup = window.open("", "newWindow", "width=800, height=600");
                if (popup) {
                    popup.document.write(editor.getValue())
                }
            }
            init()
            function update() {
                popup.document.write(editor.getValue())
            }
            editor.on('change', update)
        } else if (path.endsWith('.docx')) {
            function init() {
                popup = window.open("", "newWindow", "width=800, height=600");
                if (popup) {
                    popup.document.write(editor.getValue())
                }
            }
            init()
            function update() {
                popup.document.write(editor.getValue())
            }
            editor.on('change', update)
        } else if (path.endsWith('.json')) {
            function init() {
                try {
                    swal.fire({

                        title: "Output",
                        text: JSON.stringify(JSON.parse(editor.getValue()), null, 4),
                        showConfirmButton: false,
                        showCloseButton: true,
                    })
                } catch (e) {
                    swal.fire({
                        title: "Error",
                        text: e,
                        icon: "error",
                        confirmButtonText: "Ok"
                    })
                }
            }
        }
        else if (path.endsWith('.py')) {
            var envData = { OS: "windows", cmd: "python" };
            function init() {
                compiler.flush(function () {
                    console.log('All temporary files flushed !');
                });
                compiler.compilePython(envData, editor.getValue(), function (data) {
                    swal.fire({
                        title: "Output",
                        text: data.output,
                        showConfirmButton: false,
                        showCloseButton: true,

                    })
                    var error = data.error
                    if (error) {
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
        } else if (path.endsWith('.cpp')) {
            var envData = { OS: "windows", cmd: "g++" };

            function init() {
                compiler.flush(function () {
                    console.log('All temporary files flushed !');
                });
                compiler.compileCPP(envData, editor.getValue(), function (data) {
                    swal.fire({
                        title: "Output",
                        text: data.output,
                        showConfirmButton: false,
                        showCloseButton: true,
                    })
                    var error = data.error
                    if (error) {
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

        } else if (path.endsWith('.c')) {
            var envData = { OS: "windows", cmd: "gcc" };

            function init() {
                compiler.flush(function () {
                    console.log('All temporary files flushed !');
                });
                compiler.compileCPP(envData, editor.getValue(), function (data) {
                    swal.fire({
                        title: "Output",
                        text: data.output,
                        showConfirmButton: false,
                        showCloseButton: true,
                    })
                    var error = data.error
                    if (error) {
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
        } else if (path.endsWith('.java')) {
            var envData = { OS: "windows", cmd: "java" };

            function init() {
                compiler.flush(function () {
                    console.log('All temporary files flushed !');
                });
                compiler.compileJava(envData, editor.getValue(), function (data) {
                    swal.fire({
                        title: "Output",
                        text: data.output,
                        showConfirmButton: false,
                        showCloseButton: true,
                    })
                    var error = data.error
                    if (error) {
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
        else if (path.endsWith('.cs')) {
            var envData = { OS: "windows", cmd: "csc" };

            function init() {
                compiler.flush(function () {
                    console.log('All temporary files flushed !');
                });
                compiler.compileCS(envData, editor.getValue(), function (data) {
                    swal.fire({
                        title: "Output",
                        text: data.output,
                        showConfirmButton: false,
                        showCloseButton: true,
                    })
                    var error = data.error
                    if (error) {
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

compiler.flush(function () {
    console.log('All temporary files flushed !');
});
