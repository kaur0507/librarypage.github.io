// function choice(number){
//     console.log(number);
//     $.ajax({
//         url: '../json_files/cities.json',
//         dataType: 'json',
//         type: 'get',
//         cache: false,
//         success: function(data){
//             //console.log(data);
        
//             var options = '';
//                 for (var j = 0; j< data[number].length; j++){
//                     options += '<option>' + data[number][j].name + '</option>';
//                 }
//             $("#from_source").html(options);

//         }
//     });
// }