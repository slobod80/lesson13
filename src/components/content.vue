<template lang ="pug">
.wrapper

</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import {Itask} from "./menu-components/types/task";

@Component

export default class Content extends Vue {}
</script>

<style>

.main {
  display: block;
  padding-top: 25px;
  width: 100%;
  height: 100vh;
  background-color: #EAEAEA;  
}

.in_main {
  width: 730px; 
  margin: auto;
  background-color: #ffffff;
  border-radius: 8px; 
}

@media (max-width: 1024px)
{
.in_main {
  width: 500px; 
  margin: auto;
  background-color: #ffffff;
  border-radius: 8px; 
}
}
</style>