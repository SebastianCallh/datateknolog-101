var jsonData = [
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
    'text': 'Diskret matematik behandlar många teoretiska grunder ' +
            'inom datavetenskap, och moment från kursen återkommer igenom resten av hela utbildningen, ' +
            'även i de kurser som inte är direkta påbyggnadskurser.' +
            ' Boolesk algebra tillämpas flitigt i TSEA22 och TDDD88 och grafer och ' +
            ' trädstrukturer implementeras som mycket användbara datastrukturer i ' +
            ' TDDD86. Vissa moment används även i labbserien i parallellkursen TDDC66.'
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
            'Programmeringsspråket Python introduceras också och man får genomföra sina första laborationer. '
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
            'Kursen inkluderar också ett projektarbete där man får bland annat ' +
            'kan få programmera en hemsida, en AI eller fotbollsrobotar.'
  },
  {
    'id': 'TDDD70',
    'name': 'Ingenjörsprofessionalism del 1',
    'field': 'softskills',
    'block': 15,
    'points': 1,
    'year': 1,
    'start': 'HT1',
    'end': 'HT2',
    'precedes': '',
    'text': 'Det här är ingprof'
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
    'text': 'Den första programmeringskursen går igenom grundläggande begrepp  ' +
            'så som iteration, rekursion, indata/utdata och högre ordningens funktioner. ' +
            'Programmering genomsyrar hela utbildningen och grunderna som läggs här ' +
            'fortsätter att byggas på i bland annat TDDD78 och TDDD86.'
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
    'precedes': 'TATA41,TSTE24,TSRT12',
    'text': 'Den första kursen i analysmatte. Här lär man sig tala korrekt mattespråk, ' +
            'vad ekvivalens och implikation är och många andra grundläggande verktyg. ' +
            'Att ha bra koll på den grundläggande matten är viktigt för att hänga med på ' +
            'fortsttningskurserna. Eulers formler och komplexa tal som introduceras här återkommer i ' +
            'TFYY86, TSTE24 och TSDT84 och dess påbyggnadskurser.'
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
            'viktiga och kommer återkomma igenom hela utbildningen. Man går bland annat igenom ' +
            'standardderivator och standardprimitiver, vilka är viktiga att man lär sig utantill. ' +
            'En bra koll på att derivera/integrera är viktig och används frekvent i denna här och samtliga påbyggnadskurser.'
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
            'och här får man lära sig grunderna och pröva på hur man strukturerar och bygger större programmeringsprojekt. '
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
            'på strömmar och spänningar med hjälp av komplexa tal och Eulers formler. Filter introduceras här ' +
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
    'precedes': 'TATA76,TSDT84,TFYY86',
    'text': 'Efter envarre-ettan behandlas flera tillämpningar av integraler. ' +
            'Bland annat behandlas kurvlängder och rotations-volymer/areor. Taylor- och Maclaurinutveckling ' +
            'introduceras också som verktyg för att uppskatta funktionsvärden. Differentialekvationer är ett annat ' +
            'viktigt matematiskt verktyg som behöver behärskas (tillsammans med det tidigare nämnda) ' +
            ' för bla. TFYY86 samt TSDT84 med påbyggnadskurser. '
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
    'text': 'Digitaltekniken tillämpar Boolesk algebra och Karnaugh-diagram ' +
            'för att konstruera digitala kretsar som utför logiska beräkningar. ' +
            'Syntetiseringsspråket VHDL presenteras här vilket möjliggör att syntetisera en krets ' +
            'utan att faktiskt koppla upp den själv. I TSEA82 används VHDL för att konstruera ' +
            'en processor så ju mer koll man har på det desto bättre. Det här är även ' +
            'första kursen där man själv får läsa datablad för att förstå komponenter ' +
            'vilket är en viktig färdighet i TSEA82/TSEA83/TSEA29.'
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
    'precedes': 'TAOP33,TSDT84,TATA76,TFYY86',
    'text': 'Också känd som linalgen. Här studerar man bland annat vektorer, matriser, ' +
            'linjära ekvationssystem och linjära avbildningar. KLASSREPHJÄLP'
  },
  {
    'id': 'TDDD84',
    'name': 'Ingenjörsprofessionalism del 3',
    'field': 'softskills',
    'block': 15,
    'points': 1,
    'year': 3,
    'start': 'HT1',
    'end': 'HT2',
    'precedes': '',
    'text': 'Det här är också ingproffen'
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
            'pekare och minneshantering. Fokus ligger på hur man programmerar med prestanda ' +
            'och man får lära sig många algoritmer och datastrukturer att ha i sin programmerings-verktygslåda. ' +
            'Samtliga moment som bearbetas är mycket viktiga för den som vill bli en kompetent utvecklare. ' +
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
    'id': 'TFYY86',
    'name': 'Mekanik',
    'field': 'physics',
    'block': 13,
    'points': 6,
    'year': 2,
    'start': 'HT2',
    'end': 'HT2',
    'precedes': 'TFYA86',
    'text': 'Mekaniken är den första G2-kursen och behöver bra förståelse för ' +
            'integraler, derivator och diffekvationer ifrån envarren och ' +
            'behärskande av vektorer ifrån linalgen. Kursen behandlar klassisk mekanik ' +
            'som inkluderar bland annat fjädrar, pendlar, vridmoment, raketer och gravitation.'
  },
  {
    'id': 'TATA76',
    'name': 'Flervariabelanalys',
    'field': 'math',
    'block': 11,
    'points': 4,
    'year': 2,
    'start': 'VT1',
    'end': 'VT1',
    'precedes': 'TAMS27',
    'text': ''
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
    'text': ''
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
    'text': ''
  },
  {
    'id': 'TAMS27',
    'name': 'Matematisk statistik',
    'field': 'math',
    'block': 11,
    'points': 6,
    'year': 2,
    'start': 'VT2',
    'end': 'VT2',
    'precedes': '',
    'text': ''
  },
  {
    'id': 'TFYA86',
    'name': 'Fysik',
    'field': 'physics',
    'block': 13,
    'points': 5,
    'year': 2,
    'start': 'VT2',
    'end': 'VT2',
    'precedes': '',
    'text': ''
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
    'text': ''
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
    'text': ''
  },
  {
    'id': 'TDDD91',
    'name': 'Ingenjörsprofessionalism del 5',
    'field': 'softskills',
    'block': 15,
    'points': 1,
    'year': 2,
    'start': 'HT1',
    'end': 'HT2',
    'precedes': '',
    'text': 'Det här är ingproff'
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
    'text': ''
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
    'text': 'KMM. RÅBÅTAR.'
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
    'text': 'GRAFER'
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
    'text': ''
  },
  {
    'id': 'TDDD98',
    'name': 'Ingenjörsprofessionalism del 6',
    'field': 'softskills',
    'block': 15,
    'points': 1,
    'year': 1,
    'start': 'VT1',
    'end': 'VT2',
    'precedes': '',
    'text': 'Det här är ingproffen'
  },
  {
    'id': 'TSRT12',
    'name': 'Reglerteknik',
    'field': 'hardware',
    'block': 4,
    'points': 6,
    'year': 3,
    'start': 'VT1',
    'end': 'VT1',
    'precedes': '',
    'text': 'GRAFER'
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
    'text': 'SIKEN'
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
    'text': ''
  }
]
