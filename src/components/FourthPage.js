import React, { useState, useEffect, useRef  } from 'react';
import './sidebar.css';
import './ThirdPage.css';
import 'ag-grid-community/styles/ag-grid.css'; // Основной CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Тема
import { AgGridReact } from 'ag-grid-react'; // Логика React Grid
import { useNavigate } from 'react-router-dom';

function FourthPage() {
  // Данные для строк: данные, которые будут отображаться.
  const [rowData, setRowData] = useState([
    { Наименование: 'Пшеница', Цена: 64, вес: 350 },
    { Наименование: 'хлеб', Цена: 33, вес: 350 },
    { Наименование: 'Аспирин', Цена: 296, вес: 3 },
    { Наименование: 'Сок', Цена: 488, вес: 2 },
    { Наименование: 'Мыло', Цена: 157, вес: 4 },
    { Наименование: 'Сахар', Цена: 206, вес: 2 },
  ]);

  // Определения колонок: определяет и управляет колонками грида.
  const [colDefs, setColDefs] = useState([
    { field: 'Наименование' },
    { field: 'Цена' },
    { field: 'вес' }
  ]);

  const defaultColDef = {
    flex: 1,
  };

  const gridRef = useRef();

  useEffect(() => {
    // Установить начальное выделение
    if (gridRef.current && gridRef.current.api) {
      gridRef.current.api.getDisplayedRowAtIndex(0).setSelected(true);
    }
  }, []);

  const onSelectionChanged = (event) => {
    const selectedRows = event.api.getSelectedRows();
    console.log('Selected rows:', selectedRows);
  };


  const navigate = useNavigate();

  const goToSecondPage = () => {
    navigate('/third');
  };

  const goToSecondPage1 = () => {
    navigate('/fourth');
  };


  return (
    <div className="page-container">
      <div className="sidebar">
        <h2>Меню</h2>
        <ul>
          <li><a onClick={goToSecondPage}>Информация</a></li>
          <li><a onClick={goToSecondPage1}>Таблица</a></li>
        </ul>
      </div>
      <div className="content">
        <div className="block-third">
          <div className="ag-theme-quartz" style={{ height: '400px', width: '100%' }}>
            <AgGridReact 
              rowData={rowData} 
              columnDefs={colDefs} 
              defaultColDef={defaultColDef} 
              ref={gridRef}
              rowSelection="single"
              onSelectionChanged={onSelectionChanged}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthPage;
