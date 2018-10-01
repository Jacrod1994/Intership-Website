$(document).ready(function() {
    
    // tooltips on hover
    $('[data-toggle=\'tooltip\']').tooltip({container: 'body', html: true});

    // Makes tooltips work on ajax generated content
    $(document).ajaxStop(function() {
        $('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
    });

    $('[data-toggle=\'tooltip\']').on('remove', function() {
        $(this).tooltip('destroy');
    });


    var editor = document.getElementById('text-editor');

    $("#text-editor").each(function (i) {
        
        editor = CodeMirror.fromTextArea(this, {
            lineNumbers: true,
            mode: 'html'
            
        });

        editor.on("change", function() {
            document.getElementById('question-preview').innerHTML = editor.getValue('<br>')
            .replace('<?','&lt;?')
            .replace('?>', '?&gt;')
            .replace('<script>', '&lt;script&gt;')
            .replace('<script>', '&lt;/script&gt;')
            .replace('<div>', '&lt;div&gt;')
            .replace('</div>', '&lt;/div&gt;')
            
        });

        //$('#hr').append('<hr />');

        $('a[role="button"]').click(function(){

            var val = $(this).data('val');
            var string = editor.getSelection();
              
            switch(val){
                
                case 'bold': 
                    editor.replaceSelection('<b>' + string + '</b>');
                break;

                case 'italic': 
                    editor.replaceSelection('<i>' + string + '</i>');
                break;

                case 'quote': 
                    editor.replaceSelection('<blockquote><p>' + string + '</p></blockquote>');
                break;

                case 'code': 
                    editor.replaceSelection('<pre><code>' + string + '</code></pre>');
                    
                break;

                case 'hr': 
                    editor.replaceSelection('<hr/>');
                    
                break;
            }

        });

        $(".dropdown-menu li a[class='btn-heading']").click(function(){
            var val = $(this).data('val');
            var string = editor.getSelection();

            switch(val){
                case 'h1': 
                    editor.replaceSelection('<h1>' + string + '</h1>');
                break;
                case 'h2': 
                    editor.replaceSelection('<h2>' + string + '</h2>');
                break;
                case 'h3': 
                    editor.replaceSelection('<h3>' + string + '</h3>');
                break;
                case 'h4': 
                    editor.replaceSelection('<h4>' + string + '</h4>');
                break;
                case 'h5': 
                    editor.replaceSelection('<h5>' + string + '</h5>');
                break;
                case 'h6': 
                    editor.replaceSelection('<h6>' + string + '</h6>');
                break;
            }
        });
    });
});
