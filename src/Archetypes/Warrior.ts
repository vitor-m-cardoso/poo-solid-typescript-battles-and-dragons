import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static warriorInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior.warriorInstances += 1;
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior.warriorInstances;
  }
}

export default Warrior;
