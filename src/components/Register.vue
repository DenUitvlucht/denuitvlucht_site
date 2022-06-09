<template>
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
              @click="(emailToShow = email), (registered = 'true'), register()"
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
              Er is een e-mail verzonden naar:
              <span class="font-weight-black">{{ emailToShow }}</span
              >.
            </div>
            <br />
            <div class="text-secondary">
              Je krijgt van ons een e-mail met daarin een verificatielink
            </div>
            <div class="text-secondary">
              Klink op de link en krijg toegang tot de stemming!
            </div>
            <br />
            <v-chip class="ma-2" color="error" variant="outlined">
              <v-icon start icon="mdi-alert-circle"></v-icon>
              <p class="mr-2">Wachten op verificatie...</p>

              <v-progress-circular
                :size="20"
                :width="2"
                indeterminate
                color="error"
              ></v-progress-circular>
            </v-chip>
          </div>
          <br />
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
              <p class="mr-2">Laatst gestemd op: <span class="font-weight-black">{{ lastVote }}</span></p>
            </v-chip>
            
            <v-divider class="mb-3 mt-3"></v-divider>
            <div class="text-secondary">Tijd om je stem uit te brengen!</div>
            <div class="text-secondary"><span class="font-weight-black">Opnieuw stemmen is toegelaten maar enkel je laatste stem telt mee</span></div>
          </div>
          <v-divider class="mb-3 mt-3"></v-divider>
          <v-radio-group v-model="selectedOptionId">
            <v-radio label="Dj body warmer" value="Dj Taart" />
            <v-radio label="Dj viking" value="Dj Viking" />
            <v-radio label="Dj verloren zoon" value="Dj De Verloren Zoon" />
          </v-radio-group>
          <div class="mb-3">
            <v-btn
              @click="safeVote(selectedOptionId), (dialog = true), lastVote=selectedOptionId"
              color="buttontext"
              class="bg-buttonbg"
            >
              STEM
            </v-btn>
          </div>
          <br />
        </v-card-text>
        <v-dialog v-model="dialog">
          <v-card>
            <v-card-text> 
              <div class="text-secondary">Bedankt om te stemmen op:</div>
              <div class="text-secondary"><span class="font-weight-black">{{ selectedOptionId }}</span></div>
            </v-card-text>
            
            <v-card-actions>
              <v-btn color="primary" block @click="dialog = false"
                >Sluiten</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
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
  lastVote
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

    if (auth.currentUser) {
      const starCountRef = ref(database, "users/" + auth.currentUser.uid);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
      });
    }

    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }
      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          //window.localStorage.removeItem('emailForSignIn')
          verify();
          this.test += 1;
        })
        .catch();
    }

    const safeVote = (voteValue) => {

      if (voteValue) {
        set(firebaseref(database, "users/" + auth.currentUser.uid), {
          email: auth.currentUser.email,
          vote: voteValue,
        });
        vote(voteValue);
      } else {
        alert("selecteer een favoriete dj!");
      }
    };

    const register = async () => {
      console.log("taart");
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
      
    };
  },
  data: () => ({
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
  mounted() {
    console.log(this.verified);
  },
};
</script>