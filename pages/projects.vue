<script lang="ts" setup>
definePageMeta({
  layout: 'main',
})
</script>

<template>
  <div class="row items-center justify-center bg-cover">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <q-card flat class="bg-transparent">
        <q-card-section>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 q-pa-sm">
              <q-card>
                <q-card-section class="text-h6 bg-primary text-white">
                  <q-icon name="factory" />
                  Warehouse APP
                </q-card-section>
                <q-card-section>
                  <p>
                    I am inspired by the SAP application, and in this project, I want to create a base template for a
                    warehouse management system that can cover all the business processes related to warehouse
                    operations.
                  </p>
                </q-card-section>
              </q-card>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 q-pa-sm">
              <q-card>
                <q-card-section class="text-h6 bg-secondary text-white">
                  <q-icon name="language" />
                  Website Builder APP
                </q-card-section>
                <q-card-section>
                  <p>
                    I want to create a website builder application with the aim of simplifying the work of front-end
                    developers by allowing them to create layouts using a drag-and-drop system. Additionally, in future
                    plans, I intend to make it compatible with various front-end frameworks and UI components.
                  </p>
                </q-card-section>
              </q-card>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 q-pa-sm">
              <q-card>
                <q-card-section class="text-h6 bg-accent text-white">
                  <q-icon name="whatshot" />
                  MyNodeJs Framework
                </q-card-section>
                <q-card-section>
                  <p>
                    I am planning to create a custom Node.js full-stack framework based on my own style. My main focus
                    will be on speed and flexibility.
                  </p>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style scoped></style>
