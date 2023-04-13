
import { StyleSheet, View, Text } from 'react-native';
import Equipe from '../components/Equipe';

export default function EquipeView(props) {
  return (
    <View style={styles.container}>  
    <Equipe></Equipe>
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