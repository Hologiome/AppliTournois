import { useState, useEffect } from "react";
import { FlatList, View, Image, StyleSheet, Text, TouchableOpacity , Button,TextInput} from "react-native";


export default function AjouterTournois() {
  const [nom_tournois, setNom_tournois] = useState("");
  const [date_tournois, setDate_tournois] = useState("");
  const [recompense, setRecompense] = useState("");
  const [ranks, setRanks] = useState("");
  const [slotes, setSlotes] = useState("");
  const [nom_jeu, setNom_jeu] = useState("");

  
  const handleSubmit =() => {

    try {
      const response =  fetch(
        "https://keran.alwaysdata.net/api/tournois",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
       
          body: JSON.stringify({
            nom_tournois:nom_tournois,
            date_tournois:date_tournois,
            recompense:recompense,
            ranks:ranks,
            slotes:slotes,
            nom_jeu:nom_jeu
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
    <Text style={styles.title}>Nom tournois</Text> 
     <TextInput
          style={styles.input}
          onChangeText={setNom_tournois}
          value={nom_tournois}
          placeholder="Nom tournois"
        />
    <Text style={styles.title}>Date du tournois</Text> 
     <TextInput
          style={styles.input}
          onChangeText={setDate_tournois}
          value={date_tournois}
          placeholder="Date du tournois"
        />
    <Text style={styles.title}>Recompense</Text> 
     <TextInput
        
          style={styles.input}
          onChangeText={setRecompense}
          value={recompense}
          placeholder="Recompense"
        />
    <Text style={styles.title}>Ranks</Text> 
     <TextInput
          style={styles.input}
          onChangeText={setRanks}
          value={ranks}
          placeholder="Ranks"
        />
    <Text style={styles.title}>Nom jeu</Text> 
     <TextInput
          style={styles.input}
          onChangeText={setNom_jeu}
          value={nom_jeu}
          placeholder="Nom jeu"
        />

<Text style={styles.title}>Slotes</Text> 
     <TextInput
          style={styles.input}
          onChangeText={setSlotes}
          value={slotes}
          placeholder="Slotes"
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
