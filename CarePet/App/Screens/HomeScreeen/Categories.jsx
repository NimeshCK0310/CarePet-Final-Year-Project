import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading'
import Colors from '../../Utils/Colors'
import { useNavigation } from '@react-navigation/native'

export default function Categories() {

    const [categories, setCategories] = useState([])
    const navigation = useNavigation();
    useEffect(()=>{
        getCategories()
    },[])

    // Get Categories List
    const getCategories=()=>{
        GlobalApi.getCategories().then(resp=>{
            setCategories(resp?.categories)
        })
    }

  return (
    <View style ={{marginTop:20}}>
     <Heading text={'Categories'}  isViewAll={true}/>

     <FlatList
      data={categories}
      numColumns={4}
      renderItem={({item,index})=>index<=3&&(
          <TouchableOpacity style={styles.Container}
          onPress={() =>navigation.push('business-list',
          {category:item.name})}>
            <View style={styles.iconContainer}>
              <Image source={{uri:item?.icon?.url}} 
              style={{width:30,height:30}}/>
            </View>
            <Text style={{textAlign:'center', fontFamily:'outfit-medium',marginTop:5}}>{item?.name}</Text>
          </TouchableOpacity>

      )}
     />
    </View>
  )
}

const styles = StyleSheet.create({

  Container:{
      flex:2,
      alignItems:'center',
  },

  iconContainer:{
      backgroundColor:Colors.Light_Gray,
      padding:17,
      borderRadius:99,
  }
})



