export default function Item(item) {
    return (
        <div>
            <img src={item.item.imgUrl} alt={item.item.alt} height="200px" />
            <p>{item.item.name}</p>
        </div>
    );
}