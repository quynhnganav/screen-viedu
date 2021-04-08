import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const App = () => {
  const [ isChoosen, setIsChoosen ] = useState(true);
  return(
    <View style={{backgroundColor: '#f9f9f9', flex: 1, paddingHorizontal: 15}}>
    <View style={{ paddingTop: '15%'}}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
    <TouchableOpacity 
    onPress={() => {setIsChoosen(!isChoosen)}}
    style={isChoosen? 
      {backgroundColor: '#2381f6', borderRadius: 20, padding: 10, paddingHorizontal: 15} :
      {padding: 10, paddingHorizontal: 15}} >
    <Text  style={isChoosen? 
      {color: 'white', fontWeight: 'bold'} :
      {color: '#5a5a5a', fontWeight: 'bold'}}>This month</Text>
    </TouchableOpacity>
    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
    <TouchableOpacity><Text style = {{ color: '#5a5a5a', fontWeight: 'bold' }}>2019</Text></TouchableOpacity>
    <TouchableOpacity>
    <MaterialIcons name="calendar-today" size={25} color="#5a5a5a" style={{ paddingLeft: 20}} />
    </TouchableOpacity>
    </View>
    </View>
    <View style={{ paddingTop: 30}}>
    <Text style={{ textTransform: 'uppercase', color: '#b8b8b8', fontWeight: 'bold'}}>salary balance</Text>
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 15}}>
    <Text style={{ fontWeight: '800', fontSize: 30}}>2092.00</Text>
    <MaterialIcons name="attach-money" size={30} color="black" />
    </View>
    
    </View>
    <View style={{ paddingTop: 20, flexDirection: 'row', alignItems: 'center'}}>
    <View style={{ width: '30%', borderRightColor: '#ccc', borderRightWidth: 1}}>
    <Text style={{ textTransform: 'uppercase', color: '#b8b8b8', fontWeight: 'bold', fontSize: 14}} >bonus</Text>
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5}}>
    <Text style={{ fontWeight: '800'}}>2092.00</Text>
    <MaterialIcons name="attach-money" size={15} color="black" />
    </View>
    </View>
    <View style={{ width: '70%', paddingLeft: 20}}>
    <Text style={{ textTransform: 'uppercase', color: '#b8b8b8', fontWeight: 'bold', fontSize: 14}} >main salary</Text>
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5}}>
    <Text style={{ fontWeight: '800'}}>2092.00</Text>
    <MaterialIcons name="attach-money" size={15} color="black" />
    </View>
    </View>
    </View>
    </View>
    </View>
  )

}

export default App;