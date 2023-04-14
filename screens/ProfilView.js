import { StyleSheet, View, Text } from 'react-native';
import Profil from '../components/Profil';

export default function ProfilView(props) {
  return (
    <View style={styles.container}>  
    <Profil {...props}></Profil>
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