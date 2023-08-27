import { Button } from '@/components/ui/button';
import axios from 'axios'
import Link from 'next/link'

const PricingCard = ({price}) => {

  const handlePayment = async (e) => {
    e.preventDefault();
    const {data} = await axios.post('/api/payment', 
    {
      priceId: price.id,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
    )
    window.location.assign(data)
  }

  return (
    <div>
      <h4>{price.nickname}</h4>
      <h3>{(price.unit_amount / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })}</h3>
      <Button onClick={handlePayment} type="submit">Stripe</Button>
      <hr/>
    </div>
  )
}

export default PricingCard