const Person = require("./lib/person");
const question = require("./lib/question");

class Solution {
  async run() {
    const name = await question("Please enter your name: ");
    const age = parseInt(await question("Please enter your age: "));
    const sex = await question("Please enter your sex (M/F): ");
    const weight = parseFloat(await question("Please enter your weight (in Kg): "));
    const height = parseFloat(await question("Please enter your height (in Mts): "));

    const obj1 = new Person(name, age, sex, undefined, weight, height);
    const obj2 = new Person(name, age, sex, undefined);
    const obj3 = new Person();

    obj3.name = name;
    obj3.age = age;
    obj3.sex = sex;
    obj3.weight = weight;
    obj3.height = height;

    for (const obj of [obj1, obj2, obj3]) {
      const personName = obj.name ?? "Anonymous person"
      const imcOutput = obj.calculateIMC()
      const isAdult = obj.isAdult()
      
      if (imcOutput === -1) console.log(personName, "is underweight.");
      if (imcOutput === 0) console.log(personName, "is in its ideal weight.");
      if (imcOutput === 1) console.log(personName, "is overweight.");
      
      if (isAdult) console.log(personName, "is an adult.");
      else console.log(personName, "is not an adult.");

      console.log(obj.toString());
    }
  }
}

const mySolution = new Solution();
mySolution.run();
