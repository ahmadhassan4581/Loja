const data = {
  MENS: [
    {
      id: "m1",
      name: "Classic Formal Suit",
      category: "Formal Wear",
      price: 149.99,
      image: "https://plus.unsplash.com/premium_photo-1688497830977-f9ab9f958ca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      description: "Premium quality formal suit perfect for business meetings and special occasions. Made with high-quality wool blend fabric."
    },
    {
      id: "m2",
      name: "Slim Fit Blazer",
      category: "Formal Wear",
      price: 119.99,
      image: "https://media.istockphoto.com/id/2183219028/photo/a-stylish-young-man-showcases-autumn-fashion-in-a-modern-studio-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=I49LCSk2VdwEP3HChbENfOoOoubwx2_XySmorK7nfe0=",
      description: "Modern slim-fit blazer that provides a sleek, tailored look. Perfect for both office and evening wear."
    },
    {
      id: "m3",
      name: "Casual Denim Shirt",
      category: "Casual Wear",
      price: 49.99,
      image: "https://media.istockphoto.com/id/2183222014/photo/a-stylish-young-man-poses-in-a-black-coat-and-yellow-beanie-against-a-backdrop.webp?a=1&b=1&s=612x612&w=0&k=20&c=ojTEAbJU_zPls9Flqznqr7_N71vr77BkU5NVW-s2RjM=",
      description: "Comfortable denim shirt for casual outings. Made with soft, breathable cotton denim."
    },
    {
      id: "m4",
      name: "Graphic Tee",
      category: "Casual Wear",
      price: 24.99,
      image: "https://media.istockphoto.com/id/2208804293/photo/young-man-choosing-sustainable-clothes-in-a-store-with-ethical-and-eco-friendly-brands.jpg?s=612x612&w=0&k=20&c=SBjV7IFKkqcgxbGAZ70Tm1IhkBB6hnPGRGy21bhyq8I=",
      description: "Cool graphic t-shirt featuring unique artwork. 100% cotton for maximum comfort."
    },
    {
      id: "m5",
      name: "Running Tracksuit",
      category: "Sportswear",
      price: 89.99,
      image: "https://media.istockphoto.com/id/1953957232/photo/happy-man-shopping-at-a-clothing-store-with-the-help-of-a-retail-clerk.jpg?s=612x612&w=0&k=20&c=nA9FA6EIiTk8bPPpYNeYJW26TFx1jfHy4jlWvCFQ0Lk=",
      description: "Performance tracksuit designed for running and workouts. Moisture-wicking fabric keeps you dry."
    },
    {
      id: "m6",
      name: "Training Shorts",
      category: "Sportswear",
      price: 39.99,
      image: "https://media.istockphoto.com/id/2154700900/photo/european-young-hipster-man-in-fashionable-black-denim-jacket-in-vintage-jeans-with-leather.jpg?s=612x612&w=0&k=20&c=0utYVZ5LL2hxDSVejhNjcbzqDRX-S5zB44sEOh3EKho=",
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
      image: "https://media.istockphoto.com/id/2189194392/photo/thoughtful-young-asian-man-in-hat-and-grey-shirt-sitting-in-studio-portrait.jpg?s=612x612&w=0&k=20&c=ZfmzCX_9coJmEVHKjhs6BsjwSQ7Tl2ALt770cbZPJAw=",
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
      image: "https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
      description: "Stylish high-waisted jeans with a comfortable stretch fit. Flattering for all body types."
    },
    {
      id: "w4",
      name: "Distressed Skinny Jeans",
      category: "Jeans",
      price: 54.99,
      image: "https://media.istockphoto.com/id/915655588/photo/ladys-party.webp?a=1&b=1&s=612x612&w=0&k=20&c=xcu1SJCsQYPzFPZQnkbqMeGC-OE2krDObXKm0gLSup4=",
      description: "Trendy skinny jeans with distressed details. Made with premium denim for lasting wear."
    },
    {
      id: "w5",
      name: "Leather Jacket",
      category: "Jackets",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhc2hpb24lMjBnaXJsfGVufDB8fDB8fHww",
      description: "Classic leather jacket with a modern fit. Features zipper closure and multiple pockets."
    },
    {
      id: "w6",
      name: "Bomber Jacket",
      category: "Jackets",
      price: 89.99,
      image: "https://plus.unsplash.com/premium_photo-1668319915384-3cccf7689bef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzaGlvbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
      description: "Stylish bomber jacket with ribbed cuffs and hem. Lightweight yet warm for transitional weather."
    },
    {
      id: "w7",
      name: "Yoga Set",
      category: "Activewear",
      price: 69.99,
      image: "https://media.istockphoto.com/id/1399763427/photo/beauty-portrait-of-african-american-girl-in-colored-sunglasses.webp?a=1&b=1&s=612x612&w=0&k=20&c=Va7RR3T6S59c29uaTcYsxbNSMWNIS6okVMDCC2DJX8A=",
      description: "Breathable yoga set perfect for workouts and lounging. Moisture-wicking fabric keeps you comfortable."
    },
    {
      id: "w8",
      name: "Running Leggings",
      category: "Activewear",
      price: 39.99,
      image: "https://media.istockphoto.com/id/618553342/photo/beauty-young-girl-outdoors-enjoying-nature.webp?a=1&b=1&s=612x612&w=0&k=20&c=FUSJ0W_9OxsgNU57ORGgXuXbTzYHE35hUBqCG3dl6c4=",
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
  ],
  
  ACCESSORIES: [
    {
      id: "a1",
      name: "Leather Belt",
      category: "Men",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1723802205505-2f88b2227718?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
      description: "Classic genuine leather belt with silver buckle. Perfect for formal and casual wear."
    },
    {
      id: "a2",
      name: "Aviator Sunglasses",
      category: "Unisex",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
      description: "Stylish aviator sunglasses with UV protection. Lightweight and durable frame."
    },
    {
      id: "a3",
      name: "Silk Scarf",
      category: "Women",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1599108859613-88a1fff8e2e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
      description: "Elegant silk scarf that adds a chic touch to any outfit. Soft and breathable material."
    },
    {
      id: "a4",
      name: "Canvas Backpack",
      category: "Unisex",
      price: 49.99,
      image: "https://plus.unsplash.com/premium_photo-1709033404514-c3953af680b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
      description: "Durable canvas backpack with multiple compartments. Ideal for everyday use or travel."
    },
       {
      id: "a5",
      name: "Leather Belt",
      category: "Men",
      price: 29.99,
      image: "https://plus.unsplash.com/premium_photo-1681276169690-a22f1193c784?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
      description: "Classic genuine leather belt with silver buckle. Perfect for formal and casual wear."
    },
    {
      id: "a6",
      name: "Aviator Sunglasses",
      category: "Unisex",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1612902457652-33aff0a641fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
      description: "Stylish aviator sunglasses with UV protection. Lightweight and durable frame."
    },
    {
      id: "a7",
      name: "Silk Scarf",
      category: "Women",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
      description: "Elegant silk scarf that adds a chic touch to any outfit. Soft and breathable material."
    },
    {
      id: "a8",
      name: "Canvas Backpack",
      category: "Unisex",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1612902457652-33aff0a641fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
      description: "Durable canvas backpack with multiple compartments. Ideal for everyday use or travel."
    },
     {
      id: "a9",
      name: "Leather Belt",
      category: "Men",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1723802205505-2f88b2227718?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
      description: "Classic genuine leather belt with silver buckle. Perfect for formal and casual wear."
    },
    {
      id: "a10",
      name: "Aviator Sunglasses",
      category: "Unisex",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
      description: "Stylish aviator sunglasses with UV protection. Lightweight and durable frame."
    },
    {
      id: "a11",
      name: "Silk Scarf",
      category: "Women",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1599108859613-88a1fff8e2e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
      description: "Elegant silk scarf that adds a chic touch to any outfit. Soft and breathable material."
    },
    {
      id: "a12",
      name: "Canvas Backpack",
      category: "Unisex",
      price: 49.99,
      image: "https://plus.unsplash.com/premium_photo-1709033404514-c3953af680b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
      description: "Durable canvas backpack with multiple compartments. Ideal for everyday use or travel."
    },
  ]
};

export default data;
