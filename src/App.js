import React, {useEffect} from 'react';
import './App.css';
import NewProduct from './components/NewProduct';
import Display from './components/Display';
import VisibilityFilter from './components/VisibilityFilter'
import { useDispatch } from 'react-redux';
import productService from './services/products'
import {initializeProducts} from './reducers/productReducer'


const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    productService.getAll().then(products => 
      dispatch(initializeProducts(products))
    )
  }, [])

  return(
    <div className="App">
      <NewProduct />
      <VisibilityFilter />
      <Display />
    </div>
  )
}

export default App;
