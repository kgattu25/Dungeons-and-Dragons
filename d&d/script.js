function enterD() {
    document.getElementById("scene").innerHTML = "As you step into the dungeon, the heavy door slams shut behind you, plunging you into darkness. Torches flicker ominously along the corridor ahead, casting eerie shadows on the damp stone walls. Strange noises echo from the darkness, and you feel the hairs on the back of your neck stand on end.";
    document.getElementById("options").innerHTML = "<button onclick='enterUnknown()'>Press On into the Unknown</button><button onclick='runAway()'>Run Away</button>";
    document.body.style.backgroundImage = "url('corridor.jpg')";
}

function dontEnterD() {
    document.getElementById("scene").innerHTML = "You've chosen not to enter the dungeon. As you walk away, you can't shake the feeling that perhaps you missed out on something significant. Only time will tell if your decision was wise or full of regrets.";
    document.getElementById("options").innerHTML = "";
    document.body.style.backgroundImage = "url('return.jpg')";
}

function runAway() {
    document.getElementById("scene").innerHTML = "With a deep breath, you turn your back on the dungeon, opting for a path less perilous. Perhaps there are other adventures better suited to your skills and courage. The safety of the open road beckons, offering a reprieve from the unknown horrors that lie within.";
    document.getElementById("options").innerHTML = "";
    document.body.style.backgroundImage = "url('return.jpg')";
}

function enterUnknown(){
    document.getElementById("scene").innerHTML = "Navigating through the twisting corridors, you come upon a chamber filled with deadly traps and obstacles. Pressure plates litter the floor, and razor-sharp blades hang from the ceiling on frayed ropes. One wrong step could spell certain doom.";
    document.getElementById("options").innerHTML = "<button onclick='solveTraps()'>Risk Braving the Chamber in Search of Treasure</button><button onclick='runAway()'>Retreat to Safety</button>";
    document.body.style.backgroundImage = "url('traps.jpg')";
}

function solveTraps(){
    document.getElementById("scene").innerHTML = "Overcoming the deadly traps, deeper into the dungeon, you encounter the lair of a fearsome guardian — a mighty dragon that guards the treasure with ferocious determination. Its scales gleam in the dim light, and its eyes glow with an otherworldly fire.";
    document.getElementById("options").innerHTML = "<button onclick='fightDragon()'>Stand and Face the Dragon in Battle</button><button onclick='runAway()'>Beat a Hasty Retreat</button>";
    document.body.style.backgroundImage = "url('dragon.jpg')";
}

function fightDragon(){
    document.getElementById("scene").innerHTML = "After a harrowing journey filled with danger and peril, you finally reach the heart of the dungeon — the legendary treasure chamber. Glittering piles of gold and jewels stretch as far as the eye can see, surrounded by ancient artifacts of untold power.";
    document.getElementById("options").innerHTML = "<button onclick='claim()'>Claim the Riches as your Own</button><button onclick='leaveEmpty()'>Leave it and Return Home Empty-Handed</button>";
    document.body.style.backgroundImage = "url('treasures.jpg')";
}

function claim(){
    document.getElementById("scene").innerHTML = "With the treasure in your possession, you emerge from the Dragon's Lair triumphant, your pockets filled with gold and your heart ablaze with the thrill of adventure. Though the journey was fraught with danger, you emerged victorious, forever immortalized as a legendary hero of Eldoria.";
    document.getElementById("options").innerHTML = "";
    document.body.style.backgroundImage = "url('claim.jpg')";
}

function leaveEmpty(){
    document.getElementById("scene").innerHTML = "The allure of the treasure beckons, but after a moment's hesitation, you decide to turn your back on it. Some treasures are not worth the price of entry.";
    document.getElementById("options").innerHTML = "";
    document.body.style.backgroundImage = "url('leaveEmpty.jpg')";
}