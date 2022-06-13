//Create digital catalog for Florida Department of Education. It will hold a reference for each school in the city.

//Perent class
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents) {
    if (newNumberOfStudents.isNaN()) {
      ("Invalid input: numberOfStudents must be set to a Number.");
    } else {
      this._numberOfStudents = newNumberOfStudents;
    }
  }

  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }
  static pickSubstituteTeacher(arr) {
    const randomNum = Math.floor(Math.random() * arr.length);
    return arr[randomNum];
  }
}

// three child classes Primary, Middle, High

class Primary extends School {
  constructor(name, level, numberOfStudents, pickupPolicy) {
    super(name, level, numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name, level, numberOfStudents) {
    super(name, level, numberOfStudents);
  }
}

class High extends School {
  constructor(name, level, numberOfStudents, sportsTeams) {
    super(name, level, numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}
// create primary school instance
const lorraineHansbury = new Primary(
  "Lorraine Hansbury",
  "primary",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

// console.log(lorraineHansbury.quickFacts());
// console.log(lorraineHansbury);

// a school needs a substitute teacher. Call .pickSubstituteTeacher() on School
const chooseSubTeacher = School.pickSubstituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);

// console.log(chooseSubTeacher);

// create high school instance
const alSmith = new High("Al E. Smith", "high", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

// console.log(alSmith.sportsTeams);
