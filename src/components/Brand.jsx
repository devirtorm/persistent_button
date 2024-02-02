function Brand() {
  return (
    <div className="bg-indigo-700 font-black rounded-lg shadow m-4 dark:bg-indigo-700">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://linkedin.com/in/devirtorm" className="hover:underline">
            Devirtorm™
          </a>
        </span>
      </div>
    </div>
  );
}

export default Brand;
