function Confirmation({ onConfirm, onCancel, content, title }: { onConfirm: () => void; onCancel: () => void; content?: string; title: string }) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center z-50">
      <div className="flex flex-col justify-between px-4 py-4 w-64 h-36 rounded-sm bg-white">
        <h2 className="font-semibold">{title}</h2>
        <p>{content}</p>
        <span className="block h-px bg-gray-200"/>
        <span className="space-x-2 ml-auto">
          <button onClick={onCancel} className="cursor-pointer p-1.5 text-sm">Cancel</button>
          <button onClick={onConfirm} className="cursor-pointer p-1.5 text-sm rounded-sm bg-(--accent-orange) text-white">Proceed</button>
        </span>
      </div>
    </div>
  );
}

export default Confirmation;