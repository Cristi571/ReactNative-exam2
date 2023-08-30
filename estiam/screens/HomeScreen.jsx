
/**
 * The home screen stands as a controller for the first time app opens
 * This screen will check different application states (user connected, etc)
 * It stands also for the main/home page
 */

import { Image, ImageBackground, Text, View, FlatList, Pressable } from 'react-native';
import React from 'react';
import HomeStyles from '../styles/HomeStyles';

export default function HomeScreen({navigation}) {
    // Fictive data for the initial app
    let userName = "Jack";
    const DATA = [ {
            img: require('../images/node-logo.png'),
            title: 'Title 1',
            details: '5 questions',
        }, {
            img: require('../images/node-logo.png'),
            title: 'Title 2',
            details: '8 questions',
        }, {
            img: require('../images/node-logo.png'),
            title: 'Title 3',
            details: '6 questions',
        }, {
            img: require('../images/node-logo.png'),
            title: 'Title 4',
            details: '12 questions',
        }, {
            img: require('../images/node-logo.png'),
            title: 'Title 5',
            details: '5 questions',
        }, {
            img: require('../images/node-logo.png'),
            title: 'Title 6',
            details: '9 questions',
        }, 
    ];    

    // Create the CardItem component
    const CardItem = ({title, img, details}) => (
        <View style={HomeStyles.cardContainer} >
            <Pressable
            onPress={()=>{
                console.log("Btn clicked")
                // navigation.navigate('QuestScreen', {param})
                navigation.navigate('Quest Screen')
            }}
            >
                <View style={HomeStyles.cardPreview}>
                    <Image source={img} style={HomeStyles.cardPreviewImg} />
                </View>
                
                <View style={HomeStyles.cardBody}>
                    <Text style={HomeStyles.cardTitle} >{ title }</Text>
                    <Text style={HomeStyles.cardDetails} >{ details }</Text>
                </View>
            </Pressable>
        </View>
        
      );

    return (
        <View style={HomeStyles.mainContainer} >
            <View style={HomeStyles.header} >
                <Text style={HomeStyles.wlcmMess} >Hello { userName }</Text>
                <Text style={HomeStyles.qotdMess} >Quel qcm voudrais-tu passer aujourd'hui?</Text>
            </View>


            <FlatList 
                initialNumToRender={12}
                numColumns={2}
                contentContainerStyle={HomeStyles.main}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={DATA}
                renderItem={({item}) =>
                    <CardItem title={item.title} img={item.img} details={item.details} />
                }
            />
        </View>
    )
}