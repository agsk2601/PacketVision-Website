import '../css/Topology.css'
function Topology (){
    return <div className='topology'>
        <div className='packet-background'>
            {
                Array.from({length:20}).map((_,i)=>(
                    <span key={i} className='packet'></span>
                ))
            }
        </div>
    </div>
}
export default Topology;