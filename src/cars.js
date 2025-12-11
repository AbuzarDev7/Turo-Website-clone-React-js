const carsData = [
  {
    id: 1,
    title: "Sleek black sedan",
    imageUrl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    rating: 4.5,
    trips: 22,
    pricePerDay: 50,
    availableDaysPerMonth: 20,
    discountPercentage: 5
  },
  {
    id: 2,
    title: "White luxury SUV",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmGs0gMUPW8oeFdKhZ9RG7Lo1i85SxHpJIgg&s",
    rating: 4.8,
    trips: 18,
    pricePerDay: 80,
    availableDaysPerMonth: 18,
    discountPercentage: 8
  },
  {
    id: 3,
    title: "Red sport coupe",
    imageUrl: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
    rating: 4.2,
    trips: 9,
    pricePerDay: 120,
    availableDaysPerMonth: 12,
    discountPercentage: 0
  },
  {
    id: 4,
    title: "Blue compact hatchback",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwPRW3oFf10JB0C5PBxNnLuSbVp5sqzzkwlw&s",
    rating: 4.0,
    trips: 30,
    pricePerDay: 35,
    availableDaysPerMonth: 22,
    discountPercentage: 3
  },
  {
    id: 5,
    title: "Silver SUV on highway",
    imageUrl: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
    rating: 4.7,
    trips: 15,
    pricePerDay: 75,
    availableDaysPerMonth: 17,
    discountPercentage: 7
  },
  {
    id: 6,
    title: "Yellow sports car",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkINcfo5s7ifc84w5aHHQE-gxsCiJWEbQGcg&s",
    rating: 4.3,
    trips: 12,
    pricePerDay: 110,
    availableDaysPerMonth: 10,
    discountPercentage: 0
  },
  {
    id: 7,
    title: "Urban sedan parked",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLXC9t7NnkjS-abK2ELCQxSb_6hckEWZ--hg&s",
    rating: 4.6,
    trips: 27,
    pricePerDay: 45,
    availableDaysPerMonth: 20,
    discountPercentage: 5
  },
  {
    id: 8,
    title: "White electric city car",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP-RaIWl9JTpZEo7Ig6jhxWpjPfKKqZKFRpQ&s",
    rating: 4.9,
    trips: 8,
    pricePerDay: 65,
    availableDaysPerMonth: 15,
    discountPercentage: 6
  },
  {
    id: 9,
    title: "Black luxury coupe",
    imageUrl: "https://www.shutterstock.com/image-photo/miami-florida-usa-april-02-600nw-2650146937.jpg",
    rating: 4.4,
    trips: 14,
    pricePerDay: 100,
    availableDaysPerMonth: 13,
    discountPercentage: 4
  },
  {
    id: 10,
    title: "Grey compact hatchback",
    imageUrl: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg",
    rating: 4.1,
    trips: 33,
    pricePerDay: 40,
    availableDaysPerMonth: 23,
    discountPercentage: 2
  },
  {
    id: 11,
    title: "Red convertible",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSctT0XVjF8IYjoU6PQkz_6wb-VVXfDPbhPIA&s",
    rating: 4.2,
    trips: 7,
    pricePerDay: 130,
    availableDaysPerMonth: 9,
    discountPercentage: 0
  },
  {
    id: 12,
    title: "Black SUV city driver",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPqPKMe-mIBH6JAZ8aAbzqcnh3pLOFED6B3g&s",
    rating: 4.7,
    trips: 19,
    pricePerDay: 85,
    availableDaysPerMonth: 16,
    discountPercentage: 7
  },
  {
    id: 13,
    title: "White sedan urban",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY2AEUGoXT-CyzIbAPMHd9OAVEN2SDh2NVAg&s",
    rating: 4.5,
    trips: 24,
    pricePerDay: 48,
    availableDaysPerMonth: 21,
    discountPercentage: 4
  },
  {
    id: 14,
    title: "Silver compact",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNeeMuU7ehYWCjxT8yfFHVDnDQpr4fMzbog&s",
    rating: 4.0,
    trips: 29,
    pricePerDay: 38,
    availableDaysPerMonth: 22,
    discountPercentage: 3
  },
  {
    id: 15,
    title: "Blue hatchback",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu3xOI12uWsS1S1sF3oeFPilPC3UK1H2ga7g&s",
    rating: 4.3,
    trips: 26,
    pricePerDay: 42,
    availableDaysPerMonth: 20,
    discountPercentage: 5
  },
  {
    id: 16,
    title: "White SUV countryside",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5SYW0mV_ATeG2n28GKX-fZ_W3VGh3FVprYw&s",
    rating: 4.6,
    trips: 16,
    pricePerDay: 78,
    availableDaysPerMonth: 15,
    discountPercentage: 6
  },
  {
    id: 17,
    title: "Black compact city",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJj_IfcuUPwEnWH0NYuK9ji_elV0hbu2G9A&s",
    rating: 4.4,
    trips: 30,
    pricePerDay: 44,
    availableDaysPerMonth: 24,
    discountPercentage: 2
  },
  {
    id: 18,
    title: "Red hatchback",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLqr8HE6euJdlWZrJoOXAXFgtGMQU8WTwOw&s",
    rating: 4.2,
    trips: 20,
    pricePerDay: 46,
    availableDaysPerMonth: 19,
    discountPercentage: 3
  },
  {
    id: 19,
    title: "Grey sedan rural",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xqirokfG8bEFmbr358btAd1Elq1Eo-Gc6A&s",
    rating: 4.1,
    trips: 28,
    pricePerDay: 50,
    availableDaysPerMonth: 22,
    discountPercentage: 4
  },
  {
    id: 20,
    title: "Yellow compact car",
    imageUrl: "https://cdn-fastly.autoguide.com/media/2023/06/09/12751999/yellow-cars-top-10-best-and-brightest.jpg?size=720x845&nocrop=1",
    rating: 4.0,
    trips: 31,
    pricePerDay: 39,
    availableDaysPerMonth: 23,
    discountPercentage: 2
  },
  {
    id: 21,
    title: "Silver luxury sedan",
    imageUrl: "https://i.ytimg.com/vi/Lgl7qfpfucM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCDA4D9RbUdR8tWjj1mrEBzQgGBNg",
    rating: 4.6,
    trips: 23,
    pricePerDay: 55,
    availableDaysPerMonth: 18,
    discountPercentage: 5
  },
  {
    id: 22,
    title: "White city sedan",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLoEW2MHm-ri0RYS4CB-WnPgvdCLssT44Gng&s",
    rating: 4.7,
    trips: 20,
    pricePerDay: 52,
    availableDaysPerMonth: 20,
    discountPercentage: 4
  },
  {
    id: 23,
    title: "Black sports coupe",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANeOEkupdsXhS2XkZJ0tW43x_sBWT1o3Bow&s",
    rating: 4.3,
    trips: 10,
    pricePerDay: 115,
    availableDaysPerMonth: 11,
    discountPercentage: 0
  },
  {
    id: 24,
    title: "Blue SUV near forest",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXz50IB5-6PMBDfeEto4KV6ASFwI3hgWbEtA&s",
    rating: 4.5,
    trips: 17,
    pricePerDay: 82,
    availableDaysPerMonth: 14,
    discountPercentage: 7
  },
  {
    id: 25,
    title: "Grey compact hatch",
    imageUrl: "https://img-uk1.cd5.uk/originals/981/stockimages/920769/8d2f4dccc8a237957207ed549b2ab075_920769.jpg",
    rating: 4.2,
    trips: 25,
    pricePerDay: 43,
    availableDaysPerMonth: 21,
    discountPercentage: 3
  },
  {
    id: 26,
    title: "White convertible",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQqEr6mgb5nAexlx-PU_0vlCDqCCPNnzoXw&s",
    rating: 4.4,
    trips: 12,
    pricePerDay: 125,
    availableDaysPerMonth: 10,
    discountPercentage: 1
  },
  {
    id: 27,
    title: "Black sedan night city",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh_ZTYiH1xfd9yFeknxy2yf72DJhHYpLRdGQ&s",
    rating: 4.5,
    trips: 21,
    pricePerDay: 48,
    availableDaysPerMonth: 19,
    discountPercentage: 4
  },
  {
    id: 28,
    title: "Silver hatchback",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_CDy8XKr5XKjfi7Bti5TDbrpKIXir35a-Tg&s",
    rating: 4.0,
    trips: 29,
    pricePerDay: 37,
    availableDaysPerMonth: 22,
    discountPercentage: 2
  },
  {
    id: 29,
    title: "White SUV urban",
    imageUrl: "https://alkaramamotors.com/wp-content/uploads/2025/10/3-6-min-scaled.jpg",
    rating: 4.7,
    trips: 19,
    pricePerDay: 79,
    availableDaysPerMonth: 17,
    discountPercentage: 6
  },
  {
    id: 30,
    title: "Blue sedan countryside",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCT39HPAKF1YlgPEmHZgaW7icyhXAm0BnzYA&s",
    rating: 4.3,
    trips: 26,
    pricePerDay: 49,
    availableDaysPerMonth: 20,
    discountPercentage: 5
  },
  {
    id: 31,
    title: "Grey SUV front view",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNm42SA0E8VZ04tYHu2ZfiOLjDJgiMvDnxQ&s",
    rating: 4.6,
    trips: 18,
    pricePerDay: 83,
    availableDaysPerMonth: 15,
    discountPercentage: 7
  },
  {
    id: 32,
    title: "Black city compact",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYbIjmce8OyUq5wMlxr_YL-Mx1xncXzyiXvg&s",
    rating: 4.2,
    trips: 27,
    pricePerDay: 45,
    availableDaysPerMonth: 22,
    discountPercentage: 3
  },
  {
    id: 33,
    title: "Red hatchback sunset",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBS4kgKukMiyrCXJusbNF_i1_FSL4hJPsBqw&s",
    rating: 4.1,
    trips: 24,
    pricePerDay: 47,
    availableDaysPerMonth: 21,
    discountPercentage: 4
  },
  {
    id: 34,
    title: "White sedan parked",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCmJeht3CJN0rZ7rnWnMghXQ1t6IC4IF93cA&s",
    rating: 4.5,
    trips: 22,
    pricePerDay: 50,
    availableDaysPerMonth: 20,
    discountPercentage: 5
  },
  {
    id: 35,
    title: "Silver coupe urban",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC58SP4JIEfGQ4nsRuJcfSszMv90kiXiLpPQ&s",
    rating: 4.3,
    trips: 20,
    pricePerDay: 60,
    availableDaysPerMonth: 18,
    discountPercentage: 6
  },
  {
    id: 36,
    title: "White hatchback countryside",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjeMG3VwVP2Tk6C2r58T2EafNRmhFQtQ9Ew&s",
    rating: 4.4,
    trips: 28,
    pricePerDay: 42,
    availableDaysPerMonth: 23,
    discountPercentage: 2
  },
  {
    id: 37,
    title: "Black sports sedan",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPSa-0GtL44otEKqJpIRDyZZ1InfEfu4OLA&s",
    rating: 4.6,
    trips: 14,
    pricePerDay: 110,
    availableDaysPerMonth: 13,
    discountPercentage: 0
  },
  {
    id: 38,
    title: "Blue SUV road trip",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pdF9jZpmeeZoxK1jMT86q_P_w-D8GaVqtA&s",
    rating: 4.7,
    trips: 16,
    pricePerDay: 85,
    availableDaysPerMonth: 15,
    discountPercentage: 7
  },
  {
    id: 39,
    title: "Grey compact city",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHc4xFeeeGrNZJeyPksaHm0s4k3PY8Iofq7w&s",
    rating: 4.1,
    trips: 32,
    pricePerDay: 39,
    availableDaysPerMonth: 24,
    discountPercentage: 3
  },
  {
    id: 40,
    title: "White sedan morning",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJ3wRW7hm3AapBiiQNaNp-68yEja85G05Dw&s",
    rating: 4.5,
    trips: 25,
    pricePerDay: 53,
    availableDaysPerMonth: 20,
    discountPercentage: 4
  },
  {
    id: 41,
    title: "Black luxury coupe night",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nVZHYTA8BpQyME95mSHoaPr9E0P0JYbwMg&s",
    rating: 4.4,
    trips: 15,
    pricePerDay: 105,
    availableDaysPerMonth: 12,
    discountPercentage: 1
  },
  {
    id: 42,
    title: "Silver compact rural",
    imageUrl: "https://media.istockphoto.com/id/1352549542/photo/fiat-tipo-cross-on-a-road.jpg?s=612x612&w=0&k=20&c=27i_jAo3avWI3aAiBmBtzeD-lxU0jbROM6VTJlAWcOQ=",
    rating: 4.2,
    trips: 30,
    pricePerDay: 40,
    availableDaysPerMonth: 22,
    discountPercentage: 2
  },
  {
    id: 43,
    title: "White SUV night city",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzYdWzYHjQEyqnBBBEd1GGmaGps6TC_LrRKg&s",
    rating: 4.8,
    trips: 18,
    pricePerDay: 90,
    availableDaysPerMonth: 16,
    discountPercentage: 8
  },
  {
    id: 44,
    title: "Blue sedan coastal drive",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREyc1T2vA9-eqis-5Mj_05Noyc0x-y0J7D8A&s",
    rating: 4.3,
    trips: 23,
    pricePerDay: 55,
    availableDaysPerMonth: 19,
    discountPercentage: 5
  },
  {
    id: 45,
    title: "Grey SUV urban",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHphuSL3QV23UcQ-MBoJYvnalFjGCwzToDxQ&s",
    rating: 4.6,
    trips: 17,
    pricePerDay: 80,
    availableDaysPerMonth: 15,
    discountPercentage: 6
  },
  {
    id: 46,
    title: "Black hatchback city",
    imageUrl: "https://cache1.pakwheels.com/ad_pictures/1339/tn_honda-city-1-5l-aspire-cvt-2022-133943885.webp",
    rating: 4.2,
    trips: 29,
    pricePerDay: 42,
    availableDaysPerMonth: 21,
    discountPercentage: 3
  },
  {
    id: 47,
    title: "Red convertible countryside",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZVmVP7x2qRt9_LA3hxp5cUP4p80VgRMlr5w&s",
    rating: 4.1,
    trips: 13,
    pricePerDay: 130,
    availableDaysPerMonth: 11,
    discountPercentage: 0
  },
  {
    id: 48,
    title: "White sedan downtown",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-Ed86EX5tp4Ojb_XWouhE1OdRsFDVnGZEA&s",
    rating: 4.4,
    trips: 26,
    pricePerDay: 50,
    availableDaysPerMonth: 20,
    discountPercentage: 4
  },
  {
    id: 49,
    title: "Silver sports sedan",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmh7vpkJrwz4YGUIzPMy8YkvZDltB-rHHLDA&s",
    rating: 4.5,
    trips: 18,
    pricePerDay: 95,
    availableDaysPerMonth: 14,
    discountPercentage: 5
  },
  {
    id: 50,
    title: "White compact hatchback",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXDN5AskMNmMdmASrmMoSXgXbg3MVwsIKHfA&s",
    rating: 4.0,
    trips: 31,
    pricePerDay: 38,
    availableDaysPerMonth: 23,
    discountPercentage: 2
  }
];

export default carsData