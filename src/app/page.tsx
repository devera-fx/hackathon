import Hero from '@/views/Hero'
import Jewellery from '@/views/Jewellery'
import ProductList from '@/views/ProductList'
import Promotions from '@/views/Promotions'
import Subscription from '@/views/Subscription'


export default function Home() {
  return (
    <div>
      <Hero />
      <Promotions />
      <ProductList />
      <Jewellery />
      <Subscription />
    </div>
  )
}
