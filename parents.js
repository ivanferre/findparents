function helloWorld() {
    alert("Hello, World!");
}

let cities = [];

// https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement
// ! DEPRECATED
function findCity() {
    let cityElements = document.getElementsByClassName("city");
    // alert(`Find ${cityElements.length} cities.`)
    /* const testDivs = Array.prototype.filter.call(
  testElements,
  (testElement) => testElement.nodeName === "DIV"
); */
    let cities = Array.prototype.filter.call(cityElements, (city) => city.innerHTML === "Bern");
    alert(`There are ${cities.length} Berns.`);

    cities.forEach(element => {
        console.log(`${element.innerHTML}`);
        if (element.parentElement) {
            element.parentElement.style.color = "red";
            let papa = element.parentElement;
            let grandpa = papa.parentElement;
            if (grandpa) {
                // grandpa.style.display = 'none';
                grandpa.style.color = "blue";
                grandpa.innerHTML = `Citizen ${grandpa.id} lives in Bern.`;
            }
        }
    });
}

function hidePeopleNotInBern() {
    let cityElements = document.getElementsByClassName("city");
    let cities = Array.prototype.filter.call(cityElements, (city) => city.innerHTML !== "Bern");
    alert(`There are ${cities.length} other cities.`);

    cities.forEach(element => {
        console.log(`${element.innerHTML}`);
        if (element.parentElement) {
            element.parentElement.style.color = "red";
            let papa = element.parentElement;
            let grandpa = papa.parentElement;
            if (grandpa) {
                grandpa.style.display = 'none';
                grandpa.style.color = "red";
                grandpa.innerHTML = `Citizen ${grandpa.id} does not live in Bern.`;
            }
        }
    });
}

function hidePeopleNotInCity(city) {

    let cityElements = document.getElementsByClassName("city");

    let cities = Array.prototype.filter.call(cityElements, (c) => c.innerHTML != city);

    cities.forEach(element => {
        console.log(`${element.innerHTML}`);
        if (element.parentElement) {
            element.parentElement.style.color = "red";
            let papa = element.parentElement;
            let grandpa = papa.parentElement;
            if (grandpa) {
                grandpa.style.display = 'none';
            }
        }
    });
}

function showPeopleNotInCity(city) {

    let cityElements = document.getElementsByClassName("city");

    let cities = Array.prototype.filter.call(cityElements, (c) => c.innerHTML != city);

    cities.forEach(element => {
        console.log(`${element.innerHTML}`);
        if (element.parentElement) {
            element.parentElement.style.color = "red";
            let papa = element.parentElement;
            let grandpa = papa.parentElement;
            if (grandpa) {
                grandpa.style.display = 'inline-block';
            }
        }
    });
}

// @param city is string
// @param inout = {"in", "out"}
// @param style = {"show", "hide"}
function displayPeopleCity(city, inout, style) {

    let cityElements = document.getElementsByClassName("city");
    let cities;

    if ("in" == inout) {
        cities = Array.prototype.filter.call(cityElements, (c) => c.innerHTML == city);
        console.log(`Got ${cities.length} in Bern.`);
    } else { // "out"
        cities = Array.prototype.filter.call(cityElements, (c) => c.innerHTML != city);
        console.log(`Got ${cities.length} out of Bern.`);
    }

    cities.forEach(element => {
        console.log("Looping!");
        console.log(`${element.innerHTML}`);
        if (element.parentElement) {
            // element.parentElement.style.color = "red";
            let papa = element.parentElement;
            let grandpa = papa.parentElement;
            if (grandpa) {
                switch (style) {
                    case "show":
                        grandpa.style.display = 'inline-block';
                        console.log("Showing citizen.");
                        break;        
                    case "hide":
                        grandpa.style.display = 'none';
                        console.log("Hiding citizen.");
                        break;
                    default:
                        grandpa.style.display = 'inline-block';
                        console.log("Improvising.");
                        break;
                }
            }
        }
    });
    console.log(`${cities.length} say goodbye`);
}
