
<template>
  <!-- Content here -->
  <v-container fluid>
    <!-- Over Ons Card -->
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        color="card"
        class="mx-auto mt-1 mb-5"
        max-width="1000"
        :elevation="isHovering ? 12 : 2"
        v-bind="props"
      >
        <v-card-text>
          <p class="text-h6 mb-3 text-secondary">Pagina bestaat niet!</p>

          <div class="text-secondary">Oeps, hier valt niks te vinden!</div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            @click="$router.push('/')"
            color="buttontext"
            class="bg-buttonbg"
          >
            Terug naar de beginpagina
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
