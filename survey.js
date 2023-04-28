const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What is an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (mealTime) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (favoriteFood) => {
          rl.question('Which sport is your absolute favourite? ', (favoriteSport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              const profile = `Hi, my name is ${name}. I enjoy ${activity} and listening to ${music} while doing it. My favorite meal is ${mealTime}, and I love to eat ${favoriteFood} for that meal. My favorite sport is ${favoriteSport}. My superpower is ${superpower}.`;

              console.log(profile);

              rl.close();
            });
          });
        });
      });
    });
  });
});