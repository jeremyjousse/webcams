export interface IWebcam {
    name: string,
    url: string,
    type?: string
}
interface ICity {
    id: string,
    name: string,
    country: string,
    state: string,
    url: string,
    webcams: IWebcam[]
}

const cities: ICity[] = [
  {
    id: 'annecy',
    name: 'Annecy',
    country: 'France',
    state: 'Haute-Savoie',
    url: 'https://www.lac-annecy.com/webcams.html',
    webcams: [
      {
        name: 'Le lac',
        url: 'https://www.trinum.com/ibox/ftpcam/mega_annecy.jpg'
      }
    ]
  },
  {
    id: 'autrans',
    name: 'Autrans',
    country: 'France',
    state: 'Isère',
    url: 'https://autrans-meaudre.com/',
    webcams: [
      {
        name: 'Le tremplin',
        url: 'https://www.trinum.com/ibox/ftpcam/mega_meaudre_front.jpg'
      }
    ]
  },
  {
    id: 'bessan',
    name: 'Bessan',
    country: 'France',
    state: 'Savoie',
    url: 'https://www.haute-maurienne-vanoise.com/hiver/bessans/webcam/',
    webcams: [
      {
        name: 'Bessan',
        url: 'https://bit.ly/2DWLnKa',
        type: 'viewsurf'
      }
    ]
  },
  {
    id: 'chamrousse',
    name: 'Chamrousse',
    country: 'France',
    state: 'Isère',
    url: 'https://www.chamrousse.com/webcams.html',
    webcams: [
      {
        name: 'Chamrousse 1800',
        url: 'https://www.chamrousse.com/templates/SITE/cache/min-PRESTATAIRE-WEBCAMS-VUGRENOBLEVERCORS-webcam-chamrousse.jpg',
      },
      {
        name: 'Les crêtes',
        url: 'https://www.skaping.com/chamrousse/les-cretes',
        type: 'viewsurf'
      }
    ]
  },
  {
    id: 'corrancon',
    name: 'Corrançon',
    country: 'France',
    state: 'Isère',
    url: 'https://www.villarddelans.com/hiver/webcams.html',
    webcams: [
      {
        name: 'Les hauts plateaux',
        url: 'https://srv06.trinum.com/ibox/ftpcam/mega_correncon_plateau.jpg'
      }
    ]
  },
  {
    id: 'flaine',
    name: 'Flaine',
    country: 'France',
    state: 'Haute-Savoie',
    url: 'https://www.flaine.com/',
    webcams: [
      {
        name: 'Secteur Platières',
        url: 'https://www.trinum.com/ibox/grand-massif/images/flaine-1600/grand-massif_flaine-16002.jpg'
      }
    ]
  },
  {
    id: 'grand-bornand',
    name: 'Le Grand-Bornand',
    country: 'France',
    state: 'Savoie',
    url: 'https://www.legrandbornand.com/webcams.html',
    webcams: [
      {
        name: 'Chinaillon',
        url: 'https://www.legrandbornand.com/templates/2018/cache/min-PRESTATAIRE-WEBCAMS-VILLAGE-gb_village.jpg',
      }
    ]
  },
  {
    id: 'isola-2000',
    name: 'Isola 2000',
    country: 'France',
    state: 'Alpes-Maritimes',
    url: 'https://www.isola2000.com/',
    webcams: [
      {
        name: 'Tête Cabane',
        url: 'https://www.trinum.com/ibox/ftpcam/mega_isola-2000_tete-cabane.jpg'
      }
    ]
  },
  {
    id: 'lac-blan',
    name: 'La lac blanc',
    country: 'France',
    state: 'Haut-Rhin',
    url: 'https://www.lac-blanc.com/',
    webcams: [
      {
        name: '1200',
        url: 'https://srv07.trinum.com/ibox/ftpcam/mega_lac-blanc_espace-debutant.jpg',
      }
    ]
  },
  {
    id: 'lake-louise',
    name: 'Lake Louise',
    country: 'Canada',
    state: 'Alberta',
    url: 'https://www.skilouise.com/',
    webcams: [
      {
        name: 'Ptarmigan Webcam',
        url: 'https://cams.skilouise.com/cam3.jpg'
      }
    ]
  },
  {
    id: 'marseille',
    name: 'Marseille',
    country: 'France',
    state: 'Bouche du Rhon',
    url: 'https://www.marseille.fr/nos-webcams/',
    webcams: [
      {
        name: 'Notre-Dame de la Garde',
        url: 'https://pv.viewsurf.com/742/Marseille-Notre-Dame-de-la-Garde-1?i=NDU5NDp1bmRlZmluZWQ',
        type: 'viewsurf'
      }
    ]
  },
  {
    id: 'megeve',
    name: 'Megève',
    country: 'France',
    state: 'Savoie',
    url: 'https://megeve.com/',
    webcams: [
      {
        name: 'Rochebrune',
        url: 'https://srv06.trinum.com/ibox/ftpcam/mega_arbois.jpg'
      }
    ]
  },
  {
    id: 'menuires',
    name: 'Les Menuires',
    country: 'France',
    state: 'Savoie',
    url: 'https://lesmenuires.com/fr/webcams',
    webcams: [
      {
        name: 'La croisette',
        url: 'https://www.skaping.com/lesmenuires/croisette', // -> every 10 min https://data.skaping.com/menuires_croisette/2021/01/14/17-22.jpg
        type: 'skaping'
      }
    ]
  },
  {
    id: 'metabief',
    name: 'Metabief',
    country: 'France',
    state: 'Doubs',
    url: 'https://www.tourisme-metabief.com/webcams.html',
    webcams: [
      {
        name: 'Station',
        url: 'https://www.trinum.com/ibox/ftpcam/mega_orex_metabief_front-de-neige.jpg',
      }
    ]
  },
  {
    id: 'praz-de-lys',
    name: 'Praz de Lys',
    country: 'France',
    state: 'Haute-Savoie',
    url: 'https://www.prazdelys-sommand.com/explorer/la-station/le-domaine-skiable/webcams/',
    webcams: [
      {
        name: 'Chevaly',
        url: 'https://www.trinum.com/ibox/ftpcam/praz_lys_sommand_chevally.jpg',
      }
    ]
  },
  {
    id: 'les-rousses',
    name: 'Les Rousses',
    country: 'France',
    state: 'Jura',
    url: 'https://www.lesrousses.com/',
    webcams: [
      {
        name: 'Porte du Balancier',
        url: 'https://www.trinum.com/ibox/ftpcam/mega_lesroussesdarbella.jpg'
      }
    ]
  },
  {
    id: 'saint-gervais',
    name: 'Saint Gervais Mont-Blanc',
    country: 'France',
    state: 'Haute-Savoie',
    url: 'https://www.saintgervais.com',
    webcams: [
      {
        name: 'Le Bettex Front de Neige',
        url: 'https://www.trinum.com/ibox/ftpcam/mega_st-gervais_mont-joux-fixe.jpg'
      }
    ]
  },
  {
    id: 'saint-veran',
    name: 'Saint Veran',
    country: 'France',
    state: 'Hautes-Alpes',
    url: 'https://www.saintveran.com',
    webcams: [
      {
        name: 'Village',
        url: 'https://live.neos360.com/queyras/fixes/veran.jpg'
      }
    ]
  },
  {
    id: 'saisies',
    name: 'Les Saisies',
    country: 'France',
    state: 'Savoie',
    url: 'https://www.lessaisies.com/webcams-les-saisies-hauteluce-bisanne1500-espace-diamant.html',
    webcams: [
      {
        name: 'Espace Erwin Eckl',
        url: 'https://www.trinum.com/ibox/ftpcam/mega_les_saisies_espace-erwineckl.jpg'
      }
    ]
  },
  {
    id: 'serre-chevalier',
    name: 'Serre Chevalier',
    country: 'France',
    state: 'Hautes-Alpes',
    url: 'https://www.serre-chevalier.com/fr/webcam-serre-chevalier-briancon-direct',
    webcams: [
      {
        name: 'Monetier',
        url: 'https://www.skaping.com/serrechevalier/monetier',
        type: 'skaping'
      }
    ]
  },
  {
    id: 'soelden',
    name: 'Soelden',
    country: 'Austria',
    state: 'Tyrol',
    url: 'https://soelden.com',
    webcams: [
      {
        name: 'Tiefenbachgletscher 2.800m',
        url: 'https://panodata.panomax.com/cams/195/recent_h572.jpg'
      }
    ]
  },
  {
    id: 'super-devoluy',
    name: 'Super Dévoluy',
    country: 'France',
    state: 'Hautes-Alpes',
    url: 'https://www.ledevoluy.com/fr',
    webcams: [
      {
        name: 'Pied des pistes',
        url: 'https://www.trinum.com/ibox/ftpcam/mega_superdevoluy_superdevoluy.jpg'
      }
    ]
  },
  {
    id: 'tignes',
    name: 'Tignes',
    country: 'France',
    state: 'Savoie',
    url: 'https://www.tignes.net/',
    webcams: [
      {
        name: 'Le Lac',
        url: 'https://backend.roundshot.com/cams/221/default'
      }
    ]
  },
]

export { cities }
