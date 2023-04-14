import { StyleSheet, View, Text } from 'react-native';
import EquipeProfil from '../components/EquipeProfil';
import MembreEquipe from '../components/MembreEquipe';

export default function EquipeProfilView(props) {
  const paramIdEquipe  = props.route.params.idEquipe;
  return (
    <View style={styles.container}>  
    <EquipeProfil style={styles.jolie} idEquipe={paramIdEquipe}></EquipeProfil>
    <Text style={styles.title}>Joueurs</Text>
    <MembreEquipe idEquipe={paramIdEquipe} {...props}></MembreEquipe>
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