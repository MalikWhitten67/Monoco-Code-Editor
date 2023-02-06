var shell = require('shelljs');

// Path: src\components\dependencies.js

var check = {
    python: shell.exec('python --version', {silent:true}).stdout.trim(),
    node: shell.exec('node --version', {silent:true}).stdout.trim(),
    npm: shell.exec('npm --version', {silent:true}).stdout.trim(),
    gpp: shell.exec('g++ --version', {silent:true}).stdout.trim(),
    gcc: shell.exec('gcc --version', {silent:true}).stdout.trim(),
    java: shell.exec('java --version', {silent:true}).stdout.trim(),
    javac: shell.exec('javac --version', {silent:true}).stdout.trim(),
    git: shell.exec('git --version', {silent:true}).stdout.trim(),
    pip: shell.exec('pip --version', {silent:true}).stdout.trim(),
    pip3: shell.exec('pip3 --version', {silent:true}).stdout.trim(),
    pipenv: shell.exec('pipenv --version', {silent:true}).stdout.trim(),

}
