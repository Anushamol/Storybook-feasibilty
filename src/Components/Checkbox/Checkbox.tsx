import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
// import './App.css';
type Checkboxtype={
  label:string;
  checked?:boolean;
  disabled?:boolean;
}

const CheckboxDemo = ({label,checked,disabled}:Checkboxtype) => (
  
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
        <Checkbox.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="Label" htmlFor="c1">
       {label}
      </label>
    </div>
);

export default CheckboxDemo;
