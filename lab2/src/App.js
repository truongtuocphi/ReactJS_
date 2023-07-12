// import logo from './logo.svg';
import './App.css';
import CommentDetail from './Component/CommentDetail';
import Header from './Component/header'
import { faker } from '@faker-js/faker';
import Button from './Component/button';
import React from 'react';

class Location extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    )
    return <div>Labtitude: </div>
  }
}

function App() {
  const dataUser = () => {
    return {
      userName: faker.person.lastName(),
      commentText: faker.lorem.words(),
      commentTime: faker.date.anytime().toDateString(),
      userAvatar: faker.internet.avatar(),
    }
  }

  const data = Array.from({ length: 4 }, dataUser);
  return (
    <>
      <Header />
      <div className='w-100 mt-5 pb-5'>
      <Location />
        {data.map((element, index) => (
          <div key={index} className="mx-auto card p-3 mt-3" style={{width: '360px'}}>
            <div className='d-flex gap-2'>
              <CommentDetail
                commentText={element.commentText}
                userName={element.userName}
                commentTime={element.commentTime}
                userAvatar={element.userAvatar}
              />
            </div>
            <div className='w-100 mt-2 d-flex gap-2'>
              <Button text="Approve" colorElelemt="green" />
              <Button text="Reject" colorElelemt="red" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
