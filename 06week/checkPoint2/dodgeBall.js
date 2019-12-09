let assert = require('assert');

const arrOfPeople = [
  {
    id: 1,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 10
  },
  {
    id: 2,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 10
  },
  {
    id: 3,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 10
  },
  {
    id: 4,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 10
  },
  {
    id: 5,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 10
  },
  {
    id: 6,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 10
  },
  {
    id: 7,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 10
  },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class DodgeBallPlayer {
  constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
  }
}
class BlueTeammate {
  constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamcolor) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
    this.mascot = mascot;
    this.teamcolor = teamcolor;
  }
}
class RedTeammate {
  constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamcolor) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
    this.mascot = mascot;
    this.teamcolor = teamcolor;
  }
}

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function () {
      makePlayer(person.id);
      listElement.removeChild(li)
    })
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}
//make player
const makePlayer = (id) => {
  const listElement = document.getElementById('players')
  const findPlayer = arrOfPeople.find(person => person.id == id)
  const playerIndex = arrOfPeople.indexOf(findPlayer)
  const newPlayer = new DodgeBallPlayer(
    findPlayer.id,
    findPlayer.name,
    findPlayer.age,
    findPlayer.skillSet,
    findPlayer.placeBorn,

  )
  listOfPlayers.push(newPlayer)
  arrOfPeople.splice(playerIndex, 1)
  const li = document.createElement("li")
  li.appendChild(document.createTextNode(newPlayer.name))

  //Redplayer
  const redButton = document.createElement("button")
  redButton.innerHTML = "RedPlayer"
  redButton.style.backgroundColor = "Red"
  li.appendChild(redButton)
  redButton.addEventListener('click', function () {
    makeRedPlayer(newPlayer.id);
    listElement.removeChild(li)
  })

  //Blueplayer
  const blueButton = document.createElement("button")
  blueButton.innerHTML = "BluePlayer"
  li.appendChild(blueButton)
  blueButton.style.backgroundColor = "Blue"
  blueButton.style.color = "White"
  blueButton.style.border = "1px solid Black"
  blueButton.addEventListener('click', function () {
    makeBluePlayer(newPlayer.id);
    listElement.removeChild(li)
  })
  listElement.append(li)

}
//Make Teammate
const makeRedPlayer = id => {
  const listElement = document.getElementById('red')
  const findPlayer = listOfPlayers.find(person => person.id == id)
  const playerIndex = listOfPlayers.indexOf(findPlayer)
  const newPlayer = new RedTeammate(
    findPlayer.id,
    findPlayer.name,
    findPlayer.age,
    findPlayer.skillSet,
    findPlayer.placeBorn,
    findPlayer.canThrowBall,
    findPlayer.DodgeBallPlayer,
    findPlayer.hasPaid,
    findPlayer.isHealthy,
    findPlayer.yearsExperience,
    "Tiger",
    "Red"
  )
  redTeam.push(RedTeammate)
  listOfPlayers.splice(playerIndex, 1)
  const li = document.createElement("li")
  li.appendChild(document.createTextNode(newPlayer.name + " " + "mascot = " + newPlayer.mascot))
  li.style.border = "1px solid red"
  console.log(newPlayer)
  listElement.append(li)
};
const makeBluePlayer = id => {
  const listElement = document.getElementById('blue')
  const findPlayer = listOfPlayers.find(person => person.id == id)
  const playerIndex = listOfPlayers.indexOf(findPlayer)
  const newPlayer = new BlueTeammate(
    findPlayer.id,
    findPlayer.name,
    findPlayer.age,
    findPlayer.skillSet,
    findPlayer.placeBorn,
    findPlayer.canThrowBall,
    findPlayer.DodgeBallPlayer,
    findPlayer.hasPaid,
    findPlayer.isHealthy,
    findPlayer.yearsExperience,
    "Eagle",
    "Blue"
  )
  blueTeam.push(BlueTeammate)
  listOfPlayers.splice(playerIndex, 1)
  const li = document.createElement("li")
  li.appendChild(document.createTextNode(newPlayer.name + " " + "mascot = " + newPlayer.mascot))
  li.style.border = "1px solid blue"
  listElement.append(li)

};

//test
if (typeof describe === 'function') {
  describe('DodgeBallPlayer', function () {
    it('should have a id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience', function () {
      var player1 = new DodgeBallPlayer(1, 'Charles Young', 55, 'welding', 'Austin', true, true, true, true, 10);
      assert.equal(player1.id, 1);
      assert.equal(player1.name, 'Charles Young');
      assert.equal(player1.age, 55);
      assert.equal(player1.skillSet, 'welding');
      assert.equal(player1.placeBorn, 'Austin');
      assert.equal(player1.canThrowBall, true);
      assert.equal(player1.canDodgeBall, true);
      assert.equal(player1.hasPaid, true);
      assert.equal(player1.isHealthy, true);
      assert.equal(player1.yearsExperience, 10);
    });
  });

  describe('MakeRedTeam', function () {
    it('should have a id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamcolor', function () {
      let redTeam1 = new RedTeammate(2, 'Judy Twilight', 35, 'fishing', 'Louisville, Kentucky', true, true, true, true, 10, 'Tiger', 'Red');
      assert.equal(redTeam1.id, 2);
      assert.equal(redTeam1.name, "Judy Twilight");
      assert.equal(redTeam1.age, 35);
      assert.equal(redTeam1.skillSet, "fishing");
      assert.equal(redTeam1.placeBorn, "Louisville, Kentucky");
      assert.equal(redTeam1.canThrowBall, true);
      assert.equal(redTeam1.canDodgeBall, true);
      assert.equal(redTeam1.hasPaid, true);
      assert.equal(redTeam1.isHealthy, true);
      assert.equal(redTeam1.yearsExperience, 10);
      assert.equal(redTeam1.mascot, "Tiger");
      assert.equal(redTeam1.teamcolor, "Red");

    });
  });

  describe('MakeBlueTeam', function () {
    it('should have a id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamcolor', function () {
      let blueTeam1 = new BlueTeammate(3, 'Argo Khon', 15, 'skating', 'Missouri', true, false, true, true, 1, 'Dog', 'blue');
      assert.equal(blueTeam1.id, 3);
      assert.equal(blueTeam1.name, "Argo Khon");
      assert.equal(blueTeam1.age, 15);
      assert.equal(blueTeam1.skillSet, "skating");
      assert.equal(blueTeam1.placeBorn, "Missouri");
      assert.equal(blueTeam1.canThrowBall, true);
      assert.equal(blueTeam1.canDodgeBall, false);
      assert.equal(blueTeam1.hasPaid, true);
      assert.equal(blueTeam1.isHealthy, true);
      assert.equal(blueTeam1.yearsExperience, 1);
      assert.equal(blueTeam1.mascot, "Dog");
      assert.equal(blueTeam1.teamcolor, "blue");
    });
  });
}