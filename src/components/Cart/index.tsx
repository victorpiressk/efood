import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IMaskInput } from 'react-imask'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import Button from '../Button'
import * as S from './styles'
import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'
import { usePurchaseMutation } from '../../services/api'

const Cart = () => {
  const dispatch = useDispatch()
  const [page, setpage] = useState(1)
  const [purchase, { data, isSuccess, isLoading, reset }] =
    usePurchaseMutation()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acc, valorAtual) => {
      return (acc += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      addressDescription: '',
      city: '',
      zipCode: '',
      addressNumber: '',
      complement: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('O campo é obrigatório'),
      addressDescription: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string().required('O campo é obrigatório'),
      addressNumber: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),

      cardDisplayName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.addressDescription,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.addressNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const nextPage = () => setpage((current) => current + 1)
  const prevPage = () => setpage((current) => current - 1)

  const purchaseCompleted = () => {
    dispatch(clear())
    setpage(1)
    dispatch(close())
    reset()
    form.resetForm()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {page === 1 && (
          <>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <span>{parseToBrl(item.preco)}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                      />
                    </S.CartItem>
                  ))}
                </ul>
                <S.Prices>
                  <span>Valor total</span> {parseToBrl(getTotalPrice())}
                </S.Prices>
                <Button
                  type="button"
                  title="Clique aqui para continuar com a compra"
                  variant="perfil"
                  onClick={nextPage}
                >
                  Continuar com a compra
                </Button>
              </>
            ) : (
              <p className="empty-text">
                O carrinho está vazio, adicione pelo menos um produto para
                continuar com a compra.
              </p>
            )}
          </>
        )}

        {isSuccess && data ? (
          <>
            <h4>Pedido realizado - {data.orderId}</h4>
            <S.FormContainer>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </S.FormContainer>
            <Button
              type="button"
              title="Clique aqui para Finalizar pagamento"
              variant="perfil"
              onClick={purchaseCompleted}
            >
              Concluir
            </Button>
          </>
        ) : (
          <form onSubmit={form.handleSubmit}>
            {page === 2 && (
              <>
                <h4>Entrega</h4>
                <S.FormContainer>
                  <S.InputGroup>
                    <label htmlFor="receiver">Quem irá receber</label>
                    <input
                      type="text"
                      id="receiver"
                      name="receiver"
                      value={form.values.receiver}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('receiver') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="addressDescription">Endereço</label>
                    <input
                      type="text"
                      id="addressDescription"
                      name="addressDescription"
                      value={form.values.addressDescription}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('addressDescription') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('city') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="zipCode">CEP</label>
                    <IMaskInput
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={form.values.zipCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('zipCode') ? 'error' : ''}
                      mask="00000-000"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="addressNumber">Número</label>
                    <input
                      type="text"
                      id="addressNumber"
                      name="addressNumber"
                      value={form.values.addressNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('addressNumber') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                      type="text"
                      id="complement"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('complement') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                </S.FormContainer>
                <S.FormButtons>
                  <Button
                    type="button"
                    title="Clique aqui para continuar com o pagamento"
                    variant="perfil"
                    onClick={nextPage}
                  >
                    Continuar com o pagamento
                  </Button>
                  <Button
                    type="button"
                    title="Clique aqui para voltar ao carrinho"
                    variant="perfil"
                    onClick={prevPage}
                  >
                    Voltar para o carrinho
                  </Button>
                </S.FormButtons>
              </>
            )}

            {page === 3 && (
              <>
                <h4>Pagamento - Valor a pagar {parseToBrl(getTotalPrice())}</h4>
                <S.FormContainer>
                  <S.InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input
                      type="text"
                      id="cardDisplayName"
                      name="cardDisplayName"
                      value={form.values.cardDisplayName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardDisplayName') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <IMaskInput
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                      mask="0000 0000 0000 0000"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="87px">
                    <label htmlFor="cardCode">CVV</label>
                    <IMaskInput
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                      mask="000"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <IMaskInput
                      type="text"
                      id="expiresMonth"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresMonth') ? 'error' : ''
                      }
                      mask="00"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <IMaskInput
                      type="text"
                      id="expiresYear"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresYear') ? 'error' : ''
                      }
                      mask="0000"
                    />
                  </S.InputGroup>
                </S.FormContainer>
                <S.FormButtons>
                  <Button
                    type="submit"
                    title="Clique aqui para Finalizar pagamento"
                    variant="perfil"
                    onClick={form.handleSubmit}
                    disabled={isLoading}
                  >
                    {isLoading
                      ? 'Finalizando pagamento...'
                      : 'Finalizar pagamento'}
                  </Button>
                  <Button
                    type="button"
                    title="Clique aqui para voltar a edição de endereço"
                    variant="perfil"
                    onClick={prevPage}
                  >
                    Voltar para a edição de endereço
                  </Button>
                </S.FormButtons>
              </>
            )}
          </form>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
