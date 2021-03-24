// Put code of task C here

'use strict';
const main = document.querySelector('main');

const article = document.createElement('article');
const header = document.createElement('header');
const h2 = document.createElement('h2');
const figure = document.createElement('figure');
const img = document.createElement('img');
const figcaption = document.createElement('figcaption');
const p = document.createElement('p');

h2.innerHTML = 'Otsikko';
figcaption.innerHTML = 'Kuvateksti';
p.innerHTML = 'Jotain tekstiii';
img.src = 'http://placekitten.com/320/162';
img.alt ='joku teksti';

header.appendChild(h2);
figure.appendChild(img);
figure.appendChild(figcaption);
article.appendChild(header);
article.appendChild(figure);
article.appendChild(p);

main.appendChild(article);