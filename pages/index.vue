<template>
  <q-page class="flex flex-center">
    <div class="content-container q-pa-md text-center">
      <h1 class="text-h2 q-mb-md">Welcome to Tapestry</h1>
      <q-img
        src="/api/placeholder/300/200?text=Tapestry"
        alt="Tapestry Logo"
        class="q-mb-lg"
      />
      <p class="text-body1 q-mb-lg">
        Connect with people watching the same content as you!
      </p>
      <div class="feature-list q-mb-xl">
        <q-list>
          <q-item>
            <q-item-section avatar>
              <q-icon name="extension" color="primary" size="sm" />
            </q-item-section>
            <q-item-section>Browser extension to track your watching habits</q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-icon name="map" color="primary" size="sm" />
            </q-item-section>
            <q-item-section>Interactive map to find nearby users</q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-icon name="chat" color="primary" size="sm" />
            </q-item-section>
            <q-item-section>One-time messages to say hello</q-item-section>
          </q-item>
        </q-list>
      </div>
      <q-btn color="primary" label="Get Started" size="lg" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'

const $q = useQuasar()
</script>

<style scoped>
.content-container {
  max-width: 600px;
}

h1 {
  color: var(--q-primary);
}

.feature-list {
  text-align: left;
}
</style>