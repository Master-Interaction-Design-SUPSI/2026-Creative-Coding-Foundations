const container = document.getElementById("container");

const externalURL = "./assets/data/MOCK_DATA.json";
let id = 0;

fetch(externalURL)
    .then(response => {
        if (!response.ok) { 
            throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json(); 
    })
    .then(data => {
        console.log(data); 

        const people = data.filter(
            person => person.age >= 20
        )
        .sort((a, b) => a.first_name.localeCompare(b.first_name));

        for (person of people){
            displayData(person);
        }
    })
    .catch(error => {
        console.error("Error:", error); 
        displayError(error);
    });
 
function displayData(person){

    id += 1;

    const newLi = document.createElement("li");
    newLi.classList.add("item");

    let genderColor = "gray";
    if (person.gender == "Male"){
        genderColor = "blue"
    }
    else if (person.gender == "Female"){
        genderColor = "pink"
    }

    const genderBox = document.createElement("div");
    genderBox.classList.add("gender-box");
    genderBox.style.backgroundColor = genderColor;
    
    newLi.textContent = `${id}: ${person.first_name} ${person.last_name}, ${person.age}`;
    container.appendChild(newLi);
    newLi.prepend(genderBox);

}

function displayError(error){
    const newLi = document.createElement("li");
    newLi.textContent = error + ". I'm sorry";
    container.appendChild(newLi);
}

