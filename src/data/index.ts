export interface IWebcam {
    name: string,
    url: string,
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
        id: "annecy",
        name: "Annecy",
        country: "France",
        state: "Haute-Savoie",
        url: "https://www.lac-annecy.com/webcams.html",
        webcams: [
            {
                name: "Le lac",
                url: "http://www.trinum.com/ibox/ftpcam/mega_annecy.jpg"
            }
        ]
    },
    {
        id: "autrans",
        name: "Autrans",
        country: "France",
        state: "Isère",
        url: "http://autrans-meaudre.com/",
        webcams: [
            {
                name: "Le tremplin",
                url: "http://www.trinum.com/ibox/ftpcam/mega_meaudre_front.jpg"
            }
        ]
    },
    {
        id: "corrancon",
        name: "Corrançon",
        country: "France",
        state: "Isère",
        url: "https://www.villarddelans.com/hiver/webcams.html",
        webcams: [
            {
                name: "Les hauts plateaux",
                url: "http://www.neos360.com/villard_de_lans/pre_des_preys/img/panojavascript/nojava/pano_PV.jpg"
            }
        ]
    },
    {
        id: "flaine",
        name: "Flaine",
        country: "France",
        state: "Haute-Savoie",
        url: "https://www.flaine.com/",
        webcams: [
            {
                name: "Secteur Platières",
                url: "http://www.trinum.com/ibox/grand-massif/images/flaine-1600/grand-massif_flaine-16002.jpg"
            }
        ]
    },
    {
        id: "grand-bornand",
        name: "Le Grand-Bornand",
        country: "France",
        state: "Savoie",
        url: "https://www.legrandbornand.com/",
        webcams: [
            {
                name: "Lormay",
                url: "https://www.trinum.com/ibox/ftpcam/mega_gb_village.jpg"
            }
        ]
    },
    {
        id: "isola-2000",
        name: "Isola 2000",
        country: "France",
        state: "Alpes-Maritimes",
        url: "http://www.isola2000.com/",
        webcams: [
            {
                name: "Snow Park",
                url: "https://www.trinum.com/ibox/ftpcam/isola-2000_station.jpg"
            }
        ]
    },
    {
        id: "lake-louise",
        name: "Lake Louise",
        country: "Canada",
        state: "Alberta",
        url: "http://www.skilouise.com/",
        webcams: [
            {
                name: "Ptarmigan Webcam",
                url: "http://cams.skilouise.com/cam3.jpg"
            }
        ]
    },
    {
        id: "megeve",
        name: "Megève",
        country: "France",
        state: "Savoie",
        url: "http://megeve.com/",
        webcams: [
            {
                name: "Rochebrune",
                url: "https://srv06.trinum.com/ibox/ftpcam/mega_arbois.jpg"
            }
        ]
    },
    {
        id: "les-rousses",
        name: "Les Rousses",
        country: "France",
        state: "Jura",
        url: "https://www.lesrousses.com/",
        webcams: [
            {
                name: "Porte du Balancier",
                url: "https://www.trinum.com/ibox/ftpcam/mega_lesroussesdarbella.jpg"
            }
        ]
    },
    {
        id: "saint-gervais",
        name: "Saint Gervais Mont-Blanc",
        country: "France",
        state: "Haute-Savoie",
        url: "https://www.saintgervais.com",
        webcams: [
            {
                name: "Le Bettex Front de Neige",
                url: "https://www.trinum.com/ibox/ftpcam/mega_st-gervais_mont-joux-fixe.jpg"
            }
        ]
    },
    {
        id: "saint-veran",
        name: "Saint Veran",
        country: "France",
        state: "Hautes-Alpes",
        url: "http://www.saintveran.com",
        webcams: [
            {
                name: "Village",
                url: "https://live.neos360.com/queyras/fixes/veran.jpg"
            }
        ]
    },
    {
        id: "soelden",
        name: "Soelden",
        country: "Austria",
        state: "Tyrol",
        url: "https://soelden.com",
        webcams: [
            {
                name: "Tiefenbachgletscher 2.800m",
                url: "https://panodata.panomax.com/cams/195/recent_h572.jpg"
            }
        ]
    },
    {
        id: "super-devoluy",
        name: "Super Dévoluy",
        country: "France",
        state: "Hautes-Alpes",
        url: "https://www.ledevoluy.com/fr",
        webcams: [
            {
                name: "Pied des pistes",
                url: "https://www.trinum.com/ibox/ftpcam/mega_superdevoluy_superdevoluy.jpg"
            }
        ]
    },
    {
        id: "tignes",
        name: "Tignes",
        country: "France",
        state: "Savoie",
        url: "http://www.tignes.net/",
        webcams: [
            {
                name: "Le Lac",
                url: "https://backend.roundshot.com/cams/221/default"
            }
        ]
    },
]

export { cities }
