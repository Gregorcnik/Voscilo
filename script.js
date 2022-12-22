function valid () {
  let x = document.getElementById("geslo").value;
  if (x == "") {
    return true;
  } else {
    document.getElementById("message").innerHTML = "Nepravilno geslo!";
    document.getElementById("geslo").value = "";
    return false;
  }
}
function enter () {
  document.getElementById("zacetek").style = "visibility: hidden;";
  document.getElementById("voscilo").style = "";
}
