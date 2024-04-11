/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import * as xlsx from 'xlsx';
import type { WorkBook } from 'xlsx';
import type { JsonToSheet, AoAToSheet } from './typing';

const { utils, writeFile } = xlsx;

const DEF_FILE_NAME = 'excel-list.xlsx';

export function jsonToSheetXlsx<T = any>({
  data,
  header,
  filename = DEF_FILE_NAME,
  json2sheetOpts = {},
  write2excelOpts = { bookType: 'xlsx' }
}: JsonToSheet<T>) {
  const arrData = [...data];
  if (header) {
    arrData.unshift(header);
    json2sheetOpts.skipHeader = true;
  }

  const worksheet = utils.json_to_sheet(arrData, json2sheetOpts);

  /* add worksheet to workbook */
  const workbook: WorkBook = {
    SheetNames: [filename],
    Sheets: {
      [filename]: worksheet
    }
  };
  /* output format determined by filename */
  writeFile(workbook, filename, write2excelOpts);
  /* at this point, out.xlsb will have been downloaded */
}

function getCellWidth(value) {
  if ([null, undefined].includes(value)) {
    return 20;
  } else if (/.*[\u4e00-\u9fa5]+.*$/.test(value)) {
    // 中文的长度
    const chineseLength = value.match(/[\u4e00-\u9fa5]/g).length;
    // 其他不是中文的长度
    const otherLength = value.length - chineseLength;
    return chineseLength * 2.1 + otherLength * 1.1;
  } else {
    return value.toString().length * 1.1;
    /* 另一种方案
    value = value.toString()
    return value.replace(/[\u0391-\uFFE5]/g, 'aa').length
    */
  }
}

const handleFitWidth = (data, header, sheet, fitWidth = true) => {
  if (fitWidth) {
    const colWidths = [],
      // 所有列的名称数组
      colNames = header;
    // 计算每一列的所有单元格宽度
    data.forEach((row) => {
      let index = 0;
      for (const key in row) {
        if (colWidths[index] == null) {
          colWidths[index] = [];
        }
        switch (typeof row[key]) {
          case 'string':
          case 'number':
          case 'boolean':
            colWidths[index]?.push(getCellWidth(row[key]));
            break;
          case 'object':
          case 'function':
            colWidths[index]?.push(0);
            break;
        }
        index++;
      }
    });
    sheet['!cols'] = [];
    // 每一列取最大值最为列宽
    colWidths.forEach((colW, index) => {
      // 计算列头的宽度
      colW?.push(getCellWidth(colNames[index]));
      // 设置最大值为列宽
      sheet['!cols'].push({ wch: Math.max(...colW) });
    });
  }
};
export function aoaToSheetXlsx<T = any>({
  data,
  header,
  filename = DEF_FILE_NAME,
  write2excelOpts = { bookType: 'xlsx' }
}: AoAToSheet<T>) {
  const arrData = [...data];
  if (header) {
    arrData.unshift(header);
  }
  const worksheet = utils.aoa_to_sheet(arrData);
  // 计算excel列宽
  handleFitWidth(data, header, worksheet, true);
  /* add worksheet to workbook */
  const workbook: WorkBook = {
    SheetNames: [filename],
    Sheets: {
      [filename]: worksheet
    }
  };
  /* output format determined by filename */
  writeFile(workbook, filename, write2excelOpts);
  /* at this point, out.xlsb will have been downloaded */
}
