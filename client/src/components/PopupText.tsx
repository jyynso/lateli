export default function PopupText({ text, className }: { text: string, className: string}) {
  return (
    <span className={`absolute left-1/2 -translate-x-1/2 rounded bg-gray-800 px-2 py-1 text-white opacity-0 invisible scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:scale-100 ${className ?? ""}`}>
      {text}
    </span>
  );
}