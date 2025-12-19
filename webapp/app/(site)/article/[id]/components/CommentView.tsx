import { fnFetchSsr, IetchProps } from '@/lib/fnFetchSsr'
import React from 'react'
type CommentType = {
    id: number,
    content: string,
    authorEmail: string,
    parentId: number | null,
    articleId: number,
    createdAt: string,
    updatedAt: string
}
async function CommentView(props: { id: number }) {

    const { id } = props
    const payload: IetchProps = {
        url: `${process.env.BASE_URL}/comments/getArticleComment?articleId=${id}`,
        method: 'GET',

    };
    const comments = await fnFetchSsr<{ status: string, message: string, data: CommentType[], error: boolean }>(payload);


    return (
        <div className="w-full  mx-auto p-6">
            {/* هدر */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    نظرات ({comments.data.length})
                </h2>
                <p className="text-gray-600">
                    نظرات کاربران درباره این مقاله
                </p>
            </div>

            {/* لیست کامنت‌ها */}
            {comments.data.length === 0 ? (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center">
                    <div className="text-6xl mb-4">💬</div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                        هنوز نظری ثبت نشده
                    </h3>
                    <p className="text-gray-500">
                        اولین نفری باشید که نظر می‌دهد!
                    </p>
                </div>
            ) : (
                <div className="space-y-4">
                    {comments.data.map((comment) => (
                        <CommentCard key={comment.id} comment={comment} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default CommentView


function CommentCard({ comment }: { comment: CommentType }) {
    // گرفتن اولین حرف ایمیل برای آواتار
    const initial = comment.authorEmail.charAt(0).toUpperCase();
    
    return (
        <div className="flex w-full gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            {/* آواتار */}
            <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {initial}
                </div>
            </div>
            
            {/* محتوای کامنت */}
            <div className="flex-1 min-w-0">
                {/* هدر */}
                <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-gray-900">
                        {comment.authorEmail.split('@')[0]}
                    </span>
                    <span className="text-sm text-gray-500">
                        {/* {formatDate(comment.createdAt)} */}
                    </span>
                </div>
                
                {/* متن کامنت */}
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {comment.content}
                </p>
                
                {/* اکشن‌ها */}
                <div className="flex items-center gap-4 mt-3">
                    <button className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                        پاسخ
                    </button>
                </div>
            </div>
        </div>
    );
}
