import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './TableList.css';




function TableList() {
  const rows = [
    {
      id: 1,
      title: '遇到了一个 adblock 无法拦截的广告，甚至标注着 Adblock 用户专享',
    },
      {
      id: 2,
      title: '有人知道 typescript 这种语法吗？',
      },
  ];

  return (
      <div className='table-list' style={{ height: 250, width: '70%' }}>
      <DataGrid
        columns={[
          {
            field: 'id',
            flex: 1,
            Width: 10,
          },
          {
            field: 'title',
            width: 1000,
          },
           
        ]}
        rows={rows}
      />
    </div>
  )
};

export default TableList;

