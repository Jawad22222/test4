
var names = ["Yaakov", "John", "jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "jim"];

function helloSpeaker(name) {
    console.log('Hello ' + name);
}

function byeSpeaker(name) {
    console.log('Good Bye ' + name);
}

for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var firstLetter = name.charAt(0).toLowerCase();

    if (firstLetter === 'j') {
        helloSpeaker(name);
    } else {
        byeSpeaker(name);
    }
}
