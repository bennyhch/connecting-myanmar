const Divider = ({ marginY }) => {
  return (
    <hr
      className={`h-px my-${marginY || 1} bg-gray-200 border-0 dark:bg-gray-700`}
    />
  );
};

export default Divider;
