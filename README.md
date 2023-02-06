# Monoco Code Editor

<img  width="70" src="https://user-images.githubusercontent.com/65188863/216860584-2c03afd7-2911-4d29-8e4d-0069d3e698b1.png">

```
last edited: 2/5/23
```


# About:
Monoco an extensible open source ide - created to be a one stop shop ide with tools that enhance programmers daily tasks.






# Getting started:


Simply click open file - open folder - or create to get started using monoco ->
be sure that you have python, java, gcc / g++ installed to compoile code - out of the box markdown & html are precompiled.

* HTML

Monoco is built ontop of chromium which aids in the use of html webpage creation. 
Monoco can show you in realtime what you are editing - the editor has an event listener that checks if you have edited the text on that file - then rewrite the popup windows html

simple spa project to get you started:
```
<!Doctype html>
<html>
 <head>
   <meta http-equiv="content-type"content="text/html; charset=utf-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   
 </head>
 <body>
 <!--Vrd Router config-->
 <p data-config>
  {
      "routes":{
          "home":{
              "path":"#/home",
              "content":"home"
          }
      }
  }
 </p>
 <div id="home" data-routeritem router-content="home" page:title="home">
   <h1>Monoco Code Editor</h1>
   <p>extensible editor with prebuilt debugging!</p>
 </div>
 <div id="error" error:title="404 not found">
 <h1>Woops looks like you got lost their buddy</h1>
 <a href="#/home">Go Back Home</a>
 </div>
 <script src="https://unpkg.com/vrd-router">
 </script>
 <script>
 // set the location when they first visit
 window.onload = () =>{
     window.location.hash = "#/home"
 }
 </script>
 </body>
</html>
```

* python 

```
def my_function():
  print("Hello Monoco")

my_function()
```


# Monoco Dependencies

 Frontend:
* <a href="https://nwjs.io/"> nw.js<a/>

Backend:
* <a href="https://www.npmjs.com/package/compilex">Compilex<a/>
* Fs
* Nodejs





### Markdown Page Created in Monoco
