while (true) {
    var inp = prompt("Please enter a number")
    if (isNaN(inp) || inp === "")
        alert("Inavlid input, please enter a number")
    else {
        var num = Number(inp)
        if (num % 3 == 0 && num % 5 == 0) {
            alert("fizz buzz")
            break
        }
        else if (num % 5 == 0) {
            alert("buzz")
            break
        }

        else if (num % 3 == 0) {
            alert("fizz")
            break
        }

        else {
            alert("none")
            break
        }
    }

}