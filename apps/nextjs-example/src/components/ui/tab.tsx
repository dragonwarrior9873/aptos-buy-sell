import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import '../../app/style.css';

const TabsDemo = () => (
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List className="TabsList" aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger" value="tab1">
        BUY
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab2">
        SELL
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab3">
        DCA
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="TabsContent p-8" value="tab1">
      <p className="Text">You can buy tokens by specifying token address and the amount of aptos.</p>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          Token Address
        </label>
        <input className="Input" id="token_address" defaultValue="" placeholder='Please input Token Address' />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Aptos Amount
        </label>
        <input className="Input" id="aptos_amount" defaultValue="" placeholder='Please input Aptos Amount' />
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button green">BUY</button>
      </div>
    </Tabs.Content>
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
    <Tabs.Content className="TabsContent" value="tab3">
      <Tabs.Root className="TabsRoot" defaultValue="tab1">
        <Tabs.List className="TabsList" aria-label="Manage your account">
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            Create Order
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab2">
            DCA Orders
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent p-8" value="tab1">
          <p className="Text">You can buy tokens in certain time intervals.</p>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="currentPassword">
              Total Aptos
            </label>
            <input className="Input" id="currentPassword" type="password" placeholder='Please input Total Aptos Amount' />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="newPassword">
              Token Address
            </label>
            <input className="Input" id="newPassword" placeholder='Please input Token Address' />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="confirmPassword">
              Time Interval
            </label>
            <input className="Input" id="confirmPassword" placeholder='Please input Time Interval' />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="confirmPassword">
              From
            </label>
            {/* <input className="Input" id="confirmPassword" type="date" placeholder='Please input Time Interval' /> */}
            <input className="Input" id="confirmPassword" type="datetime-local" placeholder='Please input Time Interval' />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="confirmPassword">
              To
            </label>
            {/* <input className="Input" id="confirmPassword" type="date" placeholder='Please input Time Interval' /> */}
            <input className="Input" id="confirmPassword" type="datetime-local" placeholder='Please input Time Interval' />
          </fieldset>
          <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
            <button className="Button green">Create Order</button>
          </div>
        </Tabs.Content>
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
      </Tabs.Root>
    </Tabs.Content>
  </Tabs.Root>
);

export default TabsDemo;