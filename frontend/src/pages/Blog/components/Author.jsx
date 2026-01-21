import React from 'react';
import useAuthor from '../../../hooks/useAuthor';
import { NavLink } from 'react-router-dom';

const Author = () => {
    const { authors } = useAuthor();

    return (
        <div className="mb-7.5">
            <div className="py-2.5 mb-12.5 text-2xl border-b border-gray-100">
                <h2 className="my-3.75">Authors</h2>
            </div>

            <ul>
                {authors.map((author) => (
                    <NavLink key={author._id} to={`/blog/author/${author._id}`} end>
                        {({ isActive }) => (
                            <li
                                className={`
                                    flex items-center mb-4 py-2 pl-5
                                    border-l-2 cursor-pointer
                                    ${
                                        isActive
                                            ? 'border-coffee '
                                            : 'border-light-coffee hover:border-coffee hover:bg-[#a25f4b0a]'
                                    }
                                `}
                            >
                                <div
                                    style={{ backgroundImage: `url(${author.avatar})` }}
                                    className="w-15 h-15 mr-6.25 bg-cover bg-center"
                                />
                                <div>
                                    <h3 className="text-lg text-[#1d1f2eb3]">{author.name}</h3>
                                </div>
                            </li>
                        )}
                    </NavLink>
                ))}
            </ul>
        </div>
    );
};

export default Author;
