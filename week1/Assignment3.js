function createCode(name, dob){
    const extractedName = name.slice(0,3)
    const extractedDob = dob.slice(2,4)
    const concatString = extractedName.concat(extractedDob)
    const upperCase = concatString.toUpperCase();
    console.log("Output", upperCase)
}

createCode("John", "1995-06-15")
