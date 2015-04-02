// TEXT
var starttext = 'You are in a forest. Outside, the wind whistles through the leaves of the trees. You are standing on a dirt path, and in front of you it forks. You can go <a href="#l" onclick="typeit(1)">left</a> or <a href="#r" onclick="typeit(1)">right</a>._';
var startclearing = 'Your path emerges in a clearing. The ground is dirt, but is slightly cracked. Out of the corner of your eye you can see the remains of a campfire. At the other end of the clearing, there are two paths. You can go <a href="#l" onclick="typeit(3)">left</a> or <a href="#r" onclick="typeit(3)">right</a>._';
//var forest = 'Your path enters a forest. Outside, the wind whistles through the leaves of the trees. This place seems strangely familiar. You are standing on a dirt path, and in front of you it forks. You can go <a href="#l" onclick="typeit(3)">left</a> or <a href="#r" onclick="typeit(3)">right</a>._';
var hole = 'Your path keeps going, and you keep walking. Suddenly, your path stops at a wall with a door in it. You also notice a trapdoor in the floor a few metres away. Would you like to go through the <a href="#d" onclick="typeit(4)">door</a> or through the <a href="#t" onclick="typeit(5)">trapdoor</a>?_';
var door = 'You step through the doorway. On the other side of the doorway is a staircase leading underground. You hear a load grumble coming from underground, and recognise it as coming from a wild beast. Would you like to <a href="#f" onclick="typeit(6)">fight</a> the beast, or <a href="#r" onclick="typeit(7)">run</a> away?_';
var trapdoor = 'You open the trapdoor. Inside the trapdoor there is a staircase leading underground. You hear a load grumble coming from underground, and recognise it as coming from a wild beast. Would you like to <a href="#f" onclick="typeit(6)">fight</a> the beast, or <a href="#r" onclick="typeit(7)">run</a> away?_';
var fight = 'You decide to fight the beast. You run down the steps as the beast lets out a thunderous roar. The steps in front of you stop, and you come to a small cave. On the floor of the cave are a bow and arrow, and a sword. Would you like to take the <a href="#s" onclick="typeit(8)">sword or the <a href="#b" onclick="typeit(9)">bow and arrow</a>?_';
var run = 'You turn to run, but the door shuts behind you and locks. You run down the steps as the beast lets out a thunderous roar. The steps in front of you stop, and you come to a small cave. On the floor of the cave are a bow and arrow, and a sword. Would you like to take the <a href="#s" onclick="typeit(8)">sword</a> or the <a href="#b" onclick="typeit(9)">bow and arrow</a>?_';
var sword = 'You pick up the sword, and run through a doorway into a larger cavern, in which the beast resides. You run back through the doorway just as the beast hears a sound. It doesn"t see you, but is suspicious of an intruder now. Should you wait for it to <a href="#g" onclick="typeit(10)">grow</a> less suspicious, or <a href="#a" onclick="typeit(11)">attack</a> now._';
var bow = 'You pick up the bow, and run through a doorway into a larger cavern, in which the beast resides. You run back through the doorway just as the beast hears a sound. It doesn"t see you, but is suspicious of an intruder now. Should you wait for it to <a href="#g" onclick="typeit(10)">grow</a> less suspicious, or <a href="#a" onclick="typeit(11)">attack</a> now._';
var grow = 'You wait behind the door, but suddenly your whole world disapears, and you are in a blank white room. You remember that you were banished to eternal boredom, and halucinated the whole adventure. Thanks for playing. :)_';
var attack = 'You start to run towards the beast so you can attack, but he runs towards you and eats you whole. Game over, thanks for playing. :)_';

var strings = [starttext, startclearing, "", hole, door, trapdoor, fight, run, sword, bow, grow, attack];


// TYPE SCRIPT
function typie(txt) {
  var child = document.getElementById("cur");
  child.parentNode.removeChild(child);
  var num = Math.random().toString(36).substring(7);
  $(".text").append("<p id=" + num + "></p>");
  tyype(txt, num);
}
function tyype(txt, theid) {
  var text;
  var id = theid;
  var i = 0;
  var str = txt;
  var isTag;
  (function type() {
      text = str.slice(0, ++i);
      if (text === str) return;
      document.getElementById(id).innerHTML = text + "<i id='cur'>&#9646;</i>";
      var char = text.slice(-1);
      if( char === '<' ) isTag = true;
      if( char === '>' ) isTag = false;

      if (isTag) return type();
      setTimeout(type, 30);
  }());
}
function typeit(num) {
  typie(strings[num]);
}
typeit(0);
