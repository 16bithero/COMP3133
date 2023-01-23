console.log("Week 2 Lab for Full Stack Dev")

//Import required modules
const csv = require('csv-parser');
const fs = require('fs');

//Checks and deletes canada.txt file if exists
fs.unlink("canada.txt", (err => {
    if (err) console.log("No file such as 'canada.txt' exists.");
    else {
        console.log("File 'canada.txt' successfully deleted.");
    }
  }));

//Checks and deletes usa.txt file if exists
fs.unlink("usa.txt", (err => {
if (err) console.log("No file such as 'usa.txt' exists.");
else {
    console.log("File 'usa.txt' successfully deleted.");
}
}));

//Reads CSV File
const csvReader = fs.createReadStream("input_countries.csv")

//Extracts needed rows in CSV and adds it into specific text files
csvReader.pipe(csv())
    .on('data', (row) => {
        const countryData = row.country + "," + row.year + "," + row.population + "\n"
        if (row.country === 'Canada'){
            fs.appendFileSync("canada.txt", countryData);
        }
        if (row.country === 'United States'){
            fs.appendFileSync("usa.txt", countryData);
        }
        

    })
    .on('end', () => {
        console.log('Text files successfully created.');
    });