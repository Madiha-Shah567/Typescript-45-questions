//39.  Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

function citycountry(city: string, country: string): string {
    return '${city}, ${country}';
}

console.log('city_country("Lahore", "Pakistan")');
console.log('city_country("London", "UK")');
console.log('city_country("Tokyo", "Japan")');