import React, { useState } from 'react';
import '../css/Topology.css';
import TopologyGraph from '../components/TopologyGraph';
import DeviceSidebar from '../components/DeviceSidebar';
import DevicePanel from '../components/DevicePanel';
function Topology () {
    const [selected, setSelected] = useState(null);       
    const [search, setSearch] = useState('');              
    const [focusId, setFocusId] = useState(null); 

    return <div className='topology'>
        <div className='topology-layout'>
            <aside className='topology-sidebar'>
                <DeviceSidebar
                    search={search}
                    onSearch={setSearch}
                    onSelectNode={(nodeId) => setFocusId(nodeId)}/>
            </aside>
            <main className='topology-canvas'>
                <TopologyGraph
                    filterText={search}
                    focusId={focusId}
                    onFocusConsumed={() => setFocusId(null)}
                    onSelectNode={setSelected}/>
            </main>
        </div>
        <DevicePanel/>
    </div>
}

export default Topology;