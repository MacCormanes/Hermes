import {doc, setDoc} from 'firebase/firestore'
import { auth, db } from './firebase.utils'

// add a document
export const addUserCartItems = async () => {
  console.log('i ran')
  const userRef = doc(db, 'users', `${auth.currentUser?.uid}`)
  await setDoc(userRef, {
    cart: [
      {
        id: 1,
        name: "Raincoat",
        thumbnail:
          "https://assets.hermes.com/is/image/hermesproduct/raincoat--361420HC85-worn-1-0-0-400-400_g.jpg",
        imageUrls: [
          "https://assets.hermes.com/is/image/hermesproduct/raincoat--361420HC85-worn-1-0-0-800-800_g.jpg",
          "https://assets.hermes.com/is/image/hermesproduct/raincoat--361420HC85-worn-3-0-0-800-800_g.jpg",
          "https://assets.hermes.com/is/image/hermesproduct/raincoat--361420HC85-worn-4-0-0-800-800_g.jpg",
          "https://assets.hermes.com/is/image/hermesproduct/raincoat--361420HC85-worn-5-0-0-800-800_g.jpg",
        ],
        price: 5850,
        realProductURL:
          "https://www.hermes.com/us/en/product/raincoat-H361420HC8546/",
      },
    ]
  }, {merge: true})
}
