import {connect} from 'react-redux';
import IndexContainer from "../src/components/index/Index";
import {getLead} from "../src/store/index/actions";

const mapDispatchToProps = {
    getLead,
}

// export const getServerSideProps = async () => {
//     const leadRes = await apiGetLead(id).then(response => response);
//     const departmentsRes = await apiGetDepartmens().then(response => response);
//     const departments = departmentsRes.data.data;
//     const lead = leadRes.data;
//     return {props: {lead, departments}};
// }

export default connect(state => state, mapDispatchToProps)(IndexContainer);
