import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LittleCard from "../LittleCard/LittleCard";
import Tab3 from "../LittleCard/Tab3";
import Tab2 from "../LittleCard/tab2";
import Tab5 from "../LittleCard/tab5";
import Tab6 from "../LittleCard/tab6";
import Tab4 from './../LittleCard/tab4';


const TabSection = () => {
  
  return (
    <div className="text-center">
      <Tabs forceRenderTabPanel defaultIndex={1}>
    <TabList>
      <Tab>Categories</Tab>
    </TabList>
    <TabPanel>
      <Tabs forceRenderTabPanel>
        <TabList>
          <Tab>Autobots</Tab>
          <Tab>Decepticons</Tab>
          <Tab>Dinobots</Tab>
        </TabList>
        <TabPanel>
         <div className="md:flex">
           <LittleCard />
          <Tab2 />
         </div>
        </TabPanel>
        <TabPanel>
        <div className="md:flex">
          <Tab3/>
          <Tab4/>
        </div>
        </TabPanel>
        <TabPanel>
        <div className="md:flex">
          <Tab5/>
          <Tab6/>
        </div>
        </TabPanel>
      </Tabs>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default TabSection;
