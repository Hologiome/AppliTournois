import { useState } from 'react';
import { StyleSheet, TextInput, ScrollView, Image, Button } from 'react-native';

export default function AccueilView(props) {
  const [text, onChangeText] = useState('');
  return (
    <ScrollView style={styles.container}>  
      {/* le logo */}
      <Button 
          color="#24e082"
	        onPress={ () =>	props.navigation.navigate("Inscription")}  title="Inscription">
        </Button>
        <Button 
          color="#24e082"
	        onPress={ () =>	props.navigation.navigate("AjouterTournois")}  title="Ajouter un tournois">
        </Button>
      {/* <Image
          style={styles.image}
          source={require('../assets/themoviedb.png')}
        /> */}
      {/* la zone de saisie du critere */}
        {/* <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="citere de recherche"
        /> */}
        {/* bouton pour passer à la vue "Films" en lui donnont le critere saisi */}
        {/* <Button 
          color="#24e082"
	        onPress={ () =>	props.navigation.navigate("Films",{"critere":text})}  title="Rechercher un film">
        </Button> */}

        <Image
          style={styles.image}
          source="https://cdn.discordapp.com/attachments/885538382976020581/1095328731435896912/2c328a536ed6fd15d1a164b764600afe965b2fea.jpeg"
        />
        <Button 
          color="#AFAFAF"
	        onPress={ () =>	props.navigation.navigate("ListeTournois",{"critere":"?nom_jeu=CS GO"})}  title="CS GO">
        </Button>
        <Image
          style={styles.image}
          source="https://cdn.discordapp.com/attachments/885538382976020581/1095328928471715911/LOL_PROMOART_14.jpg"
        />
        <Button 
          color="#AFAFAF"
	        onPress={ () =>	props.navigation.navigate("ListeTournois",{"critere":"?nom_jeu=League of legends"})}  title="League of Legends">
        </Button>
        <Image
          style={styles.image}
          source="https://cdn.discordapp.com/attachments/885538382976020581/1095328731079393330/Valorant-background-Wallpaper-scaled.webp"
        />
        <Button 
          color="#AFAFAF"
	        onPress={ () =>	props.navigation.navigate("ListeTournois",{"critere":"?nom_jeu=valorant"})}  title="Valorant">
        </Button>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    marginLeft: 100,
    height: 200,
    width:200
  },
});