import React, { FormEvent } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import '../../app/style.css';
import axios from 'axios';
const url = "https://localhost:3100"

async function onSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget)
  console.log(formData)
  const response = await axios.post(url + '/order', { data: formData })
  console.log(response.data)
}


const CreateDCATab = () => (
  <Tabs.Content className="TabsContent p-8" value="tab1">
    <p className="Text">You can buy tokens in certain time intervals.</p>
    <form onSubmit={onSubmit}>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="currentPassword">
          Total Aptos
        </label>
        <input className="Input" name="totalAptos" id="totalAptos" placeholder='Please input Total Aptos Amount' />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="newPassword">
          Token Address
        </label>
        <input className="Input" name="tokenAddress" id="tokenAddress" placeholder='Please input Token Address' />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="confirmPassword">
          Time Interval
        </label>
        <input className="Input" name="timeInterval" id="timeInterval" placeholder='Please input Time Interval' />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="confirmPassword">
          From
        </label>
        {/* <input className="Input" id="confirmPassword" type="date" placeholder='Please input Time Interval' /> */}
        <input className="Input" name="fromDate" id="fromDate" type="datetime-local" placeholder='Please input Time Interval' />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="confirmPassword">
          To
        </label>
        {/* <input className="Input" id="confirmPassword" type="date" placeholder='Please input Time Interval' /> */}
        <input className="Input" name="toDate" id="toDate" type="datetime-local" placeholder='Please input Time Interval' />
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button green">Create Order</button>
      </div>
    </form>
  </Tabs.Content>
);

export default CreateDCATab;