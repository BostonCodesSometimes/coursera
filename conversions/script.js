function temperature(){
    // converts c to f
    // f = (c * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f
}
function weight(){
    // lbs = kgs * 2.2
    // converts kgs to lbs
    var kgs = document.getElementById("kilo").value;
    var lbs = kgs * 2.2;
    document.getElementById("pounds").value = lbs;
}
function distance(){
    // converts km to miles
    // KM * 0.62137
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    document.getElementById("miles").value = m
}
