
<template>
  <v-container fluid>
    <v-card class="mx-auto bg-card text-secondary mb-5" max-width="1000">
      <v-card-text>
        <p class="text-h6 mb-3 text-secondary">Eenzaamheid bij jongeren</p>

        <div class="text-secondary">Tealc D'haene - 16/05/2022</div>
      </v-card-text>
      <v-img
        src="images/blog/eenzaamheid.jpg"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        max-height="250px"
        cover
      >
      </v-img>
      <v-card-actions v-bind:hidden="reveal">
        <v-btn color="buttontext" class="bg-buttonbg" @click="reveal = true">
          Lees Meer
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card
          class="
            mx-auto
            bg-card
            text-secondary
            transition-fast-in-fast-out
            v-card--reveal
          "
          max-width="1000"
          v-if="reveal"
          style="height: 100%"
        >
          <v-card-text>
            <div class="text-secondary">
              Een vaste definitie plakken op eenzaamheid is moeilijk, iedereen
              ervaart dit tevens anders. Toch gaan we hier uit van de
              omschrijving dat eenzaamheid het ervaren van een onplezierige of
              ontoelaatbaar gemis van bepaalde sociale relaties is. We kunnen
              eenzaamheid opdelen in 3 categorieën. Deze zijn emotionele,
              sociale en existentiële eenzaamheid. Sociale eenzaamheid komt
              onder jongeren het meest voor. Dit bestaat voornamelijk uit het
              zien van hechte groepen en hierbij angst ervaren om er zich bij
              aan te sluiten. Ook mensen met een handicap die zich hiervoor
              schamen met als gevolg zich vereenzaamd gaan voelen. Existentiële
              eenzaamheid komt vooral voor bij sociaal onhandige jongeren en
              doemdenkers. Bij emotionele eenzaamheid zijn vaak traumatische
              onderliggende redenen de oorzaak van de eenzaamheid en raden we
              aan zo snel mogelijk professionele hulp te zoeken.
            </div>
            <br />
            <p class="text-h6 mb-3 text-secondary">
              Hoe kan ik eenzaamheid herkennen?
            </p>
            <div class="text-secondary">
              Je kan eenzaamheid herkennen (bij jezelf en anderen) aan een
              aantal factoren. Dit gaat van lichamelijke factoren (vermoeidheid,
              slaapproblemen, spierspanning, geen eetlust) tot psychische
              factoren (negatief zelfbeeld, gevoelens van zinloosheid, boosheid,
              bitterheid verveling, verlies van vertrouwen in de mens, weinig
              concentratie) tot sociale en gedragsmatige factoren (weinig
              sociale contacten, geen hobby's, slechte zelfzorg, verlegenheid,
              sociale onhandigheid). Verder neigen mensen die eenzaamheid in
              sterke mate ervaren tot het misbruik van verdovende middelen. Niet
              iedereen die eenzaam is heeft daarom last van al deze signalen, de
              combinatie van deze factoren is bij iedereen anders.
            </div>
            <br />
            <p class="text-h6 mb-3 text-secondary">Waar kan ik terecht?</p>
            <div class="text-secondary">
              Ervaar je zelf eenzaamheid of ben je bezorgd om iemand in je
              omgeving? Dan zijn er verschillende plaatsen waar er hulp en
              informatie kan worden aangeboden. Hierbij een overzicht van enkele
              opties:

              <ul class="ml-4 text-secondary">
                <li class="ma-1">
                  Uw persoonlijke kringen! Praat er over met familie, vrienden,
                  docenten en andere vertrouwenspersonen! Uiteraard staan zoals
                  altijd ook de medewerkers van uw jeugdhuis altijd open voor
                  een babbel en kan je anoniem je verhaal doen of raad vragen op
                  aanspreekpunt@denuitvlucht.com!
                </li>
                <li class="ma-1">
                  Internet. Er zijn tal van interessante websites waar u terecht
                  kan voor raad, ondersteuning en hulp (eenzamejongeren.com,
                  awel.be , tegek.be, …)
                </li>
                <li class="ma-1">
                  Voor diepgaandere hulp staan er altijd psychologen klaar om u
                  te helpen en te ondersteunen (neem een kijkje op
                  vind-een-psycholoog.be en tejo.be)
                </li>
              </ul>
            </div>
            <br />
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn
              color="buttontext"
              class="bg-buttonbg"
              @click="reveal = false"
            >
              Sluiten
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
    <v-card class="mx-auto bg-card text-secondary mb-5" max-width="1000">
      <v-card-text>
        <p class="text-h6 mb-3 text-secondary">Cyberpesten</p>

        <div class="text-secondary">Tealc D'haene - 16/05/2022</div>
      </v-card-text>
      <v-img
        src="images/blog/cyberpesten.jpg"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        max-height="250px"
        cover
      >
      </v-img>
      <v-card-actions v-bind:hidden="reveal1">
        <v-btn color="buttontext" class="bg-buttonbg" @click="reveal1 = true">
          Lees Meer
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card
          class="
            mx-auto
            bg-card
            text-secondary
            transition-fast-in-fast-out
            v-card--reveal
          "
          max-width="1000"
          v-if="reveal1"
          style="height: 100%"
        >
          <v-card-text>
            <div class="text-secondary">
              De Belgische website cyberpesten.be omschrijft cyberpesten als het
              fenomeen dat plaatsvindt wanneer iemand gemene, bedreigende of
              vernederende berichten stuurt of online plaatst. Een verschil met
              andere vormen van pesten is dat het voor de daders niet moeilijk
              is om anoniem te blijven, wat het er natuurlijk niet makkelijker
              op maakt om het pesten aan te pakken. Ook kan het pestgedrag zich
              veel sneller verspreiden. Het slachtoffer voelt zich vaak alsof
              hij het pestgedrag niet kan ontlopen, het gedrag stopt namelijk
              niet samen met de school- of werkuren. Belangrijk om aan te halen
              is wel dat als het cyberpesten gebeurd door een volwassene
              tegenover een minderjarige, dat we dan eerder op het terrein van
              stalking terechtkomen (cyberpesten.be). Alle vormen van
              cyberpesten waarbij seksuele uitbuiting, ongewenst seksueel gedrag
              of de verspreiding (zonder toestemming) van seksuele beelden van
              het slachtoffer zullen besproken worden in een volgend stukje
              (seksuele exploitatie door middel van technologie).
            </div>
            <br />
            <p class="text-h6 mb-3 text-secondary">
              Wat als ik het slachtoffer ben?
            </p>
            <div class="text-secondary">
              Negeer in eerste instantie alle beledigende berichten en
              opmerkingen, zo geraakt de fun er voor de dader er snel van af.
              Verzamel voor de rest bewijsmateriaal (zie: screenshots en
              opnamen) van alle berichten, video’s, posts, … Blokkeer en
              rapporteer de dader(s). Als het pesten niet stopt of al ernstige
              vormen aanneemt zoek dan hulp. Waar? Dat vind je hieronder.
            </div>
            <br />
            <p class="text-h6 mb-3 text-secondary">Wat als ik getuige ben?</p>
            <div class="text-secondary">
              Neem contact op met het slachtoffer en laat hem/haar weten dat je
              het gedrag niet goedkeurt en bied emotionele steun. Hoe meer
              getuigen het gedrag verachten, hoe meer kans dat de dader het
              gedrag zal stopzetten. Ook jij als getuige kan uiteraard
              rapporteren, blokkeren en bewijs verzamelen. Ik de dader ben? Soms
              gebeurd het dat daders hun fout inzien en spijt hebben van hun
              daden en gedrag. Het is namelijk nooit te laat om te stoppen en
              alles te verwijderen. Ook een verontschuldiging komt beter te laat
              dan nooit.
            </div>
            <br />
            <p class="text-h6 mb-3 text-secondary">Wat als de dader ben?</p>
            <div class="text-secondary">
              Soms gebeurd het dat daders hun fout inzien en spijt hebben van
              hun daden en gedrag. Het is namelijk nooit te laat om te stoppen
              en alles te verwijderen. Ook een verontschuldiging komt beter te
              laat dan nooit.
            </div>
            <br />
            <p class="text-h6 mb-3 text-secondary">Waar kan ik terecht?</p>
            <div class="text-secondary">
              Dan zijn er verschillende plaatsen waar er hulp en informatie kan
              worden aangeboden. Hierbij een overzicht van enkele opties:
              <ul class="ml-4 text-secondary">
                <li class="ma-1">
                  Uw persoonlijke kringen! Praat er over met familie, vrienden,
                  docenten en andere vertrouwenspersonen! Uiteraard staan zoals
                  altijd ook de medewerkers van uw jeugdhuis altijd open voor
                  een babbel en kan je anoniem je verhaal doen of raad vragen op
                  aanspreekpunt@denuitvlucht.com!
                </li>
                <li class="ma-1">
                  Internet. Er zijn tal van interessante websites waar u terecht
                  kan voor raad, ondersteuning en hulp (wat wat, awel)
                </li>
                <li class="ma-1">
                  Voor diepgaandere hulp staan er altijd psychologen klaar om u
                  te helpen en te ondersteunen (neem een kijkje op
                  vind-een-psycholoog.be en tejo.be)
                </li>
                <li class="ma-1">
                  Verder kan je ook contact opnemen bij het CLB, het JAC of de
                  hulplijn voor geweld (1712).
                </li>
                <li class="ma-1">
                  In extreme gevallen van cyberpesten raden wij ook aan om
                  onmiddellijk de politie te contacteren.
                </li>
              </ul>
            </div>
            <br />
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn
              color="buttontext"
              class="bg-buttonbg"
              @click="reveal1 = false"
            >
              Sluiten
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
    <v-card class="mx-auto bg-card text-secondary mb-5" max-width="1000">
      <v-card-text>
        <p class="text-h6 mb-3 text-secondary">
          Seksueel grensoverschrijdend gedrag
        </p>

        <div class="text-secondary">Tealc D'haene - 16/05/2022</div>
      </v-card-text>
      <v-img
        src="images/blog/grensoverschrijdend.jpg"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        max-height="250px"
        cover
      ></v-img>
      <v-card-actions v-bind:hidden="reveal3">
        <v-btn color="buttontext" class="bg-buttonbg" @click="reveal3 = true">
          Lees Meer
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card
          class="
            mx-auto
            bg-card
            text-secondary
            transition-fast-in-fast-out
            v-card--reveal3
          "
          max-width="1000"
          v-if="reveal3"
          style="height: 100%"
        >
          <v-card-text>
            <div class="text-secondary">
              Het is elke vorm van verbaal, niet-verbaal of lichamelijk gedrag
              dat niet beantwoordt aan de kenmerken van gezond seksueel gedrag
              (onderwijs.vlaanderen.be, z.d.). Als we spreken over de kenmerken
              van wat dit gezond seksueel gedrag precies inhoudt denken we aan:
              ·Toestemming / Gelijkwaardigheid / Vrijwilligheid / Zelfrespect /
              Passend bij de context/ Passend bij de ontwikkelingsfase van de
              betrokkenen Vanaf er aan 1 van deze kenmerken niet voldaan wordt
              spreken we al van seksueel grensoverschrijdend gedrag
              (allesoverseks.be, z.d.).
            </div>
            <br />
            <p class="text-h6 mb-3 text-secondary">
              Welke vormen van seksueel grensoverschrijdend gedrag bestaan er?
            </p>
            <div class="text-secondary">
              Niet al het gedrag is hetzelfde. Er bestaan lichtere en meer
              ernstige vormen. Afhankelijkheid en macht spelen vaak een grote
              rol als we kijken naar hoe ernstig de feiten zijn.
              (onderwijs.vlaanderen.be, z.d.). Volgens Sensoa spreken we van een
              ernstig geval als aan volgende voorwaarden word voldaan:
              <ul class="ml-4 text-secondary">
                <li class="ma-1">
                  Er is eerst en vooral aan minstens 1 van bovenstaande
                  kenmerken niet voldaan
                </li>
                <li class="ma-1">Er is sprake van dwang</li>
                <li class="ma-1">Het verschil in leeftijd of macht is groot</li>
                <li class="ma-1">Het verschil in leeftijd of macht is groot</li>
                <li class="ma-1">Er is geen toestemming tot seks</li>
              </ul>
            </div>
            <br />
            <p class="text-h6 mb-3 text-secondary">Waar kan ik terecht?</p>
            <div class="text-secondary">
              Ben je slachtoffer of getuige van seksueel grensoverschrijdend
              gedrag? Of heb je simpelweg meer vragen over het onderwerp? Dan
              zijn er verschillende plaatsen waar er hulp en informatie kan
              worden aangeboden. Hierbij een overzicht van enkele opties:

              <ul class="ml-4 text-secondary">
                <li class="ma-1">
                  Uw persoonlijke kringen! Praat er over met familie, vrienden,
                  docenten en andere vertrouwenspersonen! Uiteraard staan zoals
                  altijd ook de medewerkers van uw jeugdhuis altijd open voor
                  een babbel en kan je anoniem je verhaal doen of raad vragen op
                  aanspreekpunt@denuitvlucht.com!
                </li>
                <li class="ma-1">
                  Internet. Er zijn tal van interessante websites waar u terecht
                  kan voor raad, ondersteuning en hulp. Allesoverseks.be (ook
                  gekend als sensoa) is een uitstekend startpunt!
                </li>
                <li class="ma-1">
                  Voor diepgaandere hulp staan er altijd psychologen en
                  seksuologen klaar om u te helpen en te ondersteunen. Op het
                  nummer 0800 01 88 staat ook het Centrum Seksueel Geweld klaar
                  voor u te ondersteunen.
                </li>
              </ul>
            </div>
            <br />
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn
              color="buttontext"
              class="bg-buttonbg"
              @click="reveal3 = false"
            >
              Sluiten
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    reveal: false,
    reveal1: false,
    reveal3: false,
  }),
};
</script>


<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  width: 100%;
}
</style>