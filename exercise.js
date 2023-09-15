const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};


const personFiltrato={
  id:person.id,
  age:person.age,
};



const json = JSON.stringify(personFiltrato);

console.log(json); 