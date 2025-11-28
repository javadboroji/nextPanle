import { useGetCategoryWithPagnation } from "@/app/(panle)/Services/productCategory.service";
import useGridBody from "@/app/hooks/useGridBody";
import { useEffect, useState } from "react";

const useCategoryContainer = () => {
    const [open, setOpen] = useState(false);
    const [tableData, setTableData] = useState([]);
    const columns = [
        {
            title: "نام انگلیسی",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "نام ",
            dataIndex: "persionName",
            key: "persionName",
        },
    ];
    const showModal = () => {
        setOpen(true);
    };
    const { body } = useGridBody();

    const { data } = useGetCategoryWithPagnation(body)


    useEffect(() => {
        setTableData(data?.data.data);
    }, [data]);

    return {
        dataValue: { columns, tableData, open },
        actions: { showModal, setOpen }
    }
}
export default useCategoryContainer