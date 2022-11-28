// GET

const fetchPeople = () => {
  fetch("http://localhost:3000/people")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // your code here
      console.log(data);
    });
};

const fetchCats = () => {
  fetch("http://localhost:3000/cats")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // your code here
      let joeysCats = data.filter((element) => element.personId === 1);
      console.log(joeysCats);
    });
};

const fetchSomeonesCats = (id) => {
  fetch(`http://localhost:3000/people/${id}/cats`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // your code here
      console.log(data);
    });
};

// POST
let newPerson = { name: "Kaylee" };
let newCat = { name: "Jasper", personId: 3 };

const createPerson = (personObj) => {
  fetch("http://localhost:3000/people", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personObj),
  });
};

const createCat = (catObj) => {
  fetch("http://localhost:3000/cats", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(catObj),
  });
};

// PUT/PATCH
let updatedCat = { name: "Jazzmine" };

const updateCat = (catId, catObj) => {
  fetch(`http://localhost:3000/cats/${catId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(catObj),
  });
};

// DELETE
const deleteCat = (catId) => {
  fetch(`http://localhost:3000/cats/${catId}`, {
    method: "DELETE",
  });
};

// fetchCats()
// fetchPeople()
// fetchSomeonesCats(2)

// createPerson(newPerson)
// createCat(newCat)

// updateCat(3, updatedCat)

// deleteCat(4)

// FORM
let personForm = document.getElementById("person-form");
let nameInput = document.getElementById("name-input");

personForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // let newPersonObj = {name: nameInput.value}
  let newPersonObj = { name: e.target[0].value };

  createPerson(newPersonObj);
  personForm.reset();
});
