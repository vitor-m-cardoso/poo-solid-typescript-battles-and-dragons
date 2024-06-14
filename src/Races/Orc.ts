import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static orcInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.orcInstance += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Orc.orcInstance;
  }
}

export default Orc;
