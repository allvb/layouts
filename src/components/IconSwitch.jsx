import React from 'react';
import view_list from '../data/view_list.svg';
import view_module from '../data/view_module.svg';

export default function IconSwitch({icon, onSwitch}) {
  const view = icon === false ? view_list : view_module;
  return (
    <div className='switch_button' onClick={onSwitch}>
      <img src={view} />
    </div>
)}
