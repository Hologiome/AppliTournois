import { StyleSheet, View, Text } from 'react-native';
import EditProfil from '../components/EditProfil';

export default function EditProfilView(props) {
  const paramInfoJoueur  = props.route.params.infoJoueur;
  return (
    <View style={styles.container}>  
    <EditProfil infoJoueur={paramInfoJoueur}></EditProfil>
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