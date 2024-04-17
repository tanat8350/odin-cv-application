import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Card, Item } from './Card';

const initItem = {
  name: 'firstname lastname',
  email: 'email@gmail.com',
  phoneNo: '000-000-0000',
  college: 'abc university',
  degree: 'def degree',
  date: '2022',
  companyName: 'my first company',
  position: 'driver',
  responsibilities: 'drive a car',
  howLong: '5 years',
};

function App() {
  const [info, setInfo] = useState(initItem);

  function onChangeHandler(e) {
    setInfo({ ...info, [e.target.id]: e.target.value });
  }

  return (
    <div className="flex">
      <div className="config-container">
        <Card title="General Information">
          <Item
            title="Name"
            placeholder="Enter your name"
            value={info}
            onChange={onChangeHandler}
          ></Item>
          <Item
            title="Email"
            placeholder="Enter your email"
            value={info}
            onChange={onChangeHandler}
          ></Item>
          <Item
            title="Phone No"
            placeholder="Enter your phone no."
            value={info}
            onChange={onChangeHandler}
          ></Item>
        </Card>
        <Card title="Education Details">
          <Item
            title="College"
            placeholder="Enter your college"
            value={info}
            onChange={onChangeHandler}
          ></Item>
          <Item
            title="Degree"
            placeholder="Enter your degree"
            value={info}
            onChange={onChangeHandler}
          ></Item>
          <Item
            title="Date"
            placeholder="Enter in date"
            value={info}
            onChange={onChangeHandler}
          ></Item>
        </Card>
        <Card title="Experiences">
          <Item
            title="Company Name"
            placeholder="Enter your company name"
            value={info}
            onChange={onChangeHandler}
          ></Item>
          <Item
            title="Position"
            placeholder="Enter your position"
            value={info}
            onChange={onChangeHandler}
          ></Item>
          <Item
            title="Responsibilities"
            placeholder="Enter your responsibilities"
            value={info}
            onChange={onChangeHandler}
          ></Item>
          <Item
            title="How long?"
            placeholder="Enter in years"
            value={info}
            onChange={onChangeHandler}
          ></Item>
        </Card>
      </div>
      <div className="preview-container">
        <h1>{info.name}</h1>
        <p>{info.email}</p>
        <p>{info.phoneNo}</p>
        <h2>Education</h2>
        <p>{info.college}</p>
        <p>{info.degree}</p>
        <p>{info.date}</p>
        <p>{info.companyName}</p>
        <p>{info.position}</p>
        <p>{info.responsibilities}</p>
        <p>{info.howLong}</p>
      </div>
    </div>
  );
}

export default App;
