const Loader = () => {
  return (
    <div className="flex flex-col items-center mt-10 justify-center gap-3">
      <div className="size-16 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
      <p>Yükleniyor...</p>
    </div>
  );
};

export default Loader;
