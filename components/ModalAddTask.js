import * as React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  

} from "react-native";
import { Modal, Portal, Text, Button,  Provider } from 'react-native-paper';

const ModalAddTask = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Provider>
      <Text style= {styles.sectionTitle}>Completed tasks</Text>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
          
        </Modal>
      </Portal>
      <Button style={{marginTop: 30}} onPress={showModal}>
        Show
      </Button>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  sectionTitle: {
    margin: 15,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ModalAddTask;