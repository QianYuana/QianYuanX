// const XLSX = require('xlsx');
// const fs = require('fs');

// // 读取Excel文件
// const workbook = XLSX.readFile('./ht.xlsx');

// // 获取工作表的名字
// const sheetNames = workbook.SheetNames;
// // console.log(sheetNames);

// // 获取第一个工作表
// const sheet = workbook.Sheets[sheetNames[0]];
// // console.log(sheet);

// // 将工作表转换为JSON对象
// const data = XLSX.utils.sheet_to_json(sheet);

// // console.log(data);

// // const data = require('./ht.json'); // 引入您的 JSON 数据文件

// // 转换数据为嵌套结构
// function transformData(data) {
//   const result = [];
//   const provincesMap = new Map();

//   data.forEach((item) => {
//     if (item.value === undefined) {
//       console.log(item);
//       return;
//     }

//     const value = item.value.toString();

//     if (value.endsWith('0000')) {
//       // 省级
//       const province = { value: item.value, label: item.label, children: [] };
//       provincesMap.set(value.slice(0, 2), province);
//       result.push(province);
//     } else if (value.endsWith('00')) {
//       // 市级
//       const province = provincesMap.get(value.slice(0, 2));
//       if (province) {
//         const city = { value: item.value, label: item.label, children: [] };
//         province.children.push(city);
//         province[value.slice(2, 4)] = city; // 缓存市级节点
//       }
//     } else {
//       // 县级
//       const province = provincesMap.get(value.slice(0, 2));
//       if (province) {
//         const city = province[value.slice(2, 4)];
//         if (city) {
//           city.children.push({ value: item.value, label: item.label });
//         }
//       }
//     }
//   });

//   return result;
// }

// const nestedData = transformData(data);
// // console.log(JSON.stringify(nestedData, null, 2));
// fs.writeFileSync('./htXx.json', JSON.stringify(nestedData));
