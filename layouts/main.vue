<script lang="ts" setup>
const drawer = ref(true)
const titleContent = useState<string>('titleContent')
</script>

<template>
  <q-layout view="hHh Lpr lff" container style="height: 100vh">
    <!--    Beranda (Home): Halaman utama yang memberikan gambaran singkat tentang Anda dan tujuan website CV Anda.-->
    <!--    Tentang Saya (About Me): Halaman ini memberikan informasi pribadi tentang diri Anda, seperti latar belakang pendidikan, pengalaman kerja, keahlian, dan minat.-->
    <!--    Riwayat Pendidikan (Education History): Halaman ini berisi informasi tentang riwayat pendidikan Anda, termasuk gelar yang Anda peroleh, nama institusi pendidikan, tanggal, dan deskripsi singkat mengenai program atau studi yang diikuti.-->
    <!--    Pengalaman Kerja (Work Experience): Halaman ini mencakup pengalaman kerja Anda secara rinci, termasuk nama perusahaan, posisi yang diemban, tanggal kerja, tanggung jawab, dan prestasi yang dicapai.-->
    <!--    Proyek (Projects): Jika Anda memiliki proyek-proyek yang relevan dengan pekerjaan yang Anda lamar atau yang ingin Anda tampilkan, Anda dapat membuat halaman khusus untuk menunjukkan proyek-proyek tersebut beserta keterangan dan gambar.-->
    <!--    Keahlian (Skills): Halaman ini berisi daftar keahlian atau keterampilan yang Anda miliki, baik itu keterampilan teknis, bahasa pemrograman, atau keahlian lain yang relevan dengan pekerjaan yang Anda lamar.-->
    <!--    Portofolio (Portfolio): Jika Anda memiliki contoh-contoh karya atau portofolio yang dapat Anda tampilkan, Anda dapat membuat halaman ini untuk memamerkannya kepada pengunjung website Anda.-->
    <!--    Sertifikat dan Pelatihan (Certificates and Training): Jika Anda memiliki sertifikat atau pelatihan tambahan yang relevan dengan pekerjaan yang Anda lamar, Anda dapat membuat halaman ini untuk menampilkan daftar sertifikat atau pelatihan yang Anda peroleh.-->
    <!--    Kontak (Contact): Halaman ini memberikan informasi tentang cara menghubungi Anda, seperti alamat email, nomor telepon, tautan ke akun media sosial, atau formulir kontak yang dapat diisi oleh pengunjung website.-->
    <!--    Blog atau Artikel (Blog or Articles): Jika Anda memiliki minat dalam menulis atau berbagi pengetahuan, Anda dapat menyertakan halaman blog atau artikel untuk menampilkan tulisan-tulisan Anda.-->
    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400" class="bg-red-5 text-white">
      <q-scroll-area style="height: calc(100% - 200px); margin-top: 200px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item
            clickable
            v-ripple
            active-class="bg-red-7 text-white"
            :active="$route.name === 'home'"
            @click="
              () => {
                titleContent = 'HOME'
                $router.push('/home')
              }
            "
          >
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section> Home </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            active-class="bg-red-7 text-white"
            :active="$route.name === 'about'"
            @click="
              () => {
                titleContent = 'ABOUT ME'
                $router.push('/about')
              }
            "
          >
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>

            <q-item-section> About Me </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            active-class="bg-red-7 text-white"
            :active="$route.name === 'education_history'"
            @click="
              () => {
                titleContent = 'EDUCATION HISTORY'
                $router.push('/education_history')
              }
            "
          >
            <q-item-section avatar>
              <q-icon name="school" />
            </q-item-section>

            <q-item-section> Education History </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            active-class="bg-red-7 text-white"
            :active="$route.name === 'work_experience'"
            @click="
              () => {
                titleContent = 'WORK EXPERIENCE'
                $router.push('/work_experience')
              }
            "
          >
            <q-item-section avatar>
              <q-icon name="work" />
            </q-item-section>

            <q-item-section> Work Experience </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            active-class="bg-red-7 text-white"
            :active="$route.name === 'projects'"
            @click="
              () => {
                titleContent = 'PROJECTS'
                $router.push('/projects')
              }
            "
          >
            <q-item-section avatar>
              <q-icon name="code" />
            </q-item-section>

            <q-item-section> Projects </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            active-class="bg-red-7 text-white"
            :active="$route.name === 'skills'"
            @click="
              () => {
                titleContent = 'SKILLS'
                $router.push('/skills')
              }
            "
          >
            <q-item-section avatar>
              <q-icon name="psychology" />
            </q-item-section>

            <q-item-section> Skills </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            active-class="bg-red-7 text-white"
            :active="$route.name === 'portfolio'"
            @click="
              () => {
                titleContent = 'PORTFOLIO'
                $router.push('/portfolio')
              }
            "
          >
            <q-item-section avatar>
              <q-icon name="collections" />
            </q-item-section>

            <q-item-section> Portfolio </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://th.bing.com/th/id/OIP.RAxzHyiS1o97tb5J5PTzfwHaEK?pid=ImgDet&rs=1"
        style="height: 200px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="100px" class="q-mb-sm">
            <q-img src="/tejo.jpeg" />
          </q-avatar>
          <div class="text-weight-bold">Tejo Prabowo</div>
          <div>tejop1997@gmail.com</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container class="bg-cover">
      <q-page padding>
        <q-toolbar class="text-white bg-primary rounded-borders q-mb-md">
          <q-btn
            flat
            round
            dense
            icon="menu"
            @click="
              () => {
                drawer = !drawer
              }
            "
          />
          <q-toolbar-title> {{ titleContent }} </q-toolbar-title>
        </q-toolbar>
        <slot />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.bg-cover {
  background: linear-gradient(135deg, #e6e6e6 10%, #dcdcdc);
}
</style>
