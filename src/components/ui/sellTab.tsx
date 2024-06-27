import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import '../../app/style.css';

const SellTab = () => (
  <Tabs.Content className="TabsContent p-8" value="tab2">
    <p className="Text">You can sell tokens by specifying token address and the percent of tokens.</p>
    <fieldset className="Fieldset">
      <label className="Label" htmlFor="currentPassword">
        Token Address
      </label>
      <input className="Input" id="currentPassword" type="password" placeholder='Please input Token Address' />
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
);

export default SellTab;