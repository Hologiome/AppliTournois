import { StyleSheet, View, Text } from 'react-native';
import ProfilPublic from '../components/ProfilPublic';

export default function ProfilPublicView(props) {
  const paramIdJoueur  = props.route.params.idJoueur;
  return (
    <View style={styles.container}>  
    <ProfilPublic idJoueur={paramIdJoueur}></ProfilPublic>
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