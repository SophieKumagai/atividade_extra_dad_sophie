import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Promocao from './components/Promocao/Promocao'
import Header from './components/Header/Header'
import Propaganda from './components/Propaganda/Propaganda'
import Divisao from './components/Divisao/Divisao'
import controle from "./assets/controle.svg"
import Produtos from './components/Produtos/Produtos'
import Produto from './components/Produto/Produto'
import FiveStar from './assets/Five_Star.svg'
import FourStar from './assets/Four_Star.svg'
import teclado from "./assets/teclado.svg"
import tv from "./assets/tv.svg"
import four_half from "./assets/Four_Half_Star.svg"
import cadeira from "./assets/cadeira.svg"
import Linha from './components/Linha/Linha'
import Categoria from './components/Categoria/Categoria'
import celular from "./assets/celular_categoria.svg"
import computador from "./assets/computer.svg"
import smartwatch from "./assets/smartwatch.svg"
import camera from "./assets/camera.svg"
import fone from "./assets/fone.svg"
import game from "./assets/gamepad.svg"
import coat from "./assets/coat.svg"
import bag from "./assets/bag.svg"
import som from "./assets/som.svg"
import bookshelf from "./assets/bookshelf.svg"
import Propaganda2 from './components/Propaganda2/Propaganda2'
import three_stars from "./assets/Three Star.svg"
import dog from "./assets/dog.svg"
import canon from "./assets/canon.svg"
import pad from "./assets/pad.svg"
import curology from "./assets/curology.svg"
import carrinho2 from "./assets/carrinho2.svg"
import chuteira from "./assets/chuteira.svg"
import gamer from "./assets/gamer.svg"
import jacket from "./assets/jacket.svg"
import Propaganda3 from './components/Propaganda3/Propaganda3'
import Servico from "./components/Servico/Servico"
import IconCustomer from "./assets/Icon-Customer service.svg"
import IconDelivery from "./assets/Icon-Delivery.svg"
import IconSecure from "./assets/Icon-Secure.svg"
import Footer from './components/Footer/Footer'

let lista_um = [<Produto desconto="-40%" cor="#DB4444" produto="HAVIT HV-G92 Gamepad" preco_atual="$120" preco_original="$160" estrelas={FiveStar} count="88" imagem={controle} desconto_aparece={true}/>, <Produto desconto="-45%" cor="#DB4444" produto="AK-900 Wired Keyboard" preco_atual="$960" preco_original="$1160" estrelas={FourStar} count="75" imagem={teclado} desconto_aparece={true}/>, <Produto desconto="-30%" cor="#DB4444" produto="IPS LCD Gaming Monitor" preco_atual="$370" preco_original="$400" estrelas={FiveStar} count="99" imagem={tv} desconto_aparece={true}/>, <Produto desconto="-25%" cor="#DB4444" produto="S-Series Comfort Chair " preco_atual="$375" preco_original="$400" estrelas={four_half} count="99" imagem={cadeira} desconto_aparece={true}/>]

let lista_categorias = [<Categoria foto={celular} descricao="Phones"/>, <Categoria foto={computador} descricao="Computers"/>, <Categoria foto={smartwatch} descricao="SmartWatch"/>, <Categoria foto={camera} descricao="Camera"/>, <Categoria foto={fone} descricao="HeadPhones"/>, <Categoria foto={game} descricao="Gaming"/>]

let lista_dois = [<Produto produto="The north coat" preco_atual="$260" preco_original="$360" estrelas={FiveStar} count="65" imagem={coat}/>, <Produto produto="Gucci duffle bag" preco_atual="$960" preco_original="$1160" estrelas={four_half} count="65" imagem={bag}/>, <Produto produto="RGB liquid CPU Cooler" preco_atual="$160" preco_original="$170" estrelas={four_half} count="65" imagem={som} />, <Produto produto="Small BookSelf" preco_atual="$360" preco_original="" estrelas={FiveStar} count="65" imagem={bookshelf} />]

let lista_tres = [<Produto produto="Breed Dry Dog Food" preco_atual="$100" preco_original="" estrelas={three_stars} count="35" imagem={dog}/>, <Produto produto="CANON EOS DSLR Camera" preco_atual="$360" preco_original="" estrelas={FourStar} count="95" imagem={canon}/>, <Produto produto="ASUS FHD Gaming Laptop" preco_atual="$700" preco_original="" estrelas={FiveStar} count="325" imagem={pad} />, <Produto produto="Curology Product Set" preco_atual="$500" preco_original="" estrelas={FourStar} count="145" imagem={curology} />, <Produto produto="Kids Electric Car" preco_atual="$960" preco_original="" estrelas={FiveStar} count="65" imagem={carrinho2} desconto_aparece={true} desconto="NEW" cor="#00FF66" bolinhas={true} corBolinha="#FB1314" corBolinha2="#DB4444"/>, <Produto produto="Jr. Zoom Soccer Cleats" preco_atual="$1160" preco_original="" estrelas={FiveStar} count="35" imagem={chuteira} bolinhas={true} corBolinha="#EEFF61" corBolinha2="#DB4444"/>, <Produto produto="GP11 Shooter USB Gamepad" preco_atual="$660" preco_original="" estrelas={four_half} count="55" imagem={gamer} desconto_aparece={true} cor="#00FF66" desconto="NEW" bolinhas={true} corBolinha="#000000" corBolinha2="#DB4444"/>, <Produto produto="Quilted Satin Jacket" preco_atual="$660" preco_original="" estrelas={four_half} count="55" imagem={jacket} bolinhas={true} corBolinha="#184A48" corBolinha2="#DB4444"/>]

let servicos = [<Servico imagem={IconDelivery} texto="Free delivery for all orders over $140" titulo="FREE AND FAST DELIVERY"/>, <Servico imagem={IconCustomer} texto="Friendly 24/7 customer support" titulo="24/7 CUSTOMER SERVICE"/>, <Servico imagem={IconSecure} texto="We reurn money within 30 days" titulo="MONEY BACK GUARANTEE"/>]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Promocao />
    <Header />
    <Propaganda />
    <Divisao title="Flash Sales" subtitle="Today's" showTimer={true} showArrow={true} showButton={false} />
    <Produtos lista_produtos={lista_um} botao={true} />
    <Linha/>
    <Divisao title="Browse By Category" subtitle="Categories" showTimer={false} showArrow={true} showButton={false} />
    <Produtos lista_produtos={lista_categorias} botao={false} />
    <Linha/>
    <Divisao title="Best Selling Products" subtitle="This Month" showTimer={false} showArrow={false} showButton={true}/>
    <Produtos lista_produtos={lista_dois} botao={false} showTimer={false} showArrow={true} showButton={false}/>
    <Propaganda2/>
    <Divisao title="Explore Our Products" subtitle="Our Products"/>
    <Produtos lista_produtos={lista_tres} botao={true}/>
    <Divisao title="New Arrival" subtitle="Featured"/>
    <Propaganda3/>
    <Produtos lista_produtos={servicos} botao={false} showTimer={false} showArrow={false} showButton={false}/>
    <Footer/>
  </StrictMode>
)
