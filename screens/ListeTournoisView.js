import { StyleSheet, Text, View, Image } from 'react-native';
import ListeTournois from '../components/ListeTournois';

export default function ListeTournoisView(props) {
  // -- récupérer le critere saisi dans le formulaire et transmis par le router
  const critere  = props.route.params.critere;
  
  return (
    <View style={styles.container}>
        <Text>Liste des Tournois {critere}s</Text>
        {/* afficher le composant qui va faire la recherche et afficher les résultats */}
        <ListeTournois pcritere={critere} {...props}></ListeTournois>
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