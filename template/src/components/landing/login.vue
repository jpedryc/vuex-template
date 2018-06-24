<template>
  <v-layout row wrap>
    <v-flex xs12>

      <!-- FOR DEMONSTRATION PURPOSES ONLY -->
      <v-layout row wrap class="mt-5">
        <v-flex xs6 offset-xs3 text-xs-center>
          <v-card class="pa-4 mt-5 text-xs-center">

            <!-- LOGO -->
            <v-layout row wrap>
              <v-flex xs12 text-xs-center>
                <img src="../../assets/younglions.png" width="150" alt="younglions"/>
              </v-flex>
            </v-layout>

            <!-- LOGIN FORM -->
            <v-layout row wrap class="mt-3">
              <v-flex xs6 offset-xs3>
                <v-form v-model="valid">
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    :counter="10"
                    label="Name"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-form>
              </v-flex>
            </v-layout>

            <!-- SUBMIT ACTIONS -->
            <v-layout row wrap>
              <v-flex xs4 offset-xs2 text-xs-center>
                <v-btn color="primary">Login</v-btn>
              </v-flex>
              <v-flex xs4 text-xs-center class="pt-3">
                <span class="success--text body-2">New? Create new account!</span>
              </v-flex>
            </v-layout>

          </v-card>
        </v-flex>
      </v-layout>

    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    })
  }
</script>
