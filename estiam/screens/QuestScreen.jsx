
/**
 * This screen allows to do some training tests
 */
import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView, Pressable } from 'react-native';
import QuestStyles from '../styles/QuestStyles';

export default function QuestScreen({navigation, route}) {
    const qData = route.params.questions;

    const [score, setScore] = useState(0);
    const [currentQ, setCurrentQ] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [selectedBtnId, setSelectedBtnId] = useState();
    const [quizFinish, setQuizFinish] = useState(false);

    navigation.setOptions({ title: route.params.title, });

    // Create the answer button component
    _answerBtn = (item, index) => { return (
        <Pressable 
        onPress={()=> (
            setSelectedAnswer(item.title),
            setSelectedBtnId(index)
        )}
        style={selectedAnswer === item.title 
            ? QuestStyles.answerBtnSelected 
            : QuestStyles.answerBtnStandard}
        >
            <Text style={selectedAnswer === item.title 
                ? QuestStyles.answerTitleSelected 
                : QuestStyles.answerTitleStandard} >{ item.title }
            </Text>
        </Pressable>
    )};


    const checkAnswer = () => {

        qData[currentQ].answers[selectedBtnId].isCorrect === true 
        & currentQ+1<qData.length
        ? setScore(score+1)
        : setScore(score)

        currentQ+1<qData.length
        ? setCurrentQ(currentQ+1)
        : setQuizFinish(true)
    }

    return (
        <>
        {!quizFinish && 
        <View style={QuestStyles.body} >
            <View style={QuestStyles.header} >
                <Text style={QuestStyles.qCount} >
                    Question: {currentQ+1}/{qData.length}
                </Text>
                <Text style={QuestStyles.qScore} >
                    Score : {score}
                </Text>
            </View>
            <View style={QuestStyles.main} >
                <Text style={QuestStyles.qTitle} >{qData[currentQ].title}</Text>

                <SafeAreaView style={QuestStyles.answerSafeArea} >
                    <FlatList 
                        initialNumToRender={10}
                        numColumns={1}
                        contentContainerStyle={QuestStyles.answerBlock}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={qData[currentQ].answers}
                        renderItem={({ item, index }) => this._answerBtn(item, index)}
                        keyExtractor={(item) => item.title.toString()}
                        
                    />
                </SafeAreaView>
            </View>

            <View style={QuestStyles.footer} >
                <Pressable 
                style={QuestStyles.submitBtn} 
                onPress={checkAnswer}>
                    <Text style={QuestStyles.submitBtnLabel} >Valider</Text>
                </Pressable>
            </View>
        </View>
        }


        {quizFinish && 
        <View style={QuestStyles.body} >
            <View style={QuestStyles.header} >
                <Text>
                    Quiz terminé
                </Text>
            </View>

            <View style={QuestStyles.scoreMain} >
                <Text style={QuestStyles.scoreText} >Score final</Text>
                <Text style={QuestStyles.scoreText} >{score} points</Text>
            </View>

            <View style={QuestStyles.footer} >
                <Pressable 
                style={QuestStyles.submitBtn} 
                    onPress={()=> (
                        setScore(0),
                        setCurrentQ(0),
                        setSelectedAnswer(''),
                        setSelectedBtnId(),
                        setQuizFinish(false),
                        navigation.navigate('Home'))} >
                    <Text style={QuestStyles.submitBtnLabel} >Continuer</Text>
                </Pressable>
            </View>
        </View>
        }   
        </>
    )
}