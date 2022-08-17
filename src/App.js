import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('https://reqres.in/api/users').then((res) => res.json()).then(res => {
      setUsers(res.data)
    })
  })

  return (
    <div className="App">
      <Users items={users}/>
      {/* <Success /> */}
    </div>
  );
}

export default App;
