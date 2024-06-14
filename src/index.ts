import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import Battle, { PVE, PVP } from './Battle';

const player1 = new Character('Frodo');
const player2 = new Character('Gandalf');
const player3 = new Character('Legolas');

const monster1 = new Monster();
const monster2 = new Dragon();

player1.levelUp();
player1.levelUp();
player1.levelUp();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  battles.forEach((battle) => battle.fight());
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };
