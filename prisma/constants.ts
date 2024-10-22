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
      imageUrl: 'https://i.postimg.cc/g2y4CdBg/11-EE7970321044479-C1-D1085457-A36-EB.png',
      categoryId: 2,
    },
    {
      name: 'Omeleta s feferonkami',
      imageUrl: 'https://i.postimg.cc/NMPMftmv/11-EE94-ECF33-B0-C46-BA410-DEC1-B1-DD6-F8.png',
      categoryId: 2,
    },
    {
      name: 'Caffe Latte',
      imageUrl: 'https://i.postimg.cc/8P1Vj9k7/11-EE7-D61-B0-C26-A3-F85-D97-A78-FEEE00-AD.webp',
      categoryId: 2,
    },
    {
      name: 'Danwich šunka a sýr',
      imageUrl: 'https://i.postimg.cc/8cYjw6bY/11-EE796-FF0059-B799-A17-F57-A9-E64-C725.webp',
      categoryId: 3,
    },
    {
      name: 'Kuřecí nugetky',
      imageUrl: 'https://i.postimg.cc/7ZdnbC8m/11-EE7-D618-B5-C7-EC29350069-AE9532-C6-E.png',
      categoryId: 3,
    },
    {
      name: 'Brambory v troubě s omáčkou 🌱',
      imageUrl: 'https://i.postimg.cc/Y0zdWtfj/11-EED646-A9-CD324-C962-C6-BEA78124-F19.webp',
      categoryId: 3,
    },
    {
      name: 'Dodster',
      imageUrl: 'https://i.postimg.cc/hjxyKLXL/11-EE796-F96-D11392-A2-F6-DD73599921-B9.webp',
      categoryId: 3,
    },
    {
      name: 'Ostrý Dodster 🌶️🌶️',
      imageUrl: 'https://i.postimg.cc/NjJPDfhH/11-EE796-FD3-B594068-F7-A752-DF8161-D04.webp',
      categoryId: 3,
    },
    {
      name: 'Banánový mléčný koktejl',
      imageUrl: 'https://i.postimg.cc/W3r0Rw50/11-EEE20-B8772-A72-A9-B60-CFB20012-C185.png',
      categoryId: 4,
    },
    {
      name: 'Karamelový jablečný koktejl',
      imageUrl: 'https://i.postimg.cc/0jRdrBzt/11-EE79702-E2-A22-E693-D96133906-FB1-B8.png',
      categoryId: 4,
    },
    {
      name: 'Mléčný koktejl se sušenkami Oreo',
      imageUrl: 'https://i.postimg.cc/FKHPQ8S3/11-EE796-FA1-F50-F8-F8111-A399-E4-C1-A1-E3.png',
      categoryId: 4,
    },
    {
      name: 'Klasický mléčný koktejl 👶',
      imageUrl: 'https://i.postimg.cc/9QQqVcD1/11-EE796-F93-FB126693-F96-CB1-D3-E403-FB.png',
      categoryId: 4,
    },
    {
      name: 'Irské cappuccino',
      imageUrl: 'https://i.postimg.cc/Hn6PNpJR/11-EE7-D61999-EBDA59-C10-E216430-A6093.png',
      categoryId: 5,
    },
    {
      name: 'Káva Caramel Cappuccino',
      imageUrl: 'https://i.postimg.cc/8PyqKbMc/11-EE7-D61-AED6-B6-D4-BFDAD4-E58-D76-CF56.webp',
      categoryId: 5,
    },
    {
      name: 'Káva Coconut Latte',
      imageUrl: 'https://i.postimg.cc/tJkLH3cr/11-EE7-D61-B19-FA07090-EE88-B0-ED347-F42.webp',
      categoryId: 5,
    },
    {
      name: 'Caffé Americano',
      imageUrl: 'https://i.postimg.cc/PxmgSsQn/11-EE7-D61-B044583596548-A59078-BBD33.webp',
      categoryId: 5,
    },
    {
      name: 'Caffe Latte',
      imageUrl: 'https://i.postimg.cc/8P1Vj9k7/11-EE7-D61-B0-C26-A3-F85-D97-A78-FEEE00-AD.webp',
      categoryId: 5,
    },
  ];
  