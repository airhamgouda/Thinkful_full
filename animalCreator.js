'use strict';

class Animal {
  constructor(type, size) {
    const validTypes = ['dog', 'cat'];
    if (!type || !size) throw new TypeError('Missing required attributes');
    if (!validTypes.includes(type)) throw new TypeError('Unknown animal type');

    this.type = type;
    this.size = size;
  }

  speak() {
    return this.type === 'dog' ? 'Woof' : 'Meow';
  }
}

const dog = new Animal('dog', 'large');
console.log(dog);
console.log(dog.speak());