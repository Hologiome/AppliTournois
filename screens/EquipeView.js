import { StyleSheet, Text, View, Image } from 'react-native';
import EquipesList from '../components/EquipesList';

export default function EquipeView(props) {
 
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Liste des equipes</Text>
        <EquipesList {...props}></EquipesList>
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
});