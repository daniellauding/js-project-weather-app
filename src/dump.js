const now = new Date(); // new Date() ger dig ett objekt som representerar just nu.
    // let tomorrow = now;  både now och tomorrow pekar på samma objekt i minnet.
    let tomorrow = new Date(); // Det här skapar ett nytt datumobjekt med exakt samma tid och datum som now. …ändras bara tomorrow, inte now.
    // let tomorrow = new Date(now.getTime()); Alternativt, klona med getTime() Det gör samma sak – men visar tydligare att du klonar utifrån tidsstämpeln.
    
    // tomorrow.setDate(now.getDate() + 1); så ändras också now – eftersom det är samma sak.

    for(let i = 0; i < 7; i++) { // Gör samma sak sju gånger, en gång för varje dag
      const day = new Date(now); // Skapa en NY kopia av dagens datum varje gång i loopen
      day.setDate(now.getDate() + i); // Lägg till i dagar på kopian, kan räkna dagar med setDate(): "Ta dagens datum, lägg till 1, och hoppa dit!"

      // hämta väder-data för den dagen (just nu tar vi bara i:te värdet)
      const temperature = result.timeSeries[i]?.data.air_temperature; // Men du vill ha en temperatur per dag.

      const formatted = day.toLocaleDateString('sv-SE', { // Formatera datumet till något läsbart (svenska)
        weekday: 'long',
        month: 'short',
        day: 'numeric'
      });


      console.log(formatted, "→ temperatur:", temperature, "°C"); // Logga resultatet
    }

    // Tänk dig att du har en låda (ett objekt).
    // now = en etikett du sätter på lådan.
    // När du gör tomorrow = now, sätter du en till etikett på samma låda.

    // Så när du lägger något nytt i lådan (ändrar datumet),
    // så ser båda etiketterna samma sak – lådan har ändrats.

    let weekday = now.getDay();

    console.log('Datum:', now);
    console.log('Veckodag:', weekday);
    console.log('Dag:', now);
    console.log('Imorgon:', tomorrow);
    console.log('Veckans väder:', result.timeSeries[0])


    // Hur får vi ihop:
// --
// Idag
// Imorgon
// ..
// ..
// == som en lista i konsolen?

// timeseries
// [0]
// -- data
// ---- air_temperature
// ---- symbol_code
// ---- 
// ---- 
// ---- 
// ---- 


// Hämta vilka parametrar:
// –– Meta:
// –––– condition
// –––– dagens temp
// –––– sunrise
// –––– sunset
// Condition:
// –––– väder
// –––– lon/lat
// Veckolista:
// –––– Dagar fr.o.m dagens,
// –––– dagens väder
// Tema:
// –––– condition

// “Gör en ny liten låda (div) och skriv in lite text och HTML i den.
// När du är klar, lämna tillbaka lådan.”

// 	•	const metaBox = (): HTMLElement => { ... }
// betyder: “Det här är en funktion som gör en HTML-låda och ger tillbaka en.”
// 	•	document.createElement('div') skapar en ny, tom <div> i JavaScript (inte i HTML-filen ännu).
// 	•	div.innerHTML = ... fyller lådan med innehåll (HTML-lista med väderdata).
// 	•	return div; skickar tillbaka den färdiga lådan till den som ropade på funktionen.

//  as HTMLElement;
// …så säger du till TypeScript:

// “Lita på mig, jag vet att det här elementet finns — det kommer inte vara null.”

// 👉 Då försvinner säkerhetskontrollen.
// Om elementet inte finns i DOM:en får du en runtime error (t.ex. Cannot read properties of null).

// if (testerBox) {
//   testerBox.appendChild(metaBox());
// }


// const testerBox = document.getElementById('tester') as HTMLElement | null;

// const metaBox = (): HTMLElement => {
//   const div = document.createElement('div');
//   div.innerHTML = `
//     <ul class="meta-list">
//       <li class="meta-list-item">Clear sky | 23°C</li>
//       <li class="meta-list-item">Sunrise 08:00</li>
//       <li class="meta-list-item">Sunset 22:30</li>
//     </ul>
//   `;
//   return div;
// };

// testerBox?.appendChild(metaBox());

	// •	| används i typer → “kan vara det här eller det där”.
	// •	|| används i logik → “om det här inte finns, ta det andra istället”.

  
  
// const names = Object.keys(cities);
// console.log(names); // 👉 ["stockholm"]
// console.log(names[0]); // 👉 "stockholm"

// In JavaScript they are written like this:

// Greater/less than: a > b, a < b.
// Greater/less than or equals: a >= b, a <= b.
// Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
// Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

// alert( 2 > 1 );  // true (correct)
// alert( 2 == 1 ); // false (wrong)
// alert( 2 != 1 ); // true (correct)

// A regular equality check == has a problem. It cannot differentiate 0 from false:

// There’s a non-intuitive behavior when null or undefined are compared to other values.

// For a strict equality check ===
  
// For maths and other comparisons < > <= >=
    
// if (0) { // 0 is falsy
//   ...
// }
  
// if (1) { // 1 is truthy
//   ...
// }
  
// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

// if (year == 2015) {
//   alert( 'You guessed it right!' );
// } else {
//   alert( 'How can you be so wrong?' ); // any value except 2015
// }
  
// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

// if (year < 2015) {
//   alert( 'Too early...' );
// } else if (year > 2015) {
//   alert( 'Too late' );
// } else {
//   alert( 'Exactly!' );
// }
  
// let result = condition ? value1 : value2;
  
// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );
  

// if (choice === "sunny") {
//   if (temperature < 86) {
//     para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
//   } else if (temperature >= 86) {
//     para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
//   }
// }
