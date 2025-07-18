import toastColor from '@/app/helper/toastColor';
import { QueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const queryClient = new QueryClient({
    defaultOptions: {
            
        mutations: {
            onError: (error: any) => {
                toast(error.message || "خطا رخ داد", {
                    style: toastColor("error"),
                })
            },
        },
    },
});
