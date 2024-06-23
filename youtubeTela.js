import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import { BuscarVideosYoutube } from './youtube';
import { BuscarVideosVimeo } from './vimeo';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView, KeyboardAvoidingView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons/';

export default function YouTube() {
    const [videosYoutube, setVideosYoutube] = useState([]);
    const [pesquisa, setpesquisa] = useState('');

    const pesquisar = async () => {
        try {
            const resultadosYoutube = await BuscarVideosYoutube(pesquisa);
            setVideosYoutube(resultadosYoutube);
        } catch (erro) {
            console.error('Erro ao pesquisar vídeos:', erro);
        }
    };

    return (
        <KeyboardAvoidingView style={estilos.container}>
            <View style={estilos.tituloPag}>
                <Image style={estilos.logo} source={require('./assets/youtubeLogo.png')} />
                <Text style={estilos.textoTitulo}>Youtube</Text>
            </View>

            <View style={estilos.entrada}>
                <TextInput style={estilos.areaPesquisa }
                    placeholder="Digite sua pesquisa"
                    placeholderTextColor={"gray"}
                    value={pesquisa}
                    onChangeText={setpesquisa}
                />
                <TouchableOpacity onPress={pesquisar}>
                    <Ionicons size={25} color={"#fff"} name="search" />
                </TouchableOpacity>
            </View>

            <ScrollView style={estilos.scrollView}>
                {videosYoutube.map(video => (
                    <View key={video.id.videoId} style={estilos.containerVideo}>
                        <Text style={estilos.tituloVideo}>{video.snippet.title}</Text>
                        <WebView
                            style={estilos.webview}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            source={{ html: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>` }}
                        />
                    </View>
                ))}
            </ScrollView>
        </ KeyboardAvoidingView >
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#f5f5f5',
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: "#000",
    },
    tituloPag: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        margin: 0,
    },
    logo: {
        marginRight: 10,
    },
    textoTitulo: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    texto: {
        color: "#fff",
    },
    entrada: {
        width: '90%',
        height: 60,
        color: '#fff',
        borderRadius: 25,
        paddingHorizontal: 20,
        marginRight: 10,
        borderWidth: 1,
        borderColor: "#fff",
        marginVertical: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    areaPesquisa: {
        color: '#fff',
        width: '90%',
    },
    botao: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
        width: "70%",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 20,
    },
    containerVideo: {
        marginBottom: 20,
        backgroundColor: '#252525',
        borderRadius: 10,
      },
      tituloVideo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff',
        padding: 10,
      },
      webview: {
        width: '100%',
        height: '100%',
        aspectRatio: 16 / 9,
        backgroundColor: '#252525',
      }
});