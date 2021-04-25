// import {PythonShell} from './node_modules/python-shell/index.js';

let {
    PythonShell
} = require('python-shell')

let pyshell = new PythonShell('test.py')
pyshell.on('message', function (message) {
    console.log(message);
})
pyshell.end(function (err) {
    if (err) {
        throw err
    };
    console.log('finished')
});

// var option = document.getElementsByClassName("option")
// var label = document.getElementsByClassName("label")


// PythonShell.runString('x=1+1;print(x)', null, function (err) {
//   if (err) throw err;
//   console.log('finished');
// });

// for (let i = 0; i < label.length; i++) {
//     option[i].addEventListener('click', function() {
//         country = label[i].innerHTML.toString()
//         console.log(country)
//     })
// }