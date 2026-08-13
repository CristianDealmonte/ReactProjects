import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem}: MenuItemProps) {
  return (
    <button
        className="flex justify-between border-2 hover:bg-teal-200 border-teal-400  w-full p-3 "
        onClick={() => addItem(item)}
    >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}
