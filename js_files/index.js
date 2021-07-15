function choice(number){
    $.ajax({
        url: '../json_files/cities.json',
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function(data){
            var options = '';
                for (var j = 0; j<data[number].length; j++){
                    options += '<option>' + data[number][j].name + '</option>';
                }
            $("#from_source").html(options);
        }
    });
}

var queryString = $('#register').serializeArray();

$.each(queryString, function(i, field) {
    $("#d").append(field.name + ":" + field.value + ":::");
});

addEventListener('submit', (event) =>{
    event.preventDefault();

    checkInputs();
});