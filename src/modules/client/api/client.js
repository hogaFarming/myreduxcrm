const TABLE_FIELDS = [
  { name: '客户名称', key: 'clientname' },
  { name: '客户负责人', key: 'manager' },
  { name: '客户状态', key: 'status' }
];
const TABLE_DATA = [{
  clientname: '大酒神客户',
  manager: 'hoga',
  status: '商机客户'
}, {
  clientname: '大酒神客户2',
  manager: 'hoga',
  status: '商机客户'
}];

export function getListData(page, size) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve({
        fields: TABLE_FIELDS,
        data: [TABLE_DATA[page - 1]],
        total: TABLE_DATA.length
      });
    }, 100);
  });
}
