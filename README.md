# Koodikangas
Koodikangas-projektin tavoitteena on luoda väline Yrityskylässä tapahtuvaan 6-luokkalaisten ohjelmoinninopetukseen.

Koodikangas hyödyntää useita kirjastoja, joiden avulla luodaan toiminnallinen kangas, johon käyttäjät voivat kirjoittamansa koodin kautta luoda erilaisia geomerisia muotoja.

Koodikangaksen toiminnallisuuksia:
  - CreateJS:n avulla luotavia muotoja.
    (ks. shape.js tiedosto) Muotoja kutsutaan komenolla shape.muoto(parametrit)
    esimerkiksi. shape.circle("blue",100) luo 100 pixelin säteisen sinisen ympyrän.
  - Turtlecoding ominaisuus, jonka avulla voidaan antaa koodaustehtäviä.
    (ks. turtle.js tiedosto) 
    Komennot:
    turtle.show(); // näyttää turtlen
    turtle.width = x; //turtlen jättämän viivan leveys
    turtle.color = randomColor(); //antaa värin, voidaan käyttää myös arvottua väriä kuten tässä.
	  turtle.forward(x) //Pikseleinä siirtyminen
    turtle.turn(x); //asteina käännös 
  - CodeMirroria hyödyntävä tekstinsyöttöalusta. //Helpottaa koodaamista, sillä korostaa merkittäviä osia kirjoitu
