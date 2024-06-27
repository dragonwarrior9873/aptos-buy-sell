import React, { FormEvent } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import '../../app/style.css';
import axios from 'axios';
const url = "https://localhost:3100/"

async function onSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget)
  const response = await axios.post(url + '/order', { data: formData })
  console.log(response.data)
}


const BuyTab = () => (
    <Tabs.Content className="TabsContent p-8" value="tab1">
    <p className="Text">You can buy tokens by specifying token address and the amount of aptos.</p>
    <form onSubmit={onSubmit}>
    <fieldset className="Fieldset">
      <label className="Label" htmlFor="name">
        Token Address
      </label>
      <input className="Input" name="token_address" id="token_address" defaultValue="" placeholder='Please input Token Address' />
    </fieldset>
    <fieldset className="Fieldset">
      <label className="Label" htmlFor="username">
        Aptos Amount
      </label>
      <input className="Input" name="aptos_amount" id="aptos_amount" defaultValue="" placeholder='Please input Aptos Amount' />
    </fieldset>
    <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
      <button className="Button green" type="submit">BUY</button>
    </div>
    </form>
  </Tabs.Content>
);

export default BuyTab;