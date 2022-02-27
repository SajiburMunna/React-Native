import React from 'react'
import { Text, View,StyleSheet} from 'react-native'; 

const Details = () => {
  return (
     <View style={styles.container}>
         <Text style={styles.bigBlue}>I am Sajibur Munna</Text>
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
      margin:10
      
    } 
  });

export default Details