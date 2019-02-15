$(document).ready(function () {


    var cpt = 0;  // Compteur pour les IDs des champs de form.
    var containerWidth = $("#formBuilder").width(); // Width of the form DIV.
    var inputID = ""; // To store the current input ID value.
    var inputName = ""; // To store the current input Name value.
    var inputClass = ""; // To store the current input Class value.
    var inputPlaceholder = ""; // To store the current input Placeholder value.


    $("#formBuilder").sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();


    $('li').on("click", function () {

        var html = "";
        cpt++;
        var value = $(this).html();

        switch (value) {
            case "Textfield" :
                html = "<div class='form-group'><label for='text_" + cpt + "' class='formLabel'>Text_" + cpt + "</label><button type='button' class='btnRemove''>x</button><button type='button' class='btnEdit''>?</button><input type=text name='text' id='text_" + cpt + "'  class='form-control formInput' placeholder='Text' ></div>";
                break;
            case "Number" :
                html = "<div class='form-group'><label for='number_" + cpt + " ' class='formLabel'>Number_" + cpt + "</label><button type='button' class='btnRemove''>x</button><input type=number name='number' id='number_" + cpt + "'  class='form-control formInput' placeholder='Number'></div>";
                break;
            case "Textarea" :
                html = "<div class='form-group'><label for='textarea_" + cpt + "' class='formLabel'>Textarea_" + cpt + "</label><button type='button' class='btnRemove''>x</button><textarea name='textarea' id='textarea_" + cpt + "'  class='form-control formTextarea' placeholder='Textarea' /></div>";
                break;
            case "Email" :
                html = "<div class='form-group'><label for='email_" + cpt + "' class='formLabel'>Email_" + cpt + "</label><button type='button' class='btnRemove''>x</button><input type =email id='email_" + cpt + "'  class='form-control' name='email' placeholder='Email'  ></div>";
                break;
            case "Password" :
                html = "<div class='form-group'><label for='password_" + cpt + " ' class='formLabel'>Password_" + cpt + "</label><button type='button' class='btnRemove''>x</button><input type='password' name='password' id='password_" + cpt + "'  class='form-control formInput' placeholder='Password' ></div>";
                break;
            case "Checkbox" :
                html =
                    "<div class='form-check'>" +
                    "<input type='checkbox' name='checkbox' id='checkbox_" + cpt + "' class=' formCheckbox form-check-input' placeholder='test' >" +
                    "<label for='checkbox_" + cpt + " ' class='formLabel form-check-label'>Checkbox_" + cpt + "</label>" +
                    "</div>"
        }

        // Injecting form input in html.
        $("#formBuilder").append(html);

        // Make possible the input resizing horizontally.

        $('.formInput').resizable({
            grid: [100, 1000],
            maxWidth: containerWidth,
            minWidth: 100
        });


        $('.form-check').resizable({
            grid: [100, 1000],
            maxWidth: containerWidth,
            minWidth: 100
        });



        // Removing input button
        $('.btnRemove').on("click", function () {
            $(this).closest(".form-group").remove();
        });


        // For the textarea we need a full resizing ( Horizontally/Vertically ).

        $('.formTextarea').resizable({
            maxWidth: containerWidth,
            minWidth: 100,
            grid: 100
        });


        $(".formInput, .formCheckbox").on('click', function () {

    
            $('.formInput').removeClass('selected');
            $(this).addClass('selected');


            // If the modify div has the inactive class, we remove it add the active class to display the div.
            if ($('.inputModify').hasClass('inactive')) {
                $('.inputModify').removeClass('inactive');
                $('.inputModify').addClass('active');
            }

            // Verify the fields.. if not empty : insert value into variables, else if empty set value to "???"
            $(this).attr("id") ? inputID = $(this).attr("id") : inputID = "???";
            $(this).attr("name") ? inputName = $(this).attr("name") : inputName = "???";
            $(this).attr("class") ? inputClass = $(this).attr("class") : inputClass = "???";
            $(this).attr("placeholder") ? inputPlaceholder = $(this).attr("placeholder") : inputPlaceholder = "???";


            // Once variables are sets we inject the values in HTML.
            $("#modifyNameInput").val(inputName);
            $('#modifyClassInput').val(inputClass);
            $('#modifyIDInput').val(inputID);
            $('#modifyPlaceholderInput').val(inputPlaceholder);


            $(".inputModify").on("change paste keyup", function () {
                $('.selected').attr("id", $("#modifyIDInput").val());
                $('.selected').attr("name", $("#modifyNameInput").val());
                $('.selected').attr("class", $("#modifyClassInput").val());
                $('.selected').attr("placeholder", $("#modifyPlaceholderInput").val());
            });
        });
    });
});


