import { useGetArticleWithPagnation } from "@/app/(panle)/Services/article.service";
import columnAction from "@/app/helper/columnnAction";
import useGridBody from "@/app/hooks/useGridBody";
import { useMemo, useState } from "react"

const useArticleContainer = () => {
    const [showModal, setShowModal] = useState(false);
    const editHandler = () => {
        setShowModal(true)
    }
    const columns = useMemo(() => [
        {
            title: "عنوان مقاله ",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "ایجاد کننده  ",
            dataIndex: "createName",
            key: "createName",
        },
        {
            title: "منتشرشده",
            dataIndex: "published",
            key: "published",
            render: (text: any, record: any, index: number) => record.published ? "منتشر شده" : "درانتظار انتشار",
        },
        {
            title: "تاریخ ایجاد",
            dataIndex: "date",
            key: "date",
        },
        columnAction({ action: ["edit"], callBackEdite: editHandler })
    ], [])


    const modalHandler = () => {
        setShowModal(true)
    }
    const { body } = useGridBody();

    const { data } = useGetArticleWithPagnation(body)
    return {
        values: { columns, showModal, data },
        action: { setShowModal, modalHandler }
    }

}

export default useArticleContainer