tinymce.PluginManager.add('simplehovernote', function(editor) { 

    // Add a button that opens a window
    editor.addButton('simplehovernote', {
        text: 'Add Note',
        icon: null,
        tooltip: 'Add hover note to selected text',
        onclick: function() {
            // Open window
            console.log(tinyMCE.activeEditor.selection.getContent());
            editor.windowManager.open({
                title: 'Hover Note',
                body: [
                    {type: 'label', text: 'To delete an existing note, delete the text and create a new one.'},
                    {type: 'textbox', name: 'header', label: 'Header:'},
                    {type: 'textbox', minHeight: 100, minWidth: 250, multiline: true, name: 'note', label: 'Note:'}
                ],
                onsubmit: function(e) {
                    selection = tinyMCE.activeEditor.selection.getContent();
                    tinyMCE.activeEditor.selection.setContent('<span class="simple-hover-note" data-hover-header="' + e.data.header + '" data-hover-note="' + e.data.note + '">' + selection + '</span>');
                }
            });
        }
    });

    // Adds a menu item to the tools menu
    editor.addMenuItem('simplehovernote', {
        text: 'Add Editor Note',
        context: 'tools',
        onclick: function() {
            // Open window with a specific url
            editor.windowManager.open({
                title: 'TinyMCE site',
                url: 'http://www.tinymce.com',
                width: 800,
                height: 600,
                buttons: [{
                    text: 'Close',
                    onclick: 'close'
                }]
            });
        }
    });

});