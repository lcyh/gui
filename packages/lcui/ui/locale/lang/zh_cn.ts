export default {
  pagination: {
    totalItemText: '所有条目',
    goToText: '跳至',
    perPage: '条/页'
  },
  accordion: {
    loading: '加载中',
    noData: '没有数据'
  },
  autoCompleteDropdown: {
    latestInput: '最近输入'
  },
  cascaderList: {
    noData: '没有数据'
  },
  colorPicker: {
    foundationPanel: '基础面板',
    advancedPanel: '高级面板'
  },
  datePickerPro: {
    ok: '确定',
    placeholder: '请选择日期',
    month1: '1月',
    month2: '2月',
    month3: '3月',
    month4: '4月',
    month5: '5月',
    month6: '6月',
    month7: '7月',
    month8: '8月',
    month9: '9月',
    month10: '10月',
    month11: '11月',
    month12: '12月',
    year: '年',
    startPlaceholder: '请选择开始日期',
    endPlaceholder: '请选择结束日期',
    getWeekDays(): Array<string> {
      return ['日', '一', '二', '三', '四', '五', '六'];
    },
    getTimeArr(): Array<string> {
      return ['时', '分', '秒'];
    },
    getYearMonthStr(year: number, month: number): string {
      return `${year}年${month}月`;
    }
  },
  editableSelect: {
    noRelatedRecords: '找不到相关记录',
    noData: '没有数据'
  },
  input: {
    placeholder: '请输入'
  },
  splitterBar: {
    collapse: '收起',
    expand: '展开'
  },
  stepsGuide: {
    previous: '上一步',
    continue: '我知道啦，继续',
    ok: '我知道啦'
  },
  table: {
    selectAll: '全选',
    ok: '确定'
  },
  timePopup: {
    ok: '确定'
  },
  transfer: {
    unit: '项',
    panelUnit: '项',
    headerUnit: '项',
    noData: '暂无数据',
    placeholder: '请输入关键词搜索'
  },
  tree: {
    loading: '加载中',
    newNode: '新节点',
    selectPlaceholder: '请选择'
  },
  upload: {
    save: '保存',
    upload: '上传',
    imgUpload: '图片上传',
    uploaded: '已上传',

    operating: '操作',
    del: '删除',
    download: '下载',
    saveWarn: '请等待文件上传后，保存!',
    saveError: '没有上传成功的文件，无法保存!',

    preview: '预览',
    choose: '选择文件',

    accept: '支持{0}格式',
    acceptUpload: '只能上传{0}格式文件',
    maxSize: '单个文件不超过{0}MB',
    maxSizeMultiple: '只能上传不超过{0}MB的文件!',
    maxNumber: '最多只能上传{0}个文件',

    legend: '略缩图',
    fileName: '文件名',
    fileSize: '文件大小',
    fileStatue: '状态',

    startUpload: '开始上传',
    uploadSuccess: '上传成功',
    uploadError: '上传失败',
    uploading: '上传中',
    uploadWait: '请等待文件上传结束后操作',
    reUploadFailed: '重新上传失败文件',

    import: '导入',
    startImport: '开始导入',
    importing: '导入中',
    reImportFailed: '重新导入失败文件'
  },
  search: {
    placeholder: '请输入关键字'
  },
  select: {
    placeholder: '请选择',
    noDataText: '无数据',
    noMatchText: '找不到相关记录',
    loadingText: '加载中...'
  },
  tagInput: {
    maxTagsText: '已达到最大个数：'
  },
  timeSelect: {
    placeholder: '请选择时间'
  },
  modal: {
    cancelText: '关闭',
    okText: '确认',
    close: '关闭',
    maximize: '最大化',
    restore: '还原'
  },
  excel: {
    exportModalTitle: '导出数据',
    fileType: '文件类型',
    fileName: '文件名'
  },
  common: {
    okText: '确认',
    closeText: '关闭',
    cancelText: '取消',
    loadingText: '加载中...',
    saveText: '保存',
    delText: '删除',
    resetText: '重置',
    searchText: '搜索',
    queryText: '查询',

    inputText: '请输入',
    chooseText: '请选择',

    redo: '刷新',
    back: '返回',

    light: '亮色主题',
    dark: '黑暗主题',

    zoomIn: '放大',
    zoomOut: '缩小',
    reset: '还原',
    enterFullScreen: '全屏',
    exitFullScreen: '退出全屏'
  }
};
