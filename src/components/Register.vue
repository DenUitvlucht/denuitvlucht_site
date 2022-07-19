<template :key="page">
  <v-container fluid>
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        v-if="registered === 'false'"
        color="card"
        class="mx-auto mt-1 mb-5"
        max-width="1000"
        :elevation="isHovering ? 12 : 2"
        v-bind="props"
      >
        <v-card-text>
          <p class="text-h6 mb-3 text-secondary">
            Verifieer jezelf en stem voor je favoriete DJ!
          </p>
          <v-img
            src="images/events/djcontest.png"
            class="white--text align-end mb-5"
            cover
          ></v-img>
          <div class="text-secondary">
            Vul hieronder uw e-mailadres in. Binnen enkele seconden ontvang je
            een verificatiemail en kan je beginnen met stemmen!
          </div>
          <br />
          <v-form v-model="valid">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <div class="text-secondary">
              Ga je akkoord met
              <a @click="$router.push('/privacy')" class="font-weight-black">
                het privacybeleid van Den Uitvlucht
              </a>
              ?
            </div>
            <v-checkbox
              v-model="checkbox"
              :rules="[
                (v) => !!v || 'Je moet akkoord gaan om verder te kunnen!',
              ]"
              required
            >
              <template v-slot:label>
                <div class="text-secondary">Ik ga akkoord</div>
              </template>
            </v-checkbox>
            <v-btn
              @click="
                (emailToShow = email),
                  (registered = 'true'),
                  register(),
                  (dialog2 = true)
              "
              :disabled="!valid"
              color="buttontext"
              class="bg-buttonbg"
            >
              <v-icon size="20" class="" start icon="mdi-email"></v-icon>
              Stuur verificatiemail
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-hover>
    <v-hover v-slot="{ isHovering, props }">
      <v-dialog v-model="dialog2">
        <v-card color="card">
          <v-card-text>
            <div class="text-secondary">
              Er is een verificatie e-mail verzonden naar:
              <span class="font-weight-black">{{ emailToShow }}</span
              >.
            </div>
            <div class="text-secondary mb-3">
              Hieronder een voorbeeld van de e-mail die je zal krijgen:
            </div>
            <v-img
              src="images/events/emailconfirm/example.png"
              class="white--text align-end mb-5"
              cover
            ></v-img>
          </v-card-text>
          <v-card-actions>
            <v-btn color="buttontext" block @click="dialog2 = false"
              >Sluiten</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-card
        v-if="registered === 'true'"
        color="card"
        class="mx-auto mt-1 mb-5"
        max-width="1000"
        :elevation="isHovering ? 12 : 2"
        v-bind="props"
      >
        <v-card-text v-if="verified === 'false'">
          <p class="text-h6 mb-3 text-secondary">
            Verifieer jezelf en stem voor je favoriete DJ!
          </p>

          <div class="text-secondary">
            <div class="text-secondary">
              Er is een verificatie e-mail verzonden naar:
              <span class="font-weight-black">{{ emailToShow }}</span
              >.
            </div>
            <div class="text-secondary">
              <span class="font-weight-black">Check zeker je spamfolder!</span>
            </div>
            <br />
            <div class="text-secondary">
              Je krijgt van ons een e-mail met daarin een verificatielink
            </div>
            <div class="text-secondary">
              Klik op de link en krijg toegang tot de stemming!
            </div>
            <br />
            <v-chip class="ma-2" color="error" variant="outlined">
              <v-icon start icon="mdi-alert-circle"></v-icon>
              <p class="mr-2 font-weight-black">Wachten op verificatie...</p>

              <v-progress-circular
                :size="20"
                :width="2"
                indeterminate
                color="error"
              ></v-progress-circular>
            </v-chip>
          </div>
          <br />
          <v-btn
            @click="resetRegister(), (email = ''), (checkbox = false)"
            color="buttontext"
            class="bg-buttonbg"
          >
            TERUG
          </v-btn>
        </v-card-text>
        <v-card-text v-if="verified === 'true'" :key="test">
          <p class="text-h6 mb-3 text-secondary">Stem voor je favoriete DJ!</p>
          <div class="text-secondary">
            <v-chip class="mb-3" color="success" variant="outlined">
              <v-icon start icon="mdi-check-circle"></v-icon>
              <p class="mr-2">Uw account is <span>geverifieerd!</span></p>
            </v-chip>
            <br />
            <v-chip
              v-if="voted === 'true'"
              class="mb-2"
              color="success"
              variant="outlined"
            >
              <v-icon start icon="mdi-vote"></v-icon>
              <p class="mr-2">
                Laatst gestemd op:
                <span class="font-weight-black">{{ lastVote }}</span>
              </p>
            </v-chip>

            <v-divider class="mb-3 mt-3"></v-divider>
            <div class="text-secondary">Tijd om je stem uit te brengen!</div>
            <div class="text-secondary">
              <span class="font-weight-black"
                >Opnieuw stemmen is toegelaten maar enkel je laatste stem telt
                mee</span
              >
            </div>
          </div>
          <v-divider class="mb-3 mt-3"></v-divider>
          <v-radio-group v-model="selectedOptionId">
            <v-radio value="MAXIM">
              <template v-slot:label>
                <div>
                  <strong class="success--text">MAXIM</strong>
                  &ensp; | 20u45 - 21u30 |
                </div>
              </template>
            </v-radio>
            <v-radio value="O-Beats">
              <template v-slot:label>
                <div>
                  <strong class="success--text">O-Beats</strong>
                  &ensp; | 21u30 - 22u15 |
                </div>
              </template>
            </v-radio>
            <v-radio value="Verloren zoon">
              <template v-slot:label>
                <div>
                  <strong class="success--text">Verloren zoon</strong>
                  &ensp; | 22u15 - 23u00 |
                </div>
              </template>
            </v-radio>
            <v-radio value="Miles b2b Tizzix">
              <template v-slot:label>
                <div>
                  <strong class="success--text">Miles b2b Tizzix</strong>
                  &ensp; | 23u00 - 23u45 |
                </div>
              </template>
            </v-radio>
             <v-radio value="FCKARTIST">
              <template v-slot:label>
                <div>
                  <strong class="success--text">FCKARTIST</strong>
                  &ensp; | 23u45 - 00u30 |
                </div>
              </template>
            </v-radio>
          </v-radio-group>
          <div class="mb-3">
            <v-btn @click="resetAll()" color="black" class="bg-buttonbg  mr-3">
              AFMELDEN
            </v-btn>
            <v-btn
              @click="
                safeVote(selectedOptionId),
                  (dialog = true),
                  (lastVote = selectedOptionId)
              "
              color="buttontext"
              class="bg-buttonbg"
            >
              STEM
            </v-btn>
          </div>

          <br />
        </v-card-text>
      </v-card>
      <v-dialog v-model="dialog">
        <v-card color="card">
          <v-card-text>
            <div class="text-secondary">Bedankt om te stemmen op:</div>
            <div class="text-secondary">
              <span class="font-weight-black">{{ selectedOptionId }}</span>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="buttontext" block @click="dialog = false"
              >Sluiten</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-hover>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import { getApp } from "firebase/app";
import {
  getDatabase,
  onValue,
  set,
  ref as firebaseref,
} from "firebase/database";
import {
  verified,
  registered,
  voted,
  defaultValues,
  verify,
  vote,
  emailToShow,
  lastVote,
  resetRegister,
  resetAll,
} from "../composables/poll.ts";

export default {
  setup() {
    const router = useRouter();
    const auth = getAuth();
    const app = getApp();
    const database = getDatabase(app);
    const isLoading = ref(false);
    const email = ref("");
    const password = ref("");
    const errMsg = ref("");
    const actionCodeSettings = {
      //moet nog aangepast worden!
      url: "http://localhost:4000/djcontest",
      handleCodeInApp: true,
    };

    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt(
          "Oeps, je opent deze pagina waarschijnlijk in de verkeerde browser, of je gebruikt Safari! Geen probleem, vul hieronder je e-mailadres en we sturen je direct naar de stempagina."
        );
        window.localStorage.setItem("emailForSignIn", email);
        window.localStorage.setItem("registered", true);
        router.go();
      } else {
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            //window.localStorage.removeItem('emailForSignIn')

            verify();
            //test += 1;
          })
          .catch();
        router.replace("/djcontest");
      }
    }

    const safeVote = (voteValue) => {
      if (voteValue) {
        set(firebaseref(database, "users/" + auth.currentUser.uid), {
          vote: voteValue,
        });
        vote(voteValue);
      } else {
        alert("selecteer een favoriete dj!");
      }
    };

    const register = async () => {
      isLoading.value = true;
      await sendSignInLinkToEmail(auth, email.value, actionCodeSettings)
        .then((user) => {
          window.localStorage.setItem("emailForSignIn", email.value);
          window.localStorage.setItem("registered", true);
          window.localStorage.setItem("verified", false);
        })
        .catch((error) => {
          isLoading.value = false;
          switch (error.code) {
            case "auth/invalid-email":
              errMsg.value = "The email address is badly formatted.";
              break;
            case "auth/email-already-exists":
              errMsg.value =
                "The email address is already in use by another account.";
              break;
            default:
              errMsg.value = "There was a problem creating the account.";
              break;
          }
        });
    };

    return {
      router,
      auth,
      isLoading,
      email,
      password,
      errMsg,
      actionCodeSettings,
      useRouter,
      getAuth,
      sendSignInLinkToEmail,
      register,
      safeVote,
      app,
      database,
      registered,
      verified,
      voted,
      resetRegister,
      resetAll,
    };
  },
  data: () => ({
    dialog2: false,
    test: 0,
    page: 0,
    dialog: false,
    lastVote: lastVote,
    emailToShow: emailToShow,
    selectedOptionId: null,
    verified: verified,
    registered: registered,
    voted: voted,
    checkbox: false,
    valid: false,
    emailRules: [
      (v) => !!v || "Het e-mail vak is verplicht!",
      (v) => /.+@.+/.test(v) || "Deze e-mail is niet geldig!",
    ],
  }),
  mounted() {},
};
</script>