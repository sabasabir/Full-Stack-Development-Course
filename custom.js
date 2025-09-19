function evenNumbers() {
    const names = [
        "Ali", "Sara", "Ahmed", "Fatima", "Bilal",
        "Ayesha", "Usman", "Zainab", "Hassan", "Mariam",
        "Imran", "Sana", "Kashif", "Nida", "Tariq",
        "Hira", "Saad", "Rabia", "Fahad", "Mehwish"
    ];


let evenNames = [];
let oddNames = [];

for (let i = 0; i < names.length; i++) {
  if (i % 2 === 0) {
    evenNames.push(names[i]);
  } else {
    oddNames.push(names[i]);
  }
}

console.log("Even Names:", evenNames.join(", "));
console.log("Odd Names:", oddNames.join(", "));

}

evenNumbers();