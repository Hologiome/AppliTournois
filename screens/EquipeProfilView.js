import { StyleSheet, View, Text } from 'react-native';
import EquipeProfil from '../components/EquipeProfil';

export default function EquipeProfilView(props) {
  const paramIdEquipe  = props.route.params.idEquipe;
  return (
    <View style={styles.container}>  
    <EquipeProfil idEquipe={paramIdEquipe}></EquipeProfil>
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