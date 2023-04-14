import { useState, useEffect } from "react";
import { FlatList, View, Image, StyleSheet, Text, TouchableOpacity , Button,TextInput} from "react-native";


export default function CreerTeam(props) {

  const [nom_equipe, setNom_equipe] = useState("");
 
  
  const handleSubmit =() => {
    try {
      const response =  fetch(
        "https://keran.alwaysdata.net/api/equipe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
       
          body: JSON.stringify({
            capitaine: props.infoJoueur.id_joueur,
            nom_equipe:nom_equipe
          })
        }
      );
    //   const data =response.json();
    //   console.log(data);
    //   alert("Inscription rÃ©ussie");
    } catch (error) {
    //   console.error(error);
      alert("Erreur lors de l'inscription");
    }
  };

  
  
  return (
   
    <View style={styles.container}> 
    <Text style={styles.title}>Nom de l'équipe</Text> 
     <TextInput
          style={styles.input}
          onChangeText={setNom_equipe}
          value={nom_equipe}
          placeholder="Nom"
        />


        <Button
            style={styles.input}
            color="#24e082"
            title="valider"
            onPress={handleSubmit}
            />
   
    </View>
    

  )}



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 200,
      margin: 5,
      backgroundColor: 'gray'
    },
    title: {
      fontSize: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    
  });
