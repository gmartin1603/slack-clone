import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Chat from './Components/Chat';
import Header from './Components/Header';
import Login from './Components/Login';
import styled from 'styled-components'
import SideBar from './Components/SideBar';
import db from './firebase'
import {auth, provider} from './firebase'
import { useEffect, useState } from 'react';


function App() {

  const [rooms, setRooms] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user')
      setUser(null)
    })
  }

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return {id: doc.id, name: doc.data().name}
      })
    )})
  }

  useEffect(() => {
    getChannels()
  }, [])
console.log(rooms)
  return (
    <div className="App">
      <Router>
        {
          !user ?
          <Login setUser={setUser}/>
          :
        <Container>
          <Header user={user} signOut={signOut} />
          <Main>
            <SideBar rooms={rooms} />
            <Switch>
              <Route path="/room/:channelId">
                <Chat user={user} />
              </Route>
              <Route path="/">
                Select or Create Channel
              </Route>
            </Switch>
          </Main>
        </Container>
        }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`
const Main = styled.div `
  display: grid;
  grid-template-columns: 260px auto;
`