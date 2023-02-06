var editor = ace.edit("editor");
ace.require("ace/ext/language_tools");

editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: false
});
