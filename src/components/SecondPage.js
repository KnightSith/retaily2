// src/components/SecondPage.js
import React, { useEffect, useState } from 'react';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';
import { authenticate, getMenu } from '../api';

function SecondPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [expandedItems, setExpandedItems] = useState({});
  const navigate = useNavigate();

  const goToSecondPage = () => {
    navigate('/third');
  };

  const goToSecondPage1 = () => {
    navigate('/fourth');
  };

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const token = await authenticate();
        console.log('Received token:', token); // Лог токена
        const menuData = await getMenu(token);
        console.log('Received menu data:', menuData); // Лог данных меню
        setMenuItems(buildMenuTree(menuData));
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, []);

  const buildMenuTree = (menuData) => {
    const menuMap = new Map();
    menuData.forEach(item => menuMap.set(item.code, { ...item, children: [] }));

    const menuTree = [];
    menuMap.forEach(item => {
      if (item.parent_code && menuMap.has(item.parent_code)) {
        menuMap.get(item.parent_code).children.push(item);
      } else {
        menuTree.push(item);
      }
    });

    console.log('Built menu tree:', menuTree); // Лог дерева меню
    return menuTree;
  };

  const handleToggle = (code) => {
    setExpandedItems(prevState => ({
      ...prevState,
      [code]: !prevState[code]
    }));
  };

  const renderMenu = (items) => {
    return (
      <ul>
        {items.map(item => (
          <li key={item.code}>
            <div onClick={() => handleToggle(item.code)} style={{ cursor: 'pointer' }}>
              {item.name}
            </div>
            {item.children.length > 0 && expandedItems[item.code] && (
              <div style={{ marginLeft: '20px' }}>
                {renderMenu(item.children)}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="sidebar">
      <h2>Меню</h2>
      <ul>
          <li><a onClick={goToSecondPage}>Информация</a></li>
          <li><a onClick={goToSecondPage1}>Таблица</a></li>
      
        {renderMenu(menuItems)}
      </ul>
    </div>
  );
}

export default SecondPage;
