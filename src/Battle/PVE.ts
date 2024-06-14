import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  private _monsters: Monster[] | SimpleFighter[];
  constructor(player: Fighter, monsters: Monster[] | SimpleFighter[]) {
    super(player);
    this._monsters = monsters;
  }

  fight() {
    this._monsters.push(new Monster());
    this._monsters.forEach((monster) => {
      while (this.player.lifePoints > 0 && monster.lifePoints > 0) {
        this.player.attack(monster);
        if (monster.lifePoints > 0) {
          monster.attack(this.player);
        }
      }
    });
    return super.fight();
  }
}

export default PVE;