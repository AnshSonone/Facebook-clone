export default function SliderRow({ icon, title }) {
  return (
    <div className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded-md cursor-pointer">
      {icon}
      <p className="hidden sm:block">{title}</p>
    </div>
  );
}
