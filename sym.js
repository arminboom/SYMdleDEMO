let style = document.createElement('style');
document.head.appendChild(style);
let sheet = style.sheet;

let delay = 1000
let stopped = false

var syms = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@',
            '[', ']', '^', '_', '`', '{', '|', '}', '~', '¡', '¢', '£', '¤', '¥', '¦', '§', '¨', '©', '«', '¬',
            '®', '¯', '°', '±', '´', 'µ', '¶', '¸', '»', '¿'
  ]
let nod = ','
var removed = Array.from(syms).filter(char => char !== nod).join(' ')

function htpshow () {
  document.getElementById("info").innerHTML = "Upon interacting with the 'ROLL' button, 5 'Balott-boxes' will show up, these will transform into a selection of 50 randomized symbols." + "<br>" +
  "Each symbol gets revealed within a second after the last.<br>" +
  "<br>When all 5 are revealed, the game will award badges that give score based on similarities, patterns, individual qualities and specific conditions. <br>" +
  "There are many to collect, so good luck!" + "<br>" +
  "<br>If the scoring is done, the game will grant a rarity rating, your goal is to reach the highest possible score.<br>" +
  "<br>Since this is only the alpha/demo version, you may roll as much as you please, have fun!<br>" +
  "<a href=>Close</a>"
}

function symshow () {
  document.getElementById("info").innerHTML = "The list of available symbols: <br>" + removed + "<br>" +
  "<br>The first 50 unicodes were selected that met the following conditions:<br>" +
  "The unicode must not: represent a digit or a letter, be a blank/undisplayble character and not be unique (apart from pairs) <br>" + "<br>" +
  "Source: <a href=https://unicodes.jessetane.com/>https://unicodes.jessetane.com/</a><br>" +
  "<a href=>Close</a>"
}

function updshow () {
  document.getElementById("info").innerHTML = "Added new badge type: Categorized <br>" +
  "Fixed some badges giving inccorect SYM amount<br>" +
  "Added content for credits and update log<br>"+
  "Adjusted some miscelanious stuff<br>" +
  "<a href=>Close</a>"
}

function enshow () {
  document.getElementById("info").innerHTML = "The game has been made in 15 days, total development time of 1.5 days" + "<br>" +
  "<br>This is my first larger game-like project, which has been built up from the ground, where almost all content was produced by entirely myself <br>" +
  "And most importantly, no use of AI or any generative tools were used for this project." + "<br>" +
  "<a href=>Close</a>"
}

function cshow () {
  document.getElementById("info").innerHTML = "All content seen here were made by me and the following was modified by me:" + "<br>" +
  "<br>Sounds: DRAGON-STUDIO, SUBMORITY, SoundReality, Black_Kumizhi, Alex_Jauk, SamuelFJohhans, ejah_music and freesound_community on Pixabay <br>" +
  "Letter badges: <a href=https://scrabble.collinsdictionary.com/word-lists/>https://scrabble.collinsdictionary.com/word-lists/</a><br>" +
  "What made the badge design possible: <a href=https://abdessalam.dev/blog/wrap-an-element-with-custom-createelement-in-javascript/>https://abdessalam.dev/blog/wrap-an-element-with-custom-createelement-in-javascript/</a><br>" +
  "<a href=>Close</a>"
}

function displaymessage () {
  function adder(x) {
  return new Promise((resolve) => {
    setInterval(() => {
      resolve(x);
    }, delay);
  });
}
  var roll = []
  var toreveal = ['☐', '☐', '☐', '☐', '☐']

  async function generator() {
  for (let index = 0; index < 5; index++) {
    const span = document.createElement('span')
    span.setAttribute('class', 'test')
    let gen = Math.floor((Math.random() * syms.length)); 
    toreveal.pop()
    await adder(roll.push(syms[gen]));
    let no = ','
    var remove = Array.from(roll).filter(char => char !== no).join('')
    var torevealremove = Array.from(toreveal).filter(char => char !== no).join('')
    document.getElementById("rand").innerHTML = remove + torevealremove
    document.getElementById("reveal").play()
    document.getElementById("reveal").currentTime = 0
    }
    
    //If statements of hell
    async function checker() {
    let addscore = []
    
    // Math category
    function Maths(value) {
    if (value == '¬' || value == '+' || value == '%' || value == '*' || value == ':' || value == '^' || value == '~' || value == '=' || value == '>' || value == '<')
    return true;
    else 
    return false;
    }
    let AllMaths = roll.every(Maths)

    if ((AllMaths == true && (remove[0] == remove[1])) && (AllMaths == true && (remove[1] == remove[2])) && 
        (AllMaths == true && (remove[2] == remove[3])) && (AllMaths == true && (remove[3] == remove[4]))  
    ) {
      givepoints(62500000)
      addscore.push(62500000)
      await adder(addbadge('hightier', "MATHEMATICALLY UNIFORM", "UNIFORMITY - All mathematical - Mathematical within", "All symbols in your roll are the same and resembles a mathematical symbol", "+62,500,000 SYM"))
    }
    if (((AllMaths == true) && remove[0] !== remove[1]) && ((AllMaths == true) &&remove[0] !== remove[2]) && ((AllMaths == true) &&remove[0] !== remove[3]) 
      && ((AllMaths == true) && remove[1] !== remove[2]) && ((AllMaths == true) &&remove[1] !== remove[3]) && ((AllMaths == true) &&remove[1] !== remove[4])
      && ((AllMaths == true) && remove[2] !== remove[0]) && ((AllMaths == true) &&remove[2] !== remove[3]) && ((AllMaths == true) &&remove[2] !== remove[4])
      && ((AllMaths == true) && remove[3] !== remove[0]) && ((AllMaths == true) &&remove[3] !== remove[1]) && ((AllMaths == true) &&remove[3] !== remove[4])
      && ((AllMaths == true) && remove[4] !== remove[0]) && ((AllMaths == true) &&remove[4] !== remove[1]) && ((AllMaths == true) &&remove[4] !== remove[2]) 
    ) {
      givepoints(516500)
      addscore.push(516500)
      await adder(addbadge('hightier', "VERSATILE MATHEMATICAL", "All mathematical - Mathematical within", "All symbols in your roll are different from eachother and resembles a mathematical symbol", "+516,500 SYM"))
    }
    else if (AllMaths == true
    ) {
      givepoints(156250)
      addscore.push(156250)
      await adder(addbadge('hightier', "All mathematical", "Mathematical within", "All symbols in your roll resembles a mathematical symbol", "+156,250 SYM"))
    }
    else if (remove.includes("¬") || remove.includes("+") || remove.includes("%") || remove.includes("*") ||
        remove.includes(":") || remove.includes("^") || remove.includes("~") || remove.includes("=") ||
        remove.includes(">") || remove.includes("<")
    ) {
      givepoints(50)
      addscore.push(50)
      await adder(addbadge('lowtier', "Mathematical within", null, "At least one symbol in your roll resembles a mathematical symbol", "+50 SYM"))
    }

    // Currency category
    function Currency(value) {
    if (value == '¢' || value == '$' || value == '£' || value == '¥' || value == '¤')
    return true;
    else 
    return false;
    }
    let AllCurrency = roll.every(Currency)

    if ((AllCurrency == true && (remove[0] == remove[1])) && (AllCurrency == true && (remove[1] == remove[2])) && 
        (AllCurrency == true && (remove[2] == remove[3])) && (AllCurrency == true && (remove[3] == remove[4]))  
    ) {
      givepoints(125000000)
      addscore.push(125000000)
      await adder(addbadge('hightier', "MONETARILY UNIFORM", "UNIFORMITY - All currencies - Currency within", "All symbols in your roll are the same and resembles a monetary symbol", "+125,000,000 SYM"))
    }
    if (((AllCurrency == true) && remove[0] !== remove[1]) && ((AllCurrency == true) &&remove[0] !== remove[2]) && ((AllCurrency == true) &&remove[0] !== remove[3]) 
      && ((AllCurrency == true) && remove[1] !== remove[2]) && ((AllCurrency == true) &&remove[1] !== remove[3]) && ((AllCurrency == true) &&remove[1] !== remove[4])
      && ((AllCurrency == true) && remove[2] !== remove[0]) && ((AllCurrency == true) &&remove[2] !== remove[3]) && ((AllCurrency == true) &&remove[2] !== remove[4])
      && ((AllCurrency == true) && remove[3] !== remove[0]) && ((AllCurrency == true) &&remove[3] !== remove[1]) && ((AllCurrency == true) &&remove[3] !== remove[4])
      && ((AllCurrency == true) && remove[4] !== remove[0]) && ((AllCurrency == true) &&remove[4] !== remove[1]) && ((AllCurrency == true) &&remove[4] !== remove[2]) 
    ) {
      givepoints(625000000)
      addscore.push(625000000)
      await adder(addbadge('hightier', "INFINITUS MONETAR", "All currencies - Currency within", "All symbols in your roll are different from eachother and resembles a monetary symbol (Now at this point you probably have enough money and quite franky, enough luck to win a lottery so just go ahead and buy a ticket.)", "+625,000,000 SYM"))
    }
    else if (AllCurrency == true
    ) {
      givepoints(5000000)
      addscore.push(5000000)
      await adder(addbadge('hightier', "All currencies", "Currency within", "All symbols in your roll resembles a monetary symbol", "+5,000,000 SYM"))
    }
    else if (remove.includes("¢") || remove.includes("$") || remove.includes("£") || remove.includes("¥") ||
        remove.includes("¤") 
    ) {
      givepoints(100)
      addscore.push(100)
      await adder(addbadge('lowtier', "Currency within", null, "At least one symbol in your roll resembles a monetary symbol", "+100 SYM"))
    }

    // Grammatical category
    function Grammatics(value) {
    if (value == '!' || value == '?' || value == '.' || value == '¿' || value == '¡' || value == ':' || value == ';' || value == '*')
    return true;
    else 
    return false;
    }
    let AllGrammatics = roll.every(Grammatics)

    if ((AllCurrency == true && (remove[0] == remove[1])) && (AllCurrency == true && (remove[1] == remove[2])) && 
        (AllCurrency == true && (remove[2] == remove[3])) && (AllCurrency == true && (remove[3] == remove[4]))  
    ) {
      givepoints(78125000)
      addscore.push(78125000)
      await adder(addbadge('hightier', "GRAMMATICALLY UNIFORM", "UNIFORMITY - All grammatics - Grammatics within", "All symbols in your roll are the same and resembles a commonly used grammatic symbol", "+78,125,000 SYM"))
    }
    if (((AllGrammatics == true) && remove[0] !== remove[1]) && ((AllGrammatics == true) &&remove[0] !== remove[2]) && ((AllGrammatics == true) &&remove[0] !== remove[3]) 
      && ((AllGrammatics == true) && remove[1] !== remove[2]) && ((AllGrammatics == true) &&remove[1] !== remove[3]) && ((AllGrammatics == true) &&remove[1] !== remove[4])
      && ((AllGrammatics == true) && remove[2] !== remove[0]) && ((AllGrammatics == true) &&remove[2] !== remove[3]) && ((AllGrammatics == true) &&remove[2] !== remove[4])
      && ((AllGrammatics == true) && remove[3] !== remove[0]) && ((AllGrammatics == true) &&remove[3] !== remove[1]) && ((AllGrammatics == true) &&remove[3] !== remove[4])
      && ((AllGrammatics == true) && remove[4] !== remove[0]) && ((AllGrammatics == true) &&remove[4] !== remove[1]) && ((AllGrammatics == true) &&remove[4] !== remove[2]) 
    ) {
      givepoints(2326500)
      addscore.push(2326500)
      await adder(addbadge('hightier', "VERSATILE GRAMMATICAL", "All grammatics - Grammatics within", "All symbols in your roll are different from eachother and resembles a commonly used grammatic symbol", "+2,326,500 SYM"))
    }
    else if (AllGrammatics == true
    ) {
      givepoints(475000)
      addscore.push(475000)
      await adder(addbadge('hightier', "All grammatics", "Grammatics within", "All symbols in your roll resembles a commonly used grammatic symbol", "+475,000 SYM"))
    }
    else if (remove.includes("!") || remove.includes("?") || remove.includes(".") || remove.includes("¿") || 
        remove.includes("¡") || remove.includes(":") || remove.includes(";") || remove.includes("*") 
    ) {
      givepoints(75)
      addscore.push(75)
      await adder(addbadge('lowtier', "Grammatics within", null, "At least one symbol in your roll resembles a commonly used grammatic symbol", "+75 SYM"))
    }

    //x-Pair
    if ((remove[0] == remove[1]) && (remove[1] == remove[2]) && (remove[2] == remove[3]) && (remove[3] == remove[4])   
    ) {
      givepoints(12500000)
      addscore.push(12500000)
      await adder(addbadge('hightier', "UNIFORMITY", "Four of a kind - Three of a kind - Two of a kind", "Every symbol in the roll is the same", "+12,500,000 SYM"))
    }
    else if ((remove[0] == remove[1] && remove[1] == remove[2] && remove[2] == remove[3]) || (remove[0] == remove[1] && remove[1] == remove[2] && remove[2] == remove[4]) 
      || (remove[1] == remove[2] && remove[2] == remove[3] && remove[3] == remove[4]) || (remove[2] == remove[3] && remove[3] == remove[4] && remove[4] == remove[0]) 
      || (remove[0] == remove[1] && remove[1] == remove[3] && remove[3] == remove[4])   
    ) {
      givepoints(250000)
      addscore.push(250000)
      await adder(addbadge('lowtier', "Four of a kind", "Three of a kind - Two of a kind", "Four of the same symbols appear in the roll", "+250,000 SYM"))
    } 
    else if ((remove[0] == remove[1] && remove[1] == remove[2]) || (remove[0] == remove[1] && remove[1] == remove[3]) || (remove[0] == remove[1] && remove[1] == remove[4])
      || (remove[1] == remove[2] && remove[2] == remove[0]) || (remove[1] == remove[2] && remove[2] == remove[3]) || (remove[1] == remove[2] && remove[2] == remove[4])
      || (remove[2] == remove[3] && remove[3] == remove[0]) || (remove[2] == remove[3] && remove[3] == remove[1]) || (remove[2] == remove[3] && remove[3] == remove[4])
      || (remove[3] == remove[4] && remove[4] == remove[0]) || (remove[3] == remove[4] && remove[4] == remove[1]) || (remove[3] == remove[4] && remove[4] == remove[2])
      || (remove[0] == remove[2] && remove[2] == remove[4]) 
    ) {
      givepoints(5000)
      addscore.push(5000)
      await adder(addbadge('lowtier', "Three of a kind", "Two of a kind", "Three of the same symbols appear in the roll", "+5,000 SYM"))
    } 
    else if (remove[0] == remove[1] || remove[0] == remove[2] || remove[0] == remove[3] 
      || remove[1] == remove[2] || remove[1] == remove[3] || remove[1] == remove[4]
      || remove[2] == remove[0] || remove[2] == remove[3] || remove[2] == remove[4]
      || remove[3] == remove[0] || remove[3] == remove[1] || remove[3] == remove[4]
      || remove[4] == remove[0] || remove[4] == remove[1] || remove[4] == remove[2] 
    ) {
      givepoints(250)
      addscore.push(250)
      await adder(addbadge('lowtier', "Two of a kind", null, "Two of the same symbols appear in the roll", "+250 SYM"))
    } 

    //x-Sequence
    if ((((remove[0] == remove[1]) && (remove[1] == remove[2]) && (remove[2] == remove[3])))
      || (((remove[1] == remove[2]) && (remove[2] == remove[3]) && (remove[3] == remove[4])))
    ) {
      givepoints(625000)
      addscore.push(625000)
      await adder(addbadge('hightier', "SEQUENTIFIC", "Sequence of Three - Sequence of Two", "Four of the same symbols appear in a row", "+625,000 SYM"))
    }
    else if (((remove[0] == remove[1]) && (remove[1] == remove[2])) 
      || ((remove[1] == remove[2]) && (remove[2] == remove[3]))
      || ((remove[2] == remove[3]) && (remove[3] == remove[4]))
    ) {
      givepoints(12500)
      addscore.push(12500)
      await adder(addbadge('lowtier', "Sequence of Three", "Sequence of Two", "Three of the same symbols appear in a row", "+12,500 SYM"))
    }
    else if ((remove[0] == remove[1]) || (remove[1] == remove[2]) || (remove[2] == remove[3]) || (remove[3] == remove[4])
    ) {
      givepoints(250)
      addscore.push(250)
      await adder(addbadge('lowtier', "Sequence of Two", null, "Two of the same symbols appear in a row", "+250 SYM"))
    }

    //Other basics
    if ((remove[0] == remove[4])
    ) {
      givepoints(250)
      addscore.push(250)
      await adder(addbadge('lowtier', "Outer wrap", null, "The first and last symbol is the same", "+250 SYM"))
    }

    if ((remove[1] == remove[3])
    ) {
      givepoints(250)
      addscore.push(250)
      await adder(addbadge('lowtier', "Inner wrap", null, "The 2nd and 4th symbol is the same", "+250 SYM"))
    }

    if (((remove[0] == remove[3]) && (remove[1] == remove[2])) || ((remove[1] == remove[4]) && (remove[2] == remove[3]))
    ) {
      givepoints(500)
      addscore.push(500)
      await adder(addbadge('lowtier', "Pocket mirror", null, "Your roll has an outer and inner wrap", "+500 SYM"))
    }

    if (((remove[0] == remove[4]) && (remove[1] == remove[3])) 
    ) {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Duowrapped", null, "Your roll has an outer and inner wrap in the center", "+1,000 SYM"))
    }

    if ((remove[0] == remove[2]) && (remove[2] == remove[4])
    ) {
      givepoints(25000)
      addscore.push(25000)
      await adder(addbadge('lowtier', "Hopwraped", null, "Your roll has an outer wrap, with the symbol in the middle being the same of what the wrap is", "+25,000 SYM"))
    }

    if (((remove[1] == remove[2]) && (remove[2] == remove[3])) && (remove[0] == remove[4]) ||
        ((remove[3] == remove[4]) && (remove[4] == remove[0])) && (remove[1] == remove[2]) ||
        ((remove[4] == remove[0]) && (remove[0] == remove[1])) && (remove[2] == remove[3])
    ) {
      givepoints(250000)
      addscore.push(250000)
      await adder(addbadge('hightier', "Full house", null, "Your roll is a full house, 2 of the same symbols with counts of 2 and 3", "+250,000 SYM"))
    }

    if (((remove[0] == remove[1]) && (remove[1] == remove[2])) && (remove[3] == remove[4]) ||
        ((remove[2] == remove[3]) && (remove[3] == remove[4])) && (remove[0] == remove[1])
    ) {
      givepoints(625000)
      addscore.push(625000)
      await adder(addbadge('hightier', "Contigous full house", null, "Your roll is a full house, which is not disrupted by the other symbol", "+625,000 SYM"))
    }

    if (((remove[0] == remove[2]) && (remove[2] == remove[4])) && (remove[1] == remove[3])
    ) {
      givepoints(1250000)
      addscore.push(1250000)
      await adder(addbadge('hightier', "Housewraped", null, "Your roll is a full house, where one acts as a hopwrapped and the other is an inner wrap", "+1,250,000 SYM"))
    }

    //One-Symmers (Start)
    if (remove[0] == "#") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Tagged", null, "Your roll contains '#' at the start", "+1000 SYM"))
    }
    if (remove[0] == "+") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Added", null, "Your roll contains '+' at the start", "+1000 SYM"))
    }
    if (remove[0] == "-") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Substracted", null, "Your roll contains '-' at the start", "+1000 SYM"))
    }
    if (remove[0] == "/") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Commanded", null, "Your roll contains '/' at the start", "+1000 SYM"))
    }
    if (remove[0] == "~") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Approximated", null, "Your roll contains '~' at the start", "+1000 SYM"))
    }
    if (remove[0] == "§") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Sectioned", null, "Your roll contains '§' at the start", "+1000 SYM"))
    }
    if (remove[0] == "¬") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Negated", null, "Your roll contains '¬' at the start", "+1000 SYM"))
    }
    if (remove[0] == "µ") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Microned", null, "Your roll contains 'µ' at the start", "+1000 SYM"))
    }
    //One-Symmers (Start)[Currency]
    if (remove[0] == "$") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Dollared", null, "Your roll contains '$' at the start", "+1000 SYM"))
    }
    if (remove[0] == "¢") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Cented", null, "Your roll contains '¢' at the start", "+1000 SYM"))
    }
    if (remove[0] == "£") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Sterlinged", null, "Your roll contains '£' at the start", "+1000 SYM"))
    }
    if (remove[0] == "¤") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Generalized", null, "Your roll contains '¤' at the start", "+1000 SYM"))
    }
    if (remove[0] == "¥") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Yened", null, "Your roll contains '¥' at the start", "+1000 SYM"))
    }

    //One-Symmers (End)
    if (remove[4] == "!") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Exclaimed", null, "Your roll contains '!' at the end", "+1000 SYM"))
    }
    if (remove[4] == "?") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Questioned", null, "Your roll contains '?' at the end", "+1000 SYM"))
    }
    if (remove[4] == ".") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Sentenced", null, "Your roll contains '.' at the end", "+1000 SYM"))
    }
    if (remove[4] == "%") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Perchanced", null, "Your roll contains '%' at the end", "+1000 SYM"))
    }
    if (remove[4] == "*") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Starred", null, "Your roll contains '*' at the end", "+1000 SYM"))
    }
    if (remove[4] == ":") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Included", null, "Your roll contains ':' at the end", "+1000 SYM"))
    }
    if (remove[4] == ";") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Differed", null, "Your roll contains ';' at the end", "+1000 SYM"))
    }
    if (remove[4] == "©") {
      addscore.push(1000)
      givepoints(1000)
      await adder(addbadge('lowtier', "Copyrighted", null, "Your roll contains '©' at the end", "+1000 SYM"))
    }
    if (remove[4] == "®") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Registered", null, "Your roll contains '®' at the end", "+1000 SYM"))
    }
    if (remove[4] == "°") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Degreed", null, "Your roll contains '°' at the end", "+1000 SYM"))
    }
    if (remove[4] == "¶") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Paragraphed", null, "Your roll contains '¶' at the end", "+1000 SYM"))
    }

    //One-Symmers (Middle)
    if (remove[2] == "&") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Anded", null, "Your roll contains '&' at the middle", "+1000 SYM"))
    }
    if (remove[2] == "_") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Underscored", null, "Your roll contains '_' at the middle", "+1000 SYM"))
    }
    //One-Symmers (Middle)[Mathematical]
    if (remove[2] == "<") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Right-operated", null, "Your roll contains '<' at the middle", "+1000 SYM"))
    }
    if (remove[2] == ">") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Left-operated", null, "Your roll contains '>' at the middle", "+1000 SYM"))
    }
    if (remove[2] == "±") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Equalified", null, "Your roll contains '±' at the middle", "+1000 SYM"))
    }
    if (remove[2] == "=") {
      givepoints(1000)
      addscore.push(1000)
      await adder(addbadge('lowtier', "Equalised", null, "Your roll contains '=' at the middle", "+1000 SYM"))
    }

    //Wrapping-Symbols(Different)
    if ((remove[0] == '(') && (remove[4] == ')')
    ) {
      givepoints(20000)
      addscore.push(20000)
      await adder(addbadge('lowtier', "Parenthesis-wrapped", null, "Your roll contains two matching parenthesises at the start and end", "+20,000 SYM"))
    }
    if ((remove[0] == '[') && (remove[4] == ']')
    ) {
      givepoints(20000)
      addscore.push(20000)
      await adder(addbadge('lowtier', "Bracket-wrapped", null, "Your roll contains two matching brackets at the start and end", "+20,000 SYM"))
    }
    if ((remove[0] == '{') && (remove[4] == '}')
    ) {
      givepoints(20000)
      addscore.push(20000)
      await adder(addbadge('lowtier', "Curly-bracket-wrapped", null, "Your roll contains two matching curly-brackets at the start and end", "+20,000 SYM"))
    }
    if ((remove[0] == '«') && (remove[4] == '»')
    ) {
      givepoints(20000)
      addscore.push(20000)
      await adder(addbadge('lowtier', "Gullimet-wrapped", null, "Your roll contains two matching gullimets at the start and end", "+20,000 SYM"))
    }
    if ((remove[0] == '¿') && (remove[4] == '?')
    ) {
      givepoints(20000)
      addscore.push(20000)
      await adder(addbadge('lowtier', "Question-wrapped", null, "Your roll contains two matching question marks at the start and end", "+20,000 SYM"))
    }
    if ((remove[0] == '¡') && (remove[4] == '!')
    ) {
      givepoints(20000)
      addscore.push(20000)
      await adder(addbadge('lowtier', "Exclaim-wrapped", null, "Your roll contains two matching exclaimation marks at the start and end", "+20,000 SYM"))
    }
    //Wrapping-Symbols(Same)
    if ((remove[0] == '"') && (remove[4] == '"')
    ) {
      givepoints(5000)
      addscore.push(5000)
      await adder(addbadge('lowtier', "Quote-wrapped", null, "Your roll contains two identical quotes at the start and end", "+5,000 SYM"))
    }
    if ((remove[0] == '`') && (remove[4] == '`')
    ) {
      givepoints(5000)
      addscore.push(5000)
      await adder(addbadge('lowtier', "Bactick-wrapped", null, "Your roll contains two identical bacticks at the start and end", "+5,000 SYM"))
    }
    if ((remove[0] == '´') && (remove[4] == '´')
    ) {
      givepoints(5000)
      addscore.push(5000)
      await adder(addbadge('lowtier', "Apostrophe-wrapped", null, "Your roll contains two identical apostrophes at the start and end", "+5,000 SYM"))
    }
    if ((remove[0] == '*') && (remove[4] == '*')
    ) {
      givepoints(5000)
      addscore.push(5000)
      await adder(addbadge('lowtier', "Asterisk-wrapped", null, "Your roll contains two identical asterisks at the start and end", "+5,000 SYM"))
    }

    if (remove[0] !== remove[1] && remove[0] !== remove[2] && remove[0] !== remove[3] 
      && remove[1] !== remove[2] && remove[1] !== remove[3] && remove[1] !== remove[4]
      && remove[2] !== remove[0] && remove[2] !== remove[3] && remove[2] !== remove[4]
      && remove[3] !== remove[0] && remove[3] !== remove[1] && remove[3] !== remove[4]
      && remove[4] !== remove[0] && remove[4] !== remove[1] && remove[4] !== remove[2] 
    ) {
      givepoints(50)
      addscore.push(50)
      await adder(addbadge('lowtier', "Non-identical", null, "None of the symbols match eachother", "+50 SYM"))
    }

    //Hiding badges
    if (remove.includes("&&")
    ) {
      givepoints(10000)
      addscore.push(10000)
      await adder(addbadge('lowtier', "And", null, "Two consequtive '&' hides in your roll", "+10,000 SYM"))
    }

    if (remove.includes("!?")
    ) {
      givepoints(10000)
      addscore.push(10000)
      await adder(addbadge('lowtier', "Interrobang", null, "The term '!?' hides in your roll", "+10,000 SYM"))
    }

    if (remove.includes("!!")
    ) {
      givepoints(10000)
      addscore.push(10000)
      await adder(addbadge('lowtier', "Interrobang", null, "The term '!!' hides in your roll", "+10,000 SYM"))
    }

    if (remove.includes("**")
    ) {
      givepoints(10000)
      addscore.push(10000)
      await adder(addbadge('lowtier', "Partally filtered", null, "'**' hides in your roll", "+10,000 SYM"))
    }

    if (remove.includes("||")
    ) {
      givepoints(10000)
      addscore.push(10000)
      await adder(addbadge('lowtier', "Or", null, "Two consequtive '|' hides in your roll", "+10,000 SYM"))
    }

    if (remove.includes("//")
    ) {
      givepoints(10000)
      addscore.push(10000)
      await adder(addbadge('lowtier', "Comment", null, "Two consequtive '/' hides in your roll", "+10,000 SYM"))
    }

    if (remove.includes("...")
    ) {
      givepoints(500000)
      addscore.push(500000)
      await adder(addbadge('lowtier', "To be continued", null, "Three consequtive '.' hides in your roll", "+500,000 SYM"))
    }

    if (remove.includes("://")
    ) {
      givepoints(500000)
      addscore.push(500000)
      await adder(addbadge('hightier', "PROTOCOL", null, "The series of symbols repestenting protocols hides in your roll", "+500,000 SYM"))
    }

    if (remove.includes("|¦|")
    ) {
      givepoints(500000)
      addscore.push(500000)
      await adder(addbadge('hightier', "Pandora's box", null, "'|¦|' hides in your roll, what could it be?", "+500,000 SYM"))
    }

    if (remove.includes("][[")
    ) {
      givepoints(1001000)
      addscore.push(1001000)
      await adder(addbadge('hightier', "Bootleg SYMGOD", null, "Just a mere immitation...", "+1,001,000 SYM"))
    }

    if (remove.includes("©®¯/")
    ) {
      givepoints(10700000)
      addscore.push(10700000)
      await adder(addbadge('hightier', "Cristiano Ronaldo", null, "The legendary soccer player's motto 'CR7' hides in your roll", "+10,700,000 SYM"))
    }

    if ((remove[0] == '_') && (remove[2] == '|') && (remove[3] == '/') && (remove[4] == '_')
    ) {
      givepoints(11111111)
      addscore.push(11111111)
      await adder(addbadge('hightier', "FALLEN LOTUS", null, "Your roll is '_☐|/_'", "+11,111,111 SYM"))
    }

    //Vertical emoticons 
    if (remove.includes(":)")
    ) {
      givepoints(10000)
      addscore.push(10000)
      await adder(addbadge('lowtier', "Happy", null, "A happy smiley is in your roll", "+10,000 SYM"))
    }

    if (remove.includes(":(")
    ) {
      givepoints(10000)
      addscore.push(10000)
      await adder(addbadge('lowtier', "Sad", null, "A sad smiley is in your roll", "+10,000 SYM"))
    }

    if (remove.includes(":|")
    ) {
      givepoints(10000)
      addscore.push(10000)
      await adder(addbadge('lowtier', "Neutral", null, "A neutral smiley is in your roll", "+10,000 SYM"))
    }

    if (remove.includes(":/")
    ) {
      givepoints(10000)
      addscore.push(10000)
      await adder(addbadge('lowtier', "Slopey", null, "A slopey smiley is in your roll", "+10,000 SYM"))
    }

    if (remove.includes(":>")
    ) {
      givepoints(10000)
      addscore.push(10000)
      await adder(addbadge('lowtier', "Happier", null, "A happier smiley is in your roll", "+10,000 SYM"))
    }

    if (remove.includes(":<")
    ) {
      givepoints(10000)
      addscore.push(10000)
      await adder(addbadge('lowtier', "Sadder", null, "A sadder smiley is in your roll", "+10,000 SYM"))
    }

    if (remove.includes(":}")
    ) {
      givepoints(10000)
      addscore.push(10000)
      await adder(addbadge('lowtier', "Happy-curly", null, "A happy smiley which is curly in your roll", "+10,000 SYM"))
    }

    if (remove.includes(":{")
    ) {
      givepoints(10000)
      addscore.push(10000)
      await adder(addbadge('lowtier', "Sad-curly", null, "A sad smiley which is curly in your roll", "+10,000 SYM"))
    }

    if (remove.includes(":]")
    ) {
      givepoints(10000)
      addscore.push(10000)
      await adder(addbadge('lowtier', "Happy-brackety", null, "A happy smiley which is brackety in your roll", "+10,000 SYM"))
    }

    if (remove.includes(":[")
    ) {
      givepoints(10000)
      addscore.push(10000)
      await adder(addbadge('lowtier', "Sad-brackety", null, "A sad smiley which is brackety in your roll", "+10,000 SYM"))
    }

    if (remove.includes(":|)")
    ) {
      givepoints(500000)
      addscore.push(500000)
      await adder(addbadge('lowtier', ":D", null, "A ':D' is in your roll", "+500,000 SYM"))
    }

    if (remove.includes(":¦<")
    ) {
      givepoints(500000)
      addscore.push(500000)
      await adder(addbadge('lowtier', "Cat", null, "A cat is in your roll", "+500,000 SYM"))
    }

    if (remove.includes("¶:|")
    ) {
      givepoints(500000)
      addscore.push(500000)
      await adder(addbadge('lowtier', "The Hat Man", null, "The Hat Man is in your roll", "+500,000 SYM"))
    }

    if (remove.includes(":¬}")
    ) {
      givepoints(500000)
      addscore.push(500000)
      await adder(addbadge('lowtier', "Nose Dude", null, "A Nose dude is in your roll", "+500,000 SYM"))
    }

    if (remove.includes("|[/")
    ) {
      givepoints(500000)
      addscore.push(500000)
      await adder(addbadge('lowtier', "Blindfold", null, "A blindfold is in your roll", "+500,000 SYM"))
    }

    if (remove.includes("[#:|)")
    ) {
      givepoints(500000210)
      addscore.push(500000210)
      await adder(addbadge('hightier', "ARMINBOOM HIMSELF", null, "I MANIFEST IN YOUR ROLL...", "+500,000,210 SYM"))
    }

    //Horizontal expressions
    if (((remove[0] == "[") || (remove[0] == "{") || (remove[0] == "(")) &&
        ((remove[2] == "_") || (remove[2] == "-") || (remove[2] == ".") || (remove[2] == "~") || (remove[2] == "¬")) &&
        ((remove[4] == "]") || (remove[4] == "}") || (remove[4] == ")")) &&
        (remove[1] == remove[3]) && (remove[0] == remove[4])
    ) {
      givepoints(10000000)
      addscore.push(10000000)
      await adder(addbadge('hightier', "FULL EXPRESSION", "Expression", "Two wrapping marks acting as the face, the middle acting as a mouth and the two inner symbols acting as eyes, thus creating a full expression purely from symbols", "+10,000,000 SYM"))
    }
    else if (((remove[0] == "[") || (remove[0] == "{") || (remove[0] == "(")) &&
        ((remove[2] == "_") || (remove[2] == "-") || (remove[2] == ".") || (remove[2] == "~") || (remove[2] == "¬")) &&
        ((remove[4] == "]") || (remove[4] == "}") || (remove[4] == ")")) && 
        (remove[0] == remove[4])
    ) {
      givepoints(500000)
      addscore.push(500000)
      await adder(addbadge('hightier', "Expression", null, "Two wrapping marks acting as the face, and the middle acting as a mouth, this creates an expression purely from symbols", "+500,000 SYM"))
    }

    // Letters and numbers

    if (remove.includes("µ") || remove.includes("§") || remove.includes("¢") || remove.includes("@") ||
        remove.includes("¡") || remove.includes("£") || remove.includes("¶") || remove.includes("¥") ||
        remove.includes("¤") 
    ) {
      givepoints(50)
      addscore.push(50)
      await adder(addbadge('lowtier', "A letter within", null, "At least one symbol in your roll resembles a letter", "+50 SYM"))
    }

    if (remove.includes("¶") || remove.includes("°") || remove.includes("}") || remove.includes("?") ||
        remove.includes("$") || remove.includes("¤") 
    ) {
      givepoints(75)
      addscore.push(75)
      await adder(addbadge('lowtier', "A number within", null, "At least one symbol in your roll resembles a number", "+75 SYM"))
    }

    if (remove.includes("¶") || remove.includes("¤") 
    ) {
      givepoints(200)
      addscore.push(200)
      await adder(addbadge('lowtier', "Both within", "A number within & A letter within", "At least one symbol is included in you roll that can resemble a number or a letter", "+200 SYM"))
    }

    if (remove.includes("¶") && remove.includes("¤") && remove.includes("§") &&  remove.includes("$")
    ) {
      givepoints(375000)
      addscore.push(375000)
      await adder(addbadge('hightier', "CONSTRUCTOR WITHIN", "A number within & A letter within", "All symbols in you roll that can resemble a number or a letter are included at least once", "+375,000 SYM"))
    }

    if (remove.includes("@¢@¡§") || remove.includes("@¢¢@§") || remove.includes("@¢¢¤¥") || remove.includes("@£¢¡@") || remove.includes("@¡¥££") || remove.includes("@¶µ@£") || remove.includes("@¶µ@§") || remove.includes("@§§@¡") || remove.includes("@§§@¥") || remove.includes("@§§£§") ||
        remove.includes("@¥@¥@") || 
        remove.includes("¢@¢@¤") || remove.includes("¢@¢@§") || remove.includes("¢@£¢@") || remove.includes("¢@£§£") || remove.includes("¢@¢@§") || remove.includes("¢@£¢@") || remove.includes("¢@£§£") || remove.includes("¢@§@§") || remove.includes("¢@§¢¤") || remove.includes("¢@§£§") ||
        remove.includes("¢@§µ§") || remove.includes("¢@µ§@") || remove.includes("¢@µ§£") || remove.includes("¢£@§£") || remove.includes("¢£§§£") || remove.includes("¢¡§¢¤") || remove.includes("¢¡§§¥") || remove.includes("¢¤¢@§") || remove.includes("¢¤¢¢¡") || remove.includes("¢¤¢¢¤") ||
        remove.includes("¢¤¢¤@") || remove.includes("¢¤¢¤§") || remove.includes("¢¤¤££") || remove.includes("¢¤¤£¥") || remove.includes("¢¤¶µ¡") || remove.includes("¢¤§£µ") || remove.includes("¢¤§£§") || remove.includes("¢¤§£¥") || remove.includes("¢¤§£¥") || remove.includes("¢µ§£¢") ||
        remove.includes("¢µ§§¤") || remove.includes("¢¥¢@§") || 
        remove.includes("£@§£§") || remove.includes("£¶µ£§") || remove.includes("£§§@¥") || remove.includes("£§§£§") || remove.includes("£¥@§§") ||
        remove.includes("¡§§£¡") || remove.includes("¡§§µ£") ||
        remove.includes("¤@§£§") || remove.includes("¤@§¡§") || remove.includes("¤¤§£§") || remove.includes("¤§§¡@") ||
        remove.includes("¶µ@§¡") || remove.includes("¶µ@§§") || remove.includes("¶µ@¥§") || remove.includes("¶µ£µ£") || remove.includes("¶µ£¥§") ||
        remove.includes("§@¡¢£") || remove.includes("§@¡¢§") || remove.includes("§@§§£") || remove.includes("§@§§¥") || remove.includes("§@µ¢£") || remove.includes("§¢¥£§") || remove.includes("§£@§£") || remove.includes("§£@§£") || remove.includes("§£¢¢¤") || remove.includes("§£¡§£") ||
        remove.includes("§£§£¥") || remove.includes("§£§§@") || remove.includes("§¡§£§") || remove.includes("§¡§§¥") || remove.includes("§¤§@§") || remove.includes("§¤§£§") || remove.includes("§¤µ¢£") || remove.includes("§¤µ§£") || remove.includes("§¤¥@§") || remove.includes("§µ¢¢¡") ||
        remove.includes("§µ§£§") || remove.includes("§µ§µ§") || remove.includes("§¥¢££") || remove.includes("§¥¢£§") ||
        remove.includes("µ§¶µ£") ||
        remove.includes("¥@¢¢@") || remove.includes("¥£§£§") || remove.includes("¥µ¢@§") || remove.includes("¥µ¢¢@") 
    ) {
      givepoints(5320000)
      addscore.push(5320000)
      await adder(addbadge('hightier', "VALID WITHIN ALL", null, "From the available letters, your roll contains a valid 5 letter word", "+5,320,000 SYM"))
    }

    if (remove.includes("@¢@¡") || remove.includes("@¢¢@") || remove.includes("@¢£§") || remove.includes("@£§¢") || remove.includes("@¡@§") || remove.includes("@¡@§") || remove.includes("@§¢¡") || remove.includes("@§£@") || remove.includes("@µ@§") || remove.includes("@¥£§") ||
        remove.includes("¢@@§") || remove.includes("¢@¢@") || remove.includes("¢@§@") || remove.includes("¢@§£") || remove.includes("¢@¥§") || remove.includes("¢£@§") || remove.includes("¢£¢@") || remove.includes("¢££§") || remove.includes("¢££§") || remove.includes("¢£§§") ||
        remove.includes("¢¤¢@") || remove.includes("¢¤¢¤") || remove.includes("¢¤¤§") || remove.includes("¢¤§§") || remove.includes("¢¤¥§") || remove.includes("¢µ£§") || remove.includes("¢µ§§") ||
        remove.includes("£@§£") || remove.includes("£@§¥") || remove.includes("£@µ§") || remove.includes("£¢¢£") || remove.includes("£¢¢¤") || remove.includes("£¢¤§") || remove.includes("£¢µ§") || remove.includes("£§£§") || remove.includes("£§§£") || remove.includes("£¤µ¡") || 
        remove.includes("£¥@§") || remove.includes("£¥£§") ||
        remove.includes("¡¢£§") || remove.includes("¡§¤§") ||
        remove.includes("¤¢@§") || remove.includes("¤¤§£") || remove.includes("¤¤§¥") || remove.includes("¤§£§") || remove.includes("¤§§@") || remove.includes("¤¥£§") ||
        remove.includes("¶µ@¡") || remove.includes("¶µ@¥") || remove.includes("¶µ£¥") ||
        remove.includes("§@¢§") || remove.includes("§@¡¢") || remove.includes("§@¡§") || remove.includes("§@¥§") || remove.includes("§¢¥£") || remove.includes("§£@§") || remove.includes("§£¢¤") || remove.includes("§£¢§") || remove.includes("§££§") || remove.includes("§£¡§") ||
        remove.includes("§£§£") || remove.includes("§£§§") || remove.includes("§£¥§") || 
        remove.includes("µ£¥§") || remove.includes("µ§£§") || 
        remove.includes("¥@¥§") || remove.includes("¥£@§") || remove.includes("¥¤µ§") 
    ) {
      givepoints(143000)
      addscore.push(143000)
      await adder(addbadge('hightier', "Valid within 4 letters", null, "From the available letters, your roll contains a valid 4 letter word", "+143,000 SYM"))
    }

    if (remove.includes("@@§") || remove.includes("@¢£") || remove.includes("@¡@") || remove.includes("@¡§") || remove.includes("@§§") || remove.includes("@µ@") || remove.includes("@µ£") || remove.includes("@¥@") || remove.includes("@¥£") || remove.includes("@¥µ") ||
        remove.includes("¢@@") || remove.includes("¢££") || remove.includes("¢££") || remove.includes("¢¡§") || remove.includes("¢¤¤") || remove.includes("¢¤§") || remove.includes("¢¤¥") || remove.includes("¢µ£") ||
        remove.includes("£@§") || remove.includes("£@µ") || remove.includes("£¢¤") || remove.includes("£¢µ") || remove.includes("£¥£") ||
        remove.includes("¡¢£") || remove.includes("¡¢¥") || remove.includes("¡¤§") || remove.includes("¡§¤") || 
        remove.includes("¤£§") || remove.includes("¤¡§") || remove.includes("¤¤§") || remove.includes("¤§£") || remove.includes("¤µ§") || remove.includes("¤¥£") || remove.includes("¤¥§") ||
        remove.includes("¶¡§") || remove.includes("¶µ@") ||
        remove.includes("§@£") || remove.includes("§@¡") || remove.includes("§@µ") || remove.includes("¤§£") || remove.includes("§£@") || remove.includes("§£¢") || remove.includes("§££") || remove.includes("§£¡") || remove.includes("§£¥") || remove.includes("§¡¢") ||
        remove.includes("§£¥") || remove.includes("§£§") || remove.includes("§¤¢") || remove.includes("§¤§") || remove.includes("§¤¥") || remove.includes("§µ£") || remove.includes("§µ¶") || remove.includes("§µ¡") || remove.includes("§µ§") || remove.includes("§¥£") ||
        remove.includes("µ£¥") || remove.includes("µ§£") || 
        remove.includes("¥@£") || remove.includes("¥@§") || remove.includes("¥@¥") || remove.includes("¥£@") || remove.includes("¥£§") || remove.includes("¥¤µ") || remove.includes("¥µ§")
    ) {
      givepoints(7700)
      addscore.push(7700)
      await adder(addbadge('lowtier', "Valid within 3 letters", null, "From the available letters, your roll contains a valid 3 letter word", "+7,700 SYM"))
    }

    if (remove.includes("@£") || remove.includes("@¡") || remove.includes("@¤") || remove.includes("@§") || remove.includes("@¥") ||
        remove.includes("£§") || remove.includes("£¥") ||
        remove.includes("¡¤") || remove.includes("¡§") || 
        remove.includes("¤£") || remove.includes("¤¡") || remove.includes("¤¤") || remove.includes("¤§") || remove.includes("¤¥") ||
        remove.includes("¶¡") ||
        remove.includes("§¡") || remove.includes("§¤") || 
        remove.includes("µ¡") || remove.includes("µ§") || 
        remove.includes("¥£") || remove.includes("¥¡") || remove.includes("¥¤")
    ) {
      givepoints(350)
      addscore.push(350)
      await adder(addbadge('lowtier', "Valid within 2 letters", null, "From the available letters, your roll contains a valid 2 letter word", "+350 SYM"))
    }

    if (remove.includes("¤¤") || remove.includes("$$") || remove.includes("¶$") || remove.includes("¶¶") 
    ) {
      givepoints(2500)
      addscore.push(2500)
      await adder(addbadge('lowtier', "Meaningful within 2 numbers", null, "From the available numbers, your roll contains a meaningful 2 digit number", "+2,500 SYM"))
    }

    if (remove.includes("¤¤¤") || remove.includes("}¤}") || remove.includes("¶¶¶") 
    ) {
      givepoints(166000)
      addscore.push(166000)
      await adder(addbadge('hightier', "Meaningful within 3 numbers", null, "From the available numbers, your roll contains a meaningful 3 digit number", "+166,000 SYM"))
    }

    if (remove.includes("}$?¶") || remove.includes("¶?$}") 
    ) {
      givepoints(5000000)
      addscore.push(5000000)
      await adder(addbadge('hightier', "Meaningful within 4 numbers", null, "From the available numbers, your roll contains a meaningful 4 digit number", "+5,000,000 SYM"))
    }

    if (remove.includes("¤}$?¶") || remove.includes("¶?$}¤") 
    ) {
      givepoints(250000000)
      addscore.push(250000000)
      await adder(addbadge('hightier', "MEANINGFUL WITHIN ALL", null, "From the available numbers, your roll contains a meaningful 5 digit number", "+250,000,000 SYM"))
    }

    setTimeout(() => {
      sheet.insertRule('#rarity {visibility: visible; animation-name: appear; animation-duration: 0.5s;}');
      sheet.insertRule('#button2 {display: block; animation-name: appear; animation-duration: 0.5s;}');
      stopped = true
    }, delay);

    async function addbadge(classname, maintext, extrabadges, subtext, symindicator) {
      const div = document.createElement('div')
      div.setAttribute('class', classname)
      const h2 = document.createElement('h2')
      h2.textContent = maintext
      const h3 = document.createElement('h3')
      h3.textContent = extrabadges
      const h5 = document.createElement('h5')
      h5.textContent = subtext
      const h6 = document.createElement('h6')
      h6.textContent = symindicator

      setTimeout(() => {
        document.getElementById("badgesection").prepend(div)
        document.getElementById("badgesection").prepend(h2)
        document.getElementById("badgesection").prepend(h3)
        document.getElementById("badgesection").prepend(h5)
        document.getElementById("badgesection").prepend(h6)
      }, delay); 

      const wrap = (element, target) => {
      if (!element || !target) return;

      let wrapper;
      if (typeof target === "object" && target.nodeType === 1) {
        wrapper = target;
      } else {
        wrapper = createElement(target);
      }   

      element.parentNode.insertBefore(wrapper, element);
      wrapper.appendChild(element);

      return wrapper;
    };
    setTimeout(() => {
      wrap(h2, div)
      wrap(h3, div)
      wrap(h5, div)
      wrap(h6, div)
    }, delay);
    }

    function givepoints(num) {
      let sum = 0
      function addscorefunc(num) {
          sum += num
      }
      addscore.forEach(addscorefunc)
      if (num >= 10000000) {
        setTimeout(() => {
          document.getElementById("FinalistTier").play()
          document.getElementById("FinalistTier").currentTime = 0
        }, delay);
        }
      else if (num >= 3000000) {
        setTimeout(() => {
          document.getElementById("HyperialTier").play()
          document.getElementById("HyperialTier").currentTime = 0
        }, delay);
        }
      else if (num >= 500000) {
        setTimeout(() => {
          document.getElementById("AscendedTier").play()
          document.getElementById("AscendedTier").currentTime = 0
        }, delay);
        }
      else if (num >= 100000) {
        setTimeout(() => {
          document.getElementById("ExaltedTier").play()
          document.getElementById("ExaltedTier").currentTime = 0
        }, delay);
        }
      else if (num >= 50000) {
        setTimeout(() => {
          document.getElementById("FabledTier").play()
          document.getElementById("FabledTier").currentTime = 0
        }, delay);
        }
      else if (num >= 17500) {
        setTimeout(() => {
          document.getElementById("ExoticTier").play()
          document.getElementById("ExoticTier").currentTime = 0
        }, delay);
        }
      else if (num >= 7500) {
        setTimeout(() => {
          document.getElementById("NobleTier").play()
          document.getElementById("NobleTier").currentTime = 0
        }, delay);
        }
      else if (num >= 2500) {
        setTimeout(() => {
          document.getElementById("UniqueTier").play()
          document.getElementById("UniqueTier").currentTime = 0
        }, delay);
        }
      else if (num >= 1000) {
        setTimeout(() => {
          document.getElementById("UnusualTier").play()
          document.getElementById("UnusualTier").currentTime = 0
        }, delay);
        }
      else if (num >= 300) {
        setTimeout(() => {
          document.getElementById("UsualTier").play()
          document.getElementById("UsualTier").currentTime = 0
        }, delay);
        }
      return setTimeout(() => {
        for (let index = 0; index < 100; index++) {
          setTimeout(() => {
            sum += zero = Math.round(num*1000/100)/1000
            document.getElementById("gain").innerHTML = sum
          }, index*(0.15+index/12));
        }
      var updatebadge = setInterval(() => {
        if (stopped == true) {
          clearInterval(updatebadge)
        }
        if (sum >= 10000000) {
          document.getElementById("rarity").innerHTML = "FINALIST"
          sheet.insertRule('#rand, #symscore, #rarity {text-shadow: 0px 0px 8px var(--lightsym), 0px 0px 8px var(--lightsym), 0px 0px 8px var(--lightsym);}');
        }
        else if (sum >= 3000000) {
          document.getElementById("rarity").innerHTML = "Hyperial"
        }
        else if (sum >= 500000) {
          document.getElementById("rarity").innerHTML = "Ascended"
        }
        else if (sum >= 100000) {
          document.getElementById("rarity").innerHTML = "Exalted"
        }
        else if (sum >= 50000) {
          document.getElementById("rarity").innerHTML = "Fabled"
        }
        else if (sum >= 17500) {
          document.getElementById("rarity").innerHTML = "Exotic"
        }
        else if (sum >= 7500) {
          document.getElementById("rarity").innerHTML = "Noble"
        }
        else if (sum >= 2500) {
          document.getElementById("rarity").innerHTML = "Unique"
        }
        else if (sum >= 1000) {
          document.getElementById("rarity").innerHTML = "Unusual"
        }
        else if (sum >= 300) {
          document.getElementById("rarity").innerHTML = "Usual"
        }
        else if (sum > 100) {
          document.getElementById("rarity").innerHTML = "Bad"
        }
        else if (sum <= 100) {
          document.getElementById("rarity").innerHTML = "ABYSMAL"
        }
      }, delay/10);
      }, delay);
    }
  }
  await checker();
  }
  generator();

  sheet.insertRule('footer {animation-name: down, smaller; animation-duration: 1s; animation-fill-mode: both; zoom: 80%;}');
  sheet.insertRule('#nav {animation-name: up, smaller; animation-duration: 1s; animation-fill-mode: both; zoom: 80%;}');
  sheet.insertRule('#rand {animation-name: size, reveal-disappear, reveal-appear; animation-duration: 1s; animation-delay: 0s, 0s, 5s; animation-iteration-count: 1, 5, 1; animation-fill-mode: both; visibility: visible}');
  sheet.insertRule('body {animation-name: rollbg; animation-duration: 1s; animation-fill-mode: both; animation-iteration-count: 1;}');
  sheet.insertRule('.disappear {display: none;}');
  sheet.insertRule('.hide {visibility: hidden}');
  setTimeout(() => {
    sheet.insertRule('#symscore {visibility: visible; animation-name: appear; animation-duration: 0.5s;}')
  }, delay*6);
}
