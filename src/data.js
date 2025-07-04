const data = {
  MENS: [
    {
      id: "m1",
      name: "Classic Formal Suit",
      category: "Formal Wear",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1527010154944-f2241763d806?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
      description: "Premium quality formal suit perfect for business meetings and special occasions. Made with high-quality wool blend fabric."
    },
    {
      id: "m2",
      name: "Slim Fit Blazer",
      category: "Formal Wear",
      price: 119.99,
      image: "https://images.unsplash.com/photo-1617662408044-cda3ab7134c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww",
      description: "Modern slim-fit blazer that provides a sleek, tailored look. Perfect for both office and evening wear."
    },
    {
      id: "m3",
      name: "Casual Denim Shirt",
      category: "Casual Wear",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      description: "Comfortable denim shirt for casual outings. Made with soft, breathable cotton denim."
    },
    {
      id: "m4",
      name: "Graphic Tee",
      category: "Casual Wear",
      price: 24.99,
      image: "https://plus.unsplash.com/premium_photo-1669688174622-0393f5c6baa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
      description: "Cool graphic t-shirt featuring unique artwork. 100% cotton for maximum comfort."
    },
    {
      id: "m5",
      name: "Running Tracksuit",
      category: "Sportswear",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMHNwb3J0c3dlYXJ8ZW58MHx8MHx8fDA%3D",
      description: "Performance tracksuit designed for running and workouts. Moisture-wicking fabric keeps you dry."
    },
    {
      id: "m6",
      name: "Training Shorts",
      category: "Sportswear",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
      description: "Lightweight training shorts with built-in liner. Perfect for gym sessions and outdoor activities."
    },
    {
      id: "m7",
      name: "Cozy Fleece Hoodie",
      category: "Loungewear",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Super soft fleece hoodie for ultimate comfort. Features kangaroo pocket and adjustable drawstring hood."
    },
    {
      id: "m8",
      name: "Relax Fit Pajamas",
      category: "Loungewear",
      price: 44.99,
      image: "https://images.unsplash.com/photo-1552168212-9ceb61083ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
      description: "Comfortable pajama set made from breathable cotton. Perfect for relaxing at home."
    }
  ],

  WOMENS: [
    {
      id: "w1",
      name: "Floral Summer Dress",
      category: "Dresses",
      price: 59.99,
      image: "https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg",
      description: "Lightweight floral dress perfect for summer days. Features a flattering A-line silhouette."
    },
    {
      id: "w2",
      name: "Evening Gown",
      category: "Dresses",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      description: "Elegant evening gown with delicate lace details. Perfect for formal events and parties."
    },
    {
      id: "w3",
      name: "High-Waisted Jeans",
      category: "Jeans",
      price: 49.99,
      image: "https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg",
      description: "Stylish high-waisted jeans with a comfortable stretch fit. Flattering for all body types."
    },
    {
      id: "w4",
      name: "Distressed Skinny Jeans",
      category: "Jeans",
      price: 54.99,
      image: "https://media.istockphoto.com/id-1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg",
      description: "Trendy skinny jeans with distressed details. Made with premium denim for lasting wear."
    },
    {
      id: "w5",
      name: "Leather Jacket",
      category: "Jackets",
      price: 99.99,
      image: "https://media.istockphoto.com/id-1042684962/photo/happy-smiling-woman-walk-on-the-street-multilayered-style-fashion-outfit.jpg",
      description: "Classic leather jacket with a modern fit. Features zipper closure and multiple pockets."
    },
    {
      id: "w6",
      name: "Bomber Jacket",
      category: "Jackets",
      price: 89.99,
      image: "https://media.istockphoto.com/id-866657418/photo/portrait-young-girl-teenager-with-earphones-and-phone-in-a-yellow-sweater-isolate-on-a-violet.jpg",
      description: "Stylish bomber jacket with ribbed cuffs and hem. Lightweight yet warm for transitional weather."
    },
    {
      id: "w7",
      name: "Yoga Set",
      category: "Activewear",
      price: 69.99,
      image: "https://media.istockphoto.com/id-1392783238/photo/portrait-of-a-teenage-smiling-female-looking-at-the-camera-on-a-blue-background.jpg",
      description: "Breathable yoga set perfect for workouts and lounging. Moisture-wicking fabric keeps you comfortable."
    },
    {
      id: "w8",
      name: "Running Leggings",
      category: "Activewear",
      price: 39.99,
      image: "https://media.istockphoto.com/id-1092715214/photo/two-glad-positive-grinning-lady-stand-in-glasses-spectacles-street-style-stylish-trendy-cool.jpg",
      description: "High-performance leggings with compression fit. Features a wide waistband for full coverage."
    },
    {
      id: "w9",
      name: "Lace Bra Set",
      category: "Lingerie",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
      description: "Beautiful lace bra and panty set. Comfortable and supportive with delicate detailing."
    },
    {
      id: "w10",
      name: "Silk Nightwear",
      category: "Lingerie",
      price: 44.99,
      image: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
      description: "Luxurious silk nightwear set. Soft and breathable for a comfortable night's sleep."
    }
  ]
};

export default data;