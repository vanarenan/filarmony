export const Init_Impresarios = [
  {
    "id":"e7adb6d0-91cf-11e9-b4bb-f755646a42ae",
    "name":"Кацман Исак Альбертович",
    "genres":["Музика","Пісня","Комедія","Танець"]
  },
  {
    "id":"00544aa0-91d0-11e9-b4bb-f755646a42ae",
    "name":"Цукерман Моисей Йосифович",
    "genres":["Монолог","Пісня"]
  }
];

export const Init_Actors = [
  {
    "id":"70a4a450-91bf-11e9-8866-6fd71ed44044",
    "name":"Іванов Іван Іванович",
    "genres":["Пісня","Музика"]
  },
  {
    "id":"1a41e5c0-91c2-11e9-b471-e7aa2b9e3d07",
    "name":"Петров Петро Петрович",
    "genres":["Музика","Танець"]
  },
  {
    "id":"2c0e4880-91c1-11e9-978b-ff3d6e55f14e",
    "name":"Сидоров Сидір Сидорович",
    "genres":["Монолог"]
  }
];

export const Init_Places = [
  {
    "id":"68bed500-91d1-11e9-a51f-a3677ed05698",
    "name":"Консерваторія",
    "desc":"aaaa",
    "seats":"1200"
  },
  {
    "id":"cc4c5de0-91d1-11e9-a51f-a3677ed05698",
    "name":"Концертна зала",
    "desc":"bbbb",
    "seats":"800"
  },
  {
    "id":"b9df6ad0-91d1-11e9-a51f-a3677ed05698",
    "name":"Стадион",
    "desc":"вул. Головна",
    "seats":"10000"
  }
];

export const Init_Events = [
  {
    "id":"b0c80610-91f3-11e9-a690-7501fc3bee28",
    "date":"2019-06-20",
    "name":"Концерт",
    "desc":"Пісні, танці, монологи",
    "placeId":"cc4c5de0-91d1-11e9-a51f-a3677ed05698",
    "impresarioId":"00544aa0-91d0-11e9-b4bb-f755646a42ae",
    "actorsId":["70a4a450-91bf-11e9-8866-6fd71ed44044","1a41e5c0-91c2-11e9-b471-e7aa2b9e3d07","2c0e4880-91c1-11e9-978b-ff3d6e55f14e"],
  }
];