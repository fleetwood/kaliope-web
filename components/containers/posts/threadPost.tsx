import ThreadPostAuthor from "../user/threadPostAuthor";

const ThreadPostItem = (props: any) => {
  return (
    <div className={`${props.containerClass} px-6 py-4 text-secondary-content bg-secondary odd:bg-opacity-50 even:bg-opacity-40`}>
      <div className="items-center gap-4">
        {props?.author && <ThreadPostAuthor {...props.author} />}
      </div>
      <div className="mt-5 pb-5 text-justify">
        {props.content}
      </div>
    </div>
  );
};

export default ThreadPostItem;
