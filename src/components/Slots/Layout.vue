<template>
    <div>
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="section">
            <slot></slot>
        </div>
        <div class="footer">
            <slot name="footer" :fc="footerContent"></slot>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      remark: "尾部",
    }
  },
  computed: {
    footerContent() {
        return this.remark
    }
  }
}
</script>

<style scoped>
.header {
  background-color: rgb(252, 175, 175);
}
.body {
  display: flex;
  background-color: rgb(144, 250, 134);
  min-height: 100px;
  align-items: center;
  justify-content: center;
}
.footer {
  background-color: rgb(114, 116, 255);
}
</style>