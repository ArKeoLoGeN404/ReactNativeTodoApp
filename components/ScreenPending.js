import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import {
  Headline,
  DefaultTheme,
  FAB,
  Modal,
  Portal,
  Button,
  TextInput,
  Card,
  Provider as PaperProvider,
} from "react-native-paper";

import Task from "./Task";

function HomeScreen() {
  const [taskList, setTaskList] = useState([]);

  // const [taskItems, setTaskItems] = useState([
  //   { name: "test 1", description: "test description" },
  //   { name: "test 2", description: "test description 2" },
  //   { name: "test 3", description: "test description 3" },
  //   { name: "test 4", description: "test description 4" },
  //   { name: "test 5", description: "test description 5" },
  // ]);
  const [inputError, setInputError] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, settaskDes] = useState("");

  const handleInputChange = () => {
    // const { name, value } = e;
    let valid = true;

    if (taskName === "") {
      valid = false;
    }

    if (taskDescription === "") {
      valid = false;
    }

    if (valid) {
      
      Keyboard.dismiss();
      hideModal();
      setTaskList([
        ...taskList,
        { name: taskName, description: taskDescription },
      ]);
      setTaskName("");
      settaskDes("");
      setInputError(false);
    } else {
      setInputError(true);
    }
  };

  // const handleAddTask = () => {
  //   Keyboard.dismiss();
  //   // setTaskItems([...taskItems, taskName]);
  //   taskItems.push(taskName);
  //   setTask(null);
  // };

  const completeTask = (index) => {
    let itemsCopy = [...taskList];
    itemsCopy.splice(index, 1);
    setTask(itemsCopy);
  };

  const removeTask = (index) => {
    console.log('test');
    console.log(index);
  }

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  const showDialog = (visible) => {
    <DialogTaskForm visiblility={visible} />;
  };

  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text>Home!</Text>
    // </View>

    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>All tasks</Text>
          <View style={styles.items}>
            {/* This is where the tasks will go! */}

            {taskList.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  // onPress={() => completeTask(index)}
                >
                  <Task
                    taskName={item.name}
                    taskDescription={item.description}
                    // onRemove={() => console.log('test')}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      {/* <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.writeTaskWrapper}
  >
    <TextInput
      style={styles.input}
      placeholder={"Write a task"}
      value={task}
      onChangeText={(text) => setTask(text)}
    />
    <TouchableOpacity onPress={() => handleAddTask()}>
      <View style={styles.addWrapper}>
        <Text style={styles.addText}>+</Text>
      </View>
    </TouchableOpacity>
  </KeyboardAvoidingView> */}

      <FAB style={styles.fab} icon="plus" onPress={showModal} />

      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          {/* <Text>Example Modal. Click outside this area to dismiss.</Text> */}

          <Card style={styles.cardLogin}>
            <Card.Title
              title="Add New Task"
              titleStyle={{
                alignSelf: "center",
                fontSize: 25,
                fontWeight: "bold",
              }}
            />
            <Card.Content>
              <TextInput
                mode="outlined"
                style={styles.textInput}
                label="TaskName"
                label="Task"
                value={taskName}
                onChangeText={(val) => setTaskName(val)}
                error={inputError}
              />

              <TextInput
                mode="outlined"
                style={styles.textInput}
                name="description"
                label="Task description"
                value={taskDescription}
                onChangeText={(val) => settaskDes(val)}
                error={inputError}
              />

              <Button
                mode="contained"
                style={styles.btn}
                onPress={() => handleInputChange()}
                // onPress={() =>
                //   console.log('tested')
                // }
              >
                Add Task
              </Button>
            </Card.Content>
          </Card>
        </Modal>
      </Portal>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  btn: {
    marginVertical: 5,
    padding: 2,
  },
  addText: {},
});

export default HomeScreen;
