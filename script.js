var name_array = [];

function submit(){
    var name = document.getElementById("name").value;
    name_array.push(name);
    name_array.sort();
    document.getElementById("display_name").innerHTML = name_array;
}
function show(){
    var show_name = [];
    for(var i = 0; i<name_array.length; i++){
        show_name.push("<h4>" + name_array[i] + "</h4>");
    }
    var remove_comma = show_name.join(" ");
    document.getElementById("show_name").innerHTML = remove_comma;
}
function search(){
    var search = document.getElementById("search").value;
    var found = 0;
    for(var t = 0; t<name_array.length; t++){
        if(search==name_array[t]){
            found=found+1;
        }
    }
    document.getElementById("display_search").innerHTML = "Name Found " + found + "time/s";
}