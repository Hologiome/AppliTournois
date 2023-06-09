
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import AccueilView from './screens/AccueilView'
import FilmsView from './screens/FilmsView'
import DetailView from './screens/DetailView'
import EquipeView from './screens/EquipeView'
import ProfilView from './screens/ProfilView'
import EquipeProfilView from './screens/EquipeProfilView'
import ListeTournoisView from './screens/ListeTournoisView'
import InscriptionView from './screens/InscriptionView'
import AjouterTournoisView from './screens/AjouterTournoisView'
import EditProfilView from './screens/EditProfilView'
import CreerTeamView from './screens/CreerTeamView'
import ProfilPublicView from './screens/ProfilPublicView'
import ProfilTournoisView from './screens/ProfilTournoisView'

// --  navigation principale = TabBar
export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          headerShown: false 
        })}
      >
        <Tab.Screen 
        name="Search films" 
        component={FilmsScreen} 
        options={{
          tabBarLabel: 'Tournois',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen 
        name="Profil" 
        component={ProfilScreen} 
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen 
        name="Equipe" 
        component={EquipeScreen} 
        options={{
          tabBarLabel: 'Equipe',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" color={color} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// -- parie 1 = recherche de films
function FilmsScreen() {
  const Stack = createNativeStackNavigator();
  return (      
  <Stack.Navigator>
    {/* la navigation doit se faire uniquement entre des View*/}
    <Stack.Screen name="Accueil" component={AccueilView} />
    <Stack.Screen name="Films" component={FilmsView} />
    <Stack.Screen name="Detail" component={DetailView} />
    <Stack.Screen name="ListeTournois" component={ListeTournoisView} />
    <Stack.Screen name="Inscription" component={InscriptionView} />
    <Stack.Screen name="AjouterTournois" component={AjouterTournoisView} />
    <Stack.Screen name="ProfilTournois" component={ProfilTournoisView} />
  </Stack.Navigator>
  )
}
// -- classement des acteurs (le top10...)
function EquipeScreen() {
  const StackTop10 = createNativeStackNavigator();
  return (      
  <StackTop10.Navigator>
    <StackTop10.Screen name="Top" component={EquipeView} />
    <StackTop10.Screen name="EquipeProf" component={EquipeProfilView} />
    <StackTop10.Screen name="ProfilPublic" component={ProfilPublicView} />
  </StackTop10.Navigator>
  )
}

function ProfilScreen() {
  const StackProfil = createNativeStackNavigator();
  return (      
  <StackProfil.Navigator>
    <StackProfil.Screen name="Info" component={ProfilView} />
    <StackProfil.Screen name="EditProfil" component={EditProfilView} />
    <StackProfil.Screen name="CreerTeam" component={CreerTeamView} />
  </StackProfil.Navigator>
  )
}