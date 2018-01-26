const team = {
  _players: [
         {firstName: 'Pablo',
          lastName: 'Sanchez',
          age: 22},
         {firstName: 'Lionel',
         lastName: 'Messi',
         age: 30},
         {firstName: 'Pete',
         lastName: 'Wheeler',
         age: 54}
  ],
  _games: [
        {opponent: "Broncos",
         teamPoints: 42,
         opponentPoints: 27},
       {opponent: "Panthers",
        teamPoints: 120,
        opponentPoints: 60},
       {opponent: "Eagles",
        teamPoints: 39,
        opponentPoints: 30 }
  ],

  get players() {
       return this._players;
   },

  get games() {
       return this._games;
   },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };

    this.players.push(player);
    },

   addGame(opp, myPts, oppPts) {
      const game = {
          opponent: opp,
          points: myPts,
          opponentPoints: oppPts
      };
      this.games.push(game);
  }
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addGame("Titans", 100, 98);
team.addGame("Flyers", 70, 49);
team.addGame("Rangers", 76, 110);

console.log(team.games);
