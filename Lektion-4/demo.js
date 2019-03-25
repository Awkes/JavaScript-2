// Synchronous callback
console.log('Synchronous Callback');
const array1 = ['a','b','c'];
console.log('START');
array1.forEach(function(element) {
  console.log(element);
});
console.log('FINNISH');

// Asynchronous callback
console.log('Asynchronous Callback');
console.log('START');
setTimeout(function() {
  for (const i of array1) { console.log(i); }
},1000);
console.log('FINNISH');

// ---- XMLHttpRequest ----
let xhr = new XMLHttpRequest();     // Skapa objekt
xhr.open('GET', 'demo.txt', true);  // Öppna anslutning
xhr.send();                         // Skicka request

// Gör saker när requesten är klar (readyState 4 och status 200 ("OK"))
xhr.onreadystatechange = function() {
  console.log(this.readyState);
  if (this.readyState === 4 && this.status === 200) {
    document.getElementById('demo').innerHTML = this.responseText;
  }

}

// Load funktion
function load(url,callback) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200)
      callback(this);
  }
  xhr.open('GET',url,true);
  xhr.send();
}

// Hämta dokument med load()
const loadBtn1 = document.getElementById('loadBtn1');
loadBtn1.addEventListener('click',function() {
  load('demo.txt',demo1);
});

function demo1(xhr) {
  document.getElementById('demo1').innerHTML = xhr.responseText
}

// Hämta flera
const loadBtn2 = document.getElementById('loadBtn2');
loadBtn2.addEventListener('click', () => {
  load('demo.txt',demo2);
  load('demo.txt',demo3);
});

function demo2(xhr) {
  document.getElementById('demo2').innerHTML = xhr.responseText
}
function demo3(xhr) {
  document.getElementById('demo3').innerHTML = xhr.responseText
}

// --- Hämta XML via Ajax
const loadBtn3 = document.getElementById('loadBtn3');
loadBtn3.addEventListener('click',()=> {
  load('demo.xml', demo4);
});

function demo4(xhr) {
  console.log(xhr);
  const xml = xhr.responseXML;                        // Referens till responseXML
  const artist = xml.getElementsByTagName('ARTIST');  // Välj elementen ARTIST
  // Loopa igenom alla artister och hämta innehållet som slutligen skrivs ut
  let list = '<ul>';
  for (let i = 0; i< artist.length; i++)
    list += '<li>' + artist[i].textContent + '</li>';
  list += '</ul>';
  document.getElementById('demo4').innerHTML = list;
} 

// --- Hämta JSON via Ajax
const loadBtn4 = document.getElementById('loadBtn4');
loadBtn4.addEventListener('click',()=> {
  load('demo.json', demo5);
});

function demo5(xhr) {
  let user = JSON.parse(xhr.responseText);
  console.log(user);
  document.getElementById('demo5').innerHTML = user.name;
}
