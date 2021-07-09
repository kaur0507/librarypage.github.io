function search(){
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("book_filter");
    filter = input.value.toUpperCase();
    table = document.getElementById("table_to_filter");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        td1 = tr[i].getElementsByTagName("td")[0];
        console.log(td1);
        td2 = tr[i].getElementsByTagName("td")[1];
        console.log(td2);
        if(td1){
            txtValue1 = String(td1.value);
            txtValue2 = String(td2.value);
            console.log(txtValue1);
            console.log(txtValue2);
            if(txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            } 
            else{
                tr[i].style.display = "none";
            }
        }       
    }
}
