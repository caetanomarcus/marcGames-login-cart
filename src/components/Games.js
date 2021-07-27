import cyberpunk from '../assets/cyberpunk.webp'
import ghost from '../assets/ghost.webp'
import lastofus from '../assets/lastofus.webp'
import gta from '../assets/gta5.webp'
import daysgone from '../assets/daysgone.webp'
import resident from '../assets/resident.webp'
import reddead from '../assets/reddead.webp'
import ac from '../assets/acvahalla.webp'
import spider from '../assets/spider.webp'
import nioh2 from '../assets/nioh2.webp'


const Games = [
    {
        id : 1 ,
        name: 'Cyberpunk 2077',
        initialPrice: 68.99,
        price: 68.99,
        oldPrice: 'R$ 249,90',
        cover: cyberpunk,
        quantity: 1
    },
    {
        id :  2,
        name: 'Ghost of Tsushima',
        price: 199.90,
        initialPrice:199.90,
        oldPrice: 'R$ 299.90',
        cover: ghost,
        quantity: 1
    },
    {
        id : 3,
        name: 'The Last of Us Part II',
        price: 189.89,
        initialPrice: 189.90,
        oldPrice: 'R$ 249,90',
        cover: lastofus,
        quantity: 1
    },
    {
        id :  4,
        name: 'Grand Theft Auto V',
        price: 138.49,
        initialPrice: 138.49,
        oldPrice: 'R$ 229,90',
        cover: gta,
        quantity: 1
    },
    {
        id : 5 ,
        name: 'Days Gone',
        price: 58.89,
        initialPrice: 58.89,
        oldPrice: 'R$ 249,90',
        cover: daysgone,
        quantity: 1
    },
    {
        id : 6 ,
        name: 'Resident Evil Village',
        price: 279.90,
        initialPrice: 279.90,
        oldPrice: 'R$ 299,90',
        cover: resident,
        quantity: 1
    },
    {
        id :  7,
        name: 'Read Dead Redemption II',
        price: 157.90,
        initialPrice: 157.90,
        oldPrice: 'R$ 249,90',
        cover: reddead,
        quantity: 1
    },
    {
        id :  8,
        name: "Assassin's Creed Valhalla",
        price: 229.99,
        initialPrice: 229.99,
        oldPrice: 'R$ 299,90',
        cover: ac,
        quantity: 1
    },
    {
        id :  9,
        name: "Marvel's Spider-man: Miles Morales",
        price: 239.90,
        initialPrice: 239.90,
        oldPrice: 'R$ 249,90',
        cover: spider,
        quantity: 1
    },
    {
        id :  10,
        name: 'Nioh 2',
        price: 97.99,
        initialPrice: 97.99,
        oldPrice: 'R$ 229,90',
        cover: nioh2,
        quantity: 1
    },
]

export default Games