import React from 'react';
import {  Modal } from "antd";
interface IModalProps {
  title?: string,
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  size?: string,
  modalFooter?: any,
  handlerClose?: any,
  customizEstyle?: any
}
const ModalLayout: React.FC<IModalProps> = ({ children, open, setOpen, customizEstyle, handlerClose, modalFooter, size, title }) => {
 // const [confirmLoading, setConfirmLoading] = useState(false);
  // const handleOk = () => {
  //   setConfirmLoading(true);
  //   setTimeout(() => {
  //     setOpen(false);
  //     setConfirmLoading(false);
  //   }, 2000);
  // };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Modal
      title={title}
      open={open}
      style={customizEstyle}
      //confirmLoading={confirmLoading}
      onCancel={handlerClose ? handlerClose : handleCancel}
      width={size ? size : "70rem"}
      okType={"default"}
      footer={modalFooter || []}
    >
      {children}
    </Modal>
  )
}

export default ModalLayout