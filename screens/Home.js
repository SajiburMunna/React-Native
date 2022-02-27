import React from 'react'
import { Text, View,StyleSheet,TouchableOpacity} from 'react-native'; 
const Home = ({navigation}) => {
  return (
     <View style={styles.container}>
         <TouchableOpacity onPress={()=>{navigation.navigate('Details')}}>
         <Text style={styles.bigBlue}>Show Details</Text>

         </TouchableOpacity>
        
     </View>
  )
}
const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign:'center',
      borderWidth: 2,
      margin:10
      
    } 
  });
   

export default Home