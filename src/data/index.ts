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
]

export { cities }
