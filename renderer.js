const loader = require('monaco-loader')

loader().then((monaco) => {
    const div = document.getElementById('container')
    
    editor = monaco.editor.create(div, {
        language: 'javascript',
        theme: 'vs-dark',
        automaticLayout: true
    })


    setTimeout(function() {
        var selection = editor.getSelection();
        var range = new monaco.Range(selection.startLineNumber, selection.startColumn, selection.endLineNumber, selection.endColumn);
        var id = { major: 1, minor: 1 };             
        var text = "const {app, BrowserWindow} = require('electron');";
        var op = {identifier: id, range: range, text: text, forceMoveMarkers: true};
        editor.executeEdits("my-source", [op]);    
    }, 2000);
  
    
    
})