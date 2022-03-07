import React, { useCallback, useState,useEffect } from 'react'
import {View,Text,SafeAreaView,StyleSheet,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native'
 

const Counter = ({navigation}) => {
    const [count,setCount] =useState(0);
   

    const increaseHandel=useCallback(()=>{
        console.log('count start') 
        setCount(count+1); 
    },[count])

    const [palettes, setPalettes] = useState([]);
    

const handleFetchPalettes = useCallback(async () => {
  const response = await fetch("https://color-palette-api.kadikraman.now.sh/palettes");
  if (response.ok) {
    const palettes = await response.json();
    setPalettes(palettes);
    console.log(palettes)
  }
}, []);

useEffect(() => {
  handleFetchPalettes();
}, []);


const FOODS = [
    'Apples',
    'Broccoli',
    'Cookies',
    'Doritos',
    'Eclairs'
  ];
  
     
   
    
  return (
      <SafeAreaView>
          <Text style={styles.textContainer}>Count :{count} </Text>
      <View style={styles.container}>
          <TouchableOpacity onPress={increaseHandel}> 
          <Text style={styles.textContainer}>
              Increment(+)
          </Text>
          </TouchableOpacity>
         <TouchableOpacity onPress={()=>setCount(count-1)}>
          <Text style={styles.textContainer}>
              Decrement (-)
          </Text>
          </TouchableOpacity>
      </View>

      <FlatList
      style={{ padding: 20,backgroundColor:'#9ADCFF',marginBottom:20}}
      ListEmptyComponent={<ActivityIndicator size="large" color="red" />}
      data={palettes}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <View>
        <TouchableOpacity onPress={()=>navigation.navigate('DetailsModal')}>

        <Text style={styles.textContainer}>{item.paletteName}</Text>

        </TouchableOpacity>
     
      { item.colors.map((color, key2) => {
              return <Text style={{marginBottom:20}} key={key2}>{color.colorName}</Text>
            })}
      </View> 
      
    }
    />
     
      </SafeAreaView>
     
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    textContainer:{
        textAlign:'center',
        fontSize:20, 
        backgroundColor:'white',
        margin:10,
    }
  });

export default Counter