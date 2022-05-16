
<template>
  <v-container fluid>
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        color="card"
        :elevation="isHovering ? 12 : 2"
        v-bind="props"
        class="mx-auto"
        max-width="1000"
      >
        <v-card-text>
          <p class="text-h6 mb-3 text-secondary">
            Onze dranklijst
          </p></v-card-text
        >
        <v-table class="bg-card">
          <thead>
            <tr>
              <th class="text-left">Naam</th>
              <th class="text-left">Prijs</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in bieren" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
            </tr>
          </tbody>
          <br />
          <tbody>
            <tr v-for="item in wijn" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
            </tr>
          </tbody>
          <br />
          <tbody>
            <tr v-for="item in frisdrank" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
            </tr>
          </tbody>
          <br />
          <tbody>
            <tr v-for="item in water" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-hover>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      bieren: [
        {
          name: "Bockor Blauw",
          price: "€ 1,5",
        },
        {
          name: "VanderGhinste Roodbruin",
          price: "€ 1,5",
        },
        {
          name: "Kriek Max",
          price: "€ 2,0",
        },
        {
          name: "Omer",
          price: "€ 2,5",
        },
        {
          name: "Summersby",
          price: "€ 2,5",
        },
        {
          name: "Carlsberg",
          price: "€ 2,0",
        },
        {
          name: "Chimay Blauw",
          price: "€ 2,5",
        },
        {
          name: "St. Bernardus Abt 12",
          price: "€ 2,5",
        },
        {
          name: "La Trappe Quadrupel",
          price: "€ 2,5",
        },
        {
          name: "Kasteel Rouge",
          price: "€ 2,5",
        },
        {
          name: "Westmalle Tripel",
          price: "€ 2,5",
        },
        {
          name: "Duchesse de Bourgogne",
          price: "€ 2,5",
        },
        {
          name: "Tripel LeFort",
          price: "€ 2,5",
        },
        {
          name: "Cornet",
          price: "€ 2,5",
        },
      ],
      wijn: [
        {
          name: "Witte Wijn",
          price: "€ 2,5",
        },
        {
          name: "Rosé Wijn",
          price: "€ 2,5",
        },
        {
          name: "Rode Wijn",
          price: "€ 2,5",
        },
      ],
      frisdrank: [
        {
          name: "Pepsi Cola",
          price: "€ 1,5",
        },
        {
          name: "Pepsi Max",
          price: "€ 1,5",
        },
        {
          name: "Ice Tea",
          price: "€ 1,5",
        },
        {
          name: "Limonade",
          price: "€ 1,5",
        },
        {
          name: "Gerolsteiner Lemon Light",
          price: "€ 1,5",
        },
        {
          name: "Looza Ace",
          price: "€ 1,5",
        },
        {
          name: "Rodeo",
          price: "€ 1,0",
        },
      ],
      water: [
        {
          name: "Straal Plat water",
          price: "€ 1,0",
        },
        {
          name: "Straal Bruiswater",
          price: "€ 1,0",
        },
        {
          name: "Kraantjeswater",
          price: "Gratis",
        },
      ],
    };
  },
};
</script>
