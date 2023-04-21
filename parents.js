function helloWorld() {
    alert("Hello, World!");
}

/*element => {
        let str = element.innerHTML;
        cities.push(str);
    }*/

let cities = [];


function getCity(city) {
   // cities.push (city.innerHTML);
}

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
    // alert(`Find ${cityElements.length} cities.`)
    /* const testDivs = Array.prototype.filter.call(
  testElements,
  (testElement) => testElement.nodeName === "DIV"
); */
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