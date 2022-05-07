import Footer from "../components/footer";
import Header from "../components/header";
import Intro from "../components/intro";
import TimeLine from "../components/timeline";

function Home(){
    return (
        <>
            <h1>Home page</h1>
            <Header />
            <Intro />
            <TimeLine />
            <Footer />
        </>
    )
};

export default Home;