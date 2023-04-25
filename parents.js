function helloWorld() {
    alert("Hello, World!");
}

let cities = [];

// https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement
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

function displayPeopleCity(city, inout, style) {

    let cityElements = document.getElementsByClassName("city");

    if ("in" == inout) {
        let cities = Array.prototype.filter.call(cityElements, (c) => c.innerHTML == city);
    } else {
        let cities = Array.prototype.filter.call(cityElements, (c) => c.innerHTML != city);
    }

    cities.forEach(element => {
        console.log(`${element.innerHTML}`);
        if (element.parentElement) {
            element.parentElement.style.color = "red";
            let papa = element.parentElement;
            let grandpa = papa.parentElement;
            if (grandpa) {
                switch (style) {
                    case "show":
                        grandpa.style.display = 'inline-block';
                        break;        
                    case "hide":
                        grandpa.style.display = 'none';
                        break;        
                    default:
                        grandpa.style.display = 'inline-block';
                        break;        
                }
.            }
        }
    });
}
