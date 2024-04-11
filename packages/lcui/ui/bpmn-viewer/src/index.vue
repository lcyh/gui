<template>
  <div class="bpmnContainer">
    <div ref="bpmnContainerRef" :key="bpmnViewerKey">
      <BpmnViewer
        :xml="xml"
        :activity="activity"
        style="margin-bottom: 20px"
        :isFullscreen="isFullscreen"
      />
    </div>
    <Toolbar
      v-show="showBar"
      @zoom-in="zoomIn"
      @zoom-out="zoomOut"
      @reset="reset"
      @toggle-fullscreen="toggleFullscreen"
      :isFullscreen="isFullscreen"
    />
  </div>
</template>

<script>
import BpmnViewer from './bpmn-viewer.vue';
import Toolbar from './toolbar.vue';

export default {
  name: 'GBpmnViewer',
  components: { BpmnViewer, Toolbar },
  props: {
    xml: {
      type: String,
      default: ''
    },
    activity: {
      type: Array,
      default() {
        return [];
      }
    },
    showBar: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      scale: 1,
      bpmnViewerKey: Date.now(),
      isFullscreen: false
    };
  },
  watch: {
    xml: {
      handler() {
        this.scale = 1;
        this.bpmnViewerKey = Date.now();
      }
    },
    immediate: true,
    deep: true
  },
  mounted() {
    document.addEventListener('fullscreenchange', () => {
      this.isFullscreen = !!document.fullscreenElement;
      if (!this.isFullscreen) {
        this.reset();
      }
    });
  },
  methods: {
    round(value, precision = 1) {
      if (typeof value !== 'number' || isNaN(value)) {
        return null;
      }
      const pow = Math.pow(10, precision);
      return Math.round(value * pow) / pow;
    },
    zoomIn() {
      this.scale = this.round(this.scale + 0.2);
      this.$refs.bpmnContainerRef.style.scale = this.scale;
    },
    zoomOut() {
      if (this.scale === 0.2) {
        return false;
      }
      this.scale = this.round(this.scale - 0.2);
      this.$refs.bpmnContainerRef.style.scale = this.scale;
    },
    reset() {
      this.scale = 1;
      this.$refs.bpmnContainerRef.style.scale = this.scale;
      this.bpmnViewerKey = Date.now();
    },
    toggleFullscreen() {
      if (document.fullscreenElement) {
        this.isFullscreen = false;
        document.exitFullscreen();
      } else {
        this.isFullscreen = true;
        this.$refs.bpmnContainerRef?.requestFullscreen();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.bpmnContainer {
  position: relative;
  overflow: hidden;
}
.bpmnContainer ::backdrop {
  background-color: #f4f7f9;
  z-index: 10;
}
</style>
