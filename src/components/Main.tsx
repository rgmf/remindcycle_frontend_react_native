import { View } from 'react-native';
import { Route, Routes } from 'react-router-native';
import AppBar from './AppBar';
import TasksList from './TasksList';
import LogIn from '../pages/LogIn';

const Main = () => {
  return (
    <View style={{ flexGrow: 1}}>
      <AppBar />
      <Routes>
        <Route path='/' element={<TasksList />} />
        <Route path='/signin' element={<LogIn />} />
        <Route path='*' element={<TasksList />} />
      </Routes>
    </View>
  );
}

export default Main;