<template>
  <div class="edit-text flex flex-column">
    <div class="color-picker">
      <div v-if="!currCmp.children" class="flex space-between align-center">
        <p>Font Color:</p>
        <el-color-picker
          v-model="cmp.style.color"
          @input="update"
          show-alpha
          :predefine="predefineColors"
        ></el-color-picker>
      </div>

      <div v-if="!currCmp.social" class="flex space-between align-center">
        <p>Background Color:</p>
        <el-color-picker
          v-model="cmp.style.backgroundColor"
          @input="update"
          show-alpha
          :predefine="predefineColors"
        ></el-color-picker>
      </div>
    </div>

    <div>
      <p>Text Size:</p>
      <div class="block">
        <el-slider v-model="fontSize" @input="setTextSize" show-input></el-slider>
      </div>

      <hr class="divider" />

      <p>Letter Spacing:</p>
      <div class="block">
        <el-slider v-model="letterSpacing" @input="setLetterSpacing" show-input></el-slider>
      </div>
      <hr class="divider" />
    </div>

    <div class="flex space-between align-center">
      <p>Align:</p>
      <v-select :options="['left', 'center', 'right']" v-model="cmp.style.textAlign"></v-select>
    </div>

    <hr class="divider" />

    <div class="flex space-between align-center">
      <p>Font:</p>
      <v-select :options="fontFamily" v-model="cmp.style.fontFamily"></v-select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currCmp: Object
  },
  data() {
    return {
      cmp: JSON.parse(JSON.stringify(this.currCmp)),
      fontSize: parseInt(this.currCmp.style.fontSize, 10),
      letterSpacing: parseInt(this.currCmp.style.letterSpacing, 10),

      fontFamily: [
        "Lato",
        "AlegreyaSans",
        "Lobster",
        "Poppins",
        "PoppinsBold",
        "Raleway",
        "WorkSansExtraLight",
        "WorkSansSemiBold"
      ],
      predefineColors: [
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
        "rgba(255, 69, 0, 0.68)",
        "rgb(255, 120, 0)",
        "hsv(51, 100, 98)",
        "hsva(120, 40, 94, 0.5)",
        "hsl(181, 100%, 37%)",
        "hsla(209, 100%, 56%, 0.73)",
        "#c7158577"
      ]
    };
  },
  methods: {
    setTextSize() {
      if (this.fontSize) {
        this.cmp.style.fontSize = this.fontSize + "px";
        this.update();
      }
    },
    setLetterSpacing() {
      this.cmp.style.letterSpacing = this.letterSpacing + "px";
      this.update();
    },
    update() {
      console.log("update TEXTEDIT");
      this.$emit("updateCmp", this.cmp);
    }
  },
  watch: {
    currCmp() {
      this.cmp = JSON.parse(JSON.stringify(this.currCmp));
      this.fontSize = parseInt(this.currCmp.style.fontSize, 10);
      this.letterSpacing = parseInt(this.currCmp.style.letterSpacing, 10);
    }
  }
};
</script>