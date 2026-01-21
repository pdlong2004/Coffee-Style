import React from 'react';

const BlogDetailContent = ({ blog }) => {
    if (!blog?.content) return null;

    return (
        <div className="pl-10">
            <div className="flex items-center gap-6 mb-13">
                <p className="text-sm text-gray-400 uppercase font-medium tracking-[2px] whitespace-nowrap">
                    {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </p>
                <div className="w-full h-px bg-gray-300"></div>
            </div>

            <div
                className="
                    prose prose-lg max-w-none

                    prose-h3:text-[28px]
                    prose-h3:font-normal
                    prose-h3:mt-5
                    prose-h3:mb-3.75

                    prose-p:text-gray-500
                    prose-p:leading-8
                    prose-p:text-[16px]
                    prose-p:mb-3.75

                    prose-blockquote:p-7.5
                    prose-blockquote:my-3.75
                    prose-blockquote:border-b-2
                    prose-blockquote:border-b-[#a25f4b33]
                    prose-blockquote:border-l-2
                    prose-blockquote:border-l-[#a25f4b33]
                    prose-blockquote:text-xl
                    prose-blockquote:text-coffee/85
                    prose-blockquote:font-normal
                    prose-blockquote:not-italic
                    prose-blockquote:text-center

                    prose-img:rounded-2xl
    "
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />
        </div>
    );
};

export default BlogDetailContent;
