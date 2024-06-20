import React, { useState } from 'react';
import './sidebar.css';
import './ThirdPage.css';
import { Input, Select, Button, Modal } from "antd";
import { useNavigate } from 'react-router-dom';

function ThirdPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const { TextArea } = Input;
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTypeChange = (value) => {
    setType(value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
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
          <div className="input">
            <h2>Наименование</h2>
            <Input placeholder="Basic usage" onChange={handleNameChange} />
          </div>
          <div>
            <h2>Тип</h2>
            <Select
              showSearch
              placeholder="Select a type"
              optionFilterProp="label"
              onChange={handleTypeChange}
              onSearch={(value) => console.log('search:', value)}
              options={[
                { value: 'Продукты', label: 'Продукты' },
                { value: 'Хоз.товары', label: 'Хоз.товары' },
                { value: 'Лекартсво', label: 'Лекартсво' },
              ]}
            />
          </div>
        </div>
        <div className="input">
        <h2>Описание</h2>
        <TextArea rows={4} onChange={handleDescriptionChange} />
        </div>
        <div className="button">
          <Button type="primary" onClick={showModal}>
            Вывод
          </Button>
          <Modal title="Вывод" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Название: {name}</p>
            <p>Тип: {type}</p>
            <p>Описание: {description}</p>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
