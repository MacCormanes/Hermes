import Link from 'next/link'
import ProductCard from '../components/ui/ProductCard'
import { CartProduct } from '../context/cart.context'

export type CategoryPreviewProps = {
    title: string
    products: CartProduct[]
}

const CategoryPreview = ({title, products}: CategoryPreviewProps) => {
  return (
    <div className='pt-7 px-10 font-montserrat'>
        <Link href={`/shop/${title}`}><h2 className='mb-3 font-medium text-2xl text-orange-950'>{title.toUpperCase()}</h2></Link>
        <div className='grid grid-cols-4 gap-7'>
            {
                products.filter((_, idx) => idx < 4).map((product) => {
                    return (
                        <ProductCard product={product} key={product.id} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default CategoryPreview