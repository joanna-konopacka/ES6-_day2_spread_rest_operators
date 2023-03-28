/*Zadanie 4
Stwórz dwie tablice fruits i vegetables. Następnie stwórz trzecią tablicę mix, która będzie połączeniem obu poprzednich tablic. Użyj operator rozproszenia */

const fruits = ["apple", "mango", "strawberry"];
const vegetables = ["carrot", "potato", "bean"];

const mix = [...fruits, ...vegetables];
console.log(mix);
