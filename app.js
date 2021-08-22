const anchors = document.querySelectorAll('a');

for (let i of anchors) {
    i.addEventListener('click', (evt)=> {
        evt.preventDefault();
    })
}


// class Pet {
//     constructor (name, breed, age) {
//         this.name = name;
//         this.breed = breed;
//         this.age = age;
//     }
// }


// class Dog extends Pet {

//     constructor (name, breed, age, status) {
//         super(name, breed, age);
//         this.status = status
//     }


// }


// function promiseVamp() {
//     return new Promise((resolve, reject)=> { // returns a new promise object with the undelying methods.
//         resolve();
//     })
// }


// promiseVamp();