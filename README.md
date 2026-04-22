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

## 09/04/2026
- 09:30 / 12:00 zelfstandig werken
- 12:00 / 12:45 pauze
- 13:00 / 13:25 Met vasilis bespreken over de confirence
- 13:25 / 15:30 zelfstandig werken

Gesprek met Mats:
<br>Vandaga heb ik ook weer verassend veel bereikt, ik zal alles weer op een rijtje zetten en het uitleggen per onderdeel!
- Draaien van objecten
- Tekst met canvas
- Achtergrond h1,
- Hover tekst, animations, cleanup code.

## 18/04/2026

## 22/04/2026
- 09:30 Workshop van Cyd over het online zetten van de website
- 10:30 Zelfstandig werken aan Week selector
- 12:30 Pauze
- 13:15 Verder zelfstand werken aan Week selector
- 14:55 Werken aan subtiele animaties voor extra details (Geen zin meer in zware code)
- 16:00 Checkout

Gesprek emt:
<br> Vandaag was een geweldige dag voor mij om te coderen. Ik heb precies bereikt wat ik wilde bereiken en meer. Ik zal in een lijstje zetten wat ik precies heb gedaan:
- Week selector (Plus en min)
- Glow animatie
- Nebula Verbeterd
- Overlay achtergrond naar hologram veranderd
- Code re-organised

<br>
### Week Selector
De grote ster van vandaag, ik heb ervoor gezorgt dat je de NEO's van meerdere weken kan bekijken, en niet alleen de huidige week (vandaag + komende 6 dagen.) Hiervoor heb ik een control panel gemaakt waar je zelf kan kiezen in welke week jij de NEO's wilt bekijken, natuurlijk om het een beetje gebruiksvriendelijk te maken heb ik ook aangegeven in welke week je zit: <br>

// Deze week <br>
<img width="248" height="315" alt="image" src="https://github.com/user-attachments/assets/a55aaae6-18b3-4129-90e6-83e834b05d33" />

<br>
// Andere week <br>
<img width="252" height="320" alt="image" src="https://github.com/user-attachments/assets/9330e3ba-00fc-4126-a20f-4c8527fdecb1" /> <br>
<img width="250" height="322" alt="image" src="https://github.com/user-attachments/assets/bf2aa834-e94e-4d77-b9f8-db5484250f99" />

<br>
Dit heeft mij echt heel veel moeite en code gekost, dus ben ik er zelf ook echt heel trots om dat ik het voor elkaar heb gekregen, uiteraard heb ik wel een beetje gebruik gemaakt van AI, maar ik heb ook heel veel zelf gedaan! <br>

// Server Side
```
const url = new URL(Astro.request.url);
const weekParam = Astro.url.searchParams.get("week");
const weekOffset = parseInt(weekParam || "0");
const vandaag = new Date();
vandaag.setHours(0, 0, 0, 0);

const startDatum = new Date(vandaag);
startDatum.setDate(vandaag.getDate() + weekOffset * 7);

const eindDatum = new Date(startDatum);
eindDatum.setDate(startDatum.getDate() + 7);

const toISODate = (date: Date) => date.toLocaleDateString("en-CA");
const startStr = toISODate(startDatum);
const eindStr = toISODate(eindDatum);
let alleObjectenVanDeMaand = [] as any[];

const response = await fetch(
	`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startStr}&end_date=${eindStr}&api_key=${apiKey}`,
);

if (!response.ok) {
	console.error("NASA API Error:", response.status);
} else {
	const data = await response.json();

	if (data.near_earth_objects) {
		for (const datum in data.near_earth_objects) {
			const objectenOpDezeDag = data.near_earth_objects[datum];

			const gefilterdeObjecten = objectenOpDezeDag.filter((obj: any) => {
				return obj.close_approach_data.some((approach: any) => {
					const afstand = parseFloat(
						approach.miss_distance.kilometers,
					);
					return (
						approach.orbiting_body === "Earth" && afstand < 10500000
					);
				});
			});

			const objectenMetDatum = gefilterdeObjecten.map((obj: any) => ({
				...obj,
				naderingsDatum: datum,
			}));

			alleObjectenVanDeMaand = [
				...alleObjectenVanDeMaand,
				...objectenMetDatum,
			];
		}
	}
}

alleObjectenVanDeMaand.sort((a, b) =>
	a.naderingsDatum.localeCompare(b.naderingsDatum),
);
```
<br>

// HTML
```
		<div id="control-panel">
			<button type="button" id="prev-week" class="ui-button">- Week</button>
			<div id="week-display">
				{
					weekOffset === 0
						? "Huidige Week"
						: `Week Offset: ${weekOffset}`
				}
			</div>
			<button type="button" id="next-week" class="ui-button">+ Week</button>
			<button type="button" id="center-btn" class="ui-button">Center Earth</button>
		</div>
```

<br>

// Client Side
```
const prevBtn = document.getElementById("prev-week");
const nextBtn = document.getElementById("next-week");
const weekDisplay = document.getElementById("week-display");

const currentUrl = new URL(window.location.href);
const currentOffset = parseInt(
    currentUrl.searchParams.get("week") || "0",
);

if (weekDisplay) {
    if (currentOffset === 0)
        weekDisplay.textContent = "Huidige Week";
    else if (currentOffset === 1)
        weekDisplay.textContent = "Volgende Week";
    else if (currentOffset === -1)
        weekDisplay.textContent = "Vorige Week";
    else weekDisplay.textContent = `Week Offset: ${currentOffset}`;
}

prevBtn?.addEventListener("click", () => {
    currentUrl.searchParams.set(
        "week",
        (currentOffset - 1).toString(),
    );
    window.location.href = currentUrl.toString();
});

nextBtn?.addEventListener("click", () => {
    // Toon de lader direct bij de klik
    const overlay = document.getElementById("loading-overlay");
    if (overlay) overlay.style.display = "flex";
    currentUrl.searchParams.set(
        "week",
        (currentOffset + 1).toString(),
    );
    window.location.href = currentUrl.toString();
});
```

<br>
Deze stukken code zorgt ervoor dat ik de weken zelf wat algemener in kan stellen. In mijn vorige code had ik specifiek aangegeven dat ik alle dagen + 7 vanaf `vandaag`, wilde hebben. Nu kan ik dit veel algemenen aangeven en zelfs deze value laten veranderen doormiddel van javascript en html.

### Glow animaties
Om wat extra detail toe te voegen heb ik kleine animaties toe gevoegd en andere subtiele glows die net wat extra's geven aan de website.

<br>

// On hover glow
<br>
<img width="234" height="178" alt="OnHover" src="https://github.com/user-attachments/assets/77d87325-f22e-497b-b693-1c5f3add3954" />
<br>

// Static Animatie
<br>
<img width="400" height="360" alt="Static" src="https://github.com/user-attachments/assets/0c94a3cf-8d9f-4140-873e-348b3fb37368" />

<br>

// Achtergrond Hologram
<br>
<img width="428" height="500" alt="Hologram" src="https://github.com/user-attachments/assets/2bb613db-8080-4d99-aa8f-20919b00da47" />

### De Nebula
De nebula heb ik qua kleuren en velheid wat aangepast zodat het niet het hele scherm overneemt. In eerste versies zag je de nebula sneller dan de rest van de content, dit wilde ik graag wat verminderen, dus heb ik wat code aangepast om dit net wat mooier te krijgen:

```
const Nebula_Config = {
    Blob_Count: 30,
    Color_1: "#03041b",
    Color_2: "#4d0d7e4d",
    Color_3: "#000000c4",
}

const color =
  Math.random() < 0.33
    ? Nebula_Config.Color_1
    : Math.random() < 0.66
      ? Nebula_Config.Color_2
      : Nebula_Config.Color_3;
```
Nu heb je een veel mooier resultaat terwijl het meer op de achtergrond zit, een win win voor mij:
<br>
<img width="1919" height="900" alt="image" src="https://github.com/user-attachments/assets/1269cd58-74f9-415e-9cb8-96233a7ad443" />

### Doel voor morgen
Ik wil morgen graag een werkende loading screen maken die ook duidelijk aangeeft dat je aan het laden bent, nu loopt het scherm half vast tot je naar de volgende week gaat, ik wil dit graag mooier uitwerken. Ook wil ik kijken of ik de aarde foto kan veranderen naar iets mooiers!







