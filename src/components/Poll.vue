
<template>
  <!-- Content here -->
  <v-container fluid>
    <!-- Over Ons Card -->
    <v-hover v-slot='{ isHovering, props }'>
      <v-card color='card' class='mx-auto mt-1 mb-5' max-width='1000' :elevation='isHovering ? 12 : 2' v-bind='props'>
        <v-card-text>
          <p class='text-h6 mb-3 text-secondary'>Welkom, breng hier je stem uit op je favo dj</p>
          <v-radio-group v-model="selectedOptionId">
            <v-radio label="Dj body warmer" value="Dj body warmer" />
            <v-radio label="Dj viking" value="Dj viking" />
            <v-radio label="Dj verloren zoon" value="Dj verloren zoon" />
          </v-radio-group>
          <div class="mb-3">
            <button type="submit" class="btn btn-primary" @Click="safeVote(selectedOptionId)">Submit</button>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn @click='$router.push("/")' color='buttontext' class='bg-buttonbg'>
            Terug naar de beginpagina
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </v-container>
</template>

<script>
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth'
import { getApp } from 'firebase/app'
import { getDatabase, onValue, ref, set } from 'firebase/database'

const app = getApp()
const database = getDatabase(app)
const auth = getAuth()
const starCountRef = ref(database, 'users/' + auth.currentUser.uid)

onValue(starCountRef, (snapshot) => {
  const data = snapshot.val()
})

if (isSignInWithEmailLink(auth, window.location.href)) {
  let email = window.localStorage.getItem('emailForSignIn')
  if (!email) {
    email = window.prompt('Please provide your email for confirmation')
  }
  signInWithEmailLink(auth, email, window.location.href)
    .then((result) => {
      //window.localStorage.removeItem('emailForSignIn')
    })
    .catch()
}
export default {
  methods: {
    safeVote: (voteValue) => {
      if(voteValue){
        set(ref(database, 'users/' + auth.currentUser.uid), {
        email: auth.currentUser.email,
        vote: voteValue,
      })
      }
      else{
        alert('selecteer een favoriete dj!')
      }
      
    },
  },
}
</script>
