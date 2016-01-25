
//Creates a "namespace" to prevent naming collisions
var CourseGraph = window.CourseGraph || {};

CourseGraph.courseJson = [
  {
    'id': 'TATA65',
    'name': 'Diskret matematik',
    'field': 'math',
    'block': 2,
    'points': 6,
    'year': 1,
    'start': 'HT1',
    'end': 'HT1',
    'precedes': 'TSEA22,TDDD88',
    'text': 'Diskret matematik (också känd som diskmatten) behandlar många teoretiska grunder ' +
            'inom datavetenskap och moment från kursen återkommer igenom resten av hela utbildningen, ' +
            'även i kurser som inte är direkta påbyggnadskurser. ' +
            'Boolesk algebra tillämpas flitigt i TSEA22 och TDDD88 och grafer ' +
            'implementeras som mycket användbara datastrukturer i TDDD86 och TAOP33. ' +
            'Vissa moment används även i labbserien i parallellkursen TDDC66.'
  },
  {
    'id': 'TDDC66',
    'name': 'Datorsystem och programmering',
    'field': 'software',
    'block': 17,
    'points': 6,
    'year': 1,
    'start': 'HT1',
    'end': 'HT1',
    'precedes': 'TDDD73,TDDD60',
    'text': 'Här introduceras universitetets datormiljö tillsammans med operativsystemet Linux Mint. ' +
            'Programmeringsspråket Python introduceras också och de första laborationer genomförs. '
  },
  {
    'id': 'TDDD63',
    'name': 'Perspektiv på datateknik',
    'field': 'software',
    'block': 13,
    'points': 6,
    'year': 1,
    'start': 'HT1',
    'end': 'HT2',
    'precedes': '',
    'text': 'Perspektivkursen ger en överblick över datavetenskap som helhet. ' +
            'Allt mellan hur data lagras till artificiell intelligens tas upp här. ' +
            'I kursen genomförs även ett projektarbete som bland annat kan gå ut på att' +
            'få programmera en webbapplikation, en AI eller fotbollsrobotar.'
  },
  {
    'id': 'TDDD99',
    'name': 'Ingenjörsprofessionalism',
    'field': 'softskills',
    'block': 15,
    'points': 1,
    'year': 1,
    'start': 'HT1',
    'end': 'HT1',
    'precedes': '',
    'text': 'Ingenjörsprofessionalismen sträcker sig över samtliga 3 år och ' +
            'behandlar så kallade "soft skills". Saker som inte kräver integraler ' +
            'eller programmering, men som fortfarande är viktiga ute i näringslivet. ' +
            'Områden som tas upp är till exempel prokrastinering, presentationsteknik, konsten att kommunicera och etik.'
  },
  {
    'id': 'TDDD73',
    'name': 'Funktionell och imperativ programmering i Python',
    'field': 'software',
    'block': 18,
    'points': 6,
    'year': 1,
    'start': 'HT2',
    'end': 'HT2',
    'precedes': 'TDDD78',
    'text': 'Den första renodlade programmeringskursen. Här gås grundläggande programmeringsbegrepp igenom ' +
            'så som iteration, rekursion och högre ordningens funktioner. ' +
            'Programmering genomsyrar hela utbildningen och grunderna som läggs här ' +
            'byggas vidare på i bland annat TDDD78 och TDDD86.'
  },
  {
    'id': 'TATA79',
    'name': 'Inledande matematisk analys',
    'field': 'math',
    'block': 11,
    'points': 6,
    'year': 1,
    'start': 'HT2',
    'end': 'HT2',
    'precedes': 'TATA41,TSTE24',
    'text': 'Den första kursen i analysmatematik. Den är även känd som "grunken" ifrån dens förra namn "matematisk grundkurs". ' +
            'Här behandlas hur korrekt mattespråk skrivs, vad ekvivalens och implikation är och många grundläggande matteverktyg. ' +
            'Att ha bra koll på den grundläggande matten är viktigt för att hänga med i resten av utbildningen. ' +
            'Bland annat återkommer Eulers formler och komplexa tal som introduceras här i TFYY68, TSTE24 och TSDT84 och dess påbyggnadskurser.'
  },
  {
    'id': 'TATA41',
    'name': 'Envariabelanalys 1',
    'field': 'math',
    'block': 11,
    'points': 6,
    'year': 1,
    'start': 'VT1',
    'end': 'VT1',
    'precedes': 'TATA42',
    'text': 'Envarre-ettan går igenom världen av gränsvärden, derivator och integraler ' +
            'och går hand i hand med envarre-tvåan. Så gott som alla moment här är ' +
            'viktiga och kommer återkomma igenom hela utbildningen. ' +
            'En bra koll på derivata och integraler är viktig och används frekvent i samtliga påbyggnadskurser.'
  },
  {
    'id': 'TDDD78',
    'name': 'Objektorienterad programmering och Java',
    'field': 'software',
    'block': 18,
    'points': 6,
    'year': 1,
    'start': 'VT1',
    'end': 'VT2',
    'precedes': 'TDDD86',
    'text': 'Efter att ha läst om imperativ och funktionell programmering i TDDD73 introduceras ' +
            'här objektorienterad programmering (OOP). OOP används flitigt i näringslivet ' +
            'och här får man lära sig grunderna och pröva på hur ett lite större programmeringsprojekt struktureras. '
  },
  {
    'id': 'TSTE24',
    'name': 'Elektronik',
    'field': 'hardware',
    'block': 6,
    'points': 5,
    'year': 1,
    'start': 'VT1',
    'end': 'VT2',
    'precedes': 'TSDT84',
    'text': 'Elektroniken är den första kursen som tillämpar matematik. Här räknar man ' +
            'på ström och spänning med hjälp av komplexa tal och Eulers formler. Filter introduceras här ' +
            'vilka används flitigt i TSDT84 och en god förståelse för dem och tvåpoler rekommenderas.'
  },
  {
    'id': 'TATA42',
    'name': 'Envariabelanalys 2',
    'field': 'math',
    'block': 11,
    'points': 6,
    'year': 1,
    'start': 'VT2',
    'end': 'VT2',
    'precedes': 'TATA76,TSDT84,TFYY68',
    'text': 'Efter envarre-ettan behandlas bland annat kurvlängder, rotations-volymer/areor, ' +
            'Taylor- och Maclaurinutveckling och differentialekvationer. Differentialekvationer ' +
            'är ett viktigt matematiskt verktyg som behöver behärskas för bla. TFYY68, TATA76 och TSDT84 med påbyggnadskurser. '
  },
  {
    'id': 'TSEA22',
    'name': 'Digitalteknik',
    'field': 'hardware',
    'block': 4,
    'points': 6,
    'year': 1,
    'start': 'VT2',
    'end': 'VT2',
    'precedes': 'TSEA82',
    'text': 'Digitaltekniken går ut på att konstruera och koppla upp logiska kretsar. ' +
            'Syntetiseringsspråket VHDL introduceras också  här vilket möjliggör att programmera en krets ' +
            'istället för att faktiskt koppla upp den själv. VHDL återkommer i TSEA82  ' +
            'så bra koll på det är fördelaktigt. Det här är även ' +
            'första kursen där man själv får läsa datablad för att förstå komponenter ' +
            'vilket är en viktig färdighet i påbyggnadskurserna.'
  },
  {
    'id': 'TATA24',
    'name': 'Linjär algebra',
    'field': 'math',
    'block': 8,
    'points': 8,
    'year': 2,
    'start': 'HT1',
    'end': 'HT2',
    'precedes': 'TAOP33,TSDT84,TATA76,TFYY68',
    'text': 'Också känd som linalgen. Här studeras bland annat vektorer, matriser, ' +
            'linjära ekvationssystem och linjära avbildningar. TATA76 bygger vidare ' +
            'på tidigare studerad analysmatte med hjälp av linalgen och en god förståelse ' +
            'för vektorrum och manipulation av vektorer är viktigt.'
  },
  {
    'id': 'TDDD86',
    'name': 'Datastrukturer algoritmer och programmeringsparadigm',
    'field': 'software',
    'block': 18,
    'points': 11,
    'year': 2,
    'start': 'HT1',
    'end': 'HT2',
    'precedes': 'TDDB68,TDDC93',
    'text': 'DALP:en introducerar programmeringsspråket C++ och tillsammans med det kommer ' +
            'pekare och minneshantering. Fokus ligger på programmering med prestanda ' +
            'och man får lära sig många algoritmer och datastrukturer att ha i sin programmerings-verktygslåda. ' +
            'Samtliga moment som bearbetas är högst relevanta för den som vill bli en kompetent utvecklare. ' +
            'Att ha bra koll på pekare underlättar även mycket i TDDB68.'
  },
  {
    'id': 'TSEA82',
    'name': 'Datorteknik',
    'field': 'hardware',
    'block': 4,
    'points': 4,
    'year': 2,
    'start': 'HT1',
    'end': 'HT1',
    'precedes': 'TSEA83',
    'text': 'Datortekniken handlar i själva verket om att programmera en processor. ' +
            'Här förklaras hur en processor arbetar och hur den kan styras ' +
            'genom att programmera den i assemblerspråk. Förståelse för en processor är ' +
            'viktig i påbyggnadskursen TSEA83 då en hel dator (inklusive processor) konstrueras. '
  },
  {
    'id': 'TFYY68',
    'name': 'Mekanik',
    'field': 'physics',
    'block': 15,
    'points': 6,
    'year': 2,
    'start': 'HT2',
    'end': 'HT2',
    'precedes': 'TFYA86',
    'text': 'Mekaniken kräver en bra förståelse för ' +
            'integraler, derivator och diffekvationer ifrån envarren och ' +
            'av vektorer ifrån linalgen. Kursen behandlar specifikt klassisk mekanik  ' +
            'och ger teoretisk bakgrund ifall man t.ex. vill programmera en fysikmotor ' +
            'eller arbeta med konstruktion av bilar, flygplan och liknande.'
  },
  {
    'id': 'TATA76',
    'name': 'Flervariabelanalys',
    'field': 'math',
    'block': 13,
    'points': 4,
    'year': 2,
    'start': 'VT1',
    'end': 'VT1',
    'precedes': 'TAMS27,TSRT12',
    'text': 'Flervarren expanderar på envarren(TATA41/TATA42) med funktioner som beror på fler variabler, ' +
            'och att behärska derivator, integraler, gränsvärden och diffekvationer är viktigt för att hänga med. ' +
            'Flervarren är viktigt dels för reglertekniken(TSRT12) där system kan bero på fler variabler och för ' +
            'matstaten(TAMS27) där främst integraler med fler variabler används flitigt.'
  },
  {
    'id': 'TDDB68',
    'name': 'Processprogrammering och operativsystem',
    'field': 'software',
    'block': 18,
    'points': 6,
    'year': 2,
    'start': 'VT1',
    'end': 'VT1',
    'precedes': 'TDDD96',
    'text': 'Kallas även Pintos då man arbetar med ett "halvfärdig" operativsystem ' +
            'med det namnet. Kursen går ut på att implementera flera detaljer som saknas ' +
            'och går igenom funktionalitet i ett operativsystem så som systemanrop, ' +
            'trådning och filsystem.'
  },
  {
    'id': 'TSEA83',
    'name': 'Datorkonstruktion',
    'field': 'hardware',
    'block': 4,
    'points': 8,
    'year': 2,
    'start': 'VT1',
    'end': 'VT2',
    'precedes': 'TSEA29',
    'text': 'I den här kursen konstrueras en hel dator, från processor till input/output och grafik. ' +
            'Kursen är strukturerad som ett projektarbete och konstruktionen sker genom ' +
            'syntetisering av sina kretsar i språket VHDL. Ett typiskt projekt ' +
            'resulterar i en dator med ett spelbart spel på.'
  },
  {
    'id': 'TAMS27',
    'name': 'Matematisk statistik',
    'field': 'math',
    'block': 13,
    'points': 6,
    'year': 2,
    'start': 'VT2',
    'end': 'VT2',
    'precedes': '',
    'text': 'I "matstaten" behandlas sannolikhetsteori, stokastiska processer och statistisk teori. ' +
            'Sannolikhetsteori är ett relevant koncept för bland annat signalteori och reglerteknik, ' +
            'eller om man i framtiden t.ex. vill analysera felsäkerhet hos en framtagen produkt. '
  },
  {
    'id': 'TFYA86',
    'name': 'Fysik',
    'field': 'physics',
    'block': 15,
    'points': 5,
    'year': 2,
    'start': 'VT2',
    'end': 'VT2',
    'precedes': '',
    'text': 'Fysiken är allmänbildning för en civilingenjör och liknar mekaniken i sättet man angriper problem. ' +
	    'Fokus här ligger dock på betydligt mindre skala, och kursen behandlar bland annat elektromagnetism '+
            'och ger en introduktion till kvantmekanik.'
  },
  {
    'id': 'TDDC93',
    'name': 'Programutvecklingsmetodik, teori',
    'field': 'software',
    'block': 20,
    'points': 4,
    'year': 3,
    'start': 'HT1',
    'end': 'HT1',
    'precedes': '',
    'text': 'Än så länge har man arbetat med mindre programmeringsprojekt, ' +
            'men hur strutureras ett större projekt upp? PUM:en behandlar ' +
            'koncept och tillvägagångssätt för storskalig programutveckling, ' +
            'vilket är något som alla utvecklare kommer ha användning av. ' + 
	    'Redan i kandidatarbetet TDDD69 är det användbart att känna till ' +
	    'kravhantering och utvecklingsmetoder så som SCRUM.'
  },
  {
    'id': 'TDDD88',
    'name': 'Logik',
    'field': 'software',
    'block': 2,
    'points': 5,
    'year': 3,
    'start': 'HT1',
    'end': 'HT1',
    'precedes': '',
    'text': 'Här behandlas grundläggande logik och dess tillämpningar inom ' +
            'datavetenskap. Databaser och artificiell intelligens är två områden som ' +
            'flitigt tillämpar logik.'
  },
  {
    'id': 'TSDT84',
    'name': 'Signaler och system samt transformer',
    'field': 'hardware',
    'block': 6,
    'points': 8,
    'year': 3,
    'start': 'HT1',
    'end': 'HT2',
    'precedes': 'TSKS10,TSRT12',
    'text': 'Även känd som Sigsysen. Kursen tar upp forieranalys, laplacetransformer ' +
            'och att modelera problem inom t.ex. elektroteknik som system för att kunnas analysera dem. ' +
            'Kursen lägger grunden för fortsatta kurser inom signalteori och fortsätter i TSKS10 och TSRT12.'
  },
  {
    'id': 'TSEA29',
    'name': 'Konstruktion med mikrodatorer',
    'field': 'hardware',
    'block': 4,
    'points': 8,
    'year': 3,
    'start': 'HT1',
    'end': 'HT2',
    'precedes': '',
    'text': 'Förkortas ofta KMM. I den här kursen höjs ambitionsnivåerna från föregående med målet att kontruera ' +
            'en robot. I ett större projektarbete väljs en robotkropp med 3 processorer ' +
            'på som ska programmeras för att uppfylla en uppgift. T.ex. kan roboten programmeras ' +
            'för att navigera och kartlägga ett område eller navigera en labyrint. Projektarbetet ' +
            'är uppstyrt för att efterlika arbetslivet så mycket som möjligt och kräver stor tidsinvestering. '
  },
  {
    'id': 'TAOP33',
    'name': 'Kombinatorisk optimering',
    'field': 'math',
    'block': 8,
    'points': 4,
    'year': 3,
    'start': 'HT2',
    'end': 'HT2',
    'precedes': '',
    'text': 'Kursen behandlar matematiska verktyg för optimering ' +
            'och introducerar komplexteori för att bedöma problems "svårighetsgrad". ' +
            'Flera välkända optimeringsproblem tas up så som kappsäcksproblemet, ' +
            '"traveling salesman problem" och euler-vägar/cyklar. ' +
            'Optimering är centralt inom mjukvara och väldigt användbart ' +
            'för en programemrare.'
  },
  {
    'id': 'TDDD60',
    'name': 'Interaktiva system',
    'field': 'software',
    'block': 17,
    'points': 4,
    'year': 3,
    'start': 'VT1',
    'end': 'VT1',
    'precedes': '',
    'text': 'Här studeras interaktion mellan människa och dator, och vikten placeras vid ' +
            'hur system med hög användbarhet konstrueras. I ett enskilt projekt tas ' +
            'ett prototypgränssnitt fram till en tjänst som i slutet demonstreras och presenteras.'
  },
  {
    'id': 'TSRT12',
    'name': 'Reglerteknik',
    'field': 'hardware',
    'block': 8,
    'points': 6,
    'year': 3,
    'start': 'VT1',
    'end': 'VT1',
    'precedes': '',
    'text': 'Reglerteknik är en viktig lära för en civilingenjör. Kursen bygger vidare på TSDT84 med konceptet ' + 
            '"Hur kan vi reglera ett system att göra som vi vill?". Centrala begrepp är bland annat ' +
            'återkoppling och överföringsfunktioner.'
  },
  {
    'id': 'TSKS10',
    'name': 'Signaler, information och kommunikation',
    'field': 'hardware',
    'block': 6,
    'points': 4,
    'year': 3,
    'start': 'VT2',
    'end': 'VT2',
    'precedes': '',
    'text': 'Också känd som Siken. Siken bygger vidare på TSDT84 med fokus på hur signaler ' +
            'kan representera information och hur de kan överföras. T.ex. via radiovåger eller via ' +
            'sladdar.'
  },
  {
    'id': 'TDDD96',
    'name': 'Kandidatarbete i programvaruutveckling',
    'field': 'software',
    'block': 19,
    'points': 15,
    'year': 3,
    'start': 'VT1',
    'end': 'VT2',
    'precedes': '',
    'text': 'Kandidatarbetet symboliserar slutet på den obligatoriska biten av ' +
            'D-programmet och sker som ett projektarbete i en större grupp. Gruppen får ett ' +
            'utvecklingsuppdrag ifrån ett företag eller en institution på universitetet ' +
            'som man arbetar med under våren. Imellanåt stämmer man av med en handledare ' +
            'men i slutändan läggs stor vikt vid individuellt arbete.'
  }
]
