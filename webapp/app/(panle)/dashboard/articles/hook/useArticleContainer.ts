import { useGetArticleWithPagnation } from "@/app/(panle)/Services/article.service";
import useGridBody from "@/app/hooks/useGridBody";
import { useMemo, useState } from "react"

const useArticleContainer = () => {
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
        },
        {
            title: "تاریخ ایجاد",
            dataIndex: "date",
            key: "date",
        },
    ], [])
    const [showModal, setShowModal] = useState(false);

    const modalHandler = () => {
        setShowModal(true)
    }
    const { body } = useGridBody();

    const { data } = useGetArticleWithPagnation(body)
    return {
        values: { columns, showModal ,data},
        action: { setShowModal, modalHandler }
    }

}

export default useArticleContainer