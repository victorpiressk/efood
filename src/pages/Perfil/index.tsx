import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ProductsList from '../../containers/ProductsList'
import Food from '../../models/Food'
import imgPizza from '../../assets/images/pizza.png'

const foodPerfil: Food[] = [
  {
    id: 7,
    image: imgPizza,
    infos: [],
    title: 'Pizza Marguerita',
    score: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 8,
    image: imgPizza,
    infos: [],
    title: 'Pizza Marguerita',
    score: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 9,
    image: imgPizza,
    infos: [],
    title: 'Pizza Marguerita',
    score: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 10,
    image: imgPizza,
    infos: [],
    title: 'Pizza Marguerita',
    score: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 11,
    image: imgPizza,
    infos: [],
    title: 'Pizza Marguerita',
    score: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 12,
    image: imgPizza,
    infos: [],
    title: 'Pizza Marguerita',
    score: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Perfil = () => (
  <>
    <Header variant="perfil" />
    <Banner />
    <ProductsList foods={foodPerfil} />
  </>
)

export default Perfil
