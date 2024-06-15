const Product1 = require("../assets/images/product-1.png");
const Product2 = require("../assets/images/product-2.png");
const Product3 = require("../assets/images/product-3.png");
const Product4 = require("../assets/images/product-4.png");
const Product5 = require("../assets/images/product-5.png");
const Product6 = require("../assets/images/product-6.png");

// Sellers
const Seller1 = require("../assets/images/sellers1.png");
const Seller2 = require("../assets/images/sellers2.png");
const Seller3 = require("../assets/images/sellers3.png");
const Seller4 = require("../assets/images/sellers4.png");
const Seller5 = require("../assets/images/sellers5.png");

// Chat
const chat1 = require("../assets/images/chat1.png");
const chat2 = require("../assets/images/chat2.png");
const chat3 = require("../assets/images/chat3.png");
const chat4 = require("../assets/images/chat4.png");
const chat5 = require("../assets/images/chat5.png");
const chat6 = require("../assets/images/chat6.png");

export const ProductData = [
    {
        id: '1',
        price: '$125',
        name: "Fear of God Essentials",
        images: [Product1],
        location: "Portland illinos",
        distance: "12",
        seller: {
            avatar: Seller2,
            name: "canon"
        }
    },
    {
        id: '2',
        price: '$140',
        name: "Jordan 1 Retro High OG",
        images: [Product2],
        location: "Portland illinos",

        distance: "12",
        seller: {
            avatar: Seller2,
            name: "canon"
        }
    },
    {
        id: '3',
        price: '$435',
        name: "Meta Quest 3",
        images: [Product3],
        location: "Portland illinos",

        distance: "12",
        seller: {
            avatar: Seller2,
            name: "canon"
        }
    },
    {
        id: '4',
        price: '$125',
        name: "Yugioh Platinum Blue eyes White",
        images: [Product4], location: "",
        distance: "12",
        seller: {
            avatar: Seller2,
            name: "canon"
        }
    },
    {
        id: '5',
        price: '$140',
        name: "Pokémon Elite Trainer Box",
        images: [Product5], location: "",
        distance: "12",
        seller: {
            avatar: Seller2,
            name: "canon"
        }
    },
    {
        id: '6',
        price: '$240',
        name: "PlayStation Remote Player",
        images: [Product1],
        location: "Portland illinos",

        distance: "12",

        seller: {
            avatar: Seller2,
            name: "canon"
        }
    }
]



export let ProductObject = {
    '1': {
        id: "1", price: '$125',
        name: "Fear of God Essentials",
        images: [Product1],
        location: "Portland Illinois",
        distance: "12",
        seller: {
            avatar: Seller2,
            name: "canon"
        }
    },
    '2': {
        id: "2", price: '$140',
        name: "Jordan 1 Retro High OG",
        images: [Product2],
        location: "Portland Illinois",
        distance: "12",
        seller: {
            avatar: Seller2,
            name: "canon"
        }
    },
    '3': {
        id: "3", price: '$435',
        name: "Meta Quest 3",
        images: [Product3],
        location: "Portland Illinois",
        distance: "12",
        seller: {
            avatar: Seller2,
            name: "canon"
        }
    },
    '4': {
        id: "4", price: '$125',
        name: "Yugioh Platinum Blue eyes White",
        images: [Product5],
        location: "",
        distance: "12",
        seller: {
            avatar: Seller2,
            name: "canon"
        }
    },
    '5': {
        id: "5", price: '$140',
        name: "Pokémon Elite Trainer Box",
        images: [Product4],
        location: "",
        distance: "12",
        seller: {
            avatar: Seller2,
            name: "canon"
        }
    },
    '6': {
        id: "6", price: '$240',
        name: "PlayStation Remote Player",
        images: [Product5],
        location: "Portland Illinois",
        distance: "12",
        seller: {
            avatar: Seller2,
            name: "canon"
        }
    }
};

export const SellersData = [
    {
        id: "1",
        avatar: Seller1,
        name: ""
    },
    {
        id: "2",
        avatar: Seller2,
        name: "canon",
    },
    {
        id: "3",
        avatar: Seller3,
        name: ""
    },
    {
        id: "4",
        avatar: Seller4,
        name: ""
    },
    {
        id: "5",
        avatar: Seller5,
        name: ""
    }
]

export const chatData = [
    {
        id: "1",
        sellerId: "",
        buyerId: "",
        lastMessage: "Can you available to meet up tomorrow",
        productImages: [chat1]
    },
    {
        id: "2",
        sellerId: "",
        buyerId: "",
        lastMessage: "Will you be able to ship it out?",
        productImages: [chat2]
    },
    {
        id: "3",
        sellerId: "",
        buyerId: "",
        lastMessage: "Will you be able to ship it out?",
        productImages: [chat3]
    },
    {
        id: "4",
        sellerId: "",
        buyerId: "",
        lastMessage: "Have these shoes ever been worn?",
        productImages: [chat4]
    },
    {
        id: "5",
        sellerId: "",
        buyerId: "",
        lastMessage: "Can you go any lower?",
        productImages: [chat5]
    },
    {
        id: "6",
        sellerId: "",
        buyerId: "",
        lastMessage: "Can you available to meet up tomorrow",
        productImages: [chat6]
    }
]