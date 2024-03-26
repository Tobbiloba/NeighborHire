import BrowseCategory from '@/components/BrowseCategory/BrowseCategory'
import JoinUsNow from '@/components/JoinUsNow/JoinUsNow'
import PopularServices from '@/components/PopularService/PopularService'
import Services from '@/components/Services/Services'
import WhyChooseUs from '@/components/whyChooseUs/WhyChooseUs'
import Layout from '@/layout/user/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="w-[100vw] heroBg pt-[6rem]">Home</div>
      {/* <BrowseCategory /> */}
      <Services />
      {/* <WhyChooseUs /> */}
      {/* <PopularServices /> */}
      {/* <JoinUsNow /> */}
      <div></div>
    </Layout>
  )
}
export default Home
