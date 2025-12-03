y = prompt("Enter a Year: ")

if (y % 400 === 0){
    document.write(y+ " is a leap year.")
}
    else if (y % 100 === 0) {
        document.write(y+ " is not a leap year. Try again. ")
    }
    else if (y % 4 === 0) {
    document.write(y + "  is a leap year.")
}




