export default {
  pagination: {
    totalItemText: 'Total',
    goToText: 'Go to'
  },
  accordion: {
    loading: 'loading',
    noData: 'No Data'
  },
  autoCompleteDropdown: {
    latestInput: 'Latest input'
  },
  cascaderList: {
    noData: 'No data'
  },
  colorPicker: {
    foundationPanel: 'Foundation panel',
    advancedPanel: 'Advanced panel'
  },
  datePickerPro: {
    ok: 'OK',
    placeholder: 'select date',
    month1: 'Jan',
    month2: 'Feb',
    month3: 'Mar',
    month4: 'Apr',
    month5: 'May',
    month6: 'June',
    month7: 'July',
    month8: 'Aug',
    month9: 'Sep',
    month10: 'Oct',
    month11: 'Nov',
    month12: 'Dec',
    year: '年',
    startPlaceholder: 'select start date',
    endPlaceholder: 'select end date',
    getWeekDays(): Array<string> {
      return ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    },
    getTimeArr(): Array<string> {
      return ['Hr', 'Min', 'Sec'];
    },
    getYearMonthStr(year: number, month: number): string {
      return `${year} - ${month}`;
    }
  },
  editableSelect: {
    noRelatedRecords: 'No related records found',
    noData: 'No data'
  },
  input: {
    placeholder: 'Please enter'
  },
  splitterBar: {
    collapse: 'Collapse',
    expand: 'Expand'
  },
  stepsGuide: {
    previous: 'Previous',
    continue: 'Continue',
    ok: 'OK'
  },
  table: {
    selectAll: 'Select all',
    ok: 'OK'
  },
  timePopup: {
    ok: 'OK'
  },
  transfer: {
    unit: '',
    panelUnit: '',
    headerUnit: '',
    noData: 'No Data',
    placeholder: 'Please enter keywords'
  },
  tree: {
    loading: 'Loading',
    newNode: 'New node',
    selectPlaceholder: 'Please select'
  },
  upload: {
    save: 'Save',
    upload: 'Upload',
    imgUpload: 'ImageUpload',
    uploaded: 'Uploaded',

    operating: 'Operating',
    del: 'Delete',
    download: 'download',
    saveWarn: 'Please wait for the file to upload and save!',
    saveError: 'There is no file successfully uploaded and cannot be saved!',

    preview: 'Preview',
    choose: 'Select the file',

    accept: 'Support {0} format',
    acceptUpload: 'Only upload files in {0} format',
    maxSize: 'A single file does not exceed {0}MB ',
    maxSizeMultiple: 'Only upload files up to {0}MB!',
    maxNumber: 'Only upload up to {0} files',

    legend: 'Legend',
    fileName: 'File name',
    fileSize: 'File size',
    fileStatue: 'File status',

    startUpload: 'Start upload',
    uploadSuccess: 'Upload successfully',
    uploadError: 'Upload failed',
    uploading: 'Uploading',
    uploadWait: 'Please wait for the file upload to finish',
    reUploadFailed: 'Re-upload failed files'
  },
  search: {
    placeholder: 'Enter a keyword'
  },
  select: {
    placeholder: 'Please select',
    noDataText: 'No data',
    noMatchText: 'No related records found',
    loadingText: 'Loading...'
  },
  tagInput: {
    maxTagsText: 'Maximum number reached: '
  },
  timeSelect: {
    placeholder: 'Please select time'
  },
  modal: {
    cancelText: 'Close',
    okText: 'Confirm',
    close: 'Close',
    maximize: 'Maximize',
    restore: 'Restore'
  },
  excel: {
    exportModalTitle: 'Export data',
    fileType: 'File type',
    fileName: 'File name'
  },
  common: {
    okText: 'OK',
    closeText: 'Close',
    cancelText: 'Cancel',
    loadingText: 'Loading...',
    saveText: 'Save',
    delText: 'Delete',
    resetText: 'Reset',
    searchText: 'Search',
    queryText: 'Search',

    inputText: 'Please enter',
    chooseText: 'Please choose',

    redo: 'Refresh',
    back: 'Back',

    light: 'Light',
    dark: 'Dark',

    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    reset: 'reset',
    enterFullScreen: 'Full Screen',
    exitFullScreen: 'Exit Full Screen'
  }
};
