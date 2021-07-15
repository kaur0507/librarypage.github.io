//lista rozwijana

function choice(number){
    //console.log(number);
    $.ajax({
        url: '../json_files/cities.json',
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function(data){
            //console.log(data);
        
            var options = '';
                for (var j = 0; j<data[number].length; j++){
                    options += '<option>' + data[number][j].name + '</option>';
                }
            $("#from_source").html(options);

        }
    });
}

//walidacja

function zip(){
    
    var zip1 = String(document.getElementById("country_code1").value);
    var zip2 = String(document.getElementById("country_code2").value);
    var zip3 = String(document.getElementById("country_code3").value);
    var zip4 = String(document.getElementById("country_code4").value);
    var zip5 = String(document.getElementById("country_code5").value);
    return zip1+zip2+"-"+zip3+zip4+zip5;
}

function emptyVoi(){
    var voivodeship = document.getElementById("source");
    if(voivodeship.value=="Wybierz województwo"){
        alert("Wybierz województwo!");
        return false;
    }
    return true;
}

function emptyCit(){
    var city = document.getElementById("from_source");
    if(city.value==""){
        alert("Wybierz miasto!");
        return false;
    }
    return true;
}

function confirmation(){
    var conf = document.getElementById("consent").checked;
    if(conf==false){
        return confirm("Czy jesteś pewien, że nie chcesz otrzymywać materiałów marketingowych?");
    }
    else{
        return true;
    }
}

function passwordValid(){
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("password_validation");
    if(password.value != confirm_password.value){
        alert("Hasła muszą być takie same!");
        return false;
    }
    else{
        return true;
    }
}

function radioChecked(){

    var o1 = document.getElementById("op1").checked;
    var o2 = document.getElementById("op2").checked;
    var o3 = document.getElementById("op3").checked;
    if(o1==false && o2==false && o3==false){
        alert("Zaznacz płeć!");
        return false;
    }
    else{
        return true;
    }
}

function validate(){
    var name = document.getElementById("name");
    var surname = document.getElementById("surname");

    var zip_code = zip();

    if(name.value.length==150){
        alert("Imię nie może mieć więcej niż 150 znaków!");
    }

    if(surname.value.length==150){
        alert("Nazwisko nie może mieć więcej niż 150 znaków!");
    }

    if(passwordValid()==false || radioChecked()==false || confirmation()==false || emptyVoi()==false || emptyCit()==false ){
        alert("Spróbuj ponownie.")
    }
    else{
        var queryString = $('#register').serialize();
        console.log(queryString);
        //alert(queryString);
        alert("Udało się poprawnie zarejestrować!"); 
        return true;
    }


    // $( "form" ).on( "submit", function( event ) {
    //     event.preventDefault();
    //     console.log( $( this ).serialize() );
    //   });
    
}
