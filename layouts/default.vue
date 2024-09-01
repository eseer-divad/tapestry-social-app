<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>Tapestry</q-toolbar-title>
        <q-btn flat label="Home" to="/" />
        <q-btn flat label="Map" to="/map" />
        <q-btn flat label="Messages" to="/messages" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <slot />
    </q-page-container>
  </q-layout>
</template>