import React, { useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

export default function App() {
  // const [pesquisa, setpesquisa] = useState('');
  // const [videos, setVideos] = useState([]);

  // const pesquisar = async () => { 
  //   try {
  //     const resultados = await buscarVideosYoutube(pesquisa);
  //     setVideos(resultados);
  //   } catch (erro) {
  //     console.error('Erro ao pesquisar vídeos:', erro);
  //   }
  // };

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Routes />
    </NavigationContainer>
  );
  // <KeyboardAvoidingView style={estilos.container}>
  //   <Text>Bem Vindo!</Text>
  //   <Text>Este é seu App de busca tanto no Youtube quanto no Vimeo</Text>
  //   <View style={estilos.containerPesquisa}>
  //     <TextInput
  //       style={estilos.entrada}
  //       placeholder="Digite sua pesquisa"
  //       value={pesquisa}
  //       onChangeText={setpesquisa}
  //     />
  //     <TouchableOpacity style={estilos.botao} onPress={pesquisar}>
  //       <Text style={estilos.textoBotao}>Pesquisar</Text>
  //     </TouchableOpacity>
  //   </View>
  //   <ScrollView style={estilos.scrollView}>
  //     {videos.map(video => (
  //       <View key={video.id.videoId} style={estilos.containerVideo}>
  //         <Text style={estilos.tituloVideo}>{video.snippet.title}</Text>
  //         <WebView
  //           style={estilos.webview}
  //           javaScriptEnabled={true}
  //           domStorageEnabled={true}
  //           source={{ html: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>` }}
  //         />
  //       </View>
  //     ))}
  //   </ScrollView>
  // </KeyboardAvoidingView>
  // );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  containerPesquisa: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#6200ee',
    borderRadius: 8,
    margin: 20,
  },
  entrada: {
    height: 40,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  botao: {
    backgroundColor: '#03dac5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
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