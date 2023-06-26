import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'
import { Provider } from "react-redux";
import { configureStore,applyMiddleware } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import reducers from "./reducers"
//import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, reducers)
const root=ReactDOM.createRoot(document.getElementById('root'))
// const store=configureStore({reducer:persistedReducer},composeWithDevTools(applyMiddleware(thunk)))
const store=configureStore({reducer:persistedReducer,middleware:[thunk]})
let persistor=persistStore(store)
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
        <BrowserRouter>
    <App/>
    </BrowserRouter>
        </PersistGate>
       
    </Provider>
   

)