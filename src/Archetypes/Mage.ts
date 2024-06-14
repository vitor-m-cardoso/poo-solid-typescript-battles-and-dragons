import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static mageInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Mage.mageInstances += 1;
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.mageInstances;
  }
}

export default Mage;
