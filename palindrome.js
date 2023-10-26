function getValue() {
    var input = document.getElementById("palindrome").value;
    var lower = input.toLowerCase().replace(/ /g,'').replace(/[\W_]/g, "");
    var len = lower.length;
    for (var i = 0; i < len/2; i++) {}
        if (lower[i] !== lower[len - 1 - i]) {
            result = false;
            alert(result + " Ce n'est pas un palindrome");
        }
        else{
            result1 = true;
            alert(result1 + " C'est un palindrome");
        }
}