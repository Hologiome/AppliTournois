import { StyleSheet, View, Text } from 'react-native';
import ProfilTournois from '../components/ProfilTournois';


export default function ProfilTournoisView(props) {
  const paramIdTournois  = props.route.params.idTournois;
  return (
    <View style={styles.container}>  
    <ProfilTournois idTournois={paramIdTournois}></ProfilTournois>
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
  title: {
    fontSize: 20,
  },
  title: {
    marginTop:50,
  },

});