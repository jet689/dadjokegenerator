 function displayRandomDadJoke() {
        const dadJokes =[
  {
    "level": "1",
    "name": "ashes",
    "joke": "When the window fell into the incinerator, it was a pane in the ash to retrieve."
  },
  {
    "level": "1",
    "name": "pirate's favorite letter",
    "joke": "What's a pirate's favorite letter? It be the Sea"
  },
  {
    "level": "1",
    "name": "counting cows",
    "joke": "How do you count cows? A 'Cow'culator"
  },
  {
    "level": "1",
    "name": "He's Alright",
    "joke": "Did you hear about the guy whose whole left side was cut off? He's all right now."
  },
  {
    "level": "3",
    "name": "Bakery Fire",
    "joke": "My friend's bakery burned down last night. Now his business is toast."
  },
  {
    "level": "2",
    "name": "Nut Assault",
    "joke": "Two peanuts were walking down the street. One was a salted."
  },
  {
    "level": "2",
    "name": "Wonderwall",
    "joke": "My son asked me to stop singing Oasis songs in public. I said maybe."
  },
  {
    "level": "2",
    "name": "Banking",
    "joke": "I used to be a banker but I lost interest"
  },
  {
    "level": "2",
    "name": "Golfer Pants",
    "joke": "Why did the golfer bring two pairs of pants? In case he got a hole-in-one."
  },
  {
    "level": "1",
    "name": "Lieutenant Dan",
    "joke": "To the man in the wheelchair that stole my camouflage jacket; You can hide, but you can't run."
  },
  {
    "level": "3",
    "name": "Flamingo",
    "joke": "When my wife told me to stop impersonating a flamingo, I had to put my foot down."
  },
  {
    "level": "1",
    "name": "My Day",
    "joke": "The rotation of earth really makes my day."
  },
  {
    "level": "2",
    "name": "Chickens can't drive",
    "joke": "Why do chicken coops only have two doors? Because if they had four, they would be chicken sedans."
  },
  {
    "level": "1",
    "name": "Bel Air",
    "joke": "How do you find Will Smith in the snow? You look for the fresh prints."
  },
  {
    "level": "1",
    "name": "No Charge",
    "joke": "A proton, an electron, & a neutron walk into a bar. The proton orders a shot, drinks it, pulls out his wallet, and pays the bartender. The electron orders a shot, drinks it, pulls out his wallet, and pays the bartender. The neutron orders a shot, drinks it, then pulls out his wallet. The bartender stops him and says, \"for you, no charge...\""
  },
  {
    "level": "1",
    "name": "I'm Positive",
    "joke": "Two atoms are walking down the street. One says, \"Oh no! I lost an electron!\", The other asks him, \"Are you sure?\", The first one says, \"Yeah, I'm positive\""
  },
  {
    "level": "2",
    "name": "Sandwich",
    "joke": "A ham sandwich walks into a bar and orders a beer. The bartender looks at him and says, ‘Sorry we don’t serve food here."
  },
  {
    "level": "3",
    "name": "I Can't Hear This Joke",
    "joke": "What is Beethoven’s favorite fruit? A ba-na-na-na."
  },
  {
    "level": "1",
    "name": "Exhaust",
    "joke": "I had a dream that I was a muffler last night. I woke up exhausted."
  },
  {
    "level": "1",
    "name": "Watch Your Head",
    "joke": "Two guys walk into a bar, the third one ducks."
  },
  {
    "level": "1",
    "name": "Every 6 Months",
    "joke": "What time did the man go to the dentist? Tooth hurt-y."
  },
  {
    "level": "1",
    "name": "Color Blind",
    "joke": "Found out I was colour blind the other day... That one came right out the purple."
  },
  {
    "level": "1",
    "name": "Thing Factory",
    "joke": "Where are average things built? In the satisfactory."
  },
  {
    "level": "1",
    "name": "Thoughtful Clown",
    "joke": "Yesterday a clown held a door open for me. I thought it was a nice jester."
  },
  {
    "level": "1",
    "name": "Frog Facts",
    "joke": "Just read a few facts about frogs. They were ribbiting."
  },
  {
    "level": "1",
    "name": "Trampoline Bed",
    "joke": "I just swapped our bed for a trampoline. My wife hit the roof."
  },
  {
    "level": "1",
    "name": "24 Hours",
    "joke": "Astronomers got tired of watching the moon go round the earth for 24 hours, so they decided to call it a day."
  },
  {
    "level": "1",
    "name": "Checkout Girl",
    "joke": "I asked the checkout girl for a date. She said \"They're in the fruit aisle next to the bananas.\""
  },
  {
    "level": "1",
    "name": "Well Dressed Bicycle",
    "joke": "What's the difference between a well dressed man on a a bicycle and a poorly dressed man on a tricycle? Attire!"
  },
  {
    "level": "1",
    "name": "Pirate Birthday",
    "joke": "What did the pirate say on his 80th birthday? Aye matey"
  },
  {
    "level": "1",
    "name": "Italians",
    "joke": "What do you call a sketchy Italian neighbourhood? The Spaghetto."
  },
  {
    "level": "1",
    "name": "Kleptomania",
    "joke": "I have kleptomania, but when it gets bad, I take something for it."
  },
  {
    "level": "1",
    "name": "Doorbells",
    "joke": "Doorbells, don't knock 'em."
  },
  {
    "level": "1",
    "name": "Tropical Diet",
    "joke": "My wife is on a tropical food diet, the house is full of the stuff. It's enough to make a mango crazy."
  },
  {
    "level": "1",
    "name": "Whiteboards",
    "joke": "Whiteboards are remarkable."
  },
  {
    "level": "1",
    "name": "I Wish I Had Laser Hair",
    "joke": "Why do so many people with laser hair want to get it removed?"
  },
  {
    "level": "1",
    "name": "Terror Of The Skies",
    "joke": "What has twenty legs and flies? Ten pairs of pants."
  },
  {
    "level": "1",
    "name": "The Incredible Mr. Dead",
    "joke": "What has twenty legs and flies? Five dead Horses."
  },
  {
    "level": "1",
    "name": "Eye Love This Joke",
    "joke": "What do you call a fish with no eyes? Fsh."
  },
  {
    "level": "1",
    "name": "I'll Never Let Go Of This Joke",
    "joke": "What do you get if you cross the Atlantic with the Titanic? About halfway."
  },
  {
    "level": "1",
    "name": "Why Don't They Just Open A Bankery",
    "joke": "Why do bakers work so hard? They knead the dough."
  },
  {
    "level": "1",
    "name": "Meling",
    "joke": "What do you call a man with a rug on his head? Matt."
  },
  {
    "level": "1",
    "name": "The Royal Flush Of The Jungle",
    "joke": "Why shouldn't you play cards in the jungle? Too many cheetahs."
  },
  {
    "level": "1",
    "name": "Obviously",
    "joke": "What's big, red, and eats rocks? A big, red, rock-eater."
  },
  {
    "level": "1",
    "name": "A Toast To Monkey Jokes",
    "joke": "How do you make toast in the jungle? Pop your bread under a g'rilla."
  },
  {
    "level": "1",
    "name": "These Jokes Have Sunk So Low",
    "joke": "What lies on the ocean floor and shivers? A nervous wreck."
  },
  {
    "level": "1",
    "name": "Wanted For Eight Armed Robbery",
    "joke": "Who is the quickest draw in the ocean? Billy the Squid."
  },
  {
    "level": "1",
    "name": "Prison Jewelry",
    "joke": "What's the difference between a jeweller and a prison warden? One sells watches, and the other watches cells."
  },
  {
    "level": "1",
    "name": "My Nephew",
    "joke": "What's brown and sticky? A stick."
  },
  {
    "level": "1",
    "name": "Banana Joke For Scale",
    "joke": "Why did the banana go to the doctors'? He wasn't peeling very well."
  },
  {
    "level": "1",
    "name": "Napoleonic Bad Joke",
    "joke": "Where did Napoleon keep his armies? Up his sleevies."
  },
  {
    "level": "1",
    "name": "Andes Are In The Candy Aisle",
    "joke": "Where are the Andes? At the end of your armies."
  },
  {
    "level": "1",
    "name": "Lawnmower Bird-Man",
    "joke": "What do you get when you run over a bird with your lawnmower? Shredded tweet."
  },
  {
    "level": "1",
    "name": "This Piano Jokes Struck A Chord",
    "joke": "What do you get if you drop a piano down a coal shaft? A flat minor."
  },
  {
    "level": "1",
    "name": "Burglars",
    "joke": "How does a burglar get into your house? Intruder window."
  },
  {
    "level": "1",
    "name": "Just The Tip Of The Worm",
    "joke": "What's worse than finding a worm in your apple? Finding half a worm."
  },
  {
    "level": "1",
    "name": "If You Count Alcoholics As Wealth",
    "joke": "What is the richest country in the world? Ireland. Its capital is always Dublin."
  },
  {
    "level": "1",
    "name": "Do Androids Dream of Electric Clouds?",
    "joke": "What do you call a sheep with no legs? A cloud."
  },
  {
    "level": "1",
    "name": "Beef Oven",
    "joke": "What was Beethoven's fifth favorite fruit? Ba-na-na-na."
  },
  {
    "level": "1",
    "name": "Your Grapes Take My Breath Away",
    "joke": "What did the green grape say to the purple grape? Breathe, you fool, breathe!"
  },
  {
    "level": "1",
    "name": "Soul Duck",
    "joke": "How do you turn a duck into a soul singer? Put it in a microwave until its bill withers."
  },
  {
    "level": "1",
    "name": "A Wall Of movies",
    "joke": "Last night me and my girlfriend watched three movies back to back. Luckily I was the one facing the TV."
  },
  {
    "level": "1",
    "name": "De-Grubered",
    "joke": "I've deleted the phone numbers of all the Germans I know from my mobile phone. Now it's Hans free."
  },
  {
    "level": "1",
    "name": "You Can't Handle The Ending",
    "joke": "Why did the octopus beat the shark in a fight? Because it was well armed."
  },
  {
    "level": "1",
    "name": "Color Me Concerned",
    "joke": "A red and a blue ship have just collided in the Caribbean. Apparently the survivors are marooned."
  },
  {
    "level": "1",
    "name": "Swiss Cheesey",
    "joke": "What's the advantage of living in Switzerland? Well, the flag is a big plus."
  },
  {
    "level": "1",
    "name": "This Joke Expired Years Ago",
    "joke": "I am terrified of elevators. I'm going to start taking steps to avoid them."
  },
  {
    "level": "1",
    "name": "The Dream Was Deep In Soda Me",
    "joke": "I dreamed about drowning in an ocean made out of orange soda last night. It took me a while to work out it was just a Fanta sea."
  },
  {
    "level": "1",
    "name": "You Have To Be Kitten Me",
    "joke": "My cat just threw up on the carpet. I don't think it's feline well."
  },
  {
    "level": "1",
    "name": "My Type Of Humor",
    "joke": "I went to the doctor today and he told me I had type A blood, but it was a type O."
  },
  {
    "level": "1",
    "name": "Tasteless Joke",
    "joke": "Today a girl said she recognized me from vegetarian club, but I'm sure I've never met herbivore."
  },
  {
    "level": "1",
    "name": "They Pinch Pennies",
    "joke": "Why do crabs never give to charity? Because they're shellfish."
  },
  {
    "level": "1",
    "name": "The End Of The Joke",
    "joke": "People keep making apocalypse jokes like there's no tomorrow."
  },
  {
    "level": "1",
    "name": "Light Up Their Christmas",
    "joke": "If you're struggling to think of what to get someone for Christmas. Get them a fridge, and watch their face light up when they open it."
  },
  {
    "level": "1",
    "name": "Czech This Joke Out",
    "joke": "I was thinking about moving to Moscow but there is no point Russian into things."
  },
  {
    "level": "1",
    "name": "They Only Serve Cheese",
    "joke": "Did you hear about the new restaurant on the moon? The food is great, but there's just no atmosphere."
  },
  {
    "level": "1",
    "name": "Milking Fast",
    "joke": "Milk is also the fastest liquid on earth. It's pasteurized before you even see it."
  },
  {
    "level": "1",
    "name": "Small Thefts",
    "joke": "Did you hear that the police have a warrant out on a midget psychic ripping people off? It reads \"Small medium at large.\""
  },
  {
    "level": "1",
    "name": "I Take My Puns Rare",
    "joke": "A steak pun is a rare medium well done."
  },
  {
    "level": "1",
    "name": "Clean Vocals",
    "joke": "Singing in the shower is all fun and games until you get shampoo in your mouth. Then it's a soap opera."
  },
  {
    "level": "3",
    "name": "Not Even A Tinkle",
    "joke": "Why can't you hear a pterodactyl using the bathroom? Because the P is silent."
  },
  {
    "level": "1",
    "name": "Jump In Price",
    "joke": "The price of bouncy castles have doubled this year. That's inflation for you."
  },
  {
    "level": "1",
    "name": "It's NOT Funny, Chocolate",
    "joke": "Whenever I want to start eating healthy, a chocolate bar looks at me and Snickers."
  },
  {
    "level": "1",
    "name": "Banana Hands",
    "joke": "What do you get hanging off banana trees? Sore arms."
  },
  {
    "level": "1",
    "name": "Perforated Hatred",
    "joke": "I hate perforated lines, they're tearable."
  },
  {
    "level": "1",
    "name": "I Predict A Heart Attack",
    "joke": "What do you call a fat psychic? A four-chin teller."
  },
  {
    "level": "1",
    "name": "Uno Joke, Por Favor",
    "joke": "A Mexican magician says he'll disappear on the count of 3; \"Uno... dos... poof...\". He disappeared without a tres."
  },
  {
    "level": "1",
    "name": "This Joke Will Spark A Laugh",
    "joke": "What's the difference between a hippo and a Zippo? One is heavy, and the other is a little lighter."
  },
  {
    "level": "1",
    "name": "Unstable Bicycles",
    "joke": "Why are bike trails so crazy? Because they're cycle paths."
  },
  {
    "level": "1",
    "name": "Bad Music",
    "joke": "How do you listen to nefarious music? On a seedy player."
  },
  {
    "level": "1",
    "name": "Animal Sports",
    "joke": "What animal picks the other animals to play basketball? The NBA Giraffe."
  }
];
        
        const randomIndex = Math.floor(Math.random() * dadJokes.length);
        const joke = dadJokes[randomIndex].joke;
        
        const dadJokeElement = document.getElementById("dad-joke");
        dadJokeElement.textContent = joke;
      }
      
      const dadJokeBtn = document.getElementById("dad-joke-btn");
      dadJokeBtn.addEventListener("click", displayRandomDadJoke);
      
      window.addEventListener("load", displayRandomDadJoke);
