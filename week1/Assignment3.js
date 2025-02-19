function createCode(name, dob){
    const extractedName = name.slice(0,3)
    const extractedDob = dob.slice(2,4)
    const concatString = extractedName.concat(extractedDob)
    console.log("Output", concatString)
}

createCode("John", "1995-06-15")
