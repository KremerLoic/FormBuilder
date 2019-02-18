$(document).ready(function () {


    var cpt = 0;  // Compteur pour les IDs des champs de form.
    var containerWidth = $("#formBuilder").width(); // Width of the form DIV.
    var inputLabel = ""; // To store the current input Label value.
    var inputID = ""; // To store the current input ID value.
    var inputName = ""; // To store the current input Name value.
    var inputClass = ""; // To store the current input Class value.
    var inputPlaceholder = ""; // To store the current input Placeholder value.
    var title = "";
    var savedForm = [];


    $("#formBuilder").sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();


    $('li').on("click", function () {
        var html = "";
        cpt++;
        var value = $(this).html();

        switch (value) {
            case "Title" :
                html = "<div class='title'><h4> Mon titre </h4></div>";
                break;
            case "Textfield" :
                html = "<div class='form-group'><label for='text_" + cpt + "' class='formLabel'>Text_" + cpt + "</label><button type='button' class='btnRemove''>x</button><input type=text name='text' id='text_" + cpt + "'  class='form-control formInput' placeholder='Text' ></div>";
                break;
            case "Number" :
                html = "<div class='form-group'><label for='number_" + cpt + " ' class='formLabel'>Number_" + cpt + "</label><button type='button' class='btnRemove''>x</button><input type=number name='number' id='number_" + cpt + "'  class='form-control formInput' placeholder='Number'></div>";
                break;
            case "Textarea" :
                html = "<div class='form-group'><label for='textarea_" + cpt + "' class='formLabel'>Textarea_" + cpt + "</label><button type='button' class='btnRemove''>x</button><textarea name='textarea' id='textarea_" + cpt + "'  class='form-control formTextarea' placeholder='Textarea' /></div>";
                break;
            case "Email" :
                html = "<div class='form-group'><label for='email_" + cpt + "' class='formLabel'>Email_" + cpt + "</label><button type='button' class='btnRemove''>x</button><input type =email id='email_" + cpt + "'  class='form-control formInput' name='email' placeholder='Email'  ></div>";
                break;
            case "Password" :
                html = "<div class='form-group'><label for='password_" + cpt + "' class='formLabel'>Password_" + cpt + "</label><button type='button' class='btnRemove''>x</button><input type='password' name='password' id='password_" + cpt + "'  class='form-control formInput' placeholder='Password' ></div>";
                break;
            case "Checkbox" :
                html =
                    "<div class='form-check'>" +
                    "<label for='checkbox_" + cpt + "' class='formLabel form-check-label'>Checkbox_" + cpt + "</label>" +
                    "<input type='checkbox' name='checkbox' id='checkbox_" + cpt + "' class='formCheckbox ' placeholder='test' >" +
                    "<button type='button' class='btnRemove''>x</button>" +
                    "</div>";
                break;
            case "Radio":
                html =
                    "<div class='form-radio'>" +
                    "<label for='radio_" + cpt + "' class='formLabel'>Radio_" + cpt + "</label>" +
                    "<input type='radio' name='radio' class='formRadio' id='radio_" + cpt + "'>" +
                    "<button type='button' class='btnRemove''>x</button>" +
                    "</div>";
                break;
            case "Select" :
                html =
                    "<div class='form-select'>" +
                    "<label for='select_" + cpt + "' class='formLabel'>Select_" + cpt + " </label>" +
                    "<select class='formSelect' id='test_" + cpt + "'>" +
                    "</select>" +
                    "</div>";
                break;
        }

        // Injecting form input in html.
        $("#formBuilder").append(html);

        // Make possible the input resizing horizontally.

        $('.formInput,.form-check,.form-radio').resizable({
            grid: [100, 1000],
            maxWidth: containerWidth,
            minWidth: 100
        });


        // Removing input button
        $('.btnRemove').on("click", function () {
            $(this).closest(".form-group, .form-check , .form-radio").remove();
        });


        // For the textarea we need a full resizing ( Horizontally/Vertically ).

        $('.formTextarea').resizable({
            maxWidth: containerWidth,
            minWidth: 100,
            grid: 100
        });


        $(".formInput, .formCheckbox, .formTextarea, .formRadio , .formSelect ").on('click', function () {


            $('.formInput, .formCheckbox, .formTextarea, .formRadio, .formSelect').removeClass('selected');
            $(this).addClass('selected');


            // If the modify div has the inactive class, we remove it add the active class to display the div.
            if ($('.inputModify').hasClass('inactive')) {
                $('.inputModify').removeClass('inactive');
                $('.inputModify').addClass('active');
            }

            // Verify the fields.. if not empty : insert value into variables, else if empty set value to "???"
            $(this).labels().text() ? inputLabel = $(this).labels().text() : inputLabel = "???";
            $(this).attr("id") ? inputID = $(this).attr("id") : inputID = "???";
            $(this).attr("name") ? inputName = $(this).attr("name") : inputName = "???";
            $(this).attr("class") ? inputClass = $(this).attr("class") : inputClass = "???";
            $(this).attr("placeholder") ? inputPlaceholder = $(this).attr("placeholder") : inputPlaceholder = "???";


            // Once variables are sets we inject the values in HTML.
            $("#modifyLabelInput").val(inputLabel);
            $("#modifyNameInput").val(inputName);
            $('#modifyClassInput').val(inputClass);
            $('#modifyIDInput').val(inputID);
            $('#modifyPlaceholderInput').val(inputPlaceholder);


            $(".inputModify").on("change paste keyup", function () {
                $('.selected').labels().text($("#modifyLabelInput").val());
                $('.selected').attr("id", $("#modifyIDInput").val());
                $('.selected').attr("name", $("#modifyNameInput").val());
                $('.selected').attr("class", $("#modifyClassInput").val());
                $('.selected').attr("placeholder", $("#modifyPlaceholderInput").val());
            });
        });

        $(".title").on('click', function () {
            $('.title').removeClass('titleSelected');
            $(this).addClass('titleSelected');
            if ($('.titleModify').hasClass('inactive')) {
                $('.titleModify').removeClass('inactive');
                $('.titleModify').addClass('active');
            }
            $(this).html() ? title = $(this).html() : title = "???";
            $('#modifyTitle').val(title);
            $('.modifyTitle').on("change paste keyup", function () {
                $('.titleSelected').html($('#modifyTitle').val())
            })
        });
    });

    $('#addOptionButton').on('click', function () {
        var addOption = $('#addOptionInput').val();
        console.log(addOption);
        var selected = $('.selected');
        selected.append('<option>' + addOption + '</option>');
    });

    $('.convertJSONButton').on('click', function () {
        /*var formData = JSON.stringify($("#formBuilder").serializeArray());*/

        var element = document.getElementById('formBuilder');
        var html = element.outerHTML;
        var data = {html: html};
        var json = JSON.stringify(data);
        savedForm.push(json);
        console.log(savedForm);
    })
});
