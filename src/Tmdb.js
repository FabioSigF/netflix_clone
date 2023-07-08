const API_KEY = '02029514bf460de87d0f37958f707b0c';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'upcoming',
        title: 'Próximos Lançamentos',
        items: await basicFetch(`/movie/upcoming?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },      
      {
        slug: 'popular',
        title: 'Populares',
        items: await basicFetch(`/tv/popular?language=pt-BR&api_key=${API_KEY}`)
      },      
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },      
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },      
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },      
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },      
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
      }
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if(movieId){
      switch(type){
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
        break;
        case 'tv': 
          info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
        break;
        default:
          info = null;
        break;
      }
    }
    return info;
  },
  getSeriesList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação e Aventura',
        items: await basicFetch(`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=10759&language=pt-BR`)
      },
      {
        slug: 'animated',
        title: 'Animação',
        items: await basicFetch(`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=16&language=pt-BR`)
      }, 
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=35&language=pt-BR`)
      },
      {
        slug: 'crime',
        title: 'Crime',
        items: await basicFetch(`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=80&language=pt-BR`)
      },
      {
        slug: 'drama',
        title: 'Drama',
        items: await basicFetch(`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=18&language=pt-BR`)
      },
      {
        slug: 'mistery',
        title: 'Mistério',
        items: await basicFetch(`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=9648&language=pt-BR`)
      },
      {
        slug: 'fantasy',
        title: 'Sci-Fi e Fantasia',
        items: await basicFetch(`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=10765&language=pt-BR`)
      },
      {
        slug: 'western',
        title: 'Faroeste',
        items: await basicFetch(`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=37&language=pt-BR`)
      }
    ]
  },
  getMoviesList: async () => {
    return [
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },      
      {
        slug: 'war',
        title: 'Guerra',
        items: await basicFetch(`/discover/movie?&with_genres=10752&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'animated',
        title: 'Animação',
        items: await basicFetch(`/discover/movie?&with_genres=16&language=pt-BR&api_key=${API_KEY}`)
      }, 
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },      
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },      
      {
        slug: 'fiction',
        title: 'Ficção Científica',
        items: await basicFetch(`/discover/movie?&with_genres=878&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'crime',
        title: 'Crime',
        items: await basicFetch(`/discover/movie?&with_genres=80&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'adventure',
        title: 'Aventura',
        items: await basicFetch(`/discover/movie?&with_genres=12&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'drama',
        title: 'Drama',
        items: await basicFetch(`/discover/movie?&with_genres=18&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },      
      {
        slug: 'fantasy',
        title: 'Fantasia',
        items: await basicFetch(`/discover/movie?&with_genres=14&language=pt-BR&api_key=${API_KEY}`)
      }
    ]
  },
  getLatestList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação e Aventura',
        items: await basicFetch(`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=10759&language=pt-BR`)
      },
      {
        slug: 'animated',
        title: 'Animação',
        items: await basicFetch(`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=16&language=pt-BR`)
      }, 
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=35&language=pt-BR`)
      },
      {
        slug: 'crime',
        title: 'Crime',
        items: await basicFetch(`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=80&language=pt-BR`)
      },
      {
        slug: 'drama',
        title: 'Drama',
        items: await basicFetch(`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=18&language=pt-BR`)
      },
      {
        slug: 'mistery',
        title: 'Mistério',
        items: await basicFetch(`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=9648&language=pt-BR`)
      },
      {
        slug: 'fantasy',
        title: 'Sci-Fi e Fantasia',
        items: await basicFetch(`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=10765&language=pt-BR`)
      },
      {
        slug: 'western',
        title: 'Faroeste',
        items: await basicFetch(`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=37&language=pt-BR`)
      },
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'upcoming',
        title: 'Estreias da próxima semana',
        items: await basicFetch(`/movie/upcoming?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'popular',
        title: 'Populares',
        items: await basicFetch(`/tv/popular?language=pt-BR&api_key=${API_KEY}`)
      },  
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      }
    ]
  },
  getAllList: async() => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'upcoming',
        title: 'Próximos Lançamentos',
        items: await basicFetch(`/movie/upcoming?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },      
      {
        slug: 'popular',
        title: 'Populares',
        items: await basicFetch(`/tv/popular?language=pt-BR&api_key=${API_KEY}`)
      },          
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },      
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },      
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },      
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },      
      {
        slug: 'war',
        title: 'Guerra',
        items: await basicFetch(`/discover/movie?&with_genres=10752&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'animated',
        title: 'Animação',
        items: await basicFetch(`/discover/movie?&with_genres=16&language=pt-BR&api_key=${API_KEY}`)
      },      
      {
        slug: 'fiction',
        title: 'Ficção Científica',
        items: await basicFetch(`/discover/movie?&with_genres=878&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'crime',
        title: 'Crime',
        items: await basicFetch(`/discover/movie?&with_genres=80&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'adventure',
        title: 'Aventura',
        items: await basicFetch(`/discover/movie?&with_genres=12&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'drama',
        title: 'Drama',
        items: await basicFetch(`/discover/movie?&with_genres=18&language=pt-BR&api_key=${API_KEY}`)
      },   
      {
        slug: 'fantasy',
        title: 'Fantasia',
        items: await basicFetch(`/discover/movie?&with_genres=14&language=pt-BR&api_key=${API_KEY}`)
      }
    ]
  },
  getKidsList: async () => {
    return [
      {
        slug: 'family',
        title: 'Filmes',
        items: await basicFetch(`/discover/movie?&with_genres=10751&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'kids',
        title: 'Séries',
        items: await basicFetch(`/discover/tv?&with_genres=10762&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'family',
        title: 'Para assistir com a família',
        items: await basicFetch(`/discover/tv?&with_genres=10751&language=pt-BR&api_key=${API_KEY}`)
      }
    ]  
  }
}