import auth from './auth.reducers'
import user from './user.reducer'
import product from './product.reducer'
import category from './category.reducer'
import order from './order.reducer'
import page from './page.reducer'
import loader from './loader.reducer'
import gallery from './galleryPhoto.reducer'
import application from './application.reducer'
import header from './header'
import promotion from './components/promotion'
import mainImage from './components/mainImage'
import manufacture from './components/manufacture'
import weWorkOnline from './components/weWorkOnline'
import comeToUs from './components/comeToUs'
import chooseMemorialPhotos from './components/chooseMemorialPhotos'
import engraving from './components/engraving'
import contact from './components/contact'
import warranty from './components/warranty'
import graniteMaterial from './components/graniteMaterial'
import paymentLI from './components/paymentLI'


import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth,
    user,
    category,
    product,
    order,
    page,
    loader,
    application,
    gallery,
    header,
    promotion,
    mainImage,
    manufacture,
    comeToUs,
    weWorkOnline,
    engraving,
    chooseMemorialPhotos,
    contact,
    warranty,
    graniteMaterial,
    paymentLI
})

export default rootReducer