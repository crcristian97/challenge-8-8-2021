class Person {
  // Javascript makes setters by default.
  // Here we make a getter for DNI without making it a class property to make it readonly.
  get dni() {
    return this._dni;
  }
  constructor(name = "", age = 0, sex = "M", dni, weight = 0, height = 0) {
    this.name = name;
    this.age = age;
    this._dni = dni ?? this.createDNI();
    this.sex = sex;
    this.weight = weight;
    this.height = height;
  }

  calculateIMC() {
    const imc = this.weight / this.height ** 2;
    if (imc < 20) return -1;
    if (imc >= 20 && imc <= 25) return 0;
    return 1;
  }

  isAdult() {
    return this.age >= 18 ? 1 : 0;
  }

  checkSex(sex) {
    return this.sex === sex;
  }

  toString() {
    return JSON.stringify(
      {
        name: this.name,
        age: this.age,
        dni: this.dni,
        sex: this.sex,
        weight: this.weight,
        height: this.height,
      },
      null,
      4
    );
  }

  createDNI() {
    // 10.000.000 + (Random between 0000000 and 9999999) to keep DNI 00000004 from having a single digit.
    return parseInt(10e6 + Math.random() * (10e6 - 1));
  }
}

module.exports = Person;
