<script lang="ts" setup>
definePageMeta({
  layout: 'main',
})
</script>

<template>
  <div>
    <div class="row items-center justify-center bg-cover">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-list bordered class="rounded-borders bg-red-2">
          <q-expansion-item>
            <template v-slot:header>
              <q-item-section avatar>
                <q-avatar icon="language" color="secondary" text-color="white" />
              </q-item-section>

              <q-item-section> Languages </q-item-section>
            </template>

            <q-card>
              <q-card-section>
                <q-list bordered class="rounded-borders">
                  <q-item>
                    <q-item-section>English</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">5/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>Indonesian</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">8/10</q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item>
            <template v-slot:header>
              <q-item-section avatar>
                <q-avatar icon="code" color="secondary" text-color="white" />
              </q-item-section>

              <q-item-section> Programming Language </q-item-section>
            </template>

            <q-card>
              <q-card-section>
                <q-list bordered class="rounded-borders">
                  <q-item>
                    <q-item-section>C++</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">4/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>JAVA</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">2/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>PYTHON </q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">3/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>GO </q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">4/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>HTML </q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">9/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>CSS </q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">8/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>JAVASCRIPT</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">9/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>TYPESCRIPT</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">9/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>PHP</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">7/10</q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item>
            <template v-slot:header>
              <q-item-section avatar>
                <q-avatar icon="css" color="secondary" text-color="white" />
              </q-item-section>

              <q-item-section> CSS FRAMEWORK / UI COMPONENT </q-item-section>
            </template>

            <q-card>
              <q-card-section>
                <q-list bordered class="rounded-borders">
                  <q-item>
                    <q-item-section>TAILWIND</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">9/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>BOOTSTRAP</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">9/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>MATERIALIZE</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">7/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>BULMA</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">6/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>QUASAR</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">9/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>VUETIFY</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">8/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>JAVASCRIPT</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">9/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>ANT DESIGN</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">4/10</q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item>
            <template v-slot:header>
              <q-item-section avatar>
                <q-avatar icon="storefront" color="secondary" text-color="white" />
              </q-item-section>

              <q-item-section> NODEJS BACKEND FRAMEWORK </q-item-section>
            </template>

            <q-card>
              <q-card-section>
                <q-list bordered class="rounded-borders">
                  <q-item>
                    <q-item-section>NESTJS</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">9/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>EXPRESSJS</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">9/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>KOAJS</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">7/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>HAPIJS</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">6/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>ADONISJS</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">8/10</q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item>
            <template v-slot:header>
              <q-item-section avatar>
                <q-avatar icon="storefront" color="secondary" text-color="white" />
              </q-item-section>

              <q-item-section> NODEJS FRONTEND FRAMEWORK </q-item-section>
            </template>

            <q-card>
              <q-card-section>
                <q-list bordered class="rounded-borders">
                  <q-item>
                    <q-item-section>VUEJS</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">9/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>REACTJS</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">5/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>ANGGULARJS</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">7/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>REACT NATIVE</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">4/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>NATIVE SCRIPT(VUEJS)</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">8/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>VUETIFY</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">8/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>JAVASCRIPT</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">9/10</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item>
                    <q-item-section>ANT DESIGN</q-item-section>
                    <q-item-section side>
                      <div class="row items-center">
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                        <q-icon name="star" color="red" size="17" />
                      </div>
                    </q-item-section>
                    <q-item-section side class="text-caption">4/10</q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
