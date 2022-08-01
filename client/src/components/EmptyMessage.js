export default function EmptyMessage() {
  return (
    <>
      <div className="flex justify-center w-screen">
        <h1 className="hover:bg-neutral-800 hover:drop-shadow-md border-none rounded-md text-neutral-200 text-2xl font-semibold font-sans hover:-translate-y-1 transform delay-150 duration-700 transition cursor-pointer p-6">
          You haven't listed anything{" "}
          <span className="text-emerald-500">to do</span>!
        </h1>
      </div>
    </>
  );
}
