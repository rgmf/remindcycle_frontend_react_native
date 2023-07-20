import { FlatList, Text } from 'react-native';
import TaskItem from './TaskItem';
import { useEffect, useState } from 'react';

const TasksList = () => {
  const [tasks, setTasks] = useState<any[]>([]);

  const fetchTasks = async() => {
    const response = await fetch('http://localhost:4000/api/repositories');
    console.log(response);
    //const json = await response.json();
    //console.log(json);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <FlatList
      data={tasks}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item }) => <TaskItem item={item} />}
    >
    </FlatList>
  );
}

export default TasksList;