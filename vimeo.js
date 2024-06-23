import axios from 'axios';

const API_KEY_VIMEO = 'a9d208c9f0c700aca814ebd6eec41684';

export const BuscarVideosVimeo = async (query) => {
  try {
    const pesquisa = await axios.get('https://api.vimeo.com/videos', {
      params: {
        query: query,
        per_page: 10,
      },
      headers: {
        Authorization: `Bearer ${API_KEY_VIMEO}`
      }
    });
    return pesquisa.data.data; 
  } catch (erro) {
    console.error('Erro ao buscar vídeos do Vimeo:', erro);
    throw erro;
  }
};