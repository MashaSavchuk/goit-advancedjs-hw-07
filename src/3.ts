/*
  Ви створюєте гру, де є персонажі з різними ролями.
  Зараз ви працюєте над класом Wizard, який має реалізовувати два інтерфейси - ICharacter та ISpellCaster.

  Визначте інтерфейси ICharacter та ISpellCaster так, щоб вони відповідали вимогам класу Wizard. 
  Інтерфейс ICharacter повинен включати властивості name і level, і навіть метод introduce і levelUp. 
  Інтерфейс ISpellCaster повинен включати метод castSpell.
*/

// Інтерфейс ICharacter
interface ICharacter {
  name: string;
  level: number;

  introduce(phrase: string): void;
  levelUp(): void;
}

// Інтерфейс ISpellCaster
interface ISpellCaster {
  castSpell(): void;
}

// Реалізація класу Wizard, що імплементує обидва інтерфейси
class Wizard implements ICharacter, ISpellCaster {
  constructor(
    public name: string,
    public level: number
  ) {
    if (this.level < 1) {
      throw new Error('Level too low');
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ', ' + this.name);
  }

  castSpell(): void {
    console.log('Casting a spell, behold my power!');
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

// Тестування класу Wizard
const wizard = new Wizard('Merlin', 15);

wizard.introduce('I am the mighty wizard');  // Виведе: I am the mighty wizard, Merlin
wizard.castSpell();                          // Виведе: Casting a spell, behold my power!
wizard.levelUp();                            // Виведе: Level up! New level is 16

export {};
