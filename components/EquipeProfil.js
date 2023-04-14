import { useState, useEffect } from "react";
import { FlatList, View, Image, StyleSheet, Text, TouchableOpacity , Button} from "react-native";



export default function EquipeProfil(props) {
  const url = "https://keran.alwaysdata.net/api/equipe/"+ props.idEquipe;
  const [listeEquipe, setEquipe] = useState([]);
  const fetchOptions = { method: "GET" };
  

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
        setEquipe(dataJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  
  return (
    <View style={styles.container}>  
    <View style={styles.item}> 
                  <Image 
                        source={ { 
                            uri : "https://ggscore.com/media/logo/t64714.png?94" 
                                 
                            
                        }} 
                        style={styles.image}></Image>
                </View>
                <View style={styles.item}> 
                    <Text style={styles.title}>{listeEquipe.nom_equipe}</Text>
                    <Text style={styles.title}>{listeEquipe.date_creation}</Text>
                    <Text style={styles.title}> Points :{listeEquipe.points}</Text>
    </View>
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

