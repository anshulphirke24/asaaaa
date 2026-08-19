function check() {
    var p = document.getElementById("pass").value;

    if (p === "0724") {
        window.location.href = "page1.html";
    } else {
        alert("Wrong password ❌");
    }
}
