import React from 'react';
import './index.scss';
import {Success} from './components/Success';
import {Users} from './components/Users';


function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');
  const [invites, setInvites] = React.useState([]);
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then(res => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.warn(err);
        alert('Произошла ошибка при загурзке пользователей :(');
      })
  }, []);

  const onChangeValue = (evt) => {
    setSearchValue(evt.target.value);
  }

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  }

  return (<div className="App">
    {
      success
        ? <Success count={invites.length}/>
        : <Users
          items={users}
          isLoading={isLoading}
          onChangeValue={onChangeValue}
          searchValue={searchValue}
          onClickInvite={onClickInvite}
          invites={invites}
          setSuccess={setSuccess}
        />
    }

  </div>);
}

export default App;
