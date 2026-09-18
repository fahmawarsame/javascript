// Parent class
class HospitalStaff {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Doctor class
class Doctor extends HospitalStaff {
  constructor(name, age, speciality) {
    super(name, age);
    this.speciality = speciality;
  }

  treatPatient() {
    console.log(`${this.name} is treating a patient.`);
  }

  showSpeciality() {
    console.log(`${this.name} is a ${this.speciality} doctor.`);
  }
}

// Nurse class
class Nurse extends HospitalStaff {
  constructor(name, age, ward) {
    super(name, age);
    this.ward = ward;
  }

  careForPatient() {
    console.log(`${this.name} is caring for a patient.`);
  }

  showWard() {
    console.log(`${this.name} works in the ${this.ward} ward.`);
  }
}

// Hospital Cleaner class
class Cleaner extends HospitalStaff {
  constructor(name, age, area) {
    super(name, age);
    this.area = area;
  }

  cleanHospital() {
    console.log(`${this.name} is cleaning the ${this.area}.`);
  }
}

// Creating objects

let doctor1 = new Doctor("Ahmed", 40, "Heart");
let nurse1 = new Nurse("Aisha", 30, "Children");
let cleaner1 = new Cleaner("Hassan", 45, "Main Entrance");

// Doctor
doctor1.introduce();
doctor1.treatPatient();
doctor1.showSpeciality();

console.log("----------------");

// Nurse
nurse1.introduce();
nurse1.careForPatient();
nurse1.showWard();

console.log("----------------");

// Cleaner
cleaner1.introduce();
cleaner1.cleanHospital();
