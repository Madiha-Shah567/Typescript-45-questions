//29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!


var favoritefruits: string[] = ["apple", "banana", "orange"];
if (favoritefruits.includes("apple")) {
    console.log("I really like apples!");
}

if (favoritefruits.includes("banana")) {
    console.log("I really like bananas!");
}

if (favoritefruits.includes("orange")) {
    console.log("I really like oranges!");
}

if (favoritefruits.includes("kiwi")) {
    console.log("I really like kiwis!");
}

if (favoritefruits.includes("strawberry")) {
    console.log("I really like strawberries!");
}