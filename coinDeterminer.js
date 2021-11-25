// Have the function CoinDeterminer(num) take the input, which will be an integer 
// ranging from 1 to 250, and return an integer output that will specify the least 
// number of coins, that when added, equal the input integer. Coins are based on a 
// system as follows: there are coins representing the integers 1, 5, 7, 9, and 11. 
// So for example: if num is 16, then the output should be 2 because you can achieve 
// the number 16 with the coins 9 and 7. If num is 25, then the output should be 3 
// because you can achieve 25 with either 11, 9, and 5 coins or with 9, 9, and 7 coins.

function MathChallenge(num) {

  var coins = [1, 5, 7, 9, 11];

  var changer = function (value) {
    let table = new Array(value + 1);
    for (let i = 0; i < value + 1; i++) {
      table[i] = 0;
    }

    for (let i = 1; i <= value; i++) {
      table[i] = Number.MAX_VALUE;
    }

    for (let i = 1; i <= value; i++) {
      for (let j = 0; j < coins.length; j++) {
        if (coins[j] <= i) {
          let res = table[i - coins[j]];
          if (res != Number.MAX_VALUE && res + 1 < table[i]) {
            table[i] = res + 1;
          }
        }
      }
    }

    if (table[value] == Number.MAX_VALUE) {
      return -1;
    }

    return table[value];
  }

  return changer(num);

}