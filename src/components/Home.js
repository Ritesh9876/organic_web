import React from 'react'
import styled from 'styled-components'
import Products from './Products'
function Home() {
    return (
        <HomePage>
            <Home_banner>
         <img  src="https://as1.ftcdn.net/v2/jpg/03/98/94/40/1000_F_398944010_wb08eUxsfjCv54SxCvEd7YQ3AudfdimQ.jpg" alt="banner"/>
            </Home_banner>
<HomeRow>
<Products id={12345} title="Organic White Sonamasuri Rice 1kg"
           price={199} rating={5} image="https://www.organictattva.com/wp-content/uploads/2018/06/OT_Rice_Sonamasuri-Rice-White_1kg_FOP.jpg" />

<Products id={12345} title="ORGANIC WHEAT MAIDA 500 GM"
           price={199} rating={5} image="https://cdn.shopify.com/s/files/1/0558/8185/9170/products/0003_Wheat_Maida_500_Gm_F.jpg?v=1656515855" />

</HomeRow>

<HomeRow>
<Products id={12345} title="24 Mantra Organic Jowar Flour/Sorghum Flour/Jonna - 500gms"
           price={199} rating={5} image="https://m.media-amazon.com/images/I/41oFHHiuoCL._SX300_SY300_QL70_FMwebp_.jpg" />

<Products id={12345} title="Gropure Organic Bajra (Pearl Millet)"
           price={199} rating={4} image="https://i0.wp.com/gropureorganic.com/wp-content/uploads/2021/03/bajra-1.jpg?fit=2000%2C2000&ssl=1" />

<Products id={12345} title="Organic Turmeric Powder 100g"
           price={199} rating={5} image="https://ik.imagekit.io/bfrs/tr:w-550,h-650,pr-true,cm-pad_resize,bg-FFFFFF/image_organicfoods/data/tur.jpg" />

</HomeRow>

<HomeRow>

<Products id={12345} title="Organic Barley Flour (Jau Atta)"
           price={199} rating={4} image="https://earthonstore.com/wp-content/uploads/2021/07/Barley-Flour-500g-1-1.jpg" />

</HomeRow>
           
        </HomePage>
    )
}
const HomePage=styled.div`
max-width:1500px; 
    margin-left:auto;
    margin-right:auto;
`;
const Home_banner=styled.div`
z-index=-1;
margin-bottom:-150px;
@media(max-width:682px){
    margin-bottom:-90px;
}
img{
    width:100%;
    mask-image:linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0));
   
}
`;
const HomeRow=styled.div`
margin: 0 5px;
margin-bottom:20px;
display:flex;
justify-content:space-around;
z-index:1;
`;
export default Home
