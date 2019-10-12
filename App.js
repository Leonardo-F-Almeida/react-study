import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [goals, setGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (goalTitle) => {
    setGoals(currentGoals => [...goals, { key: Math.random().toString(), value: goalTitle }])
    setIsAddMode(false)
  }

  const removeGoalHandler = goalId => {
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId)
    })
  }

  const cancelGoal = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>

      <Button title="Add new goal" onPress={() => setIsAddMode(true)}/>

      <GoalInput 
        visible={isAddMode} 
        onAddGoal={addGoalHandler} 
        onCancel={cancelGoal}
      />
      <FlatList 
        data={goals} 
        renderItem={ itemData => 
          <GoalItem 
            onDelete={removeGoalHandler.bind(this, itemData.item.key)} 
            title={itemData.item.value}
          />
        }>
      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input: {
    width: '80%', 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})
