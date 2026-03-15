const SliderHandle = () => {
  return (
    <div className="w-1 h-full bg-primary relative flex items-center justify-center">
      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-xl">
        <div className="flex gap-1">
          <div className="w-1 h-3 bg-white rounded-full" />
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default SliderHandle;