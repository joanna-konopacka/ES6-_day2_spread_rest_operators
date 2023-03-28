const namesA = ["Zosia", "Marcin", "Kamil"];
const namesB = ["Ala", "Puszek", ...namesA, "Jan", "Karol"];

// ["Zosia", "Marcin", "Kamil"] // Tablica 1
// ["Ala", "Puszek", "Zosia", "Marcin", "Kamil", "Jan", "Karol" ] // Tablica 2

console.log(namesA, namesB);
