import { useState, useEffect } from "react";
import { FlatList, View, Image, StyleSheet, Text, TouchableOpacity , Button,TextInput} from "react-native";


export default function Inscription(props) {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [img, setImg] = useState("");

  
  const handleSubmit =() => {
    try {
      const response =  fetch(
        "https://keran.alwaysdata.net/api/joueur"+props.idJoueur,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
       
          body: JSON.stringify({
            id_joueur:1,
            pseudo:pseudo,
            email:email,
            mdp:mdp,
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
          placeholder="Pseudo"
        />
    <Text style={styles.title}>Email</Text> 
     <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
    <Text style={styles.title}>Mot de passe</Text> 
     <TextInput
        secureTextEntry={true}
          style={styles.input}
          onChangeText={setMdp}
          value={mdp}
          placeholder="Mot de passe"
        />
    <Text style={styles.title}>Image</Text> 
     <TextInput
          style={styles.input}
          onChangeText={setImg}
          value={img}
          placeholder="Image"
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
