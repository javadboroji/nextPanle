import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

type TAction = "view" | "edit" | "delete"
interface IColumnActionProps {
    action: TAction[],
    callBackView?: (record) => void,
    callBackEdite?: (record) => void,
    callBackDelete?: (record) => void,
}


function columnAction(params: IColumnActionProps) {
    return ({
        title: " عملیات",
        dataIndex: "action",
        key: "action",
        width: 100,
        render: (value: any, record: any) => <div className="flex items-center justify-between">
            {params.action.includes("view") && <button className="mx-2 text-blue-700" onClick={() => params.callBackView(record)}> <FaEye size={"18"} /></button>}
            {params.action.includes("edit") && <button className="mx-2 text-blue-700" onClick={() => params.callBackEdite(record)}> <FaPen size={"18"} /></button>}
            {params.action.includes("delete") && <button className="mx-2 text-blue-700" onClick={() => params.callBackDelete(record)}> <MdDelete size={"18"} /></button>}
        </div>
    })
}
export default columnAction