import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile } from "../responsive"

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
    ${mobile({margin: "5px 5px"})}
`
const TopTexts = styled.div`
${mobile({display: "none"})}
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`

const ProductDatail = styled.div`
   flex:2;
   display: flex;
`

const Image = styled.img`
   width: 200px;
   height: 280px;
   object-fit: cover;
`

const Details = styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`

const ProductName = styled.span`
   
`

const ProductId = styled.span`
   
`

const ProductColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props => props.color};
`

const ProductSize = styled.span`
   
`

const PriceDatails = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})}
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: "20px"})}
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
    font-size: 30px;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span`
    
`

const SummaryItemPrice= styled.span`
    
`

const Button = styled.button`
   width: 100%;
   padding: 10px;
   background-color: black;
   color: white;
   font-weight: 600;
`


const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>MINHA SACOLA</Title>
                <Top>
                    <TopButton >CONTINUE COMPRANDO</TopButton>
                    <TopTexts>
                        <TopText>Bolsa de compras (2)</TopText>
                        <TopText>Sua lista de desejos (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">FINALIZAR COMPRA</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDatail>
                                <Image src="https://i.pinimg.com/564x/04/e7/76/04e77628b8572b8063c7781786e2a66b.jpg" />
                                <Details>
                                    <ProductName><b>Produto: </b>Vestido</ProductName>
                                    <ProductId><b>ID: </b>93813718293</ProductId>
                                    <ProductColor color=" #b8cbda" />
                                    <ProductColor color=" #dfc0ac" />
                                    <ProductColor color="#f0f2ef" />
                                    <ProductSize><b>Tamanho: </b>P</ProductSize>
                                </Details>
                            </ProductDatail>
                            <PriceDatails>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>R$ 4.299,95</ProductPrice>
                            </PriceDatails>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDatail>
                                <Image src="https://i.pinimg.com/564x/ac/ae/cc/acaeccb25c6b26b56fec0d1d1a85f1ca.jpg" />
                                <Details>
                                    <ProductName><b>Produto: </b>Vestido</ProductName>
                                    <ProductId><b>ID: </b>9381327185</ProductId>
                                    <ProductColor color="#dfc0ac" />
                                    <ProductColor color="#b8cbda" />
                                    <ProductColor color="#f0f2ef" />
                                    <ProductSize><b>Tamanho: </b>P</ProductSize>
                                </Details>
                            </ProductDatail>
                            <PriceDatails>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>R$ 765,98</ProductPrice>
                            </PriceDatails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>RESUMO DA COMPRA</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice> R$ 5.095,93</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Entrega</SummaryItemText>
                            <SummaryItemPrice> R$ 30,00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Desconto de entrega</SummaryItemText>
                            <SummaryItemPrice> R$ - 30,00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice> R$ 5.065,93</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Compre Agora</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
