<template>
  <div class="template-action">
    <el-link :underline="false" @click="openEditor" class="edit-btn" icon="el-icon-edit">Edit</el-link>
    <el-link :underline="false" @click="openWebsite" class="check-btn" icon="el-icon-view">Check</el-link>
  </div>
</template>

<script>
export default {
  props: {
    wapId: String
  },
  methods: {
    openEditor() {
      this.$router.push(`/editor/${this.wapId}`).catch(err => {});
      // this.$router.push(`/editor/${wapId}`);
    },
    openWebsite() {
      this.$router.push(`/website/${this.wapId}`).catch(err => {});
    }
  }
};
</script>
