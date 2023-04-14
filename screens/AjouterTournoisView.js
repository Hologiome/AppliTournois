import { StyleSheet, View, Text } from 'react-native';
import AjouterTournois from '../components/AjouterTournois';

export default function AjouterTournoisView() {
  return (
    <View style={styles.container}>  
    <AjouterTournois></AjouterTournois>
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