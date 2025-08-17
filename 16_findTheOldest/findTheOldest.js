const findTheOldest = function(people) {

    return people.reduce(getOldest);
};

function getOldest(oldest, nextPerson) {
    let oldestAge = getAge(oldest);
    let nextPersonAge = getAge(nextPerson);

    return oldestAge > nextPersonAge ? oldest : nextPerson;
}

function getAge(person) {
    return person.yearOfDeath != undefined ? (person.yearOfDeath - person.yearOfBirth): (new Date().getFullYear() - person.yearOfBirth);
}

// Do not edit below this line
module.exports = findTheOldest;
