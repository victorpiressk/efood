// ====================
// 📦 Tipos de dados
// ====================
declare interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

declare type Product = {
  id: number
  price: number
}

declare type CartState = {
  items: Cardapio[]
  isOpen: boolean
}

// ====================
// 💳 Tipos de compra
// ====================
declare type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

declare type PurchaseResponse = {
  orderId: string
}

// ====================
// 🧱 Tipos de componentes
// ====================
declare type ButtonProps = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
  variant: 'home' | 'perfil'
  fullWidth?: boolean
  disabled?: boolean
}

declare type BannerProps = {
  food: Restaurant
}

declare type RestaurantCardProps = {
  id: number
  image: string
  infos: string[]
  title: string
  score: number
  description: string
}

declare type ProductCardProps = {
  product: Cardapio
}

declare type TagProps = {
  children: string
}

declare type InputGroupProps = {
  maxWidth?: string
}

declare type ProductListProps = {
  products: Cardapio[]
}

declare type RestaurantListProps = {
  restaurants: Restaurant[]
}

// ====================
// ⚙️ Utilitários
// ====================
declare type RestaurantParams = {
  id: string
}

declare interface ModalState {
  isVisible: boolean
}

declare type VariantProps = {
  variant: 'home' | 'perfil'
}
