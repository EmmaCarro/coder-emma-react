const product = [
    {
        id:"1",
        name:"Eukanuba Croquetas 1kg",
        price: 2000,
        category:"alimentos",
        img:"https://images.pexels.com/photos/230785/pexels-photo-230785.jpeg",
        stock: 30,
        description: "Eukanuba Croquetas de alimento seco, ricas en pollo fresco y perfectas para perros adultos de raza mediana de entre 1 y 7 años. La L-carnitina incluida en el alimento seco de Eukanuba ayuda a reducir la grasa corporal y permite mantener el peso óptimo de su perro, lo cual reduce la presión en las articulaciones."
    },
    {
        id:"2",
        name:"DogChow Balanceado 10kg",
        price: 13300,
        category:"alimentos",
        img:"https://images.pexels.com/photos/8434633/pexels-photo-8434633.jpeg",
        stock: 10,
        description: "Alimento 100% completo y balanceado para perros Cachorros de tamaño Medianos y Grandes"
    },
    {
        id:"3",
        name:"Pelota Anti Stress 15cm",
        price: 1100,
        category:"juguetes",
        img:"https://images.pexels.com/photos/130764/pexels-photo-130764.jpeg",
        stock: 30,
        description: "Hecha con material de alta calidad, esta pelota maciza está diseñada para soportar mordidas y juegos bruscos. ¡Ya no tendrás que preocuparte por reemplazar juguetes constantemente!"
    },
    {
        id:"4",
        name:"Mordillo Soga 30cm",
        price: 3300,
        category:"juguetes",
        img:"https://images.pexels.com/photos/27680249/pexels-photo-27680249/free-photo-of-a-human-is-playing-tug-of-war-with-an-eager-white-golden-retriever-both-fully-engaged-in-the-fun-game.jpeg",
        stock: 15,
        description: "Es un juguete para perros pequeños que está hecho de una cuerda trenzada, colorida y duradera. El mordillo ayuda a mantener la higiene bucal del perro. Las fibras de algodón limpian los dientes y masajean las encías mientras juegan."
    },
    {
        id:"5",
        name:"Jaula mediana 50x50x70",
        price: 22100,
        category:"transporte",
        img:"https://images.pexels.com/photos/17206203/pexels-photo-17206203/free-photo-of-puppies-in-cage.jpeg",
        stock: 6,
        description: "De acero pintado y rebatible. Para transporte con buena ventilacion."
    },
    {
        id:"6",
        name:"Caja de Transporte 40x50x60",
        price: 32400,
        category:"transporte",
        img:"https://images.pexels.com/photos/27793088/pexels-photo-27793088/free-photo-of-orange-closed-box.jpeg",
        stock: 4,
        description: "Son cajas importadas cuya calidad y resistencia son muy superiores a las que usted pueda encontrar en el mercado. Incluye piso aislante, lo cual evita que el animal entre en contacto con el orine durante el viaje."
    },
    {
        id:"7",
        name:"Shampoo Nature's Miracle 500ml",
        price: 6400,
        category:"cuidado",
        img:"https://images.pexels.com/photos/12943750/pexels-photo-12943750.jpeg",
        stock: 22,
        description: "Limpia y desodoriza el pelaje sin disminuir la efectividad de las pipetas contra pulgas y garrapatas. Puede ser utilizado para limpieza del cuerpo entero, o sólo de alguna parte que lo requiera."
    },
    {
        id:"8",
        name:"Cepillo ",
        price: 6400,
        category:"cuidado",
        img:"https://images.pexels.com/photos/19145879/pexels-photo-19145879/free-photo-of-groomer-brushing-a-dog.jpeg",
        stock: 14,
        description: "Es un peine con dientes metálicos, lo puedes encontrar con púas separadas o muy juntas. Algunas largas, con diferentes tamaños en el mismo peine o dientes cortos. ¿Para qué sirve? – Son ideales para peinar cerca de la cara o en el pelaje largo para quitar nudos y pelo muerto."
    }
]

//Se puede exportar el array solo con un export default pero para poder filtrar hay que hacer los asyncs
//async de producto
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product)
        }, 500)
    })
}

//async para getear un producto especifico
export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product.find(prod => prod.id === productId))
        }, 500)
    })
}

//async para filtrar los productos segun categoria
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product.filter(prod => prod.category === categoryId))
        }, 500)
    })
}