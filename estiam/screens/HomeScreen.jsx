
/**
 * The home screen stands as a controller for the first time app opens
 * This screen will check different application states (user connected, etc)
 * It stands also for the main/home page
 */

import { Image, ImageBackground, Text, View, FlatList, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import HomeStyles from '../styles/HomeStyles';

export default function HomeScreen({navigation}) { 
    // Fictive data for the initial app
    let userName = "Jack";    
    // const DATA = [ {
    //         img: require('../images/node-logo.png'),
    //         title: 'Title 1',
    //         details: '5 questions',
    //     }, {
    //         img: require('../images/node-logo.png'),
    //         title: 'Title 2',
    //         details: '8 questions',
    //     }, {
    //         img: require('../images/node-logo.png'),
    //         title: 'Title 3',
    //         details: '6 questions',
    //     }, {
    //         img: require('../images/node-logo.png'),
    //         title: 'Title 4',
    //         details: '12 questions',
    //     }, {
    //         img: require('../images/node-logo.png'),
    //         title: 'Title 5',
    //         details: '5 questions',
    //     }, {
    //         img: require('../images/node-logo.png'),
    //         title: 'Title 6',
    //         details: '9 questions',
    //     }, 
    // ];
    
    const fictData = [
        {
        "id": 1,
        "title": "Débutant Mysql",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries.",
        "image": "http://estiamqcm.davilat.com/images/sql.png",
        "questions": [
        {
        "id": 1,
        "title": "MySQL est un système de gestion de base de données?",
        "answers": [
        {
        "title": "Orienté objet",
        "isCorrect": false
        },
        {
        "title": "Hiérarchique",
        "isCorrect": false
        },
        {
        "title": "Relationnel",
        "isCorrect": true
        },
        {
        "title": "Réseau",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 2,
        "title": "À quoi correspondent les données d’une base de données MySQL?",
        "answers": [
        {
        "title": "Objets",
        "isCorrect": false
        },
        {
        "title": "Tables",
        "isCorrect": true
        },
        {
        "title": "Réseaux",
        "isCorrect": false
        },
        {
        "title": "Systèmes de fichiers",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 3,
        "title": "MySQL est disponible gratuitement? Est-il open source ?",
        "answers": [
        {
        "title": "Vrai",
        "isCorrect": true
        },
        {
        "title": "Faux",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 4,
        "title": "Comment la communication est-elle établie avec le serveur MySQL ?",
        "answers": [
        {
        "title": "SQL",
        "isCorrect": true
        },
        {
        "title": "Des appels réseau",
        "isCorrect": false
        },
        {
        "title": "Un langage de programmation comme C ++",
        "isCorrect": false
        },
        {
        "title": "APIs",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 5,
        "title": "Qu’est-ce qu’un tuple dans une base de données relationnelle ?",
        "answers": [
        {
        "title": "Table",
        "isCorrect": false
        },
        {
        "title": "Ligne",
        "isCorrect": true
        },
        {
        "title": "Colonne",
        "isCorrect": false
        },
        {
        "title": "Objet",
        "isCorrect": false
        }
        ]
        }
        ]
        },
        {
        "id": 2,
        "title": "Les bases de ReactJS",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries.",
        "image": "http://estiamqcm.davilat.com/images/reactjs.png",
        "questions": [
        {
        "id": 1,
        "title": "React est un(e)",
        "answers": [
        {
        "title": "Bibliothèque Javascript",
        "isCorrect": true
        },
        {
        "title": "Framework Javascript",
        "isCorrect": false
        },
        {
        "title": "Les deux A et B sont vrais.",
        "isCorrect": false
        },
        {
        "title": "Aucune de ces réponses n’est vraie.",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 2,
        "title": "ReactJS couvre la",
        "answers": [
        {
        "title": "Couche de données dans une application",
        "isCorrect": false
        },
        {
        "title": "Couche d’interface utilisateur (UI) dans une application",
        "isCorrect": true
        },
        {
        "title": "Les deux A et B sont vrais",
        "isCorrect": false
        },
        {
        "title": "Aucune de ces réponses n’est vraie",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 3,
        "title": "ReactJS utilise _____ pour augmenter les performances",
        "answers": [
        {
        "title": "DOM virtuel",
        "isCorrect": true
        },
        {
        "title": "DOM réel",
        "isCorrect": false
        },
        {
        "title": "Les deux A et B sont vrais.",
        "isCorrect": false
        },
        {
        "title": "Aucune de ces réponses n’est vraie",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 4,
        "title": "React est basé sur _______",
        "answers": [
        {
        "title": "Les modules",
        "isCorrect": false
        },
        {
        "title": "Les services",
        "isCorrect": false
        },
        {
        "title": "Les composants",
        "isCorrect": true
        },
        {
        "title": "Les microservices",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 5,
        "title": "Le state dans react est ________",
        "answers": [
        {
        "title": "Un stockage permanent",
        "isCorrect": false
        },
        {
        "title": "Un stockage interne du composant",
        "isCorrect": true
        },
        {
        "title": "Les deux A et B sont vrais",
        "isCorrect": false
        },
        {
        "title": "Aucune de ces réponses n’est vraie.",
        "isCorrect": false
        }
        ]
        }
        ]
        },
        {
        "id": 3,
        "title": "Initiation à HTML/CSS",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries.",
        "image": "http://estiamqcm.davilat.com/images/html-css.png",
        "questions": [
        {
        "id": 1,
        "title": "Quelle organisation définit les standards Web?",
        "answers": [
        {
        "title": "Apple Inc.",
        "isCorrect": false
        },
        {
        "title": "IBM Corporation",
        "isCorrect": false
        },
        {
        "title": "World Wide Web Consortium",
        "isCorrect": true
        },
        {
        "title": "Microsoft Corporation",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 2,
        "title": "HTML est considéré comme un ______ ?",
        "answers": [
        {
        "title": "Langage de programmation",
        "isCorrect": false
        },
        {
        "title": "Langage POO",
        "isCorrect": false
        },
        {
        "title": "Langage de haut niveau",
        "isCorrect": false
        },
        {
        "title": "Langage de balisage",
        "isCorrect": true
        }
        ]
        },
        {
        "id": 3,
        "title": "HTML utilise des ______?",
        "answers": [
        {
        "title": "Balises définis par l’utilisateur",
        "isCorrect": false
        },
        {
        "title": "Balises prédéfinis",
        "isCorrect": false
        },
        {
        "title": "Balises fixes définis par le langage",
        "isCorrect": true
        },
        {
        "title": "Balises uniquement pour les liens",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 4,
        "title": "Si nous souhaitons définir le style d’un seule élément, quel sélecteur css utiliserons-nous?",
        "answers": [
        {
        "title": "id",
        "isCorrect": true
        },
        {
        "title": "text",
        "isCorrect": false
        },
        {
        "title": "class",
        "isCorrect": false
        },
        {
        "title": "name",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 5,
        "title": "L'attribut HTML qui spécifie un style CSS intégré dans un élément est appelée ____?",
        "answers": [
        {
        "title": "Design",
        "isCorrect": false
        },
        {
        "title": "Style",
        "isCorrect": true
        },
        {
        "title": "Modify",
        "isCorrect": false
        },
        {
        "title": "Define",
        "isCorrect": false
        }
        ]
        }
        ]
        },
        {
        "id": 4,
        "title": "Le langage PHP",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries.",
        "image": "http://estiamqcm.davilat.com/images/php.png",
        "questions": [
        {
        "id": 1,
        "title": "Laquelle des constantes magiques suivantes de PHP renvoie le chemin complet plus le nom du fichier?",
        "answers": [
        {
        "title": "_LINE_",
        "isCorrect": false
        },
        {
        "title": "_FILE_",
        "isCorrect": true
        },
        {
        "title": "_FUNCTION_",
        "isCorrect": false
        },
        {
        "title": "_CLASS_",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 2,
        "title": "Quelles sont les variables qui peuvent recevoir une valeur?",
        "answers": [
        {
        "title": "$5var",
        "isCorrect": false
        },
        {
        "title": "$_var",
        "isCorrect": false
        },
        {
        "title": "$var",
        "isCorrect": false
        },
        {
        "title": "les variables B et C",
        "isCorrect": true
        }
        ]
        },
        {
        "id": 3,
        "title": "Lequel des énoncés suivants est correct à propos de PHP?",
        "answers": [
        {
        "title": "PHP est un acronyme récursif pour « PHP: Hypertext Preprocessor ».",
        "isCorrect": false
        },
        {
        "title": "PHP est un langage de script côté serveur intégré dans HTML.",
        "isCorrect": false
        },
        {
        "title": "Il est utilisé pour gérer le contenu dynamique, les bases de données, le suivi de session, voire même pour construire des sites de e-commerce entiers.",
        "isCorrect": false
        },
        {
        "title": "Toutes les réponses sont vraies",
        "isCorrect": true
        }
        ]
        },
        {
        "id": 4,
        "title": "Laquelle des fonctions suivantes trie un tableau dans l’ordre inverse?",
        "answers": [
        {
        "title": "rsort()",
        "isCorrect": true
        },
        {
        "title": "shuffle()",
        "isCorrect": false
        },
        {
        "title": "reset()",
        "isCorrect": false
        },
        {
        "title": "sort()",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 5,
        "title": "PHP est-il sensible à la casse?",
        "answers": [
        {
        "title": "Vrai",
        "isCorrect": true
        },
        {
        "title": "Faux",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 6,
        "title": "Laquelle des fonctions suivantes permet d’extraire une partie d’un tableau?",
        "answers": [
        {
        "title": "array_reverse()",
        "isCorrect": false
        },
        {
        "title": "array_search()",
        "isCorrect": false
        },
        {
        "title": "array_shift()",
        "isCorrect": false
        },
        {
        "title": "array_slice()",
        "isCorrect": true
        }
        ]
        },
        {
        "id": 7,
        "title": "Laquelle des méthodes suivantes de la classe Exception retourne une chaîne de trace formatée?",
        "answers": [
        {
        "title": "getMessage()",
        "isCorrect": false
        },
        {
        "title": "getCode()",
        "isCorrect": false
        },
        {
        "title": "getTrace()",
        "isCorrect": false
        },
        {
        "title": "getTraceAsString()",
        "isCorrect": true
        }
        ]
        },
        {
        "id": 8,
        "title": "Lequel des mots-clés suivants termine la boucle « for » ou la condition « switch » et transfère l’exécution à l’instruction qui suit immédiatement?",
        "answers": [
        {
        "title": "break",
        "isCorrect": true
        },
        {
        "title": "continue",
        "isCorrect": false
        }
        ]
        }
        ]
        },
        {
        "id": 5,
        "title": "React Native Débutant",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries.",
        "image": "http://estiamqcm.davilat.com/images/react-native.png",
        "questions": [
        {
        "id": 1,
        "title": "Comment créer un nouveau projet React Native avec expo ?",
        "answers": [
        {
        "title": "expo create-project demo",
        "isCorrect": false
        },
        {
        "title": "react-native-expo create demo",
        "isCorrect": false
        },
        {
        "title": "npm create-expo-app demo",
        "isCorrect": false
        },
        {
        "title": "npx create-expo-app demo",
        "isCorrect": true
        }
        ]
        },
        {
        "id": 2,
        "title": "A quoi sert le composant <ScrollView> ?",
        "answers": [
        {
        "title": "Afficher la data d'un array",
        "isCorrect": false
        },
        {
        "title": "Effectuer le scroll pour accéder aux éléments cachés de la page",
        "isCorrect": true
        },
        {
        "title": "Afficher le composant <View>",
        "isCorrect": false
        },
        {
        "title": "Il est utile seulement pour l'optimisation",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 3,
        "title": "A quoi sert le props 'data' dans le composant <FlatList> ?",
        "answers": [
        {
        "title": "Afficher la date",
        "isCorrect": false
        },
        {
        "title": "C'est juste un props facultatif",
        "isCorrect": false
        },
        {
        "title": "Il permet d'accéder à une data de type object",
        "isCorrect": true
        },
        {
        "title": "Pour invoquer une fonction map",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 4,
        "title": "C'est quoi useState ?",
        "answers": [
        {
        "title": "C'est un props",
        "isCorrect": false
        },
        {
        "title": "C'est un hook spécialement conçu pour React Native",
        "isCorrect": false
        },
        {
        "title": "C'est une fonction qui permet de générer une variable d'état locale",
        "isCorrect": true
        },
        {
        "title": "useState est une fonction conçue pour les codeurs américains",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 5,
        "title": "Peut-on utiliser les éléments HTML comme <p> <span> <div> dans une application React-Native?",
        "answers": [
        {
        "title": "Oui",
        "isCorrect": false
        },
        {
        "title": "Non",
        "isCorrect": true
        }
        ]
        },
        {
        "id": 6,
        "title": "Choisissez la bonne réponse pour appliquer un style en React Native",
        "answers": [
        {
        "title": "margin: 9",
        "isCorrect": true
        },
        {
        "title": "margin: '9px'",
        "isCorrect": false
        },
        {
        "title": "margin: 9px",
        "isCorrect": false
        },
        {
        "title": "margin-width: 9",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 7,
        "title": "Quel est la valeur par défaut de la propriété flexDirection appliquée au composant <View> ?",
        "answers": [
        {
        "title": "row",
        "isCorrect": false
        },
        {
        "title": "row-reverse",
        "isCorrect": false
        },
        {
        "title": "column",
        "isCorrect": true
        },
        {
        "title": "column-reverse",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 8,
        "title": "Pourquoi on importe StyleSheet de React Native?",
        "answers": [
        {
        "title": "Car c'est obligatoire uniquement sur les composants en 'arrow function'",
        "isCorrect": false
        },
        {
        "title": "Car c'est un moyen qui permet, via la méthode create(), de créer nos styles dans un objet JavaScript",
        "isCorrect": true
        },
        {
        "title": "Il permet de créer nos propres propriétés CSS",
        "isCorrect": false
        }
        ]
        }
        ]
        },
        {
        "id": 6,
        "title": "JavaScript",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries.",
        "image": "http://estiamqcm.davilat.com/images/js.png",
        "questions": [
        {
        "id": 1,
        "title": "Comment trouvez-vous le nombre avec la plus grande valeur entre « a » et « b »?",
        "answers": [
        {
        "title": "Math.ceil(a, b)",
        "isCorrect": false
        },
        {
        "title": "Math.max(a, b)",
        "isCorrect": true
        },
        {
        "title": "ceil(a, b)",
        "isCorrect": false
        },
        {
        "title": "max(a, b)",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 2,
        "title": "JavaScript est identique à Java?",
        "answers": [
        {
        "title": "Vrai",
        "isCorrect": false
        },
        {
        "title": "Faux",
        "isCorrect": true
        }
        ]
        },
        {
        "id": 3,
        "title": "Quelle méthode renvoie le caractère à l’index spécifié?",
        "answers": [
        {
        "title": "characterAt()",
        "isCorrect": false
        },
        {
        "title": "getCharAt()",
        "isCorrect": false
        },
        {
        "title": "charAt()",
        "isCorrect": true
        },
        {
        "title": "Aucune de ces réponses n’est vraie.",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 4,
        "title": "Le contraire de onmouseover est_____?",
        "answers": [
        {
        "title": "onmouseoff",
        "isCorrect": false
        },
        {
        "title": "onmouseout",
        "isCorrect": true
        },
        {
        "title": "onmouseunder",
        "isCorrect": false
        },
        {
        "title": "onnotmouseover",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 5,
        "title": "Quelle méthode renvoie les caractères d’une chaîne commençant à l’emplacement spécifié?",
        "answers": [
        {
        "title": "substr()",
        "isCorrect": true
        },
        {
        "title": "getSubstring()",
        "isCorrect": false
        },
        {
        "title": "slice()",
        "isCorrect": false
        },
        {
        "title": "Aucune de ces réponses n’est vraie.",
        "isCorrect": false
        }
        ]
        }
        ]
        },
        {
        "id": 7,
        "title": "Git et Github",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries.",
        "image": "http://estiamqcm.davilat.com/images/git.png",
        "questions": [
        {
        "id": 1,
        "title": "Quelle est la commande git qui télécharge votre référentiel de GitHub sur votre ordinateur?",
        "answers": [
        {
        "title": "git push",
        "isCorrect": false
        },
        {
        "title": "git commit",
        "isCorrect": false
        },
        {
        "title": "git fork",
        "isCorrect": false
        },
        {
        "title": "git clone",
        "isCorrect": true
        }
        ]
        },
        {
        "id": 2,
        "title": "Quelle commande est utilisé pour transférer votre code et vos modifications dans GitHub?",
        "answers": [
        {
        "title": "git add",
        "isCorrect": false
        },
        {
        "title": "git upload",
        "isCorrect": false
        },
        {
        "title": "git push",
        "isCorrect": true
        },
        {
        "title": "git status",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 3,
        "title": "Comment initialiser le dépôt local avec git?",
        "answers": [
        {
        "title": "git start",
        "isCorrect": false
        },
        {
        "title": "git init",
        "isCorrect": true
        },
        {
        "title": "git pull",
        "isCorrect": false
        },
        {
        "title": "git clean",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 4,
        "title": "Comment récupérez du code d’un autre repository sur GitHub?",
        "answers": [
        {
        "title": "Forking via l’interface GitHub.",
        "isCorrect": true
        },
        {
        "title": "git pull-request",
        "isCorrect": false
        },
        {
        "title": "git fork",
        "isCorrect": false
        },
        {
        "title": "git clone",
        "isCorrect": false
        }
        ]
        },
        {
        "id": 5,
        "title": "Comment vérifier l’état de votre référentiel local depuis votre dernier commit?",
        "answers": [
        {
        "title": "git check",
        "isCorrect": false
        },
        {
        "title": "git commit",
        "isCorrect": false
        },
        {
        "title": "git diff",
        "isCorrect": false
        },
        {
        "title": "git status",
        "isCorrect": true
        }
        ]
        },
        {
        "id": 6,
        "title": "Comment ajouter des fichiers à un commit?",
        "answers": [
        {
        "title": "git stage",
        "isCorrect": false
        },
        {
        "title": "git commit",
        "isCorrect": false
        },
        {
        "title": "git add",
        "isCorrect": true
        },
        {
        "title": "git reset",
        "isCorrect": false
        }
        ]
        }
        ]
        }
    ]

    const [data, setData] = useState(fictData);
    const [loading, setLoading] = useState(false);
    const endpoint = "http://estiamqcm.davilat.com/api/quizzes";



    // const fetchData = async () => {
    //         try {
    //             console.log("Fetching data from API..");
    //             const resp = await fetch(endpoint);
    //             console.log("Parsing data into a JSON object..");
    //             console.log(resp);
    //             const data = await resp.json();
    //             setData(data);
    //             setLoading(false);
    //             console.log("Fetch call ended.")
    //         } catch (error) {
    //             console.error(error);
    //         }
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // Create the CardItem component
    const CardItem = ({item}) => (
        <View style={HomeStyles.cardContainer} >
            <Pressable onPress={()=> navigation.navigate('Quest', item)} >
                <View style={HomeStyles.cardPreview}>
                    <Image source={{uri: item.image, width: "100%", height: "100%",}} />
                </View>
                
                <View style={HomeStyles.cardBody}>
                    <Text style={HomeStyles.cardTitle} >{ item.title }</Text>
                    <Text style={HomeStyles.cardDetails} >{ item.questions.length } questions</Text>
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

            {loading && <Text>Loading..</Text>}

            {data && (
            <FlatList 
                initialNumToRender={12}
                numColumns={2}
                contentContainerStyle={HomeStyles.main}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={CardItem}
                keyExtractor={(item) => item.id.toString()}
            />
            )}
        </View>
    )
}