import React, {useEffect} from 'react';
import {
    Switch,
    Route,
    useLocation
} from 'react-router-dom';

import './css/style.scss';

import AOS from 'aos';

import Home from './pages/Home';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import ComingSoon from './pages/ComingSoon';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Crypvest from './pages/Crypvest';
import Help from './pages/Help';
import PageNotFound from './pages/PageNotFound';
import bsc from '@binance-chain/bsc-use-wallet';
import {UseWalletProvider} from 'use-wallet';
import {Provider} from "react-redux";
import store from './store';
import {PersistGate} from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

const persistor = persistStore(store)

function App() {

    const location = useLocation();

    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 750,
            easing: 'ease-out-quart',
        });
    });

    useEffect(() => {
        document.querySelector('html').style.scrollBehavior = 'auto'
        window.scroll({top: 0})
        document.querySelector('html').style.scrollBehavior = ''
    }, [location.pathname]); // triggered on route change

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<p>Wait...</p>}>
                <UseWalletProvider connectors={{bsc}}>
                    <>
                        <Switch>
                            <Route exact path="/">
                                <Home/>
                            </Route>
                            <Route path="/dashboard">
                                <Testimonials/>
                            </Route>
                            <Route path="/coming-soon">
                                <ComingSoon/>
                            </Route>
                            <Route path="/blog">
                                <Blog/>
                            </Route>
                            <Route path="/bug-bounty">
                                <BlogPost/>
                            </Route>
                            <Route path="/about">
                                <About/>
                            </Route>
                            <Route path="/crypvest-airdrop">
                                <Crypvest/>
                            </Route>
                            <Route path="/help">
                                <Help/>
                            </Route>
                            <Route path="*">
                                <PageNotFound/>
                            </Route>
                        </Switch>
                    </>
                </UseWalletProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
