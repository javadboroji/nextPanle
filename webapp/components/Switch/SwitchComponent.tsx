import React from 'react'
import { Form, Switch } from 'antd'
interface SwitchComponentProps {
    checked:boolean,
    onChange:()=>void,
    disabled?:boolean
}
const SwitchComponent:React.FC<SwitchComponentProps> =({checked ,onChange})=> {
  return (
         <Switch checked={checked} onChange={onChange}   />
  )
}

export default SwitchComponent