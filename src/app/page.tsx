import Categories from "@/components/(categories)/Categories/Categories"
import AboutUs from "@/components/AboutUs/AboutUs"
import Banner from "@/components/Banner/Banner"
import HowDoesWorks from "@/components/HowDoesWorks/HowDoesWorks"

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <HowDoesWorks />
      <AboutUs />
    </div>
  )
}

export default Home
