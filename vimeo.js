import axios from 'axios';

const API_KEY_VIMEO = '4273ef75cb4b9129a4d47e7cdf0b2ef855ae7710';

export const BuscarVideosVimeo = async (query) => {
  try {
    const pesquisa = await axios.get('https://api.vimeo.com/videos', {
      params: {
        q: query,
        part: 'snippet',
        maxResults: 10,
        type: 'video',
        key: API_KEY_VIMEO,
      },
    });
    return pesquisa.data.items;
  } catch (erro) {
    console.error('Erro ao buscar vídeos do YouTube:', erro);
    throw erro;
  }
};