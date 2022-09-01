import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Nuno',
      email: 'nuno_fernandes18@hotmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jebo',
      email: 'jebo@hotmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Nike Slim Shirt',
      slug: 'nike.slim-shirt',
      category: 'Shirts',
      image: 'images/p1.jpg', //dimensions 679 x 829
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'hight quality product',
    },
    {
      // _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas.fit-shirt',
      category: 'Shirts',
      image: 'images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 3.0,
      numReviews: 10,
      description: 'hight quality product',
    },
    {
      //_id: '3',
      name: 'Nike Pants',
      slug: 'nike.slim.pants',
      category: 'Pants',
      image: 'images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'hight quality pants',
    },
    {
      //_id: '4',
      name: 'Puma Pants',
      slug: 'puma.fit.pants',
      category: 'Pants',
      image: 'images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'hight quality pants',
    },
  ],
};
export default data;
