<template>
  <form class="app-form flex flex-column">
    <label class="flex flex-column">
      <!-- Enter Your Name -->
      <input type="text" placeholder="Name" />
    </label>
    <label class="flex flex-column">
      <!-- Enter Your Email * -->
      <input type="email" placeholder="Email" />
    </label>
    <label class="flex flex-column">
      <!-- Enter Your Phone -->
      <input type="phone" placeholder="Phone" />
    </label>
    <label class="flex flex-column">
      <!-- Enter Your Subject -->
      <input type="text" placeholder="Subject" />
    </label>
    <label class="flex flex-column">
      <!-- Message -->
      <textarea cols="40" rows="5" placeholder="Type your Message here..."></textarea>
    </label>
    <button>Submit</button>
  </form>
</template>

<script>
export default {

}
</script>

<style>
</style>