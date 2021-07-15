function sumUp(){
    var queryString = $('form').serialize();
    //var help = $('#container').text(queryString);
    //console.log(help);
    var pom = queryString.replace(/=/g,": ");
    var pom2 = pom.replace(/&/g,"\n");
    var pom3 = pom2.replace(/%20/g," ");
    var pom4 = pom3.replace(/%40/g,"@");
    var pom5 = pom4.replace(/%3A/g,":");
    var zip_pom1 = pom5.replace(/\nZIP_div: /g,"-");
    var zip_pom2 = zip_pom1.replace(/\nZIP: /g,"");
    
    alert(zip_pom2);
}