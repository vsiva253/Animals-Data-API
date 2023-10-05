const express = require('express');
const app = express();

// Define data for different animals with a 'type' field
const animals = [
    {
        'name': 'Maltipoo',
        'type': 'dog',
        'image_url': 'https://hips.hearstapps.com/hmg-prod/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg?crop=0.444xw:1.00xh;0.129xw,0&resize=980:*'
    },
    {
        'name': 'Chow-chow',
        'type': 'dog',
        'image_url': 'https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*'
    },
    {
        'name': 'Border Collie',
        'type': 'dog',
        'image_url': 'https://hips.hearstapps.com/hmg-prod/images/happy-dog-outdoors-royalty-free-image-1652927740.jpg?crop=0.447xw:1.00xh;0.187xw,0&resize=980:*'
    },
    {
        'name': 'Siberian Husky',
        'type': 'dog',
        'image_url': 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-464163411.jpg?crop=1.0xw:1xh;center,top&resize=980:*'
    },
    {
        'name': 'Pembroke Welsh Corgi',
        'type': 'dog',
        'image_url': 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/pembroke-welsh-corgi.jpg?crop=1xw:0.9997114829774957xh;center,top&resize=980:*'
    },
    {
        'name': 'Australian Shepherd',
        'type': 'dog',
        'image_url': 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x3839/australian-shepherd.jpg?resize=980:*'
    },
    {
        'name': 'Shetland Sheepdog',
        'type': 'dog',
        'image_url': 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/shetland-sheep-dog.jpg?crop=1.0xw:1xh;center,top&resize=980:*'
    },
    {
        'name': 'Golden Retriever',
        'type': 'dog',
        'image_url': 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-147786673.jpg?crop=0.4444444444444445xw:1xh;center,top&resize=980:*'
    },
    {
        'name': 'Yorkshire Terrier',
        'type': 'dog',
        'image_url': 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/1280x1919/gettyimages-179494696.jpg?resize=980:*'
    },
    {
        'name': 'English Setter',
        'type': 'dog',
        'image_url': 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/1280x1919/gallery-gettyimages-485681215.jpg?resize=980:*'
    },
    {
        'name': 'Labrador Retriever',
        'type': 'dog',
        'image_url': 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/40/3200x4799/labrador-retriever.jpg?resize=980:*'
    },
    {
        'name': 'Asiatic Lion',
        'type': 'lion',
        'image_url': 'https://www.ourendangeredworld.com/wp-content/uploads/2020/12/Asiatic-Lion.jpg.webp'
    },
    {
        'name': 'African Lion',
        'type': 'lion',
        'image_url': 'https://www.ourendangeredworld.com/wp-content/uploads/2020/12/African-Lion.jpg.webp'
    },
    {
        'name': 'White Lion',
        'type': 'lion',
        'image_url': 'https://www.ourendangeredworld.com/wp-content/uploads/2020/12/White-Lion.jpg.webp'
    },
    {
        'name': 'Masai Lion',
        'type': 'lion',
        'image_url': 'https://www.ourendangeredworld.com/wp-content/uploads/2020/12/Masai-Lion.jpg.webp'
    },
    {
        'name': 'Abyssinian Lion',
        'type': 'lion',
        'image_url': 'https://www.ourendangeredworld.com/wp-content/uploads/2020/12/Abyssinian-Lion.jpg.webp'
    },
    {
        'name': 'Polar Bear',
        'type': 'bear',
        'image_url': 'https://www.ourendangeredworld.com/wp-content/uploads/2020/12/Polar-Bears-300x200.jpg.webp'
    },
    {
        'name': 'North America Black Bear',
        'type': 'bear',
        'image_url': 'https://www.ourendangeredworld.com/wp-content/uploads/2020/12/North-America-Black-Bear-300x227.jpg.webp'
    },
    {
        'name': 'Brown Bear',
        'type': 'bear',
        'image_url': 'https://www.ourendangeredworld.com/wp-content/uploads/2020/12/Brown-Bear-300x199.jpg.webp'
    },
    {
        'name': 'Bengal Tiger',
        'type': 'tiger',
        'image_url': 'https://animalsafari.com/wp-content/uploads/2022/01/bengal-tiger-1.jpeg'
    },
    {
        'name': 'White Tiger',
        'type': 'tiger',
        'image_url': 'https://animalsafari.com/wp-content/uploads/2022/01/white-tiger-2048x1365.jpg'
    },
    {
        'name': 'Siberian Tiger',
        'type': 'tiger',
        'image_url': 'https://animalsafari.com/wp-content/uploads/2022/01/siberian-tiger.jpg'
    },
    {
        'name': 'Sumatran Tiger',
        'type': 'tiger',
        'image_url': 'https://animalsafari.com/wp-content/uploads/2022/01/sumatran-tiger-1.jpg'
    },
    {
        'name': 'IndoChinese Tiger',
        'type': 'tiger',
        'image_url': 'https://animalsafari.com/wp-content/uploads/2022/01/indochinese-tiger.jpg'
    },
    {
        'name': 'The Cervinae Subfamily',
        'type': 'deer',
        'image_url': 'https://a-z-animals.com/media/2021/09/buck.jpg'
    },
    {
        'name': 'The Capreolinae Subfamily',
        'type': 'deer',
        'image_url': 'https://a-z-animals.com/media/2021/09/Roe-deer-herd.jpg'
    },
    {
        'name': 'Elk',
        'type': 'deer',
        'image_url': 'https://a-z-animals.com/media/2021/08/elk.jpg'
    },
    {
        'name': 'Red Deer',
        'type': 'deer',
        'image_url': 'https://a-z-animals.com/media/animals/images/original/deer5.jpg'
    },
    {
        'name': 'Fallow Deer',
        'type': 'deer',
        'image_url': 'https://a-z-animals.com/media/2021/05/Fallow-deer-female.jpg'
    },
    {
        'name': 'Reindeer',
        'type': 'deer',
        'image_url': 'https://a-z-animals.com/media/2021/08/Reindeer-Antlers-male-caribou.jpg'
    },
    {
        'name': 'White Tailed Deer',
        'type': 'deer',
        'image_url': 'https://a-z-animals.com/media/2021/05/white-tailed-deer-in-meadow.jpg'
    },
    {
        'name': 'Roe Deer',
        'type': 'deer',
        'image_url': 'https://a-z-animals.com/media/2021/09/Roe-deer-in-field.jpg'
    },
    {
        'name': 'Moose',
        'type': 'deer',
        'image_url': 'https://a-z-animals.com/media/2022/09/iStock-1267859318-1536x1024.jpg'
    },
    {
        'name': 'Coelophysis',
        'type': 'dinosaurs',
        'image_url': 'https://www.morereptiles.com/wp-content/uploads/2021/10/Coelophysis.png'
    },
    {
        'name': 'Gallimimus',
        'type': 'dinosaurs',
        'image_url': 'https://www.morereptiles.com/wp-content/uploads/2021/10/Gallimimus.png'
    },
    {
        'name': 'Diplodocus',
        'type': 'dinosaurs',
        'image_url': 'https://www.morereptiles.com/wp-content/uploads/2021/10/Diplodocus.png'
    },{
        'name': 'Dilophosaurus',
        'type': 'dinosaurs',
        'image_url': 'https://www.morereptiles.com/wp-content/uploads/2021/10/Dilophosaurus.png'
    },{
        'name': 'Spinosaurus',
        'type': 'dinosaurs',
        'image_url': 'https://www.morereptiles.com/wp-content/uploads/2021/10/Spinosaurus.png'
    },{
        'name': 'Apatosaurus',
        'type': 'dinosaurs',
        'image_url': 'https://www.morereptiles.com/wp-content/uploads/2021/10/Apatosaurus.png'
    },{
        'name': 'Tyrannosaurus rex',
        'type': 'dinosaurs',
        'image_url': 'https://www.morereptiles.com/wp-content/uploads/2021/10/Tyrannosaurus-rex.png'
    },
];

const dogs = animals.filter(animal => animal.type === 'dog');

app.get('/animals/type/dogs', (req, res) => {
    res.json(dogs);
  });

  const lions = animals.filter(animal => animal.type === 'lion');

app.get('/animals/type/lions', (req, res) => {
    res.json(lions);
  });

  const deers = animals.filter(animal => animal.type === 'deer');

  app.get('/animals/type/deers', (req, res) => {
      res.json(deers);
    });

    const bears = animals.filter(animal => animal.type === 'bear');

    app.get('/animals/type/bears', (req, res) => {
        res.json(bears);
      });
      const tigers = animals.filter(animal => animal.type === 'tiger');

      app.get('/animals/type/tigers', (req, res) => {
          res.json(tigers);
        });

        const dinosaurs = animals.filter(animal => animal.type === 'dinosaurs');

        app.get('/animals/type/dinosaurs', (req, res) => {
            res.json(dinosaurs);
          });

app.get('/animals', (req, res) => {
    res.json(animals);
  });
  
  // Define a route to get animals with start and end points
  app.get('/animals/:start/:end', (req, res) => {
    const { start, end } = req.params;
    const startIndex = parseInt(start);
    const endIndex = parseInt(end);
  
    if (isNaN(startIndex) || isNaN(endIndex)) {
      return res.status(400).json({ error: 'Invalid parameters' });
    }
  
    const slicedAnimals = animals.slice(startIndex, endIndex + 1);
    res.json(slicedAnimals);
  });
  
  const port = process.env.PORT || 3000;
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });