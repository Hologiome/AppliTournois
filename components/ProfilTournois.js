import { useState, useEffect } from "react";
import { FlatList, View, Image, StyleSheet, Text, TouchableOpacity , Button} from "react-native";



export default function ProfilTournois(props) {
  const url = "https://keran.alwaysdata.net/api/tournois/"+ props.idTournois;
  const [profilTournois, setProfilTournois] = useState([]);
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
        setProfilTournois(dataJSON);
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
                            uri : "https://editors.dexerto.com/wp-content/uploads/2023/03/21/csgo-new-logo-counter-strike.jpg" 
                                 
                            
                        }} 
                        style={styles.image}></Image>
                </View>
                <View style={styles.item}> 
                    <Text style={styles.title}>{profilTournois.nom_tournois}</Text>
                    <Text style={styles.title}>Slotes :{profilTournois.slotes}</Text>
                    <Text style={styles.title}> Ranks :{profilTournois.ranks}</Text>
                    <Text style={styles.title}> recompense :{profilTournois.recompense}</Text>
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

