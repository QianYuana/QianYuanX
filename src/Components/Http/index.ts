import { message } from 'antd';
function objectToFormUrlEncoded(obj: { [x: string]: any }) {
  return Object.keys(obj)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
    .join('&');
}
const http = ({
  method,
  url,
  data,
  headers = {},
}: {
  method: string;
  url: string;
  data: { [x: string]: any };
  headers: { [x: string]: string };
}) => {
  // 获取 token，这可能是从某个地方（如 localStorage）获取的
  // let token = localStorage.getItem('token');
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    // 创建 FormData 对象
    let formData = new FormData();
    // xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    let requestData = null;
    let urls = null;
    switch (method) {
      case 'GET':
        requestData =
          typeof data === 'object' ? objectToFormUrlEncoded(data) : data;
        urls = url + '?' + requestData;
        xhr.open(method, urls, true);
        xhr.setRequestHeader('Accept', 'application/json, text/plain');
        // xhr.setRequestHeader('Content-Type', 'application/json');
        break;
      case 'POST':
        xhr.open(method, url, true);
        // 将对象的键值对添加到 FormData 中
        Object.keys(data).forEach(function (key) {
          formData.append(key, data[key]);
        });
        break;
      default:
        break;
    }

    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // xhr.setRequestHeader('Authorization', 'Bearer ' + token); // 在请求头中添加 token

    // 将传入的 headers 参数添加到请求头中
    Object.keys(headers).forEach(function (header) {
      xhr.setRequestHeader(header, headers[header]);
    });

    xhr.onreadystatechange = function () {
      // console.log(xhr, '打印xhr');

      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status >= 200 && xhr.status < 300) {
          let response = xhr.responseText
            ? JSON.parse(xhr.responseText)
            : xhr.responseText;
          resolve({ response, status: xhr.status });
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText,
          });
        }
      }
    };

    xhr.onerror = function () {
      reject({
        status: xhr.status,
        statusText: xhr.statusText,
      });
    };

    // 创建 FormData 对象
    // let formData = new FormData();
    // // 将对象的键值对添加到 FormData 中
    // Object.keys(data).forEach(function (key) {
    //   formData.append(key, data[key]);
    // });
    if (method === 'GET') {
      xhr.send();
    } else {
      xhr.send(formData);
    }
  });
};
export default class Http {
  static ajax = (url: string, options: any) => {
    return new Promise((resolve, reject) => {
      http({ url, ...options })
        .then((response: any) => {
          if (response.status === 'success' || response.status === 200) {
            if (response) {
              resolve(response);
            } else {
              resolve(null);
            }
          } else {
            message.error(response.message || '请求错误');
            reject(response.message || '请求错误');
          }
        })
        .catch((err) => {
          message.error(err.message || '请求错误');
          reject('请求错误');
        });
    });
  };
  static get = (url: string, options: any) => {
    return new Promise((resolve, reject) => {
      http({ url, ...options, method: 'GET' })
        .then((response: any) => {
          if (response.status === 'success' || response.status === 200) {
            if (response) {
              resolve(response);
            } else {
              resolve(null);
            }
          } else {
            message.error(response.message || '请求错误');
            reject(response.message || '请求错误');
          }
        })
        .catch((err) => {
          message.error(err.message || '请求错误');
          reject('请求错误');
        });
    });
  };
  static post = (url: string, options: any) => {
    return new Promise((resolve, reject) => {
      http({ url, ...options, method: 'POST' })
        .then((response: any) => {
          if (response.status === 'success' || response.status === 200) {
            if (response) {
              resolve(response);
            } else {
              resolve(null);
            }
          } else {
            message.error(response.message || '请求错误');
            reject(response.message || '请求错误');
          }
        })
        .catch((err) => {
          message.error(err.message || '请求错误');
          reject('请求错误');
        });
    });
  };
}
