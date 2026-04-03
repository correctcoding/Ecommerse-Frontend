import React, { Fragment } from 'react'
import ShopHero from '../../componets/shop/ShopHero'
import CategorySection from '../../componets/shop/CategorySection'
import FlashSale from '../../componets/shop/FlashSale'
import AIRecommendation from '../../componets/shop/AIRecommended'

function ShopPage() {
  return (
    <Fragment>
      <ShopHero />
      <CategorySection/>
      <FlashSale/>
      <AIRecommendation/>
    </Fragment>
  )
}

export default ShopPage