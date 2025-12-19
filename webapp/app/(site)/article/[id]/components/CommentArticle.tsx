// components/CommentForm.tsx
import { submitComment } from '@/app/actions/commentAction';
import toastColor from '@/app/helper/toastColor';
import { fnFetchSsr, IetchProps } from '@/lib/fnFetchSsr';
import { revalidatePath } from 'next/cache';
import { toast } from 'sonner';
import CommentView from './CommentView';
type CommentFormProps = {
    id: number
}



export default function CommentForm(props: CommentFormProps) {
    const { id } = props
    return (
        <div className="w-full mx-auto p-6 bg-white rounded-xl shadow-md">
            <CommentView id={id} />
            <form action={submitComment} className="space-y-4 flex flex-wrap">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
                نظر خود را بنویسید
            </h2>
                <input type="hidden" name="articleId" value={id} />

                {/* ایمیل */}
                <div className='w-full p-2'>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        ایمیل
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full p-4  border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        placeholder="example@email.com"
                    />
                </div>

                {/* متن کامنت */}
                <div className='w-full'>
                    <label
                        htmlFor="comment"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        نظر شما
                    </label>
                    <textarea
                        id="comment"
                        name="comment"
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                        placeholder="نظر خود را بنویسید..."
                    />
                </div>

                {/* دکمه ارسال */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-2xl transition duration-200 shadow-md hover:shadow-lg"
                >
                    ارسال نظر
                </button>
            </form>
        </div>
    );
}