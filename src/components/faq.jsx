import React from "react";
import Faq from "react-faq-component";

const data = {
    rows: [
        {
            title: "What does Everyone is a Winner mean?",
            content: 'Everyone stands a chance to win atleast once. We are offering 1 Lucky Egg token for every Sharp Bunny token minted, 40 out of every 100 tokens minted stand a chance to win ETH (or equivalent USD) and Play 2 Earn $LUCK. ',
        },
        {
            title: "When will the winners for Raffle announced?",
            content: `Every 1000 tokens minted 400 winners will be selected`,
        },
        {
            title: "How much does it cost to mint and how many tokens can be minted in one transaction?",
            content: `It costs 0.081 ETH + gas to mint a Sharp Bunny and we'll give you Lucky Egg for every token minted. You can mint 10 tokens in a transaction`,
        },
        {
            title: "Are there any partnerships planned with any other projects?",
            content: 'We believe every ape, penguin, bunny should have access to Sharp Bunnies to play. We intend to introduce member + 1 concept in future where every token holder can invite a friend holding partner tokens for events.',
        },
        {
            title: "Tell me more about Merchandise Sales?",
            content: 'We plan to introduce Sharp Bunnies merchandise on leading e-commerce platforms and share proceeds with token owner.',
        },
    ],
};

const styles = {
    bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "blue",
    rowContentColor: 'black',
    arrowColor: "blue",
};

const config = {
     animate: true,
     arrowIcon: "↓",
     tabFocus: true
};

const FAQ = ({props}) => {

    return (
    <div id='faq'>
      <div className='container'>
        <div className='section-title' >
          <div className = 'text-center'>
          <h2>FAQ</h2>
          </div>
          <Faq
              data={data}
              styles={styles}
              config={config}
          />
        </div>
      </div>
    </div>
    );
}

export default FAQ;
