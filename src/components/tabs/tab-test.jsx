import React from 'react'
import Tabs from './tabs'

function RandomComponent(){
    return <h1>Some random content</h1>
}

const TabsTest = () => {

    const tabs = [
        {
            label:'Tab1',
            content: <div>'content for tab1'</div> 
        },
        {
            label:'Tab2',
            content:<div>'content for tab3'</div>
        },
        {
            label:'Tab3',
            content:<RandomComponent/>
        }
    ]
    const handleChange = (currentTabIndex) => {
        console.log(currentTabIndex);
    }
  return <Tabs tabsContent={tabs} onChange={handleChange}/>
}

export default TabsTest