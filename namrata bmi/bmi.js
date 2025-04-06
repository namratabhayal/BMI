function calculateBMI(weight, height) {
    let bmi = weight / (height * height);

    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    return `Your BMI is ${bmi.toFixed(2)} kg/m² and you are classified as ${category}.`;
}

 
let weight = parseFloat(prompt("Enter your weight in kilograms (e.g., 70):"));
let height = parseFloat(prompt("Enter your height in meters (e.g., 1.75):"));

if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
    alert(calculateBMI(weight, height));
} else {
    alert("Please enter valid weight and height values.");
}