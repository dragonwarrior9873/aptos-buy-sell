import React, { FormEvent, useEffect, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import '../../app/style.css';

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

const SellTab = () => {
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
  <Tabs.Content className="TabsContent p-8" value="tab2">
    <p className="Text">You can sell tokens by specifying token address and the percent of tokens.</p>
    <fieldset className="Fieldset">
      <label className="Label" htmlFor="currentPassword">
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
      <label className="Label" htmlFor="newPassword">
        Percent to Sell
      </label>
      <input className="Input" id="newPassword" type="password" placeholder='Please input Percent to Sell' />
    </fieldset>
    <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
      <button className="Button green">SELL</button>
    </div>
  </Tabs.Content>
  )
};

export default SellTab;