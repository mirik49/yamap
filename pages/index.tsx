import {connect} from 'react-redux'
import IndexContainer from "../src/components/index/Index";
import {getLead} from "../src/store/index/actions";

const mapDispatchToProps = {
    getLead,
}

// export const getServerSideProps = async () => {
//     const response = await apiGetDepartmens().then((response) => response);
//     const departments = response.data.data;
//     return {props: {departments}};
// }

export default connect(state => state, mapDispatchToProps)(IndexContainer);
