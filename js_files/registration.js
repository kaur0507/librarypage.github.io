//walidacja


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
    console.log(passwordValid());
    console.log(radioChecked());
    console.log(confirmation());
    if(passwordValid()==false || radioChecked()==false || confirmation()==false){
        alert("Spróbuj ponownie.")
        return false;
    }
    else{
        alert("Udało się poprawnie zarejestrować!");   
        return true;
    }
    
}

//lista rozwijana



function choice(listindex)
{
    switch (listindex)
    {
    case "dolnośląskie" :
        document.getElementById("from_source").options[0]=new Option("Wybierz miasto","");
        document.getElementById("from_source").options[1]=new Option("Wrocław");
        document.getElementById("from_source").options[2]=new Option("Wałbrzych");
        document.getElementById("from_source").options[3]=new Option("Legnica");
        document.getElementById("from_source").options[4]=new Option("Jelenia Góra");
        document.getElementById("from_source").options[5]=new Option("Lubin");
        document.getElementById("from_source").options[6]=new Option("Głogów");
        document.getElementById("from_source").options[7]=new Option("Świdnica");
        document.getElementById("from_source").options[8]=new Option("Bolesławiec");
        document.getElementById("from_source").options[9]=new Option("Oleśnica");
        document.getElementById("from_source").options[10]=new Option("Oława");
        document.getElementById("from_source").options[11]=new Option("Dzierżoniów");
        document.getElementById("from_source").options[12]=new Option("Zgorzelec");
        document.getElementById("from_source").options[13]=new Option("Kłodzko");
        document.getElementById("from_source").options[14]=new Option("Jawor");
        document.getElementById("from_source").options[15]=new Option("Polkowice");
        document.getElementById("from_source").options[16]=new Option("Lubań");
        document.getElementById("from_source").options[17]=new Option("Kamienna Góra");
        document.getElementById("from_source").options[18]=new Option("Złotoryja");
        document.getElementById("from_source").options[19]=new Option("Ząbkowice Śląskie");
        document.getElementById("from_source").options[20]=new Option("Trzebnica");
        document.getElementById("from_source").options[21]=new Option("Strzelin");
        document.getElementById("from_source").options[22]=new Option("Wołów");
        document.getElementById("from_source").options[23]=new Option("Góra");
        document.getElementById("from_source").options[24]=new Option("Milicz");
        document.getElementById("from_source").options[25]=new Option("Środa Śląska");
        document.getElementById("from_source").options[26]=new Option("Lwówek Śląski");
        break;
    case "kujawsko-pomorskie" :
        document.getElementById("from_source").options[0]=new Option("Wybierz miasto","");
        document.getElementById("from_source").options[1]=new Option("Bydgoszcz");
        document.getElementById("from_source").options[2]=new Option("Toruń");
        document.getElementById("from_source").options[3]=new Option("Włocławek");
        document.getElementById("from_source").options[4]=new Option("Grudziądz");
        document.getElementById("from_source").options[5]=new Option("Inowrocław");
        document.getElementById("from_source").options[6]=new Option("Brodnica");
        document.getElementById("from_source").options[7]=new Option("Świecie");
        document.getElementById("from_source").options[8]=new Option("Chełmno");
        document.getElementById("from_source").options[9]=new Option("Nakło nad Notecią");
        document.getElementById("from_source").options[10]=new Option("Rypin");
        document.getElementById("from_source").options[11]=new Option("Lipno");
        document.getElementById("from_source").options[12]=new Option("Żnin");
        document.getElementById("from_source").options[13]=new Option("Tuchola");
        document.getElementById("from_source").options[14]=new Option("Wąbrzeźno");
        document.getElementById("from_source").options[15]=new Option("Golub-Dobrzyń");
        document.getElementById("from_source").options[16]=new Option("Aleksandrów Kujawski");
        document.getElementById("from_source").options[17]=new Option("Mogilno");
        document.getElementById("from_source").options[18]=new Option("Sępólno Krajeńskie");
        document.getElementById("from_source").options[19]=new Option("Radziejów");
        break;
    case "lubelskie" :
        document.getElementById("from_source").options[0]=new Option("Wybierz miasto","");
        document.getElementById("from_source").options[1]=new Option("Lublin");
        document.getElementById("from_source").options[2]=new Option("Puławy");
        document.getElementById("from_source").options[3]=new Option("Białą Podlaska");
        document.getElementById("from_source").options[4]=new Option("Krasnystaw");
        document.getElementById("from_source").options[5]=new Option("Dęblin");
        document.getElementById("from_source").options[6]=new Option("Łuków");
        document.getElementById("from_source").options[7]=new Option("Chełm");
        document.getElementById("from_source").options[8]=new Option("Hrubieszów");
        document.getElementById("from_source").options[9]=new Option("Kazimierz Dolny");
        document.getElementById("from_source").options[10]=new Option("Zamość");
        document.getElementById("from_source").options[11]=new Option("Ostrów Lubelski");
        document.getElementById("from_source").options[12]=new Option("Szczebrzeszyn");
        break;
    case "lubuskie" :
        document.getElementById("from_source").options[0]=new Option("Wybierz miasto","");
        document.getElementById("from_source").options[1]=new Option("Babimost");
        document.getElementById("from_source").options[2]=new Option("Bytom Odrzański");
        document.getElementById("from_source").options[3]=new Option("Cybinka");
        document.getElementById("from_source").options[4]=new Option("Czerwieńsk");
        document.getElementById("from_source").options[5]=new Option("Dobiegniew");
        document.getElementById("from_source").options[6]=new Option("Drezdenko");
        document.getElementById("from_source").options[7]=new Option("Gorzów Wielkopolski");
        document.getElementById("from_source").options[8]=new Option("Gozdnica");
        document.getElementById("from_source").options[9]=new Option("Gubin");
        document.getElementById("from_source").options[10]=new Option("Iłowa");
        document.getElementById("from_source").options[11]=new Option("Jasień");
        document.getElementById("from_source").options[12]=new Option("Kargowa");
        document.getElementById("from_source").options[13]=new Option("Kostrzyn nad Odrą");
        document.getElementById("from_source").options[14]=new Option("Kożuchów");
        document.getElementById("from_source").options[15]=new Option("Krosno Odrzańskie");
        document.getElementById("from_source").options[16]=new Option("Lubniewice");
        document.getElementById("from_source").options[17]=new Option("Lubsko");
        document.getElementById("from_source").options[18]=new Option("Łęknica");
        document.getElementById("from_source").options[19]=new Option("Małomice");
        document.getElementById("from_source").options[20]=new Option("Międzyrzecz");
        break;
    case "łódzkie" :
        document.getElementById("from_source").options[0]=new Option("Wybierz miasto","");
        document.getElementById("from_source").options[1]=new Option("Łódź");
        document.getElementById("from_source").options[2]=new Option("Piotrków Trybunalski");
        document.getElementById("from_source").options[3]=new Option("Pabianice");
        document.getElementById("from_source").options[4]=new Option("Tomaszów Mazowiecki");
        document.getElementById("from_source").options[5]=new Option("Bełchatów");
        document.getElementById("from_source").options[6]=new Option("Zgierz");
        document.getElementById("from_source").options[7]=new Option("Skierniewice");
        document.getElementById("from_source").options[8]=new Option("Radomsko");
        document.getElementById("from_source").options[9]=new Option("Kutno");
        document.getElementById("from_source").options[10]=new Option("Sieradz");
        document.getElementById("from_source").options[11]=new Option("Zduńska Wola");
        document.getElementById("from_source").options[12]=new Option("Łowicz");
        document.getElementById("from_source").options[13]=new Option("Wieluń");
        document.getElementById("from_source").options[14]=new Option("Aleksandrów Łódzki");
        document.getElementById("from_source").options[15]=new Option("Opoczno");
        break;
    case "małopolskie" :
        document.getElementById("from_source").options[0]=new Option("Wybierz miasto","");
        document.getElementById("from_source").options[1]=new Option("Kraków");
        document.getElementById("from_source").options[2]=new Option("Tarnów");
        document.getElementById("from_source").options[3]=new Option("Nowy Sącz");
        document.getElementById("from_source").options[4]=new Option("Oświęcim");
        document.getElementById("from_source").options[5]=new Option("Chrzanów");
        document.getElementById("from_source").options[6]=new Option("Olkusz");
        document.getElementById("from_source").options[7]=new Option("Nowy Targ");
        document.getElementById("from_source").options[8]=new Option("Bochnia");
        document.getElementById("from_source").options[9]=new Option("Gorlice");
        document.getElementById("from_source").options[10]=new Option("Zakopane");
        document.getElementById("from_source").options[11]=new Option("Skawina");
        document.getElementById("from_source").options[12]=new Option("Wieliczka");
        document.getElementById("from_source").options[13]=new Option("Andrychów");
        document.getElementById("from_source").options[14]=new Option("Trzebinia");
        document.getElementById("from_source").options[15]=new Option("Wadowice");
        break;
    case "mazowieckie" :
        document.getElementById("from_source").options[0]=new Option("Wybierz miasto","");
        document.getElementById("from_source").options[1]=new Option("Warszawa");
        document.getElementById("from_source").options[2]=new Option("Radom");
        document.getElementById("from_source").options[3]=new Option("Płock");
        document.getElementById("from_source").options[4]=new Option("Siedlice");
        document.getElementById("from_source").options[5]=new Option("Pruszków");
        document.getElementById("from_source").options[6]=new Option("Legionowo");
        document.getElementById("from_source").options[7]=new Option("Ostrołęka");
        document.getElementById("from_source").options[8]=new Option("Piaseczno");
        document.getElementById("from_source").options[9]=new Option("Otwock");
        document.getElementById("from_source").options[10]=new Option("Ciechanów");
        document.getElementById("from_source").options[11]=new Option("Żyrardów");
        document.getElementById("from_source").options[12]=new Option("Mińsk Mazowiecki");
        document.getElementById("from_source").options[13]=new Option("Wołomin");
        document.getElementById("from_source").options[14]=new Option("Sochaczew");
        document.getElementById("from_source").options[15]=new Option("Ząbki");
        break;
    case "opolskie" :
        document.getElementById("from_source").options[0]=new Option("Wybierz miasto","");
        document.getElementById("from_source").options[1]=new Option("Opole");
        document.getElementById("from_source").options[2]=new Option("Kędzierzyn-Koźle");
        document.getElementById("from_source").options[3]=new Option("Nysa");
        document.getElementById("from_source").options[4]=new Option("Brzeg");
        document.getElementById("from_source").options[5]=new Option("Kluczbork");
        document.getElementById("from_source").options[6]=new Option("Prudnik");
        document.getElementById("from_source").options[7]=new Option("Strzelce Opolskie");
        document.getElementById("from_source").options[8]=new Option("Namysłów");
        document.getElementById("from_source").options[9]=new Option("Krapkowice");
        document.getElementById("from_source").options[10]=new Option("Głuchołazy");
        document.getElementById("from_source").options[11]=new Option("Głubczyce");
        document.getElementById("from_source").options[12]=new Option("Zdzieszowice");
        document.getElementById("from_source").options[13]=new Option("Olesno");
        document.getElementById("from_source").options[14]=new Option("Ozimek");
        document.getElementById("from_source").options[15]=new Option("Grodków");
        break;
    case "podkarpackie" :
        document.getElementById("from_source").options[0]=new Option("Wybierz miasto","");
        document.getElementById("from_source").options[1]=new Option("Rzeszów");
        document.getElementById("from_source").options[2]=new Option("Mielec");
        document.getElementById("from_source").options[3]=new Option("Przemyśl");
        document.getElementById("from_source").options[4]=new Option("Stalowa Wola");
        document.getElementById("from_source").options[5]=new Option("Tarnobrzeg");
        document.getElementById("from_source").options[6]=new Option("Krosno");
        document.getElementById("from_source").options[7]=new Option("Dębica");
        document.getElementById("from_source").options[8]=new Option("Jarosław");
        document.getElementById("from_source").options[9]=new Option("Sanok");
        document.getElementById("from_source").options[10]=new Option("Jasło");
        document.getElementById("from_source").options[11]=new Option("Łańcut");
        document.getElementById("from_source").options[12]=new Option("Ropczyce");
        document.getElementById("from_source").options[13]=new Option("Nisko");
        document.getElementById("from_source").options[14]=new Option("Przeworsk");
        document.getElementById("from_source").options[15]=new Option("Leżajsk");
        break;
    case "podlaskie" :
        document.getElementById("from_source").options[0]=new Option("Wybierz miasto","");
        document.getElementById("from_source").options[1]=new Option("Białystok");
        document.getElementById("from_source").options[2]=new Option("Suwałki");
        document.getElementById("from_source").options[3]=new Option("Łomża");
        document.getElementById("from_source").options[4]=new Option("Augustów");
        document.getElementById("from_source").options[5]=new Option("Bielsk Podlaski");
        document.getElementById("from_source").options[6]=new Option("Zambrów");
        document.getElementById("from_source").options[7]=new Option("Grajewo");
        document.getElementById("from_source").options[8]=new Option("Hajnówka");
        document.getElementById("from_source").options[9]=new Option("Sokółka");
        document.getElementById("from_source").options[10]=new Option("Łapy");
        document.getElementById("from_source").options[11]=new Option("Siemiatycze");
        document.getElementById("from_source").options[12]=new Option("Wasilków");
        document.getElementById("from_source").options[13]=new Option("Kolno");
        document.getElementById("from_source").options[14]=new Option("Mońki");
        document.getElementById("from_source").options[15]=new Option("Wysokie Mazowieckie");
        break;
    case "pomorskie" :
        document.getElementById("from_source").options[0]=new Option("Wybierz miasto","");
        document.getElementById("from_source").options[1]=new Option("Gdańsk");
        document.getElementById("from_source").options[2]=new Option("Gdynia");
        document.getElementById("from_source").options[3]=new Option("Słupsk");
        document.getElementById("from_source").options[4]=new Option("Tczew");
        document.getElementById("from_source").options[5]=new Option("Rumia");
        document.getElementById("from_source").options[6]=new Option("Wejherowo");
        document.getElementById("from_source").options[7]=new Option("Starograd Gdański");
        document.getElementById("from_source").options[8]=new Option("Chojnice");
        document.getElementById("from_source").options[9]=new Option("Kwidzyn");
        document.getElementById("from_source").options[10]=new Option("Malbork");
        document.getElementById("from_source").options[11]=new Option("Sopot");
        document.getElementById("from_source").options[12]=new Option("Lębork");
        document.getElementById("from_source").options[13]=new Option("Pruszcz Gdański");
        document.getElementById("from_source").options[14]=new Option("Reda");
        document.getElementById("from_source").options[15]=new Option("Kościerzyna");
        break;
    case "śląskie" :
        document.getElementById("from_source").options[0]=new Option("Wybierz miasto","");
        document.getElementById("from_source").options[1]=new Option("Katowice");
        document.getElementById("from_source").options[2]=new Option("Częstochowa");
        document.getElementById("from_source").options[3]=new Option("Sosnowiec");
        document.getElementById("from_source").options[4]=new Option("Gliwice");
        document.getElementById("from_source").options[5]=new Option("Zabrze");
        document.getElementById("from_source").options[6]=new Option("Bielsko-Biała");
        document.getElementById("from_source").options[7]=new Option("Bytom");
        document.getElementById("from_source").options[8]=new Option("Ruda Śląska");
        document.getElementById("from_source").options[9]=new Option("Rybnik");
        document.getElementById("from_source").options[10]=new Option("Tychy");
        document.getElementById("from_source").options[11]=new Option("Dąbrowa Górnicza");
        document.getElementById("from_source").options[12]=new Option("Chorzów");
        document.getElementById("from_source").options[13]=new Option("Jaworzno");
        document.getElementById("from_source").options[14]=new Option("Jastrzębie-Zdrój");
        document.getElementById("from_source").options[15]=new Option("Mysłowice");
        break;
    case "świętokrzyskie" :
        document.getElementById("from_source").options[0]=new Option("Wybierz miasto","");
        document.getElementById("from_source").options[1]=new Option("Kielce");
        document.getElementById("from_source").options[2]=new Option("Ostrów Świętokrzyski");
        document.getElementById("from_source").options[3]=new Option("Starachowice");
        document.getElementById("from_source").options[4]=new Option("Skarżysko-Kamienna");
        document.getElementById("from_source").options[5]=new Option("Sandomierz");
        document.getElementById("from_source").options[6]=new Option("Końskie");
        document.getElementById("from_source").options[7]=new Option("Busko-Zdrój");
        document.getElementById("from_source").options[8]=new Option("Jędrzejów");
        document.getElementById("from_source").options[9]=new Option("Staszów");
        document.getElementById("from_source").options[10]=new Option("Pińczów");
        document.getElementById("from_source").options[11]=new Option("Włoszczowa");
        document.getElementById("from_source").options[12]=new Option("Opatów");
        document.getElementById("from_source").options[13]=new Option("Kazimierza Wielka");
        document.getElementById("from_source").options[14]=new Option("Ożarów");
        document.getElementById("from_source").options[15]=new Option("Połaniec");
        break;
    case "warmińsko-mazurskie" :
        document.getElementById("from_source").options[0]=new Option("Wybierz miasto","");
        document.getElementById("from_source").options[1]=new Option("Olsztyn");
        document.getElementById("from_source").options[2]=new Option("Elbląg");
        document.getElementById("from_source").options[3]=new Option("Ełk");
        document.getElementById("from_source").options[4]=new Option("Iława");
        document.getElementById("from_source").options[5]=new Option("Ostróda");
        document.getElementById("from_source").options[6]=new Option("Giżycko");
        document.getElementById("from_source").options[7]=new Option("Kętrzyn");
        document.getElementById("from_source").options[8]=new Option("Bartoszyce");
        document.getElementById("from_source").options[9]=new Option("Szczytno");
        document.getElementById("from_source").options[10]=new Option("Mrągowo");
        document.getElementById("from_source").options[11]=new Option("Działdowo");
        document.getElementById("from_source").options[12]=new Option("Pisz");
        document.getElementById("from_source").options[13]=new Option("Braniewo");
        document.getElementById("from_source").options[14]=new Option("Olecko");
        document.getElementById("from_source").options[15]=new Option("Gołdap");
        break;
    case "wielkopolskie" :
        document.getElementById("from_source").options[0]=new Option("Wybierz miasto","");
        document.getElementById("from_source").options[1]=new Option("Poznań");
        document.getElementById("from_source").options[2]=new Option("Kalisz");
        document.getElementById("from_source").options[3]=new Option("Konin");
        document.getElementById("from_source").options[4]=new Option("Leszno");
        document.getElementById("from_source").options[5]=new Option("Rawicz");
        document.getElementById("from_source").options[6]=new Option("Śrem");
        document.getElementById("from_source").options[7]=new Option("Jarocin");
        document.getElementById("from_source").options[8]=new Option("Kępno");
        document.getElementById("from_source").options[9]=new Option("Środa Wielkopolska");
        document.getElementById("from_source").options[10]=new Option("Grodzisk Wielkopolski");
        document.getElementById("from_source").options[11]=new Option("Wolsztyn");
        document.getElementById("from_source").options[12]=new Option("Chodzież");
        document.getElementById("from_source").options[13]=new Option("Września");
        document.getElementById("from_source").options[14]=new Option("Pleszew");
        document.getElementById("from_source").options[15]=new Option("Oborniki");
        break;
    case "zachodniopomorskie" :
        document.getElementById("from_source").options[0]=new Option("Wybierz miasto","");
        document.getElementById("from_source").options[1]=new Option("Szczecin");
        document.getElementById("from_source").options[2]=new Option("Koszalin");
        document.getElementById("from_source").options[3]=new Option("Stargard");
        document.getElementById("from_source").options[4]=new Option("Kołobrzeg");
        document.getElementById("from_source").options[5]=new Option("Świnoujście");
        document.getElementById("from_source").options[6]=new Option("Szczecinek");
        document.getElementById("from_source").options[7]=new Option("Police");
        document.getElementById("from_source").options[8]=new Option("Wałćz");
        document.getElementById("from_source").options[9]=new Option("Białograd");
        document.getElementById("from_source").options[10]=new Option("Goleniów");
        document.getElementById("from_source").options[11]=new Option("Gryfino");
        document.getElementById("from_source").options[12]=new Option("Nowogard");
        document.getElementById("from_source").options[13]=new Option("Gryfice");
        document.getElementById("from_source").options[14]=new Option("Świdwin");
        document.getElementById("from_source").options[15]=new Option("Choszczno");
        break;
    }
    return true;
}