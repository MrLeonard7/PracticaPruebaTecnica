import { useEffect, useState } from "react"
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threefirstWords}?fontSize=100&fontColor=white&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'
const CAT_SUFIX_IMAGE_URL = '?fontSize=75&fontColor=white'

export function App () {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()
    console.log(fact);

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const { fact } = data
            setFact(fact)

            const threeFirstWords = fact.split(' ', 3).join(' ')
            console.log(threeFirstWords)

            setImageUrl(threeFirstWords+CAT_SUFIX_IMAGE_URL)
        })

    }, [])

    console.log(imageUrl);

    return (
        <main>
            <h1>App de gatitos</h1>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt=
                {`Image extracted using the first three words for ${fact}`} />}
            </section>
        </main>
    )
}