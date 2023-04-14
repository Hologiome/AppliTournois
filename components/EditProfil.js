import { useState, useEffect } from "react";
import { FlatList, View, Image, StyleSheet, Text, TouchableOpacity , Button,TextInput} from "react-native";


export default function Inscription(props) {

  const [pseudo, setPseudo] = useState(props.infoJoueur.pseudo);
  const [email, setEmail] = useState(props.infoJoueur.email);
  const [img, setImg] = useState(props.infoJoueur.img);

 
  
  const handleSubmit =() => {
    try {
      const response =  fetch(
        "https://keran.alwaysdata.net/api/joueur",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
       
          body: JSON.stringify({
            id_joueur: props.infoJoueur.id_joueur,
            pseudo:pseudo,
            email:email,

            img:img
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
    <Text style={styles.title}>Pseudo</Text> 
     <TextInput
          style={styles.input}
          onChangeText={setPseudo}
          value={pseudo}
          placeholder={props.infoJoueur.pseudo}
        />
    <Text style={styles.title}>Email</Text> 
     <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder={props.infoJoueur.email}
        />
    <Text style={styles.title}>Image</Text> 
     <TextInput
          style={styles.input}
          onChangeText={setImg}
          value={img}
          placeholder={props.infoJoueur.img}
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
