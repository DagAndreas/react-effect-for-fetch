

function ArtListItem({ artItem}) {
    return (
        <li>
            <div className="frame">
                <img
                src={`https://boolean-api-server.fly.dev${artItem.imageUrl}`}
                alt={artItem.title}
                />
            </div>
            <h3>{artItem.title}</h3>
            <p>Artist: {artItem.artist}</p>
            <h4>Publication History:</h4>
            <ul>
                {artItem.publicationHistory.map((historyItem, index) => (
                    <li key={index}>{historyItem}</li>
                ))}
            </ul>
        </li>
    )
}

export default ArtListItem