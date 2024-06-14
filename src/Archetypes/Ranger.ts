import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static rangerInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger.rangerInstances += 1;
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger.rangerInstances;
  }
}

export default Ranger;
