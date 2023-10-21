interface GetTaskStatusProp {
  getTaskStatus: () => { id: number; task: string; isCompleted: boolean }[];
}

const SubHeader = ({ getTaskStatus }: GetTaskStatusProp) => {
  return (
    <h2 className='font-bold text-3xl my-2'>
      {(() => {
        const res = getTaskStatus().length;
        switch (res) {
          case 0:
            return 'All tasks completed';
          case 1:
            return `${res} task remaining`;
          default:
            return `${res} tasks remaining`;
        }
      })()}
    </h2>
  );
};
export default SubHeader;
