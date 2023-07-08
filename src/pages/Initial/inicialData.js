import bgSectionOne from '../../imgs/pages/initial/bgSectionOne.png'
import bgSectionTwo from '../../imgs/pages/initial/bgSectionTwo.png'
import bgSectionThree from '../../imgs/pages/initial/bgSectionThree.png'
import bgSectionFour from '../../imgs/pages/initial/bgSectionFour.png'
export default {
  initialText: {
    home: {
      title: 'Filmes, séries e muito mais. Sem limites.',
      subtitle: 'Assista onde quiser. Cancele quando quiser.',
    },
    benefits: [
      {
        title: 'Aproveite na TV.',
        subtitle: 'Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.',
        img: `url(${bgSectionOne})`
      },
      {
        title: 'Baixe séries para assistir offline.',
        subtitle: 'Salve seus títulos favoritos e sempre tenha algo para assistir.',
        img: `url(${bgSectionTwo})`
      },
      {
        title: 'Assista quando quiser.',
        subtitle: 'Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.',
        img: `url(${bgSectionThree})`
      },
      {
        title: 'Crie perfis para crianças.',
        subtitle: 'Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.',
        img: `url(${bgSectionFour})`
      },
    ],
  }
}
