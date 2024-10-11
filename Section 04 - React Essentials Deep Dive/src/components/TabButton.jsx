export default function TabButton({children, onSelect, isSelcted}) {
    return (
        <li>
            <button className={isSelcted ? 'active' : undefined} onClick={onSelect}>
                {children}
            </button>
        </li>
    )
}