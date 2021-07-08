function sumUp(){
    var f = document.getElementsByName("form_data");
    var pom = Array.from(f);
    var v = [];
    for(var i = 0; i < pom.length; i++){
        if(pom[i].value==""){
            alert("Uzupełnij wszystkie pola!");
            return
        }
        v[i] = String(pom[i].value);
    }
    alert("Podane przez Ciebie dane to:\n"+v.join("\n"));
}

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}
