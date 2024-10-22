const inquirer = require('inquirer').default

console.log('Dice Roller Application Starts...')

/**
 * Initiates a dice rolling game where the user can specify the size of the dice to roll.
 * Prompts the user for the dice size, rolls the dice, and displays the result.
 * Asks if the user wants to play again; if yes, restarts the game, otherwise exits.
 */
function startGame () {
  inquirer.prompt([
    {
      type: 'input',
      name: 'dice',
      message: 'What size dice do you want to roll?'
    }
  ])
    .then((answer) => {
      console.log(`Rolling a ${answer.dice} sided dice, The result is ${rollDice(answer.dice)}!`)
      console.log('Thank you for playing!')
      inquirer.prompt([
        {
          type: 'confirm',
          name: 'playAgain',
          message: 'Would you like to roll again?',
          default: true
        }
      ])
        .then((answer) => {
          if (!answer.playAgain) {
            console.log('Goodbye!')
            process.exit()
          }
          console.log('Rolling again...')
          startGame()
        })
    })
}

/**
 * Simulates a dice roll, returning a value between 1 and the given diceSize
 * @param {number} [diceSize=6] - The size of the dice to roll, defaults to 6
 * @returns {number} The result of rolling the dice
 */
const rollDice = (diceSize = 6) => {
  let diceResult = 0
  diceResult = Math.ceil(Math.random() * diceSize)
  return diceResult
}

startGame()
