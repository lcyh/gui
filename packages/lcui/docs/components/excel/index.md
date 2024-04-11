<!--
 * @Author: changluo
 * @Description:
 * @LastEditors:  
-->

# Excel 导入导出

excel 导入导出操作

## 何时使用

项目中使用到的是 XLSX，具体文档可以参考 [XLSX 文档](https://sheetjs.com/demo/)

## 基本用法

:::demo

```vue
<template>
  <a-card title="表格导出">
    <template #extra>
      <g-button @click="aoaToExcel">导出</g-button>
    </template>
    <a-table
      :bordered="false"
      :dataSource="tableData"
      :columns="columns"
      :scroll="{ y: 240 }"
    />
  </a-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
const modulesFiles = import.meta.glob('../../../ui/excel/index.ts', {
  eager: true
});
let dynamicUtils = {};
for (const key of Object.keys(modulesFiles)) {
  dynamicUtils = modulesFiles[key];
}
export default defineComponent({
  components: {},
  setup() {
    const tableData = ref([]);
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        width: 80
      },
      {
        title: '姓名',
        dataIndex: 'name',
        width: 120
      },
      {
        title: '年龄',
        dataIndex: 'age',
        width: 80
      },
      {
        title: '编号',
        dataIndex: 'no',
        width: 80
      }
    ];

    const data: any[] = (() => {
      const arr: any[] = [];
      for (let index = 0; index < 10; index++) {
        arr.push({
          id: `${index}`,
          name: `${index} John Brown`,
          age: `${index + 10}`,
          no: `${index}98678`
        });
      }
      return arr;
    })();
    tableData.value = data;
    // ["ID", "姓名", "年龄", "编号"]
    const arrHeader = columns.map((column) => column.title);
    // [["ID", "姓名", "年龄", "编号"],["0", "0 John Brown", "10", "098678"]]
    const arrData = data.map((item) => {
      return Object.keys(item).map((key) => item[key]);
    });
    const aoaToExcel = () => {
      // 保证data顺序与header一致
      dynamicUtils.aoaToSheetXlsx({
        data: arrData,
        header: arrHeader,
        filename: '二维数组方式导出excel.xlsx'
      });
    };
    return {
      msg: 'Excel 导入导出 组件文档示例',
      aoaToExcel,
      columns,
      tableData
    };
  }
});
</script>

<style></style>
```

:::

::: demo

```vue
<template>
  <a-card title="单sheet或多sheet 表格导入">
    <template #extra>
      <g-import-excel @success="loadDataSuccess" dateFormat="YYYY-MM-DD">
        <g-button class="m-3">导入Excel</g-button>
      </g-import-excel>
    </template>
    <a-table
      :bordered="false"
      v-for="(item, index) in tableListRef"
      :key="index"
      :columns="item.columns"
      :dataSource="item.dataSource"
      :scroll="{ x: item.columns.length * 100, y: 300 }"
    >
      <template #title>
        <h3 style="margin:0">{{ item.title }}</h3>
      </template>
    </a-table>
  </a-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {},
  setup() {
    const tableListRef = ref<
      {
        title: string;
        columns?: any[];
        dataSource?: any[];
      }[]
    >([]);
    function loadDataSuccess(excelDataList: ExcelData[]) {
      tableListRef.value = [];
      for (const excelData of excelDataList) {
        const {
          header,
          results,
          meta: { sheetName }
        } = excelData;
        const columns: BasicColumn[] = [];
        for (const title of header) {
          columns.push({ title, dataIndex: title });
        }
        tableListRef.value.push({
          title: sheetName,
          dataSource: results,
          columns: columns.map((item, index) => {
            // item.width = 100;
            item.minWidth = 120;
            item.ellipsis = true;
            if (index === 0) {
              return {
                ...item,
                width: 100,
                fixed: 'left'
              };
            }
            return item;
          })
        });
      }
    }
    return {
      tableListRef,
      loadDataSuccess
    };
  }
});
</script>

<style></style>
```

:::

## 导出事件

| 事件            | 类型                  | 说明                        |
| --------------- | --------------------- | --------------------------- |
| jsonToSheetXlsx | Function(JsonToSheet) | json 格式数据，导出到 excel |
| aoaToSheetXlsx  | Function(AoAToSheet)  | 数组格式，导出到 excel      |

## 导入事件

| 事件    | 类型                  | 说明         |
| ------- | --------------------- | ------------ |
| success | (res:ExcelData)=>void | 导入成功回调 |
| error   | ()=>void              | 导出错误     |

## ExcelData

| 属性                         | 类型        | 默认值 | 说明 |
| ---------------------------- | ----------- | ------ | ---- |
| header: string[];            | table       |        | 表头 |
| results: T[];                | table       |        | 数据 |
| meta: { sheetName: string }; | table title |        |      |
