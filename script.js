// script.js

// Generate a large hobby database
function generateHobbyDatabase(size) {
    const names = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace", "Hank", "Ivy", "Jack"];
    const hobbies = ["Painting", "Cycling", "Gardening", "Reading", "Swimming", "Cooking", "Hiking", "Gaming", "Photography", "Writing"];
    
    const database = [];
    
    for (let i = 0; i < size; i++) {
        const randomName = names[Math.floor(Math.random() * names.length)] + (i + 1); // To ensure unique names
        const randomHobby = hobbies[Math.floor(Math.random() * hobbies.length)];
        database.push({ name: randomName, hobby: randomHobby });
    }
    
    return database;
}

// Generate 10,000 records
const hobbyDatabase = generateHobbyDatabase(10000);

function saveHobby() {
    const inputHobby = document.getElementById('hobby').value.trim();

    if (!inputHobby) {
        alert('Please enter a hobby!');
        return;
    }

    localStorage.setItem('userHobby', inputHobby);
    alert(`Your hobby "${inputHobby}" has been saved!`);
    document.getElementById('hobby').value = ''; // Clear the input field
}

function findHobbyists() {
    const userHobby = localStorage.getItem('userHobby');

    if (!userHobby) {
        alert('Please save your hobby first!');
        return;
    }

    const hobbyList = document.getElementById('hobbyList');
    hobbyList.innerHTML = ''; // Clear the previous list

    const matches = hobbyDatabase.filter(person => person.hobby.toLowerCase() === userHobby.toLowerCase());

    if (matches.length > 0) {
        // Limit the number of results to 10
        const limitedMatches = matches.slice(0, 5);
        
        limitedMatches.forEach(person => {
            const listItem = document.createElement('li');
            listItem.textContent = `${person.name} enjoys ${person.hobby}`;
            hobbyList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'No matches found. Try saving a different hobby!';
        hobbyList.appendChild(listItem);
    }
}

