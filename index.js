
let btnWord = document.getElementById("btnWord");
let btnWordUser = document.getElementById("btnWordUser");
let word = document.getElementById("word");
let inputWord = document.getElementById("wordUser");
let counterStrike = document.getElementById("main__scoreboard--strikeId");
let nivelLevel = document.getElementById("main__scoreboard--levelId")
let resultResponse = document.getElementById("resultResponse");
let resultGame = document.getElementById("resultGame");
document.getElementById("wordUser").onkeypress = function() {validarTexto()};


let level = 1;
let wordr =[]; 
let usados = [];
let point = 0; 
let strike = 0;
let wordMostrar = ''



let wordslevel1 = ['begin','drink','break','speak','steal','shake','write','eat','fast','play','home','time','cold','hot',
                    'car','tree','hair','cat','dog','house', "aged","away","desk","gain","acing","famed","alibi","grief",
                    "imply","wrist","bakes","width","copra","naval","flees","chief","locks","flour","cored","image",
                    "solar","bided","adzes","loops","quick","masks","ankle","heard","cabal","dotty","fitly","dizzy",
                    "lying","dados","agony","peaks","cower","snake","trend","bitsy","egret","cabby","fable","ounce",
                    "cargo","fauna","verse","pouch","blitz","axion","faves","dowse","piles","borer",
                    "widow","house","stiff","spray","blast","slate","blues","cause","doors","earns","rates","flask","guilt","write","rises","brisk","rules","agile","cowls",
                    "state","tanks","ethic","fonts","often","fakir","axiom","drone","bases","limbs","right",
                "caddy","tasks","drink","apply","coded","drank","bagel","funny","clear","aside","braid","bulls", "dwarf"];
let wordslevel2 = ['amazed', 'alarmed', 'annoyed', 'bored', 'confused','depressed','excited','inspired','relaxed','satisfied',
                    'tomorrow','before','birthday','homework','boyfriend','yesterday','apartment','forget','neighborhood','placeholder',"aboard",
                    "tagged","baffle","comprise","anions","always","hardly","interest","chickenpox","hoping","science",
                    "blacks","kindly","cutter","border","worker","canyon","calves","injury","seconds",
                    "bready","bedroom","blares","violin","medals","intense","saving","barred","opening","thousand","variant","poison","saints","bangle",
                    "highjacked","balked","worked","interval","license","security","probably","beater","cashes","resident","inspect","teamed","columns","calmly",
                    "bouncy","spread","almond","carina","agency","vessel","location","orange","handed","settle","cereal","victoria","scales","stakes",
                    "building","honored","custom","arrived","approval","avenge","drives","versus","criminal",
                    "funnel","margin","buzzer","system","include","bowmen","couple","series","bawled",
                    "complex","origin","forecast","updated","arisen","enjoys","fights","beside","knight","basalt",
                    "knowing","ceiling","upwards","cheats","astray","broths","median","bunked","beamed","amoral"];
let wordslevel3 = ['high school','full moon', 'ice cream', 'livin room', 'hot dog','peanut butter', 'post office', 'middle class',
                    'dining room','Bad-temperd','Drop-out','High-speed','Snowboard','Spiderweb','Sportswear','Teardrop','Tombston','Underestimate','Warmhearted','Zookeeper',"gut instinct",
                    "crowd overflow","mass transit","makeup bag","bird food","strong odor","lush ecosystem",
                    "frightening monster","brief overview","immediate difference","local newspaper","chest bump","colorful headbands",
                    "new hairstyle","riding pants","dinner recipes","balancing act","diamond tiara","designer luggage",
                    "new friendship","elegant attire","docking station","marvelous tricks","handwritten manuscripts","polar bear",
                    "emmy nominations","head nurse","glittering crystals","remarkable images","flowing dresses","ivory carvings",
                    "passport wallet","championship standing","door prizes","expired passports","extinct volcanoes","blood test",
                    "funny caption","animated emojis","dyed wool","huge reward","cat's meow","oil gauge","medical research","aerial ropeslides",
                    "electronic billboard","new concepts","gold bullion","samurai sword","bumping heads","crossword clues",
                    "official report","patriotic pride","aerial acts","scintillating conversation","glamorous gown","experimental aircraft","lounge chair","blurry lines","copper tools",
                    "eye makeup","household chores","black eyeliner","fireman's axe","children's books","incredible view","dial tone","angle grinder",
                    "military jeep","secret identity","stylish wardrobe","asteroid belt","beaded bracelet",
                    "brush sets","spark plug","elastic waistband","subject matter","beach blanket","fashionable attire","active lifestyle","favorite colors","steady drumroll",
                    "offbeat approach","cheerful friendliness","annual traditions","archived publications",
                    "edinburgh castle","oversized umbrella","bayberry candles","irresistible smile","bureau drawers",
                    "family heirloom","popular beliefs","night hike","dimensional art","piping hot",
                    "hybrid vehicle","modest amount","handmade leather","bakers dozen"];


btnWord.onclick = function solicitarPalabra(){  
    resultResponse.innerHTML = ''; 
    resultGame.innerHTML = '';
    
    btnWord.setAttribute('disabled', "true");
        if(level === 1){
        return mostarPalabra(1500);
        }

        if(level === 2){
            return mostarPalabra(1000);
        }
        if(level === 3){
            return mostarPalabra(900);
        }
    }

function mostarPalabra(time){
    word.style.color = '#761295';
    inputWord.disabled = true;
    setTimeout(borrarPalabra, time);
    wordMostrar = word.innerText = wordRandom();
    return wordMostrar;
}

function validarTexto(){
    btnWordUser.removeAttribute('disabled')
}

function borrarPalabra(){
    document.getElementById("word").style.color = '#FFFFFF';
    let inputWord = document.getElementById("wordUser")
    wordMostrar = word.innerHTML = '';
    inputWord.disabled = false;
}

function wordRandom(){
    let valorWord = '';
    let cantCadena1 = wordslevel1.length;
    let cantCadena2 = wordslevel2.length;
    let cantCadena3 = wordslevel3.length;
    if(level === 1){
        valorWord = wordslevel1[indexRandom(cantCadena1)];
        wordr.push(valorWord);
    }else if(level === 2){
        valorWord = wordslevel2[indexRandom(cantCadena2)];
        wordr.push(valorWord);
    }else if(level ===3){
        valorWord = wordslevel3[indexRandom(cantCadena3)];
        wordr.push(valorWord);
    }
    return valorWord
    };

btnWordUser.onclick = function(){
    let wordCpu = '';
    wordCpu = wordr[0];
    let wordUser = inputWord.value ;
    btnWord.removeAttribute('disabled')
    btnWordUser.setAttribute('disabled', "true");
    wordr.splice(0);
 
   validation(wordUser, wordCpu);
   inputWord.value = '';
   inputWord.disabled = true;
}

 
function indexRandom(cadena){
    while (repe != false) {
        var index = Math.floor(Math.random()*(cadena));
        var repe = auditar(index);
    }     
    usados.push(index);
    return index;
}

function auditar(num) {
    let repe = false;
    for (let i = 0; i < usados.length; i++) {
        if (num == usados[i]) {
            repe = true;
        }
    }  
    return repe;
}


function validation(wordUser, wordRandom){
    if(wordUser === wordRandom){
        resultResponse.innerHTML = 'Bateaste respuesta correcta.';
        point = point + 1;
            if(point === 3){
                point = 0;
                level = level + 1; 
                nivelLevel.innerHTML = 'level ' + level;
                usados.splice(0);
            }

            if(level > 3){
                resultGame.style.color = "#F7EF05";
                resultGame.innerHTML = 'HOME RUN GANASTE EL JUEGO';
                level = 1;
                strike = 0;
                point = 0;
                counterStrike.innerHTML = 'Strike ';
                nivelLevel.innerHTML = 'level ' + level;
            }
    }else{
        strike = strike + 1;
        resultResponse.innerHTML = 'Strike ' + strike + ' palabra incorrecta.';
        counterStrike.innerHTML = 'Strike ' + strike ;
        point = 0;
            if(level > 1){
                level = level - 1;
                nivelLevel.innerHTML = 'level ' + level;
            }
            if(strike === 3){
                resultGame.style.color = '#F4143A';
                resultGame.innerHTML = 'STRIKEOUT PERDISTE EL JUEGO';
                point = 0;
                level = 1;
                strike = 0;
                counterStrike.innerHTML = 'Strike '
                nivelLevel.innerHTML = 'level ' + level;
            }
        }
}

export { level, usados };