import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Modal, Alert} from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText)
    }

    const addGoalHandler = () => {
        if (enteredGoal.trim() === '') {
            showAlert()
            return
        } 
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
    }

    const showAlert = () => {
        Alert.alert(
            'Hello user',
            'You need to set the goal to continue ...',
            [
              {text: 'OK'},
            ],
            {cancelable: false},
          );
    }
  
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Describe your Goal" 
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer} >
                    <View style={styles.button} >
                        <Button 
                            s
                            title="CANCEL" 
                            color="red" 
                            onPress={props.onCancel}
                        />
                    </View>
                    <View style={styles.button} >
                        <Button
                            style={styles.button} 
                            title="ADD" 
                            onPress={addGoalHandler}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      marginBottom: 10
    },
    input: {
      width: '80%', 
      borderColor: 'black', 
      borderWidth: 1, 
      padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        flex: 1
    }
  })
  


export default GoalInput