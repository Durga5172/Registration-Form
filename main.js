function showalert() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;

    var stringBuilder = "";
    stringBuilder += "<table>";
    stringBuilder += "<thead>firstname</thead>";  
    stringBuilder += "<td>" + firstname + "</td>";
    stringBuilder += "<br>";
    stringBuilder += "<thead>lastname</thead>";
    stringBuilder += "<td>" + lastname + "</td>";
    stringBuilder += "<br>";
    stringBuilder += "<thead>email</thead>";
    stringBuilder += "<td>" + email + "</td>";
    stringBuilder += "<br>";
    stringBuilder += "<thead>Gender</thead>";
    stringBuilder += "<td>" + gender + "</td>";
    stringBuilder += "</table>";
    document.getElementById("table").innerHTML = stringBuilder;
    console.log(firstname + " " + lastname + " " + email + " " + gender);
}