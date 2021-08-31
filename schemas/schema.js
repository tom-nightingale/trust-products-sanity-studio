import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import seo from './common/seo'

import singletonHome from './singletonHome'
import singletonReturns from './singletonReturns'
import singletonShippingDelivery from './singletonShippingDelivery'
import singletonTermsConditions from './singletonTermsConditions'
import singletonGlobal from './singletonGlobal'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    singletonGlobal,
    singletonHome,
    singletonReturns,
    singletonShippingDelivery,
    singletonTermsConditions,
    seo
  ]),
})

