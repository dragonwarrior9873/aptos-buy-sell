import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import '../../app/style.css';
import BuyTab from './buyTab';
import SellTab from './sellTab';
import CreateDCATab from './createDCATab';
import DcaOrderTab from './dcaOrderTab';

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
    <BuyTab />
    <SellTab />
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
        <CreateDCATab />
        <DcaOrderTab/>
      </Tabs.Root>
    </Tabs.Content>
  </Tabs.Root>
);

export default TabsDemo;