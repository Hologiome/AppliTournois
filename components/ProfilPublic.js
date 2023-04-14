import { useState, useEffect } from "react";
import { FlatList, View, Image, StyleSheet, Text, TouchableOpacity , Button} from "react-native";



export default function Profil(props) {
  const url = "https://keran.alwaysdata.net/api/joueur/" + props.idJoueur
  const fetchOptions = { method: "GET" };
  // -- state = liste des personnes
  const [infoJoueur, setJoueur] = useState({});
  

  // -- requete initiala
  useEffect(() => {
    getDatas()
  }, []);

  // -- req AJAX = la 1ère et les suivantes en gérant le num de page
  function getDatas() {
    fetch(url, fetchOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((dataJSON) => {
        setJoueur(dataJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <View style={styles.container}>  
    <Image source={ { uri : infoJoueur.img}} style={styles.image}></Image>
    <View style={styles.item}> 
          <Text style={styles.title}>{infoJoueur.pseudo}</Text>
          <Text >{infoJoueur.date_inscription}</Text>
    </View>
    <View > 
          <Text >Points : {infoJoueur.point}</Text>
          <Text >Match Win : {infoJoueur.win}</Text>
          <Text >Tournois Win : {infoJoueur.win}</Text>
    </View>
    <Text style={styles.title}>Teams</Text>
    
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
    
  });

