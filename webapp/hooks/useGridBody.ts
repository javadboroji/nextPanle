import GridBody from "@/store/pagnation";

const useGridBody = () => {
    const   body = GridBody(state=>state.body)
    const setBody=GridBody(state=>state.updateFieldBody)
    return {body ,setBody}
};

export default useGridBody;