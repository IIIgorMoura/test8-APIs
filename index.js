import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import { BuscarVideosYoutube } from './youtube';
import { BuscarVideosVimeo } from './vimeo';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    const [pesquisa, setpesquisa] = useState('');
    const [videosYoutube, setVideosYoutube] = useState([]);
    const [videosVimeo, setVideosVimeo] = useState([]);

    const pesquisar = async () => {
        try {
            const resultadosYoutube = await BuscarVideosYoutube(pesquisa);
            const resultadosVimeo = await BuscarVideosVimeo(pesquisa);
            setVideosYoutube(resultadosYoutube);
            setVideosVimeo(resultadosVimeo)
        } catch (erro) {
            console.error('Erro ao pesquisar vídeos:', erro);
        }
    };

    return (
        <KeyboardAvoidingView style={estilos.container}>
            <Text style={estilos.textoTitulo}>Bem Vindo!</Text>
            <Text style={estilos.texto}>Pesquise tanto no Vimeo quanto no Youtube</Text>
            <TextInput
                style={estilos.entrada}
                placeholder="Digite sua pesquisa"
                placeholderTextColor={"gray"}
                value={pesquisa}
                onChangeText={setpesquisa}
            />

            <TouchableOpacity style={estilos.botao} onPress={() => { pesquisar ; navigation.navigate('Youtube') ; navigation.navigate('RotaInterna')}}>
                <Image source={require('./assets/youtubeLogo.png')} />
                <Text style={estilos.textoBotao}>Buscar no Youtube</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.botao} onPress={() => { pesquisar ; navigation.navigate('Vimeo') ; navigation.navigate('RotaInterna')}}>
                <Image source={require('./assets/vimeoLogo.png')} />
                <Text style={estilos.textoBotao}>Buscar no Vimeo</Text>
            </TouchableOpacity>

            {/* <ScrollView style={estilos.scrollView}>
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
            </ScrollView> */}
        </KeyboardAvoidingView>
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
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    tituloVideo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    webview: {
        width: '100%',
        aspectRatio: 16 / 9,
    }
});