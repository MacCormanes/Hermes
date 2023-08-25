import Link from 'next/link'
import ProductCard from '../components/ui/ProductCard'
import { CartProduct } from '../rtk-slices/cartSlice'


export type CategoryPreviewProps = {
    title: string
    products: CartProduct[]
}

const CategoryPreview = ({title, products}: CategoryPreviewProps) => {
  return (
    <div className='px-10 pt-7 font-montserrat'>
        <Link href={`/shop/${title}`}><h2 className='mb-3 text-2xl font-medium text-orange-950'>{title.toUpperCase()}</h2></Link>
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