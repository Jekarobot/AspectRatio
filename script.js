document.getElementById("aspect-ratio-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;

    if (a && b && c && !d) {
        d = (b * c) / a;
        document.getElementById("d").value = d.toFixed(2);
    } else if (a && b && !c && d) {
        c = (a * d) / b;
        document.getElementById("c").value = c.toFixed(2);
    } else if (a && !b && c && d) {
        b = (a * d) / c;
        document.getElementById("b").value = b.toFixed(2);
    } else if (!a && b && c && d) {
        a = (b * c) / d;
        document.getElementById("a").value = a.toFixed(2);
    } else {
        document.getElementById("result").innerHTML = "Только одно поле должно быть пустым";
    }
});