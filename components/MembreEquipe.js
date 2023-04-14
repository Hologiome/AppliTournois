import { useState, useEffect } from "react";
import { FlatList, View, Image, StyleSheet, Text, TouchableOpacity , Button} from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function MembreEquipe(props) {
  const url = "https://keran.alwaysdata.net/api/appartenir/"+ props.idEquipe;
  const [membreEquipe, setMembreEquipe] = useState([]);
  const fetchOptions = { method: "GET" };
  const taille = 50;
  // -- requete initiala
  useEffect(() => {
    getDatas()
  }, []);

  // -- req AJAX = la 1ère et les suivantes en gérant le num de page
  function getDatas() {
    fetch(url, fetchOptions)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        setMembreEquipe(dataJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  
  return (
    <FlatList
    data={membreEquipe}
    keyExtractor={ (equipe) => equipe.id_equipe.toString() } 
    renderItem={({item}) => {
      console.log(item)
        return(
        <View style={styles.container}>
          <TouchableOpacity 
              onPress={ () =>	props.navigation.navigate("ProfilPublic", {idJoueur:item.id_joueur})}>
                
                <View style={styles.item}> 
                <Image 
                        source={ { 
                            uri : item.img
                                 
                            
                        }} 
                        style={styles.image2}></Image>
                </View>
                
                <View style={styles.item}> 
                    <Text style={styles.title}>{item.pseudo}</Text>
                </View>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={ () =>	props.navigation.navigate("ProfilPublic", {idJoueur:item.id_joueur})}>
                
                <View style={styles.item}> 
                <Ionicons name="close-outline"  size={taille}/>
                </View>
                
                
          </TouchableOpacity>
          </View>
        )
      }
    }
    />
        

  )}



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
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
    image2: {
        width: 100,
        height: 100,
        margin: 5,
        
        backgroundColor: 'gray'
      },
    title: {
      fontSize: 20,
    },
    
  });

