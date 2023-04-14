import { StyleSheet, View, Text } from 'react-native';
import EditProfil from '../components/EditProfil';

export default function EditProfilView(props) {
  const paramIdJoueur  = props.route.params.idJoueur;
  return (
    <View style={styles.container}>  
    <EditProfil idJoueur={paramIdJoueur}></EditProfil>
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