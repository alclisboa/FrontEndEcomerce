import Announcement from '../components/Announcement'
import Navbar from "../components/Navbar"
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import styled from "styled-components"
import { mobile } from '../responsive'

const Container = styled.div`

`

const Image = styled.img`
    width: 100%;
    height: 65vh;
    overflow: hidden; 
    // object-fit: cover;
    ${mobile({display: "none"})}
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({width: "0px 20px", display:"flex", flexDirection:"column"})}
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: "0px"})}
`

const Select = styled.select`
   padding: 10px;
   margin-right: 20px;
   ${mobile({margin: "10px 0px"})}
`
const Option = styled.option`
   
`

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <FilterContainer>
                <Filter>
                    <FilterText>Filtrar Produtos: </FilterText>
                    <Select>
                        <Option disabled selected>
                            CATEGORIAS
                        </Option>
                        <Option>Bermudas</Option>
                        <Option>Blazeres</Option>
                        <Option>Blusas</Option>
                        <Option>Blusões</Option>
                        <Option>Calças</Option>
                        <Option>Camisas</Option>
                        <Option>Casacos</Option>
                        <Option>Jaquetas</Option>
                        <Option>Regatas</Option>
                        <Option>Saias</Option>
                        <Option>Shorts</Option>
                        <Option>Vestidos</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            COR
                        </Option>
                        <Option>Multicolorido</Option>
                        <Option>Branco</Option>
                        <Option>Cinza</Option>
                        <Option>Preto</Option>
                        <Option>Azul</Option>
                        <Option>Roxo</Option>
                        <Option>Rosa</Option>
                        <Option>Vermelho</Option>
                        <Option>Amarelo</Option>
                        <Option>Laranja</Option>
                        <Option>Verde</Option>
                        <Option>Marrom</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            TAMANHO
                        </Option>
                        <Option>Tamanho Único</Option>
                        <Option>PP</Option>
                        <Option>P</Option>
                        <Option>M</Option>
                        <Option>G</Option>
                        <Option>GG</Option>
                        <Option>XGG</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Ordenar por:</FilterText>
                    <Select>
                    <Option disabled selected>
                            ORDEM POR
                        </Option>
                        <Option>Relevância</Option>
                        <Option>Mais Vendidos</Option>
                        <Option>Mais Recentes</Option>
                        <Option>Descontos</Option>
                        <Option>Maior Preço</Option>
                        <Option>Menor Preço</Option>
                        <Option>De A a Z</Option>
                        <Option>De Z a A</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
