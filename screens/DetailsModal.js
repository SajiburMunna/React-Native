import React, { useCallback, useState } from 'react'
import { Text, View,StyleSheet,TextInput, Alert} from 'react-native'; 
import { Switch, TouchableOpacity } from 'react-native-gesture-handler';
 

const DetailsModal = ({navigation}) => {
  const [name,setName]= useState('');
  const [address,setAddress]= useState('');
  const [show ,setShow]=useState(false)

  const handleSubmit=useCallback(()=>{
    if(!name ){
      Alert.alert('Please Enter Your Name and Address');
    }
    else{
      setShow(true);
      
    }
 
  },[name])
  return (
     <View style={styles.container}>
         <Text style={styles.bigBlue}>Enter Your Information</Text>
         <TextInput style={styles.nameField} value={name} onChangeText={setName} placeholder="Enter Your Name" placeholderTextColor="green"  />
         <TextInput style={styles.nameField} value={address} onChangeText={setAddress} placeholder="Enter Your Address" placeholderTextColor="green" />
         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
           <Text style={styles.buttonText}>SUBMIT</Text>
         </TouchableOpacity>
         
         <Switch value={show} onValueChange={setShow}/>
         {

           show &&

<View style={styles.infoContainer}>
<Text style={styles.infoText}>Name: {name}</Text>
<Text style={styles.infoText}>Address: {address}</Text>
</View>

         }
        

     </View>
  )
}
const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      
      padding:10,
    
       
    },
    bigBlue: {
      color: '#03045E',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign:'center', 
      margin:10
      
    },
    nameField:{
      marginBottom:10,
      borderWidth:1,
      borderColor:'#03045E',
      borderRadius:10, 
    } ,
    buttonText:{
      textAlign:"center",
      alignItems:'center',
      padding:10,
      backgroundColor:'#03045E',
      color:'white'
    },
    infoContainer:{
      borderWidth:1,
      borderColor:'#03045E',
      margin:10,
       

    }
    ,
    infoText:{
      fontSize:20,
      color:'#03045E',
      padding:10
      
    },
  });

export default DetailsModal;