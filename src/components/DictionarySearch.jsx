const DictionarySearch = ({ definitions }) => {
    console.log(definitions)

    const { word, meanings } = definitions

    return (
        <div className="box">
            <h4>{word}</h4>
            {/*<p>{meanings[0].partOfSpeech}</p>*/}
            <div>
                <h4>Meaning:</h4>
             {/*<p>{meanings[0].definitions[0].definition}</p>*/}
            </div>
        </div>
    )

}

export default DictionarySearch