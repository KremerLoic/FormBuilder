

$( function() {
    $( "#sortable2" ).sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();

} );


$('li').on("mousedown",function(){
$(this).addClass('selected');
var html = $(".selected").clone();
$("#sortable2").append(html);

});



$('li').on("mouseup",function(){
    $('li').each(function(index){
        $(this).removeClass('selected');
    })

});


