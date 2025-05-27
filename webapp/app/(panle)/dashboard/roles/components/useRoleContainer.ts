import { useGetRoleWithPagnation } from "@/app/(panle)/Services/roles.service";
import useGridBody from "@/app/hooks/useGridBody";
import { useEffect, useState } from "react";

const useRoleContainer = () => {
  const [open, setOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const columns = [
    {
      title: "نام نقش",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "نام انگلیسی",
      dataIndex: "name",
      key: "name",
    },
  ];
  const showModal = () => {
    setOpen(true);
  };
  const { body } = useGridBody();
  const { mutate, data } = useGetRoleWithPagnation();

  useEffect(() => {
    mutate(body);
  }, [body]);
  useEffect(() => {
    setTableData(data?.data.data.data);
  }, [data]);


  return {
    dataValue:{columns , tableData ,open},
    actions :{showModal ,setOpen }
  }
};

export default useRoleContainer;
