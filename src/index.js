const inquirer = require('inquirer').default
const figlet = require('figlet')

console.log('Dice Roller Application Starts...')

/**
 * Initiates a dice rolling game where the user can specify the size of the dice to roll.
 * Prompts the user for the dice size, rolls the dice, and displays the result.
 * Asks if the user wants to play again; if yes, restarts the game, otherwise exits.
 */
function startGame () {
  clearConsole()
  console.log(figlet.textSync('FinnehDice', { horizontalLayout: 'full' }))
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
          setTimeout(startGame, 1000)
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

/**
 * Clears the console by writing a special sequence of characters to the process
 * stdout
 */
const clearConsole = () => {
  process.stdout.write('\u001B[2J\u001B[0;0H')
}

startGame()
