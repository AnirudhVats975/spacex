import Header from './../components/header/Header';
import StarLinkMission from './../components/missions/starlinkMission/StarLinkMission';
import Crs23 from './../components/missions/crs23/Crs23';
import StarShipMoon from './../components/missions/starshipMoon/StarShipMoon';
import Footer from './../components/footer/Footer';
import CommonHeader from './../components/commonheader/CommonHeader';
import elonmuskImg from '.././image/web/elonmusk.jpg';

const Home = () => {

    return (
        <>
          <Header/> 
          <StarLinkMission/>
          <Crs23/>
          <StarShipMoon/>
          <CommonHeader 
            img={elonmuskImg}
            paraWidth = "70%"
            paraMargin = "200px auto 0 auto"
           paragraph ="SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.
            -Elon Musk"
          />
          <Footer/>
        </>
    )
}

export default Home
