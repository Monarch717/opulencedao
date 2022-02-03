import React, {useState, useRef, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useLocation} from 'react-router-dom';
import Transition from '../utils/Transition.js';
import {useWallet} from "use-wallet";
import {setWallet} from "../slices/app";

function Header() {

    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    // Handle light modes
    const [darkMode, setDarkMode] = useState(() => {
        const dark = localStorage.getItem('dark-mode');
        if (dark === null) {
            return true;
        } else {
            return dark === 'true';
        }
    });

    const {address, amount} = useSelector(state => state.app.wallet);

    const trigger = useRef(null);
    const mobileNav = useRef(null);
    // connect wallet
    const wallet = useWallet();
    const dispatch = useDispatch();
    const location = useLocation();
    console.log('location', location);

    // close the mobile menu on click outside
    useEffect(() => {
        const clickHandler = ({target}) => {
            if (!mobileNav.current || !trigger.current) return;
            if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
            setMobileNavOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close the mobile menu if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({keyCode}) => {
            if (!mobileNavOpen || keyCode !== 27) return;
            setMobileNavOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    }, []);


    useEffect(() => {
        localStorage.setItem('dark-mode', darkMode)
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode]);

    const onConnect = () => {
        wallet.connect()
    }

    const onReset = () => {
        wallet.reset()
        dispatch(setWallet({
            address: null,
            amount: 0
        }))
    }

    useEffect(() => {
        if (wallet.status === 'connected') {
            console.log('wallet', wallet)
            dispatch(setWallet({
                address: wallet.account,
                amount: wallet.balance
            }))
        }
    }, [wallet.status])

    return (
        <header className="absolute w-full z-30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">

                    {/* Site branding */}
                    <div className="shrink-0 mr-5">
                        {/* Logo */}
                        <Link to="/" className="block" aria-label="Cruip">
                            <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_a">
                                        <stop stopColor="#3ABAB4" offset="0%"/>
                                        <stop stopColor="#7F9CF5" offset="100%"/>
                                    </linearGradient>
                                    <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_b">
                                        <stop stopColor="#3ABAB4" offset="0%"/>
                                        <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%"/>
                                    </linearGradient>
                                </defs>
                                <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z"
                                      fill="url(#logo_a)"/>
                                <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z"
                                      fill="url(#logo_b)"/>
                            </svg>
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex md:grow">

                        {/* Desktop menu links */}
                        <ul className="flex grow flex-wrap items-center font-medium">
                            <li>
                                <a href="https://discord.gg/zfXJ2h7HMY" target="_blank" rel="noreferrer"
                                   className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-3 py-2 flex items-center transition duration-150 ease-in-out">
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.804 10.956c-1.222-.974-2.968-1.243-3.724-1.323h-.03c-.115 0-.225.065-.26.174a.278.278 0 0 0 .203.378c.85.175 1.832.48 2.727 1.04.182.11.225.357.08.524-.116.131-.313.146-.465.058-1.746-1.076-3.913-1.134-4.335-1.134-.422 0-2.59.058-4.335 1.134-.152.088-.349.073-.465-.058a.344.344 0 0 1 .08-.524c.895-.56 1.876-.865 2.727-1.04.168-.029.27-.21.204-.378-.036-.109-.146-.174-.262-.174h-.029c-.756.08-2.502.349-3.724 1.323-.712.662-2.13 4.466-2.196 7.833 0 .226.058.451.19.633.85 1.2 2.697 1.92 4.094 2.022.21.014.414-.08.538-.255.007 0 .007-.007.014-.014a.654.654 0 0 0-.305-.997c-1.164-.429-1.76-.938-1.796-.974a.355.355 0 0 1-.037-.495c.131-.145.35-.16.495-.029.022.015 1.636 1.39 4.807 1.39 3.17 0 4.785-1.375 4.807-1.39a.347.347 0 0 1 .495.03.355.355 0 0 1-.037.494c-.036.036-.632.545-1.796.974a.654.654 0 0 0-.305.997c.007.007.007.014.014.014.124.175.327.27.538.255 1.397-.102 3.244-.822 4.095-2.022.13-.182.189-.407.189-.633-.065-3.367-1.484-7.17-2.196-7.833Zm-8.066 6.677c-.669 0-1.214-.626-1.214-1.39 0-.77.545-1.396 1.214-1.396.677 0 1.215.626 1.215 1.397 0 .763-.538 1.389-1.215 1.389Zm4.524 0c-.677 0-1.215-.626-1.215-1.39 0-.77.538-1.396 1.215-1.396.669 0 1.214.626 1.214 1.397 0 .763-.545 1.389-1.214 1.389Z"></path>
                                    </svg>
                                    Discord</a>
                            </li>
                            <li>
                                <a href="https://twitter.com/opulencedao" target="_blank" rel="noreferrer"
                                   className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-3 py-2 flex items-center transition duration-150 ease-in-out">
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"/>
                                    </svg>
                                    Twitter</a>
                            </li>
                            <li>
                                <a href="https://github.com/opulencedao" target="_blank" rel="noreferrer"
                                   className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-3 py-2 flex items-center transition duration-150 ease-in-out">
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"/>
                                    </svg>
                                    Github</a>
                            </li>

                        </ul>

                        {/* Desktop lights switch */}
                        <div className="form-switch flex flex-col justify-center ml-3">
                            <input type="checkbox" name="light-switch" id="light-switch-desktop"
                                   className="light-switch sr-only" checked={darkMode}
                                   onChange={() => setDarkMode(!darkMode)}/>
                            <label className="relative" htmlFor="light-switch-desktop">
                                <span
                                    className="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10"
                                    aria-hidden="true"></span>
                                <svg className="absolute inset-0" width="44" height="24" viewBox="0 0 44 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g className="fill-current text-white" fillRule="nonzero" opacity=".88">
                                        <path
                                            d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z"/>
                                        <circle cx="32" cy="12" r="3"/>
                                        <circle fillOpacity=".4" cx="12" cy="12" r="6"/>
                                        <circle fillOpacity=".88" cx="12" cy="12" r="3"/>
                                    </g>
                                </svg>
                                <span className="sr-only">Switch to light / dark version</span>
                            </label>
                        </div>

                        {/* Desktop CTA on the right */}
                        <ul className="flex justify-end flex-wrap items-center">

                            {address ? location && location.pathname === '/dashboard' ? <a className="btn-sm text-white bg-teal-500 hover:bg-teal-400 ml-6">
                                    {address}
                                </a> : <li>
                                    <a href="/dashboard"
                                       className="btn-sm text-white bg-teal-500 hover:bg-teal-400 ml-6">Launch
                                        App <svg className="fill-current text-white ml-2 mt-0.5 flex-shrink-0"
                                                 width="12" height="12">
                                            <svg className="sq sf a_ cy ow rg ig" viewBox="0 0 12 12"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                                                    fill-rule="nonzero"></path>
                                            </svg>
                                        </svg></a>
                                    <button onClick={() => onReset()}
                                            className="btn-sm text-white bg-teal-500 hover:bg-teal-400 ml-6">Disconnect
                                    </button>
                                </li>
                                :
                                <li>
                                    <button onClick={() => onConnect()}
                                            className="btn-sm text-white bg-teal-500 hover:bg-teal-400 ml-6">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="icon icon-tabler icon-tabler-wallet" width="24" height="24"
                                             viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                             stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path
                                                d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path>
                                            <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path>
                                        </svg>
                                        Wallet Connect
                                    </button>
                                </li>
                            }

                        </ul>

                    </nav>
                    <div className="inline-flex md:hidden">

                        {/* Mobile lights switch */}
                        <div className="form-switch flex flex-col justify-center mr-6 -mt-0.5">
                            <input type="checkbox" name="light-switch" id="light-switch-mobile"
                                   className="light-switch sr-only" checked={darkMode}
                                   onChange={() => setDarkMode(!darkMode)}/>
                            <label className="relative" htmlFor="light-switch-mobile">
                                <span
                                    className="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10"
                                    aria-hidden="true"></span>
                                <svg className="absolute inset-0" width="44" height="24" viewBox="0 0 44 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g className="fill-current text-white" fillRule="nonzero" opacity=".88">
                                        <path
                                            d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z"/>
                                        <circle cx="32" cy="12" r="3"/>
                                        <circle fillOpacity=".4" cx="12" cy="12" r="6"/>
                                        <circle fillOpacity=".88" cx="12" cy="12" r="3"/>
                                    </g>
                                </svg>
                                <span className="sr-only">Switch to light / dark version</span>
                            </label>
                        </div>

                        {/* Hamburger button */}
                        <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`}
                                aria-controls="mobile-nav" aria-expanded={mobileNavOpen}
                                onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                            <span className="sr-only">Menu</span>
                            <svg
                                className="w-6 h-6 fill-current text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <rect y="4" width="24" height="2" rx="1"/>
                                <rect y="11" width="24" height="2" rx="1"/>
                                <rect y="18" width="24" height="2" rx="1"/>
                            </svg>
                        </button>

                        {/*Mobile navigation */}
                        <Transition
                            show={mobileNavOpen}
                            tag="ul"
                            className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg"
                            enter="transition ease-out duration-200 transform"
                            enterStart="opacity-0 -translate-x-full"
                            enterEnd="opacity-100 translate-x-0"
                            leave="transition ease-out duration-200"
                            leaveStart="opacity-100"
                            leaveEnd="opacity-0"
                        >
                            <nav id="mobile-nav" ref={mobileNav}
                                 className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg no-scrollbar">
                                <div className="py-6 pr-4 pl-20">
                                    {/* Logo */}
                                    <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="menulogo_a">
                                                <stop stopColor="#3ABAB4" offset="0%"/>
                                                <stop stopColor="#7F9CF5" offset="100%"/>
                                            </linearGradient>
                                            <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="menulogo_b">
                                                <stop stopColor="#3ABAB4" offset="0%"/>
                                                <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%"/>
                                            </linearGradient>
                                        </defs>
                                        <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z"
                                              fill="url(#menulogo_a)"/>
                                        <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z"
                                              fill="url(#menulogo_b)"/>
                                    </svg>
                                    {/* Links */}
                                    <ul>
                                        <li>
                                            <a href="/"
                                               className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2 mt-4">
                                                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M21.804 10.956c-1.222-.974-2.968-1.243-3.724-1.323h-.03c-.115 0-.225.065-.26.174a.278.278 0 0 0 .203.378c.85.175 1.832.48 2.727 1.04.182.11.225.357.08.524-.116.131-.313.146-.465.058-1.746-1.076-3.913-1.134-4.335-1.134-.422 0-2.59.058-4.335 1.134-.152.088-.349.073-.465-.058a.344.344 0 0 1 .08-.524c.895-.56 1.876-.865 2.727-1.04.168-.029.27-.21.204-.378-.036-.109-.146-.174-.262-.174h-.029c-.756.08-2.502.349-3.724 1.323-.712.662-2.13 4.466-2.196 7.833 0 .226.058.451.19.633.85 1.2 2.697 1.92 4.094 2.022.21.014.414-.08.538-.255.007 0 .007-.007.014-.014a.654.654 0 0 0-.305-.997c-1.164-.429-1.76-.938-1.796-.974a.355.355 0 0 1-.037-.495c.131-.145.35-.16.495-.029.022.015 1.636 1.39 4.807 1.39 3.17 0 4.785-1.375 4.807-1.39a.347.347 0 0 1 .495.03.355.355 0 0 1-.037.494c-.036.036-.632.545-1.796.974a.654.654 0 0 0-.305.997c.007.007.007.014.014.014.124.175.327.27.538.255 1.397-.102 3.244-.822 4.095-2.022.13-.182.189-.407.189-.633-.065-3.367-1.484-7.17-2.196-7.833Zm-8.066 6.677c-.669 0-1.214-.626-1.214-1.39 0-.77.545-1.396 1.214-1.396.677 0 1.215.626 1.215 1.397 0 .763-.538 1.389-1.215 1.389Zm4.524 0c-.677 0-1.215-.626-1.215-1.39 0-.77.538-1.396 1.215-1.396.669 0 1.214.626 1.214 1.397 0 .763-.545 1.389-1.214 1.389Z"></path>
                                                </svg>
                                                <span className="mt-1">Discord</span></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/opulencedao" rel="noreferrer"
                                               className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2">
                                                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"/>
                                                </svg>
                                                <span className="mt-1">Twitter</span></a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/opulencedao" rel="noreferrer"
                                               className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2 mb-4">
                                                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"/>
                                                </svg>
                                                <span className="mt-1">Github</span></a>
                                        </li>

                                        <li>
                                            {wallet.status === 'connected' ? (
                                                <a href="/dashboard"
                                                   className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out">Launch
                                                    App</a>
                                            ) : (
                                                <button onClick={() => wallet.connect()}
                                                        className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out">Launch
                                                    App</button>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </Transition>

                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;
