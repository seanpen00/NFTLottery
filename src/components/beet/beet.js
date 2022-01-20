import React from "react";
import { Container } from "react-bootstrap";

import InfiniteCarousel from 'react-leaf-carousel';

//import Assets
// import ImageBoy1 from '../../assets/team/Binusha.jpg';
// import ImageBoy2 from '../../assets/team/Dirk.jpg';
// import ImageBoy3 from '../../assets/team/Emma.jpg';
// import ImageBoy4 from '../../assets/team/Sean.jpg';
// import ImageBoy5 from '../../assets/team/Gabi.jpg';
// import ImageBoy6 from '../../assets/team/Luke.jpg';
// import ImageBoy7 from '../../assets/team/Peter.jpg';

//import CSS
import './beet.css';

import {
    BsArrowLeftShort,
    BsArrowRightShort
} from 'react-icons/bs';
class beet extends React.Component {
    render() {

        return (
            <div className='beet-control' id="team5">
                <Container>
                    <header style={{ textAlign: "center", color: "white" }}>
                        <br /> <span style={{ fontStyle: "normal" }}>ABOUT THE NFT LOTTERY</span>
                    </header>
                </Container>
                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 1280,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            },
                        },
                    ]}
                    dots={false}
                    arrows={true}
                    showSides={true}
                    sidesOpacity={0.5}
                    sideSize={0.1}
                    slidesToScroll={1}
                    slidesToShow={1}
                    scrollOnDevice={true}
                >
                    <div>
                        <h1 className="infoTitle">Overview</h1>
                        <p className="infoText">
                            The community owns the DAO, and the community will vote on all actions, including purchases. Our goal @ The NFT Lottery is to ensure everyone partakes in a raffle. We believe that other blue-chip NFTs deserve love as well, hence why our DAO focuses on all blue-chip NFTs and not just Cool Cats. We hope this leads to a solid and well-diversified portfolio for our DAO, resulting in great returns for our community members. DAO Wallet Funding: 70% of all revenue from raffles will be dedicated to the community wallet controlled by the DAO. This is when the numbers can get huge. In the next few weeks, we will also set up the multi-sig wallet, which is essential for making our DAO fully decentralized. Our signers will include the team members (3) and four community members. 5/7 signatures will be needed to pass a proposal.
                            <br/><br/>
                            Snapshot: Shortly after launch, we will set up our voting platform on snapshop.org, allowing holders to vote and introduce their own proposals. The following are the requirements to pass a snapshot vote NFT Purchases (Minimum of 3 hours, need a minimum of 20% of holders to respond) Non-NFT-Purchase related (24 Hours to vote) Staking Roadmap: After the minting period, we will immediately start working on setting up the staking platform. All our blue-chip purchases will be transferred to a fractional vault.
                            <br/><br/>
                            VIP Tickets can be staked to earn 5 $Lottery a day. More info regarding staking and Tokenomics will be posted soon. Weekly AMA: The team will hold weekly AMAs to discuss future plans and address communities concerns. Times will be announced before each AMA.
                        </p>
                    </div>
                    <div>
                        <h1 className="infoTitle">NFT Lottery Whitepaper Overview</h1>
                        <p className="infoText">
                            NFTs address a large number of the issues looked by
                            transitory, actual resources: resource possession is
                            guaranteed through the blockchain, which implies that it
                            can never be faked, obliterated or altered. Subsequently,
                            they give a more dependable, more straightforward to-get
                            to option in contrast to actual resources which are obliged
                            by various limits like the resource’s aspects or inborn
                            idleness
                            <br/><br/>
                            The NFT market is developing dramatically, with industry
                            investigation foreseeing that the absolute market
                            capitalization of NFTs will surpass $470 million dollars
                            before the finish of 2021. Not withstanding, as of this
                            moment, the NFT market is still a long way from
                            development, implying that there are huge benefit creating
                            open doors for NFT projects that can offer their financial
                            backer base on engaging incentive.
                        </p>
                    </div>
                    <div>
                        <h1 className="infoTitle">Which Blockchain</h1>
                        <p className="infoText">
                            VIP Pass - Ethereum<br/>
                            Raffles - Eth/Polygon<br/>
                            Polygon (Matic) blockchain to avoid Ethereum gas fees & remaining on Opensea.<br/>
                            <br/>
                            <span>Phase 1:</span> Giveaways & Partnerships<br/>
                            <span>Phase 2:</span> Giveaways & giveaways<br/>
                            <span>Phase 3:</span> Giveaways & partnerships<br/>
                            <span>Phase 4:</span> VIP Pass launch on Opensea<br/>
                            <span>Phase 5:</span> giveaways & $Lottery token implementation<br/>
                            <span>Phase 6:</span> giveaways & snapshot voting integration<br/>
                            <span>Phase 7:</span> VIP Community votes on fractionalized art for Vault<br/>
                            <span>Phase 8:</span> First series of Raffles on opensea (no gas fees)
                            <br/><br/>
                            Traditional Lottery
                            Have you ever played in a lottery? Well if you have you know they are fun and exciting. They combine three features which opens the gaming experience to almost everyone. Lottery is not only cheap and highly affordable, lottery tickets are pliable and transparent.
                            * Affordable: The usual price for a lottery ticket is between .01 - .1 ETH
                            * Scalable: Customers can buy multiple tickets with several different number combinations to increase their chances to win.
                            * Transparent: Everything’s on the blockchain which allows everyone to know who won and when.
                            <br/>
                            -NFT RAFFLES
                            Most people simply can’t afford a $10k, $50k, $150k or even a $250k+ NFT.
                            <br/>
                            The Community Voting System is designed to give anyone the chance to win big. Aiming more towards well known Blue Chip Projects such as; Cryptopunks, Bored Ape Yacht Club, CrypToadz, CyberKongz etc..
                            <br/>
                            The first NFT posted will be a 1/10,000 original The NFT Lottery (VIP PASS) That will be sold directly on the Opensea.io page for .04eth + gas
                            <br/>
                            Official voting will take place within the community Discord, <a href="https://discord.gg/pWz7MPb6Sj" alt="discord link">“VIP SECTION”</a>.
                            The community will be able to vote on which NFTs they want to start a raffle for.
                            Remember to get verified. You must be a verified holder in-order to get access to the vip section.
                        </p>
                    </div>
                    <div>
                        <h1 className="infoTitle">The NFT Lottery Mission</h1>
                        <p className="infoText">
                            Raising the value for everyone
                            The idea is to give the people of the community the
                            opportunities that they didn’t think were possible.
                            The NFT Lottery is built to give the average person a real
                            chance to win HUGE.
                            <br/><br/>
                            Most people simply can’t afford a $10k, $50k, $150k or
                            even a $250k+ NFT.
                            The Community Voting System is designed to give anyone
                            the chance to win big. Aiming towards well-known Blue
                            Chip Projects such as; Cryptopunks, Bored Ape Yacht
                            Club, CrypTodaz, CyberKongz, etc.
                            <br/><br/>
                            Little risk. High Rewards.
                        </p>
                    </div>
                    <div>
                        <h1 className="infoTitle">Tokenomics</h1>
                        <p className="infoText">
                            The NFT Lottery will produce a total of 20,000,000 $Lottery tokens per year, over a period of five years.
                            <br/><br/>
                            100,000,000
                            <br/><br/>
                            -You will not be required to stake or give up custody of the NFT in order to earn/claim the utility tokens! $Lottery is an ERC-20 utility token that will be used for various tasks inside The NFT Lottery ecosystem.
                            <br/><br/>
                            At a glance: - VIP Pass holder will earn 5 $Lottery tokens per day - No staking required -
                            <br/><br/>
                            $Lottery utility token launch date:
                            TO BE DISCUSSED - Total Supply: Up to a maximum of 100,000,000 $Lottery will ever exist.
                            <br/><br/>
                            Disclaimer $Lottery is NOT an investment and has NO monetary value. It will be used as a utility token in The NFT Lottery ecosystem.
                            <br/><br/>
                            How it works?
                            Once the utility token is launched, as a VIP Pass holder, you won't need to do anything to start earning $Lottery.
                            <br/><br/>
                            VIP Pass holders receive $Lottery tokens representing the fractional shares of NFTs held in the community vault. Members also get exclusive access to the DAO community, giveaways and voting rights over the DAO's assets. Join The NFT Lottery now, and Moon with us.
                        </p>
                    </div>
                    <div>
                        <h1 className="infoTitle">Community and Utility First</h1>
                        <p className="infoText">
                            Raising the value for everyone
                            We aim to be a community and utility oriented. We want holders and participants to have unique and exciting benefits.
                            The idea is to give the people of the community the opportunities that they didn’t think are possible.
                            The NFT Lottery is built to give the average person a real chance to win HUGE.
                            Official Launch date is (To Be discussed)
                            80% of mint goes directly into the community vault.
                            <br/><br/>
                            Benefits:
                            Requirements is to be a verified holder of the original The NFT Lottery “VIP Pass”
                            You can get verified in the community discord.
                            <br/>
                            70% of all remaining raffle royalties, after rewards are transferred to the winners, goes directly into the community DAO
                            Where the community can vote which NFTs to fractionalize as a family.
                            <br/>
                            Our Vision
                            Building a highly engaged, inclusive and supportive community that thrives on uplifting each other Providing a shared ecosystem for highly sought after and innovative NFT projects through our launchpadDelivering successful NFT projects on the launchpad and becoming a pioneer in providing creative utilities and innovationSupporting and empowering those who are new to NFTs to learn more and become part of the NFT ecosystem
                        </p>
                    </div>
                </InfiniteCarousel>
            </div>

        );
    }
}

export default beet;