import { Navbar, Announcements, Slider, Categories, Products, NewsLetter } from "../components" 
const Home = () => {
    return (
        <div>
            <Announcements />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <NewsLetter />
        </div>
    )
}

export default Home;
