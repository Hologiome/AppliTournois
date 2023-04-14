import { StyleSheet, View, Text } from 'react-native';
import Inscription from '../components/Inscription';

export default function InscriptionView() {
  return (
    <View style={styles.container}>  
    <Inscription></Inscription>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});