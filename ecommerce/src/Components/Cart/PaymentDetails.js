import React from "react";
import { Tab } from 'semantic-ui-react'
import CardForm from "./CardForm"
import UPIForm from "./UPIForm"
import Wallets from "./Wallets"

const PaymentDetails=()=>{
    const panes = [
        { menuItem: 'Credit/Debit Card', render: () => <Tab.Pane><CardForm/></Tab.Pane> },
        { menuItem: 'UPI', render: () => <Tab.Pane><UPIForm/></Tab.Pane> },
        { menuItem: 'Wallets', render: () => <Tab.Pane><Wallets/></Tab.Pane> },
      ]
    return(
        <div>
          <Tab menu={{ color:'pink',secondary: true, pointing: true }} panes={panes}/>
                </div>
    )
}
export default PaymentDetails