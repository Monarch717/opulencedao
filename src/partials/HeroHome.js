import {useWallet} from "use-wallet";
import {useHistory} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setWallet} from "../slices/app";

function HeroHome() {
    const wallet = useWallet()
    const history = useHistory()
    const dispatch = useDispatch()

    const onCreateNode = () => {
        if (wallet.status !== "connected") {
            wallet.connect();
        }
    }

    useEffect(() => {
        if (wallet.status === 'connected') {
            dispatch(setWallet({
                address: wallet.account,
                amount: wallet.balance
            }))
            history.push('/dashboard')
        }
    }, [wallet.status])

    return (
        <section className="relative">
            {/* Background gradient (light version only) */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-white pointer-events-none dark:hidden"
                 aria-hidden="true"></div>
            {/* End background gradient (light version only) */}
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-12 md:pt-32 mb-3">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="h2 font-red-hat-display mb-4" data-aos="fade-down">The World's First Multi-Chain
                            DeFi Yield Processing Node.</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down"
                           data-aos-delay="150">Earn lifetime rewards of up to 1825% APY Per Node.</p>
                        <div class="mt-8 aos-init aos-animate" data-aos="fade-down" data-aos-delay="300">

                            <button className="btn text-white bg-teal-500 hover:bg-teal-400" onClick={onCreateNode}>
                                <svg className="fill-current text-white mr-2 mt-0.5 flex-shrink-0" width="20"
                                     height="20">
                                    <path fill-rule="evenodd"
                                          d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                                          clip-rule="evenodd"/>
                                </svg>
                                Create a node </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroHome;