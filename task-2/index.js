let a = parseInt(prompt("Birinci ədədi daxil edin:"));
let b = parseInt(prompt("İkinci ədədi daxil edin:"));
let c = parseInt(prompt("Üçüncü ədədi daxil edin:"));

// Üçbucağın tərəfləri yoxlanışı
let isTriangle = a + b > c && a + c > b && b + c > a;

console.log(isTriangle);
