import Link from 'next/link'
import { CategoryPreviewProps } from '../CategoryPreview'
import ProductCard from '@/app/components/ui/ProductCard'

const CategoryView = ({title, products}: CategoryPreviewProps) => {
  return (
    <div className='pt-7 px-10 font-montserrat'>
        <h2 className='mb-3 font-semibold text-[35px] text-orange-950 text-center'>{title.toUpperCase()}</h2>
        <div className='grid grid-cols-4 gap-7'>
            {
                products.map((product) => {
                    return (
                        <ProductCard product={product} key={product.id} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default CategoryView