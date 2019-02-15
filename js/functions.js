function updateFields(){

    $(this).attr("id") ? inputID = $(this).attr("id") : inputID = "???";
    $(this).attr("name") ? inputName = $(this).attr("name") : inputName = "???";
    $(this).attr("class") ? inputClass = $(this).attr("class") : inputClass = "???";
    $(this).attr("placeholder") ? inputPlaceholder = $(this).attr("placeholder") : inputPlaceholder = "???";


    // Once variables are sets we inject the values in HTML.
    $("#modifyNameInput").val(inputName);
    $('#modifyClassInput').val(inputClass);
    $('#modifyIDInput').val(inputID);
    $('#modifyPlaceholderInput').val(inputPlaceholder);


}