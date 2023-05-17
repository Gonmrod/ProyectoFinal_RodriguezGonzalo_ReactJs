const products = [
    {
        id: '1',
        name: 'Trumpeter',
        price: 2300,
        category: 'vinos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_657007-MLA52268825838_112022-F.webp',
        stock: 30,
        description: 'Vino Malbec'
    },
    {
        id: '2',
        name: 'DV Catena',
        price: 3200,
        category: 'vinos',
        img: 'https://www.hipermania.com.ar/wp-content/uploads/2023/01/dvcatenamalbec.jpg',
        stock: 20,
        description: 'Vino Malbec'
    },
    {
        id: '3',
        name: 'Montecristo N° 4',
        price: 3800,
        category: 'Tabaco',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/598/255/products/366fb287-7d1f-4a07-88e0-a096526d05d51-c9ef933f2b8121de2f16281910809808-480-0.webp',
        stock: 100,
        description: 'Habano Cubano'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter(prod => prod.category === category);
        resolve(filteredProducts);
      }, 500);
    });
  }
  