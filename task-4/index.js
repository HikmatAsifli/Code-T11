let boy = parseFloat(prompt("Zəhmət olmasa boyunuzu metr ilə daxil edin :"));
let ceki = parseFloat(prompt("Zəhmət olmasa çəkinizi kiloqram ilə daxil edin  :"));

let bmi =ceki/(boy*boy);

if (bmi > 25){
    console.log("Bu, artıq çəkili olduğunuzu göstərir.");
} else if(bmi >= 18.5 && bmi <= 24.9){
    console.log("Bu, normal çəki olduğunuzu göstərir");
} else {
    console.log("Bu, arıq olduğunuzu göstərir");
}