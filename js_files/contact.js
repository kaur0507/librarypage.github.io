// function sumUp(){
//     var queryString = $('form').serialize();
//     //var help = $('#container').text(queryString);
//     //console.log(help);
//     var pom = queryString.replace(/=/g,": ");
//     var pom2 = pom.replace(/&/g,"\n");
//     var pom3 = pom2.replace(/%20/g," ");
//     var pom4 = pom3.replace(/%40/g,"@");
//     var pom5 = pom4.replace(/%3A/g,":");
//     var zip_pom1 = pom5.replace(/\nZIP_div: /g,"-");
//     var zip_pom2 = zip_pom1.replace(/\nZIP: /g,"");
    
//     alert(zip_pom2);
// }


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

function streetClick(){
    var street = document.getElementById('street');
    var re = /^(ul.|al.|pl.|os.)+ +[0-9a-zA-Z]+ +[0-9]{1,}$/;

    if(re.test(street.value)==false){
        setError(street, "\nBłędny format ulicy");
    }
    else{
        setSuccess(street);
    }
}

function cityClick(){
    var city = document.getElementById("city");
    if(city.value==""){
        setError(city, "\nWpisz miasto!");
    }
    else{
        setSuccess(city);
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

function messageClick(){
    var surname = document.getElementById('message');
    if(surname.value.length==250){
        alert("Wiadomość nie może mieć więcej niż 250 znaków!");
    }
    if(surname.value.length==0){
        setError(surname, "\nPodaj wiadomość!");
    }
    else{
        setSuccess(surname);
    }
}

function setError(input, message){
    var control = input.parentElement;
    var error = control.querySelector('small');

    error.innerText = message;
    control.className = 'contact_form_element error';
}
function setSuccess(input){
    var control = input.parentElement;

    control.className = 'contact_form_element success';
}

function sumUp(){
    var form = $("#contact").serializeArray();
    var data = [];
    data.push("Imię: " + form[0].value);
    data.push("\nNazwisko :" + form[1].value);
    data.push("\nUlica: " + form[2].value);
    data.push("\nMiasto: " + form[3].value);

    var tab = document.getElementsByClassName('value_zip');
    var pom = "";
    for(var i=0; i<tab.length; i++){
        if(i == 2){
            pom += "-";
        }
        pom += tab[i].value;
    }
    
    data.push("\nKod pocztowy: " + pom);
    data.push("\nEmai;: " + form[9].value);
    data.push("\nWiadomość: " + form[10].value);
    alert(data);
}