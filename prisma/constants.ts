export const categories = [
    { 
        name: 'Pizzy' 
    },
    { 
        name: 'Snídaně' 
    },
    { 
        name:'Předkrmy'
     },
    { 
        name: 'Koktejly'
     },
    { 
        name: 'Dezert'
     },
    { 
        name:'Nápoje'
     },
];

export const _ingredients = [
    {
      name: 'Prkénko na sýry',
      price: 179,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
    },
    {
      name: 'Krémová mozzarella',
      price: 79,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
    },
    {
      name: 'Sýry čedar a parmazán',
      price: 79,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
    },
    {
      name: 'Pálivé papričky jalapeño',
      price: 59,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
    },
    {
      name: 'Křehké kuře',
      price: 79,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
    },
    {
      name: 'Champignons',
      price: 59,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
    },
    {
      name: 'Šunka',
      price: 79,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
    },
    {
      name: 'Pikantní feferonky',
      price: 79,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
    },
    {
      name: 'Pikantní chorizo',
      price: 79,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
    },
    {
      name: 'Pickles',
      price: 59,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
    },
    {
      name: 'Čerstvá rajčata',
      price: 59,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
    },
    {
      name: 'Červená cibule',
      price: 59,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
    },
    {
      name: 'Šťavnaté ananasy',
      price: 59,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
    },
    {
      name: 'Italské bylinky',
      price: 39,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
    },
    {
      name: 'Sladké papriky',
      price: 59,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
    },
    {
      name: 'Brynza nakrájená na kostičky',
      price: 79,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
    },
    {
      name: 'Mitballs',
      price: 79,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
    },
  ].map((obj, index) => ({ id: index + 1, ...obj }));

  
  export const products = [
    {
      name: 'Omeleta se šunkou a houbami',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp',
      categoryId: 2,
    },
    {
      name: 'Omeleta s feferonkami',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp',
      categoryId: 2,
    },
    {
      name: 'Caffe Latte',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
      categoryId: 2,
    },
    {
      name: 'Danwich šunka a sýr',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp',
      categoryId: 3,
    },
    {
      name: 'Kuřecí nugetky',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp',
      categoryId: 3,
    },
    {
      name: 'Brambory v troubě s omáčkou 🌱',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp',
      categoryId: 3,
    },
    {
      name: 'Dodster',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp',
      categoryId: 3,
    },
    {
      name: 'Ostrý Dodster 🌶️🌶️',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp',
      categoryId: 3,
    },
    {
      name: 'Banánový mléčný koktejl',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp',
      categoryId: 4,
    },
    {
      name: 'Karamelový jablečný koktejl',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp',
      categoryId: 4,
    },
    {
      name: 'Mléčný koktejl se sušenkami Oreo',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp',
      categoryId: 4,
    },
    {
      name: 'Klasický mléčný koktejl 👶',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp',
      categoryId: 4,
    },
    {
      name: 'Irské cappuccino',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp',
      categoryId: 5,
    },
    {
      name: 'Káva Caramel Cappuccino',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp',
      categoryId: 5,
    },
    {
      name: 'Káva Coconut Latte',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp',
      categoryId: 5,
    },
    {
      name: 'Caffé Americano',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp',
      categoryId: 5,
    },
    {
      name: 'Caffe Latte',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
      categoryId: 5,
    },
  ];
  