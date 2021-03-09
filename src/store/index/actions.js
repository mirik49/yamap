import {apiGetLead, apiGetDepartmens,
} from "../../services/Api";
import Router from "next/router";

export function setActionData(actionVar, actionData) {
    return {
        type: 'ACTIONS',
        payload: {
            var: actionVar,
            val: actionData
        }
    };
}

export const getLead = (lead) => {
    return (dispatch) => {
        apiGetLead(lead)
            .then((r) => {
                    if (r.data.status === 0) {
                        dispatch(setActionData("lead", r.data));
                    } else {
                        Router.push("/notfound")
                    }
                }
            )
    }
};



