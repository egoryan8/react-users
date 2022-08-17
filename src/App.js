import React from 'react';
import './index.scss';
import {Success} from './components/Success';
import {Users} from './components/Users';


function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');

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

  return (<div className="App">
      <Users items={users} isLoading={isLoading} onChangeValue={onChangeValue} searchValue={searchValue}/>
      {/* <Success /> */}
    </div>);
}

export default App;
