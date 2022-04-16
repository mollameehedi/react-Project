import { ethers } from "ethers";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import data from "../contractDetails.json";
import store from "store";
import { providers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { isMobile } from "react-device-detect";

export const Mint = (props) => {
    const [web3Provider, setWeb3Provider] = useState(null);
    const [metamaskProvider, setMetamaskProvider] = useState(null);
    const [contract, setContract] = useState(null);
    const [refreshingContract, setRefreshingContract] = useState(false);
    const [successMessage, setSuccesMessage] = useState(null);
    const [mintingPrice, setMintingPrice] = useState(null);
    const [mintQuantity, setMintQuantity] = useState(null);
    const [tokenMintedInfo, setTokensMintedInfo] = useState(null);
    const totalSupply = 9999;

    const handleMintToken = async (event) => {
        try {
            const priceCal = mintingPrice.mul(mintQuantity);
            await contract.mintSales(mintQuantity, { value: priceCal });
        } catch (e) {
            console.log('Err:', e);
        }

    }

    const initializeProvider = async () => {
        if (isMobile) {
            const provider = new WalletConnectProvider({
                infuraId: data.infuraApiKey,
                qrcodeModalOptions: {mobileLinks: ["rainbow", "metamask", "argent", "trust", "imtoken", "pillar",],},
            });
            //  Enable session (triggers QR Code modal)
            await provider.enable();
            const web3Provider = new providers.Web3Provider(provider);
            setWeb3Provider(new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${data.infuraApiKey}`));
            setMetamaskProvider(web3Provider);
            setRefreshingContract(true);
            store.set("EXTENSION_INSTALLED", true);
        } else {
            const { ethereum } = window;
            const isMetaMaskInstalled = Boolean(ethereum && ethereum.isMetaMask);
            if (!isMetaMaskInstalled) {
                alert('Please install meta mask');
                return
            }
            try {
                // Will open the MetaMask UI
                // You should disable this button while the request is pending!
                await ethereum.request({ method: 'eth_requestAccounts' });
            } catch (error) {
                console.error(error);
            }

            await window.ethereum.enable();
            const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${data.infuraApiKey}`);
            const metamaskProvider = new ethers.providers.Web3Provider(window.ethereum);
            setWeb3Provider(provider);
            setMetamaskProvider(metamaskProvider);

            setRefreshingContract(true);
            store.set("EXTENSION_INSTALLED", true);
        }
    }

    const refreshContract = async () => {
        try {
        let contractAddress, contractAbi, nftContract, metamaskContract;
        contractAddress = data.contractAddress;
        contractAbi = data.contractAbi;
        if (!isMobile) {
            await window.ethereum.enable();
        }
        nftContract = new ethers.Contract(contractAddress, contractAbi, web3Provider);
        metamaskContract = new ethers.Contract(contractAddress, contractAbi, metamaskProvider.getSigner());

        metamaskContract.on("Minted", async (owner, tokenId, totalTokens, eventInfo) => {
            let tokensMinted = await nftContract.TokensMinted();
            setTokensMintedInfo(`${tokensMinted}/${totalSupply} minted!`);
            const message_ = `Congratulations, successfully minted ${totalTokens} Bunaverse & Lucky Egg!!!`
            if (successMessage !== message_) {
                setSuccesMessage(message_);
            }
        });

        setContract(metamaskContract);

        const tokensMinted = await nftContract.TokensMinted();
        setTokensMintedInfo(`${tokensMinted}/${totalSupply} minted!`);
        const price = await nftContract.SalePrice();
        setMintingPrice(price);

        setRefreshingContract(false);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if (web3Provider) {
            refreshContract();
        }
        else if (store.get("EXTENSION_INSTALLED")) {
            initializeProvider();
        }
    }, [refreshingContract, web3Provider]);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div id='mint' className='text-center'>
            <div className='container'>
                <div className='col-md-10 col-md-offset-1 section-title mb-5'>
                    <h2>MINT</h2>
                </div>
                <div className=''>
                    <div className='row'>
                        <div>
                            <div className="pic">
                                <div className="sky">
                                    <div className="cloud no1"></div>
                                    {successMessage && <div className="text">{successMessage}</div>}
                                    <Button target="_blank" size={'lg'}
                                        onClick={() => { initializeProvider(this); }}
                                    >Connect Wallet</Button>
                                    <div className={`counter`} data-foo={mintQuantity}>
                                        <h1>🐰 : {mintQuantity ? mintQuantity : 0} : 🥚</h1>
                                        <button type="button" onClick={() => {
                                            if (mintQuantity && mintQuantity !== 0)
                                                setMintQuantity(mintQuantity - 1)
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                            </svg>
                                        </button>
                                        <button type="button" onClick={() => {
                                            if (mintQuantity !== 10)
                                                setMintQuantity(mintQuantity + 1)
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                            </svg>
                                        </button>
                                    </div>
                                    <br />
                                    <div>
                                        <Button target="_blank" size={'lg'}
                                                onClick={() => { handleMintToken(this); }}
                                        >Mint a 🐰 & get an 🥚 free!</Button>
                                        <p className="text">{tokenMintedInfo}</p>
                                    </div>
                                    <p className="text">{mintingPrice ? `${ethers.utils.formatEther(mintingPrice)} ETH + gas` : ''} </p>
                                </div>
                                <div className="ground">
                                    <p className="rabbit-box"><img src="img/rabbit.png" alt={'rabbit'} className="rabbit"></img></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
