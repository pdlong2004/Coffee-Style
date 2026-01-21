import React from "react";
import useAuthor from "../../../hooks/useAuthor";
import Title from "../../../components/layout/Title";

const AboutAuthor = () => {
  const { authors } = useAuthor();
  return (
    <div>
      <Title>Author</Title>
      <div className="flex max-w-247.75 flex-wrap justify-center gap-10 lg:grid grid-cols-3">
        {authors?.map((author) => (
          <div key={author._id} className="text-center mb-12.5">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-75 h-95 mb-6.25"
            />
            <h3 className="text-2xl font-semibold my-2.5">{author.name}</h3>
            <p className="text-gray-600 mb-2.5 uppercase tracking-[2px] font-medium">
              {author.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutAuthor;
