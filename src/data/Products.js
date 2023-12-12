export const products = [
    {
      id: 1,
      title: 'Sofá Ioto',
      img: 'https://tiendaliving.com.ar/cdn/shop/products/CHESTER_IND_800x.jpg?v=1622722890',
      price: 320000,
      category: 'Sofás & Sillones',
    },
    {
      id: 2,
      title: 'Sofá Tokio',
      img: 'https://tiendaliving.com.ar/cdn/shop/products/LOOK4_800x.jpg?v=1657038597',
      price: 520000,
      category: 'Sofás & Sillones',
    },
    {
      id: 3,
      title: 'Sillón Turín',
      img: 'https://tiendaliving.com.ar/cdn/shop/files/SHIV_800x.png?v=1693591259',
      price: 240000,
      category: 'Sofás & Sillones',
    },
    {
      id: 4,
      title: 'Sofá Valencia',
      img: 'https://tiendaliving.com.ar/cdn/shop/products/CaptureOneSession60831_800x.jpg?v=1593296131',
      price: 680000,
      category: 'Sofás & Sillones',
    },
    {
      id: 5,
      title: 'Sillón Carmelo',
      img: 'https://tiendaliving.com.ar/cdn/shop/products/CaptureOneSession6396_800x.jpg?v=1594485483',
      price: 300000,
      category: 'Sofás & Sillones',
    },
    {
      id: 6,
      title: 'Sofá Nápoles',
      img: 'https://kandelsdeco.com/wp-content/uploads/2020/03/napoleon-22png.png',
      price: 420000,
      category: 'Sofás & Sillones',
    },
    {
      id: 7,
      title: 'Bahiut Oslo',
      img: 'https://http2.mlstatic.com/D_NQ_NP_959487-MLU71573357800_092023-O.webp',
      price: 115000,
      category: 'Muebles De Guardado',
    },
    {
      id: 8,
      title: 'Bahiut modular Angra',
      img: 'https://http2.mlstatic.com/D_NQ_NP_903445-MLA71788379271_092023-O.webp',
      price: 150000,
      category: 'Muebles De Guardado',
    },
    {
      id: 9,
      title: 'Cajonera moderna minimalista Belice',
      img: 'https://http2.mlstatic.com/D_NQ_NP_737861-MLA72303657703_102023-O.webp',
      price: 95000,
      category: 'Muebles De Guardado',
    },
    {
      id: 10,
      title: 'Modular Sidney',
      img: 'https://http2.mlstatic.com/D_NQ_NP_788993-MLU72609050585_112023-O.webp',
      price: 270000,
      category: 'Muebles De Guardado',
    },
    {
      id: 11,
      title: 'Placard Venecia',
      img: 'https://authogar.vtexassets.com/arquivos/ids/183066-800-auto?v=637982917707200000&width=800&height=auto&aspect=true',
      price: 220000,
      category: 'Muebles De Guardado',
    },
    {
      id: 12,
      title: 'Mueble de cocina París',
      img: 'https://livingstyle.com.ar/image/cache/catalog/productos/Orlandi/Cocina%20Compacta/cocina-calida-linosa-750x930.png',
      price: 500000,
      category: 'Muebles De Guardado',
    },
    {
      id: 13,
      title: 'Mesa comedor Singapur',
      img: 'https://tiendaliving.com.ar/cdn/shop/files/GREEK_800x.png?v=1693499018',
      price: 685000,
      category: 'Comedor',
    },
    {
      id: 14,
      title: 'Mesa comedor Italia',
      img: 'https://tiendaliving.com.ar/cdn/shop/files/SKORP2_800x.png?v=1693498915',
      price: 750000,
      category: 'Comedor',
    },
    {
      id: 15,
      title: 'Juego mesa y sillas Barcelona',
      img: 'https://tiendaliving.com.ar/cdn/shop/files/FILA_800x.png?v=1693498760',
      price: 1200000,
      category: 'Comedor',
    },
  ];
  
  export const TotalProducts = products.length;
  
  export const Products = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
  
    acc[product.category] = [...acc[product.category], product];
  
    return acc;
  }, {});