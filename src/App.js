import { useRef, useState, useEffect } from "react";
import Map from './Map';
import {useDispatch } from 'react-redux'
import './App.css';
import { updatelatlng } from './reducer/latlngSlice'
import React from 'react';
import { Col, Row, Typography, Button, Modal, Timeline } from 'antd';
import { HistoryOutlined } from '@ant-design/icons';
const { Text } = Typography;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [history, setHistory] = useState([]);
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const dispatch = useDispatch();
  const options = {};   
  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options 
    );
    
    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
      const latlng = place.geometry.location.lat() +','+place.geometry.location.lng()
      setHistory(current => [...current, place.formatted_address]);
      dispatch(updatelatlng(latlng))
    });
  }, []);
  
  
  return (
    <div className="App">
      <Row>
        <Col span={8} className="left-sidebar">
          <Button type="dashed" icon={<HistoryOutlined />} className="history" onClick={showModal}>
            History
          </Button>
          <Modal title="History" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Timeline
              items={history.map(function (val, index) {
              return { children: val}})}
            />
          </Modal>
          <Text type="success">Enter location to find on Map</Text>
          <input ref={inputRef} className="search-input"/>
        </Col>
        <Col span={16}> 
          <div style={{ height: '100vh', width: '100%' }}>
            <Map />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
