import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from './Card.jsx';

const ShowBlog = ({ blog = [], imageClass = '', wrapClass = '' }) => {
    return (
        <>
            {blog.map((item) => (
                <div key={item._id} className={`mb-8 text-center lg:text-left ${wrapClass}`}>
                    <NavLink to={`/blog/${item.slug}`}>
                        <Card
                            image={item.images?.thumbnail?.url}
                            name={item.title}
                            imageClass={imageClass}
                            textButton="Read the full story"
                        />
                    </NavLink>

                    <div>
                        <NavLink
                            to={`/blog/${item.slug}`}
                            className="block mt-4 text-xl font-semibold hover:text-coffee"
                        >
                            {item.title}
                        </NavLink>

                        <p className="text-gray-600 mt-2 line-clamp-2">{item.excerpt}</p>

                        <p className="text-sm text-gray-400 mt-3 uppercase font-medium tracking-wide">
                            {new Date(item.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ShowBlog;
