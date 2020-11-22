import { useState, useEffect } from 'react'
import firebase from 'firebase'

const VocabController = () => {

    const col = firebase.firestore().collection('vocabs')

    // col.get().then((result) => {
    //     result.docs.forEach((doc) => {
    //         console.log(doc.data());
    //     })
    // })
    const [vocabs, setVocabs] = useState(null);

    useEffect(() => {
        const unsub = col.onSnapshot((result) => {
            const dataList = result.docs.map((doc) => {
                return doc.data();
            });
            setVocabs(dataList)
        });
        return () => {
            unsub();
        }
    }, [])

    const addVocab = (word, types, meanings) => {
        setVocabs([...vocabs, {
            word,
            types,
            meanings: meanings.split(",").map((item) => item.trim())
        }])
    }

    const deleteVocab = (index) => {
        const newArr = vocabs.filter((data, id) => {
            return id !== index
        })
        setVocabs(newArr)
    }

    return { vocabs, setVocabs, addVocab, deleteVocab }

}

export default VocabController
