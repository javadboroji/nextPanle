import LoginForm from '@/app/(panle)/login/components/LoginForm';
import ModalLayout from '@/app/components/Modal/ModalLayout'
import React from 'react'
import { useRouter } from "next/navigation";
type UserInfoProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;

}
function UserInfo(props: UserInfoProps) {
    const { open, setOpen } = props;
    const router = useRouter()
    const onSucess = () => {
        setOpen(false);
        router.push('/payment')

    }
    return (
        <ModalLayout open={open} setOpen={setOpen} size='40%'>
            <div className='container mx-auto '>
                <LoginForm onsucessCallback={onSucess} />
            </div>
        </ModalLayout>
    )
}

export default UserInfo