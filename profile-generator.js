const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
  console.log(`Oh, it's ${answer}? Nice to meet you.`);

  rl.question(`What's your favourite hobby? `, (answer) => {
    console.log(`Wow, ${answer} is cool!`);

    rl.question(`What song do you have on repeat these days? `, (answer) => {
      console.log(`Nice, I'll have to listen to ${answer} sometime.`);

      rl.question(`Which meal is your favourite? `, (answer) => {
        console.log(`I see. ${answer} is a very important meal.`);

        rl.question(`What is your favourite thing to eat for that meal? `, (answer) => {
          console.log(`Nice choice, ${answer} is surely delicious.`);

          rl.question(`What's your favourite Pokemon? `, (answer) => {
            console.log(`${answer}, is it? Interesting choice.`);

            rl.question(`What do you wish for right now? `, (answer) => {
              console.log(`${answer}... I will cast a spell to make it true :)`);

              rl.close();
            });
          });
        });
      });
    });
  });
});







