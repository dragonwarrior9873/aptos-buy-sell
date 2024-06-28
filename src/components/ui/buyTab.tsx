import React, { FormEvent, useEffect, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import '../../app/style.css';
import axios from 'axios';

const url = "https://localhost:3100/";

interface Option {
    chainId: number,
    tokenAddress: string,
    name: string,
    symbol: string,
    decimals: number,
    bridge: string,
    panoraSymbol: string,
    logoUrl: string,
    websiteUrl: string,
    category: string,
    isInPanoraTokenList: boolean,
    isBanned: boolean,
    panoraOrderIndex: number,
    coingeckoId: string,
    coinMarketCapId: number
}

async function onSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const response = await axios.post(url + '/order', { data: formData });
  console.log(response.data);
}

const BuyTab = () => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      const response = await fetch('/token-list.json');
      const data: Option[] = await response.json();
      setOptions(data);
    };

    fetchOptions();
    console.log(options)
  }, []);

  return (
    <Tabs.Content className="TabsContent p-8" value="tab1">
      <p className="Text">You can buy tokens by specifying token address and the amount of aptos.</p>
      <form onSubmit={onSubmit}>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="token_address">
            Token Address
          </label>
          <select className="Input bg-white" name="token_address" id="token_address" defaultValue="">
            <option className="bg-white" value="" disabled>Please select a token</option>
            {options.map(option => (
              <option key={option.name} value={option.tokenAddress}>
                {option.name}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="aptos_amount">
            Aptos Amount
          </label>
          <input className="Input" name="aptos_amount" id="aptos_amount" defaultValue="" placeholder="Please input Aptos Amount" />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
          <button className="Button green" type="submit">BUY</button>
        </div>
      </form>
    </Tabs.Content>
  );
};

export default BuyTab;
