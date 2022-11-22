import ThreadPostAuthor from "../user/threadPostAuthor";

const ThreadPostItem = (props: any) => {
  return (
    <div className="border border-gray-300 px-6 py-4 shadow-2xl text-gray-500 shadow-cyan-900/10  dark:border-gray-800 even:bg-gray-900 odd:bg-slate-900">
      <div className="items-center gap-4">
        {props?.author && <ThreadPostAuthor {...props.author} />}
      </div>
      <div className="mt-5 px-5 pb-5 text-justify border-b-[1px] border-slate-300">
        {props.content}
      </div>
    </div>
  );
};

export default ThreadPostItem;
