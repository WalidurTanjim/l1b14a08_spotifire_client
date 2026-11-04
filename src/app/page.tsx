import Categories from "@/components/(categories)/Categories/Categories"
import AboutUs from "@/components/AboutUs/AboutUs"
import Banner from "@/components/Banner/Banner"
import FeaturedStudio from "@/components/(featuredStudios)/FeaturedStudio/FeaturedStudio"
import HowDoesWorks from "@/components/HowDoesWorks/HowDoesWorks"
import { HostGuarantee } from "@/components/HostGuarantee/HostGuarantee"

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <FeaturedStudio />
      <HowDoesWorks />
      <AboutUs />
      <HostGuarantee />
    </div>
  )
}

export default Home
