import classNamesUtil from "../classNamesUtil";
import { CardProps } from "./Card.types";

const Card = ({
  ClassName,
  src,
  title,
  description,
  tags,
  ...rest
}: CardProps) => {
  const Tags = tags ? tags : ["Tag1", "Tag2", "Tag3"];
  const placeholderImage =
    "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
  return (
    <div
      data-testid='card'
      className={`max-w-sm overflow-hidden rounded shadow-lg ${classNamesUtil(
        "card",
        ClassName ? ClassName : "",
      )}`}>
      <img
        className='w-full'
        src={src ? src : placeholderImage}
        alt='sample photo'
      />
      <div className='px-6 py-4'>
        <div className='mb-2 text-xl font-bold'>{title ? title : "title"}</div>
        <p className='text-base text-gray-700'>
          {description ? description : "descriptions"}
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        {Tags.map((tag, index) => {
          return (
            <span
              key={`tag-${index}`}
              role='listitem'
              className='inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full'>
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
