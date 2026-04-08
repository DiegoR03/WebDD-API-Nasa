# WebDD-API-Nasa

## 01/04/2026
- 09:30 intro API
- 10:45 Onderzoek doen naar API's
- 11:30 Api gekozen
- 11:45 Onderzoek naar bruikbaarheid gedaan nasa api
- 13:00 Pauze
- 14:00 Verder zelfstandig werken
- 15:00 Api keuze van agenda vervangen voor alleen Nasa data
- 16:00 Checkout met Senna

Gesprek met Senna:
<br>Vandaag heb ik voornamelijk nagedacht over het design van mijn website. Hoewel ik wat eerste code heb gemaakt om de website data alvast op te halen ben ik voornamelijk in figma bezig geweest om een goede begin design te maken. Mijn idee is om een webite te maken waar ik bij kan houden hoeveer bepaalde astroid zijn van de aarde verwijderd. Dit kan je dan over de jaren bij houden en door verder te scrollen ga je verder de toekomst in. Ik heb voor nu alleen een design in figma:
<br><br>
<img width="979" height="546" alt="image" src="https://github.com/user-attachments/assets/217b2315-de25-4acc-b5dd-58ec79413606" />

## 02/04/2026
- 09:30 tot 10:00 gesprek met Jad
- 10:30 tot 11:00 Anders gesprek met Leonie
- 11:00 tot 16:00 zelfstandig werken
<br>
Gesprek met Jad:
<br>Tijdens mijn gesprek met Jad en mijn andere teamgenoten heb ik mijn huidige werk besproken en mijn plannen voor de API website. Ik heb mijn keuzes onderbouwt waarom ik bepaalde heb gemaakt tijdens het ontwerpen en waar ik eventueel beter kon gaan. Tijdens het gesprek heb ik mijn API's besproken, de API's die ik ga gebruiken zijn: <br>
<br>
Content API 
- https://api.nasa.gov/
<br>
Web API's
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API
- https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
- https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Lazy_loading
- Javascript api scroll driven animation (https://developer.mozilla.org/en-US/docs/Web/API/ScrollTimeline)
- https://developer.mozilla.org/en-US/docs/Web/API/Popover_API
<br>
Daarnaast heb ik zelf ook nog verbeteringen gemaakt aan mijn ontwerp. Ik ben begonnen met wat details toevoegen en heb ervoor gekozen om bepaalde kleuren aan te passen zodat je beter een verschil ziet tussen bepaalde elementen. Een paar voorbeelden zijn:<br>
<br>
Voorpagina <br>
// Oud
<img width="979" height="546" alt="image" src="https://github.com/user-attachments/assets/217b2315-de25-4acc-b5dd-58ec79413606" />

<br><br>
// Nieuw
<img width="994" height="547" alt="image" src="https://github.com/user-attachments/assets/c9d9eefd-0805-41f0-a001-2df11abaa6aa" />

<br><br>
Details pagina <br>
// Oud <br>
<img width="945" height="526" alt="image" src="https://github.com/user-attachments/assets/daa89e1a-31a8-4612-8b09-6ed7739cf6e3" />

<br><br>
// Nieuw <br>
<img width="383" height="866" alt="image" src="https://github.com/user-attachments/assets/5f1f1b6b-be8c-4570-810d-775714703837" />
<br><br>
Doelen: <br>
Mijn doelen voor volgende week zijn om een semi werkende versie te krijgen waar ik astroiden kan maken gebaseerd op de nasa data die ik fetch met mijn api. Dus voor elke astroide maak ik bijvoorbeeld een aparate `<span>` aan, of ik krijg de aarde als middlepunt voor mijn website met de `Canvas API`.
<br>
## Week 1
Hoewel dit een best korte week was voor APi, heb ik al best wat kunnen bereiken. Ik heb binnen de eerste dag al een concept kunnen maken en zelfs deze in Figma compleet uit kunnen werken. Ik heb al een plan met meerdere Web en content API's die ik kan gebruiken om een compleet werkende website te kunenn bouwen, en ik heb zelfs al een start gemaakt met hte fetchen van content uit de NASA API. Op dit moment heb ik alle NEO's (Near Earth Objects) al kunnen fetchen vanaf de huidige dag (Dus vandaag 02/04/2026). Dit past zich dan ook dynamisch aan. VOlgende week wil ik meer focussen op vormgeving en het geheel wat mooier afwerken.

## 08/04/2026
- 09:30 / 12:00 College met Cyd en Jad
- 12:00 / 12:45 Zelfstandig werken
- 12:45 / 13:25 Pauze
- 13:30 / 16:00 Zelfstandig werken

Gesprek met:
<br>Vandaag heb ik echt heel veel bereikt. Om het wat beter te visualiseren zal ik alles op een rijtje zetten:
- Achtergrond gefixed van linear gradient naar image (makkelijker en meer accuraat)
- Gefetchte items omgezet naar knoppen
- Overlay Web API toegepast en uitgewerkt
- Canvas Web API toegepast en uitgewerkt
- Aarde (fixed image) toegevoegt.
<br><br>

### Achtergrond
Als eerste ben ik bezig geweest met de achtergrond van mijn website. In eht begin had ik een linear gradient, maar dit vond ik uiteindelijk niet mooi. Het was moeilijk om meer toe te voegen en het voelde heel leeg aan, dus ben ik over gestapt naar een image die maar 1MB is:
<br>
// Oude Achtergrond <br>
<img width="1120" height="625" alt="image" src="https://github.com/user-attachments/assets/84b41beb-9450-47c6-ab64-9d5bad3a6bdf" />

<br>
// Nieuwe achtergrond <br>
<img width="1122" height="628" alt="image" src="https://github.com/user-attachments/assets/96afd3ba-f9a7-49fe-986a-8ba4c71db391" />

<br>
In de toekomst wil ik kijken of ik nog meer 'nebula' effecten toe kan voegen zodat het meer lijkt om de echte ruimte en niet een zwarte achtergrond met wat 'noise.'

### Gefetchte items + Overlay Web API
Als tweede ben ik bezig geweest met het mooi maken van de gefetchte items. Toen ik begon stonden deze netjes in een rijtje onder elkaar, maar ik wilde deze al gauw mooier verwerken. Om het meer accuraat te maken naar het plan dat ik heb voor mijn website, ben ik begonnen met het toepassen van de Overlay Web API. Deze API maakt het toevoegen van een clickable overlay heel makkelijk zonder dat ik heel veel javascript moet toevoegen voor het openen en sluiten van elementen. Dit doe ik met een `<dialog>` element, daarna pas ik `popover` toe aan de knop om ervoor te zorgen dat dit de popover toggled, en een `popovertarget` zodat de knop weet welke knop hij moet targeten. Om dit dynamisch te maken voor andere knoppen heb ik gebruik gemaakt van de `astroide.id` die je kan gebruiken uit de NASA API. Die pas ik dan toe in de code zoals: <br>
<img width="879" height="337" alt="image" src="https://github.com/user-attachments/assets/8f928841-1b02-4d74-9fa2-5b9bcc4001d2" /> <br>
Omdat ik meerdere knoppen aan maak voor elke astroide, moet ik er wel voor zorgen dat elke knop neit dezelfde informatie aangeeft en de juiste overlay sluit.

### Canvas Web API
Mijn grootste overwinning vandaag is het gebruiken, toepassen en goed krijgen van de Canvas Web API. Hier ben ik zelfs voor naar Cyd gegaan omdat ik het niet super goed begreep, maar in combinatie met de website: http://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc en wat hulp van Cyd heb ik uiteindelijk een systeem kunnen maken die cirkels genereert zoals ik in mijn plan heb: <br>

// Figma versie <br>
<img width="1098" height="608" alt="image" src="https://github.com/user-attachments/assets/4d81f001-d447-4a3f-82fa-7e3d48e8c30e" />

<br>
// Website versie <br>
<img width="1892" height="902" alt="image" src="https://github.com/user-attachments/assets/c84cab34-a14b-4e8a-885e-b3793a5a410f" />
<br>
Dit heb ik gedaan door een Array list te maken in javascript en 6 verschillende waardes mee te geven, 1 cirkel voor de aarde en 5 andere cirkels voor de afstanden. Deze geef ik dan ook ieder unieke kleuren mee waardoor hij elke andere circel een andere kleur geeft. Om het nogmeer accuraat te maken zorg ik ervoor dat de 2de cirkel (index nummer 1) een rode filling heeft.
<br>
// Code: <br>
<img width="1005" height="243" alt="image" src="https://github.com/user-attachments/assets/cffe2bb2-d200-456d-9517-95f890f678cf" /> <br>
<img width="722" height="687" alt="image" src="https://github.com/user-attachments/assets/07426f1f-5713-4dca-ac8a-54cedc240b8c" />

### Aarde
Als laatste heb ik ook een center image toegevoegd waardoor de aarde precies in de middelste cirkel staat




