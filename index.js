#!/usr/bin/env node

import timers from "timers/promises"
import { Spinner } from "@topcli/spinner"
import chalk from "chalk"
import readline from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const absorb = async () => {
  const spinner = new Spinner()
    .start("Absorbing electrons")
  await timers.setTimeout(1000)
  spinner.succeed("Absorbed")
}

const transpile = async () => {
  const spinner = new Spinner()
    .start("Transpiling into binary")
  await timers.setTimeout(1000)
  spinner.succeed("Transpiled")
}

const analyze = async () => {
  const spinner = new Spinner()
    .start("Analyzing brain waves")
  await timers.setTimeout(2000)
  spinner.succeed("Analyzed")
}

const communicate = async () => {
  const spinner = new Spinner()
    .start("Communicate brain waves with binary")
  await timers.setTimeout(2000)
  spinner.succeed("Communication done")
}

const decode = async () => {
  const spinner = new Spinner()
    .start("Decoding")
  await timers.setTimeout(3000)
  spinner.succeed("Finished")
}

const generate = async () => {
  const spinner = new Spinner()
    .start("Generating the answer")
  await timers.setTimeout(1000)
  spinner.succeed("All done")
}

async function printAndChangeMessage(initialMessage, finalMessage, delayInSeconds) {
  process.stdout.write(initialMessage)

  await timers.setTimeout(delayInSeconds * 1000)
  process.stdout.clearLine(0)
  process.stdout.cursorTo(0)

  process.stdout.write(finalMessage + '\n')
}

rl.question(`Think of a number from ${chalk.underline("1")} to ${chalk.underline("100")}\n=> `,
  async (number) => {
    if (number <= 100 && number != 0 && !number.startsWith("-")) {
      await timers.setTimeout(300)
      console.clear()
      await timers.setTimeout(1000)
      await absorb()
      await timers.setTimeout(300)
      await transpile()
      await timers.setTimeout(300)
      await analyze()
      await timers.setTimeout(300)
      await communicate()
      await timers.setTimeout(300)
      await decode()
      await timers.setTimeout(300)
      await generate()
      await timers.setTimeout(1000)
      await printAndChangeMessage("You are thinking about number...", `You are thinking about number ${number}`, 1)
    }
    else if (number == 0 || number.startsWith("-")) {
      await timers.setTimeout(300)
      console.clear()
      let file
      if (process.platform == "win32") file = "System32"
      else file = "root directory"
      process.stdout.write(`Deleting ${file}`)
      await timers.setTimeout(500)
      process.stdout.clearLine(0)
      process.stdout.cursorTo(0)
      process.stdout.write(`Deleting ${file}.`)
      await timers.setTimeout(500)
      process.stdout.clearLine(0)
      process.stdout.cursorTo(0)
      process.stdout.write(`Deleting ${file}..`)
      await timers.setTimeout(500)
      process.stdout.clearLine(0)
      process.stdout.cursorTo(0)
      process.stdout.write(`Deleting ${file}...`)
      await timers.setTimeout(1000)
      process.stdout.clearLine(0)
      process.stdout.cursorTo(0)
      process.stdout.write("Just kidding")
    }
    else { console.error("Don't be a genius."); process.exit(123) }
    rl.close()
  })
