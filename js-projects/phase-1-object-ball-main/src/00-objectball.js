function gameObject() {
  return {
    home: {
      teamName: 'Brooklyn Nets',
      colors: ['black', 'white'],
      players: {
        'Alan Anderson': {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        'Reggie Evans': {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        'Brook Lopez': {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        'Mason Plumlee': {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        'Jason Terry': {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: 'Charlotte Hornets',
      colors: ['Turquoise', 'Purple'],
      players: {
        'Jeff Adrien': {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 7,
        },
        'Bismak Biyombo': {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        'DeSagna Diop': {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        'Ben Gordon': {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        'Brendan Haywood': {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

function homeTeamName() {
  return gameObject().home.teamName;
}

const numPointsScored = (playersName) => {
  const obj = gameObject();
  for (const key in obj) {
    const value = obj[key];
    const foundedPlayer = value.players[playersName];
    if (foundedPlayer) {
      return foundedPlayer.points;
    }
  }
};

console.log(`Alan Anderson's point score: ${numPointsScored('Alan Anderson')}`);

const shoeSize = (playersName) => {
  const obj = gameObject();
  for (const key in obj) {
    const value = obj[key];
    const foundedPlayer = value.players[playersName];
    if (foundedPlayer) {
      return foundedPlayer.shoe;
    }
  }
};

console.log(`Alan Anderson's shoe size: ${shoeSize('Alan Anderson')}`);

const teamColors = (teamName) => {
  const obj = gameObject();
  for (const key in obj) {
    const value = obj[key];
    if (value.teamName === teamName) {
      const newValue = obj[key];
      return newValue.colors;
    }
  }
};

console.log(`Our colors: ${teamColors('Charlotte Hornets')}`);

const teamNames = () => {
  const result = [];
  const obj = gameObject();
  for (const key in obj) {
    const value = obj[key];
    result.push(value.teamName);
  }
  return result;
};

console.log(`Our teams: ${teamNames()}`);

const playerNumbers = (teamName) => {
  const result = [];
  const obj = gameObject();
  for (const key in obj) {
    const value = obj[key];
    if (teamName === value.teamName) {
      for (const playersKey in value.players) {
        const playersValue = value.players[playersKey];
        result.push(playersValue.number);
      }
    }
  }
  return result;
};

console.log(`Our numbers: ${playerNumbers('Charlotte Hornets')}`);

const playerStats = (playersName) => {
  const obj = gameObject();
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      for (const playersKey in value.players) {
        if (playersName === playersKey) {
          const playersValue = value.players[playersKey];
          return playersValue;
        }
      }
    }
  }
};

console.log(playerStats('Jeff Adrien'));

const bigShoeRebounds = () => {
  const result = [];
  const obj = gameObject();
  for (const key in obj) {
    const value = obj[key];
    for (const playersKey in value.players) {
      const playersValue = value.players[playersKey];
      result.push(playersValue);
    }
  }
  const biggestNumber = result.reduce((prev, current) => {
    if (prev?.shoe > current.shoe) return prev;
    return current;
  }, {});
  return biggestNumber.rebounds;
};

console.log(bigShoeRebounds());
