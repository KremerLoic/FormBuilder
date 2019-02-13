$(document).ready(function () {


    var cpt = 0;  // Compteur pour les IDs des champs de form
    var containerWidth = $("#formBuilder").width(); // Width of the form DIV.


    $(function () {
        $("#formBuilder").sortable({
            connectWith: ".connectedSortable"
        }).disableSelection();
    });


    $('li').on("mousedown", function () {

        var html = "";
        cpt++;
        $(this).addClass('selected');
        var value = $(this).html();

        switch (value) {
            case "Textfield" :
                html = "<div class='form-group'><label for='text_" + cpt + "' class='formLabel'>Text_" + cpt + "</label><button type='button' class='btnRemove''>x</button><input type=text name='text' id='text_" + cpt + "'  class='form-control formInput' placeholder='Text' ></div>";
                break;
            case "Number" :
                html = "<div class='form-group'><label for='number_" + cpt + " ' class='formLabel'>Number_" + cpt + "</label><button type='button' class='btnRemove''>x</button><input type=number name='number' id='number_" + cpt + "'  class='form-control formInput' placeholder='Number'></div>";
                break;
            case "Textarea" :
                html = "<div class='form-group'><label for='textarea_" + cpt + "' class='formLabel'>Textarea_" + cpt + "</label><button type='button' class='btnRemove''>x</button><Textarea name='textarea' id='textarea_" + cpt + "'  class='form-control formTextarea' placeholder='Textarea' /></div>";
                break;
            case "Email" :
                html = "<div class='form-group'><label for='email_" + cpt + "' class='formLabel'>Number_" + cpt + "</label><button type='button' class='btnRemove''>x</button><input type =email id='email_" + cpt + "'  class='form-control formInput' placeholder='Email' ></div>";
                break;
            case "Password" :
                html = "<div class='form-group'><label for='password_" + cpt + " ' class='formLabel'>Password_" + cpt + "</label><button type='button' class='btnRemove''>x</button><input type='password' name='password' id='password_" + cpt + "'  class='form-control formInput' placeholder='password' ></div>";
                break;
        }

        // Injecting form input in html.
        $("#formBuilder").append(html);

        // Make possible the input resizing horizontally
        $(function () {
            $('.formInput').resizable({
                grid: [100, 10000],
                maxWidth: containerWidth,
                minWidth: 100,
            });

            // Removing input button
            $('.btnRemove').on("mousedown", function () {
                $(this).closest(".form-group").remove();
            });
        });

        // For the textarea we need a full resizing ( Horizontally/Vertically )
        $(function () {
            $('.formTextarea').resizable({
                maxWidth: containerWidth,
                minWidth: 100,
                grid: 100
            });
        });

        $('.formLabel').on('dblclick',function(){
            oriVal = $(this).text();
            $(this).replaceWith("<input type=text />")
        });



    });
});


