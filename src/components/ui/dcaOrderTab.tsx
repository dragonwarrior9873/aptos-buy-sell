import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import '../../app/style.css';

const DcaOrderTab = () => (
    <Tabs.Content className="TabsContent p-8 overflow-auto" value="tab2">
        <p className="Text">Order 1</p>
        <fieldset className="Fieldset">
            <label className="Label" htmlFor="currentPassword">
                Total Aptos
            </label>
            <input className="Input" id="currentPassword" placeholder='Please input Total Aptos Amount' />
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
            <input className="Input" id="confirmPassword" type="datetime-local" placeholder='Please input Time Interval'/>
        </fieldset>
        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
            <button className="Button green mr-4">Change</button>
            <button className="Button green">Stop</button>
        </div>
        <div className="border-b border-gray-300 mt-8" />
        <fieldset className="Fieldset mt-8">
            <label className="Label" htmlFor="currentPassword">
                Order 2
            </label>
            <input className="Input" id="currentPassword" placeholder='Please input Total Aptos Amount' />
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
            <button className="Button green mr-4">Change</button>
            <button className="Button green">Start</button>
        </div>
    </Tabs.Content>
);

export default DcaOrderTab;