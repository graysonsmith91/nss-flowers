
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/


/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/
const inexpensiveFlowers = () => {
    const filteredFlowers = []  // Do not modify

/*
     Iterate through flowers array with a for of loop. 
     Write if statement under loop where if the price is less than 
     2.00, then push to filteredFlowers array.
*/

for (const flower of flowers) {
    if (flower.price < 2) {
        filteredFlowers.push(flower)
    }
}

    return filteredFlowers  // Do not modify

}

/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.
*/
const zoneFlowers = () => {
    const filteredFlowers = []  // Do not modify


/*
    Loop through flowers array with a for of loop.
    If the flower can grow in USDA zone 3 AND 8, then 
    push to filteredFlowers array.
*/
   
for (const flower of flowers) {
    if (flower.usdaZones.includes(3) && flower.usdaZones.includes(8)) {
        filteredFlowers.push(flower)
    }
}

    return filteredFlowers  // Do not modify
}

/*
    This function should return flowers that come in the color Orange
*/
const orangeFlowers = () => {
    const filteredFlowers = []  // Do not modify

/*
    Loop through flowers array with a for of loop.
    If the flower comes in color Orange, then 
    push to filteredFlowers array.
*/

for (const flower of flowers) {
    if (flower.colors.includes('Orange')) {
        filteredFlowers.push(flower)
    }
}
    return filteredFlowers  // Do not modify
}

/*
    This function should return an HTML representation of each flower.

    Expected string format:
        <article>
            <h1>Bird of Paradise</h1>

            <h2>Colors</h2>
            <section>White</section>
            <section>Orange</section>

            <h2>USDA Zones</h2>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </article>
*/
const flowersAsHTML = () => {
    let flowersHTMLString = ""  // Do not modify

    /* 
        Loop through each individual flower of flowers array. Add <article> tag to beginning of flowersHTMLString string.
        Return 1 line and tab 1 time then add <h1>Flower name</h1> using string interpolation.
        Return 2 times for spacing.
        Add <h2>Colors</h2>.
    */

    for (const flower of flowers) {
        flowersHTMLString += `<article>\n\t<h1>${flower.type}</h1>\n\n\t<h2>Colors</h2>\n`

    /* 
        Start new nested for of loop under the flower loop.
        Add <section>whichever color name</section> using string interpolation.
        Return 2 times for spacing.
    */

        for (const color of flower.colors) {
            flowersHTMLString += `\t<section>${color}</section>\n`
        }

    /* 
        Add <h2>USDA Zones</h2> to flowersHTMLString outside the loop.
        Start new nested for of loop on the same level as the color loop above.
        Add <div>whichever USDAzone</div> using string interpolation.
    */
        flowersHTMLString += `\n\t<h2>USDA Zones</h2>\n`

        for (const zone of flower.usdaZones) {
            flowersHTMLString += `\t<div>${zone}</div>\n`
        }

        flowersHTMLString += `</article>\n\n`
    }

    return flowersHTMLString  // Do not modify
}

console.log(flowersAsHTML(flowers))













































































/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers
module.exports = {
    inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
}
/*  DO NOT TOUCH THIS CODE  */

