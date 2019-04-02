import XLSX from 'xlsx';

/**
 * @description 随机生成ID
 * @param {*} prefix
 * @returns
 */
function generateId(prefix) {
  let dstr = new Date()
    .getTime()
    .toString(16)
    .substr(2, 8);
  let mstr = Math.random()
    .toString(16)
    .substr(2, 8);
  return `${prefix}_${dstr}_${mstr}`;
}

/**
 * @description 字符串转字符流
 * @param {*} s
 * @returns
 */
function str2ab(s) {
  let buf = new ArrayBuffer(s.length);
  let view = new Uint8Array(buf);
  for (let i = 0; i < s.length; i++) {
    view[i] = s.charCodeAt(i) & 0xff;
  }
  return buf;
}

/**
 * @description 将指定的自然数转换为26进制表示，映射关系：[0-25] -> [A-Z]
 * @param {*} n
 * @returns
 */
function getCharCol(n) {
  let s = '';
  let m = 0;
  while (n > 0) {
    m = (n % 26) + 1;
    s = String.fromCharCode(m + 64) + s;
    n = (n - m) / 26;
  }
  return s;
}

/**
 * @description 导出xlsx格式文件
 * @export
 * @param {*} columns
 * @param {*} fileName
 * @param {*} type
 */
export function downloadXLSX(columns, fileName, type) {
  let keyMap = Object.keys(columns[0]);
  console.info('keyMap', keyMap, columns);
  let tmpdata = [];
  columns
    .map((v, i) =>
      keyMap.map((k, j) =>
        Object.assign(
          {},
          {
            v: v[k],
            position:
              (j > 25 ? getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
          }
        )
      )
    )
    .reduce((prev, next) => prev.concat(next))
    .forEach(v => {
      tmpdata[v.position] = {
        v: v.v
      };
    });
  let outputPos = Object.keys(tmpdata); // 设置区域,比如表格从A1到D10
  let tmpWB = {
    SheetNames: ['Sheet1'],
    Sheets: {
      Sheet1: Object.assign({}, tmpdata, {
        '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1]
      })
    }
  };
  let tmpDown = new Blob(
    [
      str2ab(
        XLSX.write(tmpWB, {
          bookType: type || 'xlsx',
          bookSST: false,
          type: 'binary'
        })
      )
    ],
    {
      type: ''
    }
  ); // 创建二进制对象写入转换好的字节流
  const href = URL.createObjectURL(tmpDown);
  const _fileName = (fileName && fileName.trim()) || generateId('excel');
  let tmpele = document.createElement('a');
  tmpele.download = _fileName + '.xlsx';
  tmpele.href = href;
  tmpele.click();
  setTimeout(function() {
    URL.revokeObjectURL(tmpDown); // 用URL.revokeObjectURL()来释放这个object URL
  }, 100);
}

/**
 * @description 导出csv格式文件
 * @export
 * @param {*} th
 * @param {*} columns
 * @param {*} fileName
 * @returns
 */
export function downloadCSV(th, columns, fileName) {
  if (!Array.isArray(th) || !Array.isArray(columns)) return;
  const keyMap = Object.keys(columns[0]);
  const tb = columns.map(item => keyMap.map(k => item[k]));
  const tmpdata = [th, ...tb];
  const BOM = '\uFEFF';
  const csvStr = BOM + tmpdata.map(el => el.join()).join('\n');
  const _fileName = (fileName && fileName.trim()) || generateId('excel');
  let tmpele = document.createElement('a');
  tmpele.download = `${_fileName}.csv`;
  tmpele.href = `data:attachment/csv,${encodeURI(csvStr)}`;
  tmpele.click();
  setTimeout(() => {
    URL.revokeObjectURL(csvStr);
  }, 100);
}
