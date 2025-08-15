import {DEFAULT_LIST} from '../services/api.jsx'

function DeviceSidebar ({ search, onSearch, onSelectNode }) {
    const filter = DEFAULT_LIST.filter((d) => d.id.toLowerCase().includes(search.toLowerCase()) || d.type.toLocaleLowerCase().includes(search.toLowerCase));
}
export default DeviceSidebar;