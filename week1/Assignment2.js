let temperatures = [32, 45, 50, 84, 90, 78, 68];

let temperature1 = [];

temperatures.map((fahrenheit) => {
    const celcius = Math.floor((fahrenheit -32)*95);
    temperature1.push(celcius);
})

// sorted values

const sortedArray = temperature1.sort();
console.log("Sorted Array:",sortedArray)
// extracted values
const extractedValues = temperature1.slice(0,3)
console.log("Extracted Values:", extractedValues)

//final array
console.log("Final Array:", temperature1)