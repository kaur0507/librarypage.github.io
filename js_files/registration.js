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

//walidacja

function nameClick(){
    var name = document.getElementById('name');
    if(name.value.length==150){
        alert("Imię nie może mieć więcej niż 150 znaków!");
    }
    if(name.value.length==0){
        setError(name, "\nImię nie może pozostać puste!");
    }
    else{
        setSuccess(name);
    }
}

function surnameClick(){
    var surname = document.getElementById('surname');
    if(surname.value.length==150){
        alert("Nazwisko nie może mieć więcej niż 150 znaków!");
    }
    if(surname.value.length==0){
        setError(surname, "\nNazwisko nie może pozostać puste!");
    }
    else{
        setSuccess(surname);
    }
}

function emailClick(){
    var email = document.getElementById('email');
    const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    
    if(re.test(email.value)==false){
        setError(email, "\nBłędny format adresu e-mail");
    }
    else{
        setSuccess(email);
    }
}

function passwordClick(){
    var password = document.getElementById('password');
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\.\+\*\?\^\$\(\)\[\]\{\}\|\\]).{8,}$/;
    
    if(re.test(password.value)==false){
        setError(password, "\nHasło musi zawierać: min. 8 znaków, min. 1 małą literę, min. 1 dużą literę, cyfrę i znak specjalny");
    }
    else{
        setSuccess(password);
    }
}

function validPasswordClick(){
    var password = document.getElementById('password');
    var confirm_password = document.getElementById('password_validation');
    
    if(password.value != confirm_password.value || confirm_password.value == ""){
        setError(confirm_password, "\nHasła muszą być takie same!");
    }
    else{
        setSuccess(confirm_password);
    }
}

function voivodeClick(){
    var voivodeship = document.getElementById("source");
    if(voivodeship.value=="Wybierz województwo"){
        setError(voivodeship, "\nWybierz województwo!");
    }
    else{
        setSuccess(voivodeship);
    }
}

function cityClick(){
    var city = document.getElementById("from_source");
    if(city.value==""){
        setError(city, "\nWybierz miasto!");
        return false;
    }
    else{
        setSuccess(city);
        return true;
    }
}

function zipClick(){
    var tab = document.getElementsByClassName('value_zip');
    var pom = "";
    const re = /^[0-9]{2}\-[0-9]{3}$/;

    for(var i=0; i<tab.length; i++){
        if(i == 2){
            pom += "-";
        }
        pom += tab[i].value;
        document.getElementById("hidden_zip").value = '';
        document.getElementById("hidden_zip").value = pom;
    }

    hidden_zip = document.getElementById("hidden_zip");

    if(re.test(pom)==false){
        setError(hidden_zip, "\nPodaj poprawny kod pocztowy!");
    }
    else{
        setSuccess(hidden_zip);
    }
    
}

function radioClick(){
    var error = document.getElementById("op3");
    var o1 = document.getElementById("op1").checked;
    var o2 = document.getElementById("op2").checked;
    var o3 = document.getElementById("op3").checked;
    if(o1==false && o2==false && o3==false){
        setError(error, "\nZaznacz płeć!");
        return false;
    }
    else{
        return true;
    }
}

// function acceptClick(){
//     var conf = document.getElementById("accept").checked;
//     if(conf==false){
//         setError(conf, "\nZgoda jest wymagana!");
//         return false;
//     }
//     else{
//         return true;
//     }
// }

function setError(input, message){
    var control = input.parentElement;
    var error = control.querySelector('small');

    error.innerText = message;
    control.className = 'registration_form_element error';
}
function setSuccess(input){
    var control = input.parentElement;

    control.className = 'registration_form_element success';
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

function formSerialize(){
    var form = $("#register").serializeArray();
    var data = [];
    data.push("Imię: " + form[0].value);
    data.push("\nNazwisko: " + form[1].value);
    data.push("\nEmial: " + form[2].value);
    data.push("\nWojewództwo: " + form[5].value);
    data.push("\nMiasto: " + form[6].value);

    var tab = document.getElementsByClassName('value_zip');
    var pom = "";
    for(var i=0; i<tab.length; i++){
        if(i == 2){
            pom += "-";
        }
        pom += tab[i].value;
    }
    
    data.push("\nKod pocztowy: " + pom);
    data.push("\nPłeć: " + form[12].value);
    if(form[13].value=="on"){
        form[13].value = "Tak";
    }
    else{
        form[13].value = Nie;
    }
    if(form[14].value=="on"){
        form[14].value = "Tak";
    }
    data.push("\nAkceptacja warunków regulaminu: " + form[13].value);
    data.push("\nZgoda marketingowa: " + form[14].value);
    alert(data);
}

function validate(){

    if(confirmation()== false || radioClick()==false || cityClick()==false){
        alert("Spróbuj ponownie.")
        return false;
    }
    else{
        formSerialize();
        return true;
    }
    
}
