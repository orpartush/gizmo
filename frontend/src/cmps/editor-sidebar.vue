<template>
  <section class="editor-sidebar flex flex-column">
    <div class="top-sidebar flex">
      <div :class="{'active-tab': !editMode}" @click="editMode = false">
        <span class="fas fa-plus"></span> Elements
      </div>
      <div :class="{'active-tab': editMode}" @click="editMode = true">
        <span class="far fa-edit"></span> Edit
      </div>
    </div>

    <edit-panel v-if="editMode" :currCmp="currCmp"></edit-panel>

    <el-collapse v-if="!editMode" v-model="activeName" accordion>
      <el-collapse-item class="collapse-item" title="Sections" name="1">
        <draggable
          :list="filteredCmps"
          :disabled="!enabled"
          :group="{ name: 'wap', pull: 'clone', put: false }"
          :sort="false"
          ghostClass="sortable-ghost"
          class="list-group flex flex-wrap space-evenly"
          @start="dragStart"
          @end="draggingEnd"
          :move="onMoveCallback"
          :clone="cloneCmp"
        >
          <div
            class="cmp-btn flex flex-column align-center justify-center"
            @click="$emit('addCmp',cmp)"
            v-for="cmp in filteredCmps"
            :key="cmp.id"
          >
            <cmp-preview :cmp="cmp"></cmp-preview>
            <!-- <div v-if="cmp.type !== 'app-youtube' && cmp.type !== 'app-map'"> -->
            <p :class="cmpType(cmp.type).class + ' fa-2x'"></p>
            <p>{{cmpType(cmp.type).name}}</p>
            <!-- </div> -->
          </div>
        </draggable>
      </el-collapse-item>
      <el-collapse-item class="collapse-item" title="Elements" name="2">
        <draggable
          :list="elements"
          :disabled="!enabled"
          :group="{ name:'wap', pull: 'clone', put: false }"
          :sort="false"
          ghostClass="sortable-ghost"
          class="list-group flex flex-wrap space-evenly"
          @start="dragStart"
          @end="draggingEnd"
          :move="onMoveCallback"
          :clone="cloneCmp"
        >
          <div
            class="cmp-btn flex flex-column align-center justify-center"
            @click="$emit('addCmp',element)"
            v-for="element in elements"
            :key="element.id"
          >
            <p :class="cmpType(element.type).class + ' fa-2x'"></p>
            <p>{{cmpType(element.type).name}}</p>
          </div>
        </draggable>
      </el-collapse-item>
      <el-collapse-item class="collapse-item" title="Widget" name="3">
        <draggable
          :list="widgets"
          :disabled="!enabled"
          :group="{ name: 'wap', pull: 'clone', put: false }"
          :sort="false"
          class="list-group flex flex-wrap space-evenly"
          @start="dragStart"
          @end="draggingEnd"
          :clone="cloneCmp"
          :move="checkMove"
        >
          <div
            class="cmp-btn flex flex-column align-center justify-center"
            @click="$emit('addCmp',cmp)"
            v-for="widget in widgets"
            :key="widget.id"
          >
            <div v-if="widget.type === 'app-youtube' || widget.type === 'app-map'">
              <p :class="widgetsCmps(widget.type).class + ' fa-2x'"></p>
              <p>{{widgetsCmps(widget.type).name}}</p>
            </div>
          </div>
        </draggable>
      </el-collapse-item>
    </el-collapse>

    <el-dialog :title="websiteName" :visible.sync="centerDialogVisible" width="30%" center>
      <a :href="url">Click here to visit your website!</a>
      <span slot="footer" class="dialog-footer">
        <social-sharing></social-sharing>
        <el-button type="primary" @click="centerDialogVisible = false">Confirm</el-button>
      </span>
    </el-dialog>

    <div class="save-btns flex justify-center align-center">
      <button @click.stop="saveWap">Publish</button>
    </div>
  </section>
</template>

<script>
import { wapService } from "../services/wap.service.js";
import { eventBus } from "../services/eventBus.service.js";
import editPanel from "../cmps/edit-panel.vue";
import cmpPreview from "./cmp-preview.vue";
import socialSharing from "./social-sharing.vue";

export default {
  props: {
    cmps: Array
  },
  data() {
    return {
      url: '',
      websiteName: '',
      centerDialogVisible: false,
      enabled: true,
      dragging: false,
      activeName: 1,
      items: [
        {
          id: 1,
          active: false,
          title: "Sections",
          type: "selection-cmps",
          cmps: ""
        },
        {
          id: 2,
          active: false,
          title: "Elements",
          cmps: {}
        },
        {
          id: 3,
          active: false,
          title: "Widgets",
          cmps: {}
        }
      ],
      editMode: false
    };
  },
  created() {
    eventBus.$on("edit", cmp => {
      this.editMode = true;
    });
    this.items[0].cmps = this.cmps;
  },
  computed: {
    currCmp() {
      return this.$store.getters.selectedCmp;
    },
    //         Text,
    // Card,
    // Button,
    // Article,
    // img
    elements() {
      const elementCmps = this.cmps.filter(cmp => {
        return (
          cmp.type === "app-card" ||
          cmp.type === "app-article" ||
          cmp.type === "img" ||
          cmp.type === "p" ||
          cmp.type === "layout-3-columns" ||
          cmp.type === "layout-2-columns" ||
          cmp.type === "app-header" ||
          cmp.type === 'button'
        );
      });
      // console.log('elemeents', elementCmps);

      return elementCmps;
    },
    filteredCmps() {
      return this.cmps.filter(
        cmp =>
          cmp.type !== "app-youtube" &&
          cmp.type !== "app-map" &&
          cmp.type !== "p" &&
          cmp.type !== "img"
      );
    },
    widgets() {
      return this.cmps.filter(
        cmp => cmp.type === "app-youtube" || cmp.type === "app-map"
      );
    }
  },
  methods: {
    onMoveCallback(evt, originalEvent) {
      // console.log('relatedContext', evt.relatedContext)
      // return false; — for cancel
    },
    cloneCmp(cmp) {
      var copy = JSON.parse(JSON.stringify(cmp));
      var cmpCopy = wapService.replaceIds(copy);
      this.$store.commit({ type: "setSelectedCmp", cmp: cmpCopy });
      return copy;
    },
    checkMove(e) {
      window.console.log("on move: " + e.relatedContext.list);
    },
    dragStart(ev) {
      this.dragging = true;
    },
    draggingEnd() {
      this.dragging = false;
      this.editMode = true;
    },
    async saveWap() {
      const wap = await this.$store.dispatch({ type: "saveWap" });
      this.websiteName = wap.title
      this.url = `${window.location.origin}/#/website/${wap._id}`;
      this.centerDialogVisible = true
    },
    toggle(currItem) {
      this.items.forEach((item, index) => {
        if (item.id === currItem.id) item.active = !item.active;
        else item.active = false;
      });
    },
    cmpType(type) {
      switch (type) {
        case "app-header":
          return { name: "Header", class: "fas fa-heading" };
        case "app-article":
          return { name: "Article", class: "fas fa-newspaper" };
        case "layout-2-columns":
          return { name: "Cards", class: "fas fa-th-large" };
        case "layout-3-columns":
          return { name: "Columns", class: "fas fa-th" };
        case "app-card":
          return { name: "Card", class: "fas fa-square" };
        case "app-footer":
          return { name: "Footer", class: "fab fa-facebook-f" };
        case "app-contact":
          return { name: "Contact ", class: "fas fa-address-card" };
        case "app-chat":
          return { name: "Chat", class: "fas fa-comment-dots" };
        case "app-youtube":
          return { name: "YouTube", class: "fab fa-youtube" };
        case "app-social-links":
          return { name: "Social Links", class: "fas fa-share-alt" };
        case "app-map":
          return { name: "Map", class: "fas fa-map-marked-alt" };
        case "p":
          return { name: "Text", class: "fas fa-font" };
        case "img":
          return { name: "Image", class: "fas fa-image" };
        case "app-gallery":
          return { name: "Gallery", class: "fas fa-images" };
      }
    },
    widgetsCmps(type) {
      switch (type) {
        case "app-youtube":
          return { name: "YouTube", class: "fab fa-youtube" };
        case "app-map":
          return { name: "Map", class: "fas fa-map-marked-alt" };
        default:
          return false;
      }
    }
  },
  components: {
    editPanel,
    cmpPreview,
    socialSharing
  }
};
</script>
<style lang="scss">
.sortable-ghost {
  background-color: rgba(78, 184, 245, 0.214);
  color: rgba(78, 184, 245, 0);
  padding: 10px;
}

.sortable-fallback {
  border-radius: 50%;
}
</style>

