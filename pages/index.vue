<script lang="ts" setup>
const titleContent = useState<string>('titleContent')
</script>

<template>
  <div class="row items-center justify-center bg-cover" style="height: 100vh">
    <div class="col-lg-4 col-md-5 col-sm-8 col-xs-12">
      <q-card flat class="bg-transparent">
        <q-card-section align="center">
          <q-avatar size="200px">
            <q-img src="/tejo.jpeg" />
          </q-avatar>
        </q-card-section>
        <q-card-section class="text-h5 text-center"> Welcome to My CV & Portfolio Website </q-card-section>
        <q-card-actions align="center">
          <q-btn
            label="Get to Know Me"
            outline
            icon="double_arrow"
            @click="
              () => {
                titleContent = 'HOME'
                $router.push('/home')
              }
            "
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<style scoped>
.bg-cover {
  background: linear-gradient(135deg, #e6e6e6 80%, #dcdcdc);
}
</style>
