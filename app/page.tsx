import BrowseCategory from '@/components/BrowseCategory/BrowseCategory'
import Layout from '@/layout/user/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="w-[100vw] heroBg pt-[6rem]">Home</div>
      <BrowseCategory />
      <div></div>
    </Layout>
  )
}
export default Home
