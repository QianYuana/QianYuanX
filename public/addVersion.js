//npm run build打包前执行此段代码
let fs = require('fs');

//返回package的json数据
function getPackageJson() {
  let data = fs.readFileSync('./public/sysInfo.json'); //fs读取文件 注意路径是从最外层开始的
  return JSON.parse(data); //转换为json对象
}

let packageData = getPackageJson(); //获取package的json
console.log(packageData, '对象');
// let arr = packageData.version.split('@') //切割后的版本号数组
// let date = new Date()
// const year = date.getFullYear()
// let month = date.getMonth() + 1
// let day = date.getDate()
// month = month > 9 ? month : '0' + month
// day = day < 10 ? '0' + day : day
// let today = `${year}${month}${day}`
let verarr = packageData.version.split('.');
if (verarr[2] === '9') {
  verarr[1] = parseInt(verarr[1]) + 1;
  verarr[2] = '0';
} else {
  verarr[2] = parseInt(verarr[2]) + 1;
}
packageData.version = verarr.join('.');
// packageData.version = today + '@' + verarr.join('.') //转换为以"."分割的字符串
// //用packageData覆盖package.json内容
fs.writeFile(
  './public/sysInfo.json',
  JSON.stringify(packageData, null, '\t'),
  (err) => {
    console.log(err);
  },
);
// 将接收到的数据写入到临时的 JSON 文件中
fs.writeFileSync('tempFile.json', JSON.stringify(packageData));
