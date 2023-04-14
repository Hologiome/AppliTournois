import { useState, useEffect } from "react";
import { FlatList, View, Image, StyleSheet, Text, TouchableOpacity , Button} from "react-native";


export default function ListeTournois(props) {
    const url = "https://keran.alwaysdata.net/api/tournois";
    const [listeTournois, setTournois] = useState([]); 
  const fetchOptions = { method: "GET" };
  

  // -- requete initiala
  useEffect(() => {
    getDatas()
  }, [props.pcritere]);

  // -- req AJAX = la 1ère et les suivantes en gérant le num de page
  function getDatas() {
    fetch(url + props.pcritere, fetchOptions)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        setTournois(dataJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  
  return (
    <FlatList
    data={listeTournois}
    keyExtractor={ (tournois) => tournois.id_tournois.toString() }
    renderItem={({item}) => {
      console.log(item)
        return(
          <TouchableOpacity
              onPress={ () =>	props.navigation.navigate("ProfilTournois", {idTournois:item.id_tournois})}>

                <View style={styles.item}> 
                  <Image 
                        source={ { 
                            uri : "https://editors.dexerto.com/wp-content/uploads/2023/03/21/csgo-new-logo-counter-strike.jpg" 
                                 
                            
                        }} 
                        style={styles.image}></Image>
                </View>
                <View style={styles.item}> 
                    <Text style={styles.title}>{item.nom_tournois}</Text>
                    <Text style={styles.title}>{item.date_tournois}</Text>
                    <Text style={styles.title}> Points :{item.slotes}</Text>
                </View>
          </TouchableOpacity>
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

