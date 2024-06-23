import axios from 'axios';

const API_KEY_YOUTUBE = 'AIzaSyD36Bn6BKLPz8AdMSyxT2fALm-VOflpI8U';

export const BuscarVideosYoutube = async (query) => {
  try {
    const pesquisa = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: query,
        part: 'snippet',
        maxResults: 10,
        type: 'video',
        key: API_KEY_YOUTUBE,
      },
    });
    return pesquisa.data.items;

  } catch (erro) {
    console.error('Erro ao buscar vídeos do YouTube:', erro);
    throw erro;
  };
};
