<template>
  <div
    v-bind="$attrs"
    ref="bpmnViewer"
    class="viewer"
    :style="{ height: isFullscreen ? '100%' : '400px' }"
  >
    <Popover
      :title="detailInfo.activityName"
      overlayClassName="flowMsgPopover"
      :visible="true"
      :auto-adjust-overflow="true"
      style="display: none"
    >
      <template #content>
        <div class="content">
          <p class="text-show">负责人：{{ detailInfo.operator }}</p>
          <p>
            处理结果：
            <Tag
              :color="
                detailInfo.state === '处理中'
                  ? 'orange'
                  : detailInfo.state === '已完成'
                  ? 'green'
                  : 'blue'
              "
            >
              {{ detailInfo.operation }}
            </Tag>
          </p>
          <p class="text-show">处理意见：{{ detailInfo.reviewComments }}</p>
        </div>
      </template>
    </Popover>
  </div>
</template>

<script>
import BpmnViewer from 'bpmn-js/lib/NavigatedViewer';
import { Popover, Tag } from 'ant-design-vue';
export default {
  components: {
    Popover,
    Tag
  },
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
    isFullscreen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bpmnViewer: null,
      detailInfo: {}
    };
  },
  watch: {
    xml: {
      handler(val) {
        if (val) {
          this.setData();
        }
      },
      immediate: true
    },
    activity: {
      handler(val) {
        if (val?.length) {
          this.bindEvents();
        }
      },
      immediate: true
    }
  },
  mounted() {
    this.bpmnViewer = new BpmnViewer({
      container: this.$refs.bpmnViewer
      // additionalModules: [{ zoomScroll: ['value', ''] }],
    });
    if (this.xml) {
      this.setData();
    }
    if (this.activity) {
      this.bindEvents();
    }
  },
  methods: {
    setData() {
      if (this.bpmnViewer) {
        this.bpmnViewer.importXML(this.xml, (err) => {
          if (err) {
            console.log(err);
          }
          this.bpmnViewer.get('canvas').zoom('fit-viewport', 'auto');
          this.setActivityStatus();
        });
      }
    },
    // 设置活动状态
    setActivityStatus() {
      // 高亮任务节点
      this.activity.forEach((v) => {
        if (v.state === '已完成' && v.operationCode !== '-1') {
          this.addMarker(v.activityId, 'task-done');
        }
        if (v.state === '处理中' && v.operationCode !== '-1') {
          this.addMarker(v.activityId, 'task-doing');
        }
        if (v.operationCode === '-1') {
          this.addMarker(v.activityId, 'task-termination');
        }
      });
    },
    highlightLine() {
      // 高亮流程线
      const activityIds = this.activity.map((v) => v.activityId);
      const elementRegistry = this.bpmnViewer.get('elementRegistry');
      const SequenceFlow = elementRegistry.filter(
        (item) => item.type === 'bpmn:SequenceFlow'
      );
      const ExclusiveGateway = elementRegistry.filter((item) =>
        item.type.includes('Gateway')
      );
      SequenceFlow.forEach((v) => {
        if (
          activityIds.includes(v.source.id) &&
          activityIds.includes(v.target.id)
        ) {
          this.addMarker(v.id, 'highlight-line');
        }
      });
      ExclusiveGateway.forEach((v) => {
        let hasIncome = false;
        v.incoming.forEach((l) => {
          const arr = this.activity.filter(
            (v) => v.activityId === l.source.id && v.state === '已完成'
          );
          if (arr.length) {
            hasIncome = true;
            this.addMarker(l.id, 'highlight-line');
          }
        });
        if (hasIncome) {
          v.outgoing.forEach((l) => {
            if (activityIds.includes(l.target.id)) {
              this.addMarker(v.id, 'highlight-gateway');
              this.addMarker(l.id, 'highlight-line');
            }
          });
        }
      });
    },
    // 根据id，添加class
    addMarker(id, className) {
      const canvas = this.bpmnViewer.get('canvas');
      try {
        canvas.addMarker(id, className);
      } catch (err) {}
    },
    // 悬浮框设置
    genNodeDetailBox(e, overlays) {
      const tempDiv = document.createElement('div');
      const popoverEl = document.querySelector('.flowMsgPopover');
      tempDiv.innerHTML = popoverEl.innerHTML;
      tempDiv.className = 'tipBox';
      tempDiv.style.background = 'rgba(255, 255, 255, 1)';
      overlays.add(e.element.id, {
        position: { top: e.element.height + 10, left: 0 },
        html: tempDiv
      });
    },
    bindEvents() {
      if (!this.bpmnViewer) {
        return;
      }
      const eventBus = this.bpmnViewer.get('eventBus');
      const overlays = this.bpmnViewer.get('overlays');
      eventBus.on('element.hover', (e) => {
        if (e.element.type === 'bpmn:UserTask') {
          const detailInfo = this.activity.filter(
            (v) => v.activityId === e.element.id
          )[0];
          if (detailInfo) {
            this.detailInfo = detailInfo;
            setTimeout(() => {
              if (e.element.type === 'bpmn:UserTask') {
                this.genNodeDetailBox(e, overlays);
              }
            }, 10);
          }
        }
      });
      eventBus.on('element.out', () => {
        overlays.clear();
      });
    }
  }
};
</script>
<style lang="less" scoped>
:global(.flowMsgPopover) {
  display: none !important;
}
:deep(.tipBox) {
  z-index: 9999;
  width: 200px;
  padding: 0;
  .ant-popover-arrow {
    border-color: #fff;
    left: 50px;
    top: -4px;
    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
    transform: rotate(45deg);
  }
  .content {
    padding: 0;
  }
  p {
    line-height: 28px;
    margin: 0;
    padding: 0;
  }
}
.viewer {
  width: 100%;
  // height: 400px;
  :deep {
    .djs-container {
      overflow: initial !important;
      z-index: 10;
      .djs-visual > :not(text):nth-child(1) {
        stroke: #aaa !important;
      }
      /*高亮路径*/
      .highlight-line .djs-visual > :nth-child(1) {
        stroke: #000 !important;
      }
      /*高亮网关*/
      .highlight-gateway .djs-visual > :nth-child(1) {
        stroke: #000 !important;
      }
    }
    /*已完成的任务*/
    .task-done:not(.djs-connection) .djs-visual > :nth-child(1) {
      fill: #c5fdc5 !important;
      stroke: #66c566 !important;
    }
    /*进行中的任务*/
    .task-doing:not(.djs-connection) .djs-visual > :nth-child(1) {
      fill: #fdf6ec !important;
      stroke: #e6a23c !important;
    }
    /*终止的任务*/
    .task-termination:not(.djs-connection) .djs-visual > :nth-child(1) {
      fill: #ffb0b0 !important;
      stroke: red !important;
    }
    .bjs-breadcrumbs {
      display: none;
    }
  }
  .text-show {
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.tag-title {
  font-size: 16px;
  color: #333;
  margin-bottom: 12px;
}
:deep(.ant-badge-status-processing::after) {
  border-color: orange;
}
:deep(.bjs-powered-by) {
  display: none;
}
:deep {
  .highlight-flow:matches(.djs-connection) .djs-outline {
    stroke: lime !important;
    stroke-width: 4px;
  }
}
</style>
