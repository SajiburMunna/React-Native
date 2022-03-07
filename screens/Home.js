import React from 'react'
import { Text, View,StyleSheet,TouchableOpacity,Image, Button} from 'react-native'; 
import DatePicker from 'react-native-date-ranges';
const Home = ({navigation}) => {
const  customButton = (onConfirm) => (
  
  // <Text onPress={onConfirm} style={styles.bigBlue}>Go To</Text> 
  <Button
  onPress={onConfirm}
  color="#635bff"
  
 title='SUBMIT'
 accessibilityLabel="Learn more about this purple button"

/>
)


  return (
     <View style={styles.container}>
       
       <Image source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
   style = {{ width: 200, height: 200,alignItems:'center' }}
   />
         <TouchableOpacity onPress={()=>{navigation.navigate('Counter')}}>
         
         </TouchableOpacity>
         
         <DatePicker
         style={{backgroundColor:"white",color:'black',	borderWidth: 2,borderRadius: 5, textAlign: "start", width:300

        }}
        
     
    customStyles = { {
     
        placeholderText:{ fontSize:20 ,color:'white',},  
        headerStyle : { display:'none' },        
        headerMarkTitle : {display:'none'},  
        headerDateTitle: {display:'none'},  
         
    } }  
      
    allowFontScaling = {false}  
    placeholder={ <View style={{flex:1 ,flexDirection:'row',justifyContent:'space-between'} }><Text style={{color:'black',marginRight:30}}>Filter</Text><Text style={{color:'black',marginLeft:150}}>Hello</Text></View>}
    mode={'range'}
    selectedBgColor={'#635bff'}
   
    customButton={customButton} 

/>
     </View>
  )
}
const styles = StyleSheet.create({
    
    bigBlue: { 
      borderRadius:10,
      backgroundColor:"#635bff",
      color:'#635bff'
     
      
    } 
  });
   

export default Home