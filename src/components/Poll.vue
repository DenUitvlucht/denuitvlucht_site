
<template>
  <!-- Content here -->
  <v-container fluid>
    <!-- Over Ons Card -->
    <v-hover v-slot='{ isHovering, props }'>
      <v-card color='card' class='mx-auto mt-1 mb-5' max-width='1000' :elevation='isHovering ? 12 : 2'
              v-bind='props'>
        <v-card-text>
          <p class='text-h6 mb-3 text-secondary'>Welkom, breng hier je stem uit op je favo dj</p>
          <v-radio-group v-model='radioGroup'>
            <v-radio label="Dj body warmer" value="Dj body warmer" />
            <v-radio label="Dj viking" value="Dj viking" />
            <v-radio label="Dj verloren zoon" value="Dj verloren zoon" />
          </v-radio-group>
          <div class="mb-3">
            <button type="submit" :disabled="isLoading" class="btn btn-primary" @click="register">Submit</button>
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

// Confirm the link is a sign-in with email link.
const auth = getAuth()
if (isSignInWithEmailLink(auth, window.location.href)) {
  // Additional state parameters can also be passed via URL.
  // This can be used to continue the user's intended action before triggering
  // the sign-in operation.
  // Get the email if available. This should be available if the user completes
  // the flow on the same device where they started it.
  let email = window.localStorage.getItem('emailForSignIn')
  console.log(email)
  if (!email) {
    // User opened the link on a different device. To prevent session fixation
    // attacks, ask the user to provide the associated email again. For example:
    email = window.prompt('Please provide your email for confirmation')
  }
  // The client SDK will parse the code from the link for you.
  signInWithEmailLink(auth, email, window.location.href)
    .then((result) => {
      console.log(result.user)
      // Clear email from storage.
      window.localStorage.removeItem('emailForSignIn')
      // You can access the new user via result.user
      // Additional user info profile not available via:
      // result.additionalUserInfo.profile == null
      // You can check if the user is new or existing:
      // result.additionalUserInfo.isNewUser
    })
    .catch()
}
</script>
