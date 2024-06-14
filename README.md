# Boas vindas ao repositório do projeto _Battles and Dragons_

## Entregáveis

<details>
  <summary><strong>O que foi desenvolvido</strong></summary><br />

- Para este projeto, foram aplicados os princípios da arquitetura `SOLID` e os princípios de `POO` em uma estrutura de jogos de `RPG` (_Role Playing Game_).

</details>

## Orientações

<details>
  <summary><strong>Antes de começar a desenvolver</strong></summary>

1. Clone o repositório

- `git clone git@github.com:vitor-m-cardoso/poo-solid-typescript-battles-and-dragons.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd poo-solid-typescript-battles-and-dragons`

2. Instale as dependências

- `npm install`

</details>

<details>
  <summary><strong>Rodando o projeto no Docker</strong></summary>
  
### Com Docker

> Rode o serviço `node` com o comando `docker-compose up -d`.

- Esse serviço irá inicializar o container `battles_and_dragons`;
- A partir daqui você pode rodar o container `battles_and_dragons` via CLI ou abri-lo no VSCode.

> Use o comando `docker exec -it battles_and_dragons bash`.

- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

> Instale as dependências com `npm install`.

</details>

## O que foi desenvolvido

### Classe `Race`

<details>
  <summary><strong>Detalhes de implementação</strong></summary>

- O arquivo `Race.ts` está localizado no diretório `src/Races/`;
- A classe `Race` possui os atributos privados: `name` e `dexterity`;
  - O atributo `name` é do tipo `string`;
  - O atributo `dexterity` é do tipo `number`;
- Os atributos da classe podem ser lidos, mas **não** podem ser alterados;
- A classe possui um **método estático** chamado `createdRacesInstances`, que retorna um `number`;
  - Esse número corresponde à quantidade de instâncias criadas à partir das classes estendidas de `Race`;
  - Caso o método não seja implementado nas subclasses, lança um erro com a mensagem `Not implemented`.
- A classe possui um _getter_ abstrato chamado `maxLifePoints` que retorna um `number`;
  - Esse número corresponde à quantidade máxima de pontos de vida da raça.

</details>

### Classes que herdam de `Race`

<details>
  <summary><strong>Detalhes de implementação</strong></summary>

- Os arquivos foram criado no diretório `src/Races/`;
- Todas as classes estendem da classe abstrata `Race`;
- Foram criadas as classes `Dwarf`, `Elf`, `Halfling` e `Orc`;
- As raças possuem um número máximo de pontos de vida (`maxLifePoints`), inicializados em seus construtores:
  - A raça `Dwarf` possui `80` pontos de vida;
  - A raça `Elf` possui `99` pontos de vida;
  - A raça `Halfling` possui `60` pontos de vida;
  - A raça `Orc` possui `74` pontos de vida.

</details>

### Interface `Energy`

<details>
  <summary><strong>Detalhes de implementação</strong></summary>

- O arquivo `Energy.ts` está localizado no diretório `src/`.
- A interface possui os seguintes atributos:
  - `type_`, do tipo `EnergyType`;
    - `EnergyType` recebe os valores: `'mana'` ou `'stamina'`;
  - `amount`, do tipo `number`.

</details>

### Classe `Archetype`

<details>
  <summary><strong>Detalhes de implementação</strong></summary>

- O arquivo `Archetype.ts` está localizado no diretório `src/Archetypes/`;
- A classe possui os atributos _privados_: `name`, `special`, `cost`;
  - O atributo `name` é do tipo `string`;
  - O atributo `special` é do tipo `number`;
  - O atributo `cost` é do tipo `number`;
- Os atributos da classe podem ser lidos, mas **não** podem ser alterados;
- A classe possui o método _estático_ `createdArchetypeInstances` que retorna um `number`:
  - Esse número corresponde à quantidade de instâncias criadas à partir das classes estendidas;
  - Caso não seja implementado nas classes estendidas, lança um erro com a mensagem `Not implemented`.
- A classe possui um _getter abstrato_ chamado `energyType` que retorna um `EnergyType`:
  - O `EnergyType` corresponde ao tipo de energia que este arquétipo deve ter. (`mana` ou `stamina`)

</details>

### Classes que herdam de `Archetype`

<details>
  <summary><strong>Detalhes de implementação</strong></summary>

- Os arquivos foram criados no diretório `src/Archetypes/`;
- Todos as classes estendem a classe abstrata `Archetype`.
- As classes criadas foram:
  - `Mage`;
  - `Necromancer`;
  - `Warrior`;
  - `Ranger`.

</details>

### Interface `Fighter`

<details>
  <summary><strong>Detalhes de implementação</strong></summary>

- A interface `Fighter.ts` está localizada no diretório `src/Fighter/`;
- A interface possui os seguintes atributos:
  - `lifePoints`, do tipo `number`;
  - `strength`, do tipo `number`;
  - `defense`, do tipo `number`;
  - `energy`, do tipo `Energy`.
- A interface possui os seguintes métodos:
  - `attack()`, que recebe um `enemy` do tipo `Fighter` como parâmetro e não possui retorno;
  - `special()`, que recebe um `enemy` do tipo `Fighter` como parâmetro e não possui retorno;
  - `levelUp()`, que não recebe parâmetro e não possui retorno;
  - `receiveDamage()`, que recebe um `attackPoints` do tipo `number` como parâmetro e retorne um `number`.

</details>

### Classe `Character`

<details>
  <summary><strong>Detalhes de implementação</strong></summary>

- O arquivo `Character.ts` está localizado no diretório `src/`;
- A classe _implementa_ a interface `Fighter`;
- A classe possui os atributos _privados_: `race`, `archetype`, `maxLifePoints`, `lifePoints`, `strength`, `defense`, `dexterity` e `energy`;
  - O atributo `race` é do tipo `Race`;
  - O atributo `archetype` é do tipo `Archetype`;
  - O atributo `maxLifePoints` é do tipo `number`;
  - O atributo `lifePoints` é do tipo `number`;
  - O atributo `strength` é do tipo `number`;
  - O atributo `defense` é do tipo `number`;
  - O atributo `dexterity` é do tipo `number`;
  - O atributo `energy` é do tipo `Energy`;
  - O atributo `name` é do tipo `string`.
- Os atributos da classe podem ser lidos mas **não** podem ser alterados.

</details>

### Interface `SimpleFighter`

<details>
  <summary><strong>Detalhes de implementação</strong></summary>

- O arquivo `SimpleFighter.ts` está localizado no diretório `src/Fighter/`.
- A interface possui os seguintes atributos:
  - `lifePoints`, do tipo `number`;
  - `strength`, do tipo `number`.
- A interface possui os seguintes métodos:
  - `attack()` que recebe um `enemy` do tipo `SimpleFighter` como parâmetro e não possui retorno;
  - `receiveDamage()` que recebe um `attackPoints` do tipo `number` como parâmetro e retorna um `number`;

</details>

### Classe `Monster`

<details>
  <summary><strong>Detalhes de implementação</strong></summary>

- O arquivo `Monster.ts` está localizado no diretório `src/`;
- A classe implementa a interface `SimpleFighter`;
- A classe possui os atributos _privados_ `lifePoints` e `strength`;
  - Os atributos `lifePoints` e `strength` são do tipo `number`.
- Os atributos da classe podem ser lidos mas **não** podem ser alterados.

</details>

### Classe `PVP`

<details>
  <summary><strong>Detalhes de implementação</strong></summary>

- O arquivo `PVP.ts` está localizado no diretório `src/Battle/`;
- A classe `PVP` estende `Battle`.

</details>

### Classe `PVE`

<details>
  <summary><strong>Detalhes de implementação</strong></summary>

- O arquivo `PVE.ts` está localizado no diretório `src/Battle/`;
- Na criação de uma instância de `PVE.ts` é recebido um lutador (`Fighter`) e um _array_ com um ou mais monstros (`Monster`);

</details>

### Classe `Dragon`

<details>
  <summary><strong>Detalhes de implementação</strong></summary>

- O arquivo `Dragon.ts` está localizado no diretório `src/`;
- A classe `Dragon` herda de `Monster`;

</details>
