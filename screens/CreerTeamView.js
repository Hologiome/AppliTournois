import { StyleSheet, View, Text } from 'react-native';
import CreerTeam from '../components/CreerTeam';

export default function CreerTeamView(props) {
  const paramInfoJoueur  = props.route.params.infoJoueur;
  return (
    <View style={styles.container}>  
    <CreerTeam infoJoueur={paramInfoJoueur}></CreerTeam>
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