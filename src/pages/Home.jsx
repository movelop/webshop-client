import { Navbar, Announcements, Slider, Categories, Products, NewsLetter, Footer } from "../components" 
const Home = () => {
    return (
        <div>
            <Announcements />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Home;
