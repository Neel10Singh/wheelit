// import React, { useState } from 'react'
// import './upload.css'
// import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
// import { db, storage } from '../firebase'
// import { addDoc, collection } from 'firebase/firestore'

// const Upload = () => {
//   const [formData, setFormData] = useState({
//     vehiclename: '',
//     type: '',
//     about: '',
//     features: [
//       '360 camera',
//       'Parking Assist',
//       'Cruise Control',
//       'Digital Cluster',
//       'Hill Assist',
//       'TPMS',
//       'ABS+EBD',
//       'Climate control',
//       ' Driving modes',
//       'Tachometer',
//     ],
//     transmissionType: '',
//     powertype: '',
//     seats: '',
//     price: '',
//     rating: '',
//     trips: '',
//     file: null,
//     booked: false,
//     bookingId: '',
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//   }

//   const handleFileChange = (e) => {
//     const name = new Date().getTime() + e.target.files[0].name
//     const storageRef = ref(storage, name)
//     const uploadTask = uploadBytesResumable(storageRef, e.target.files[0])
//     uploadTask.on(
//       'state_changed',
//       (snapshot) => {
//         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         console.log('Upload is ' + progress + '% done')
//         switch (snapshot.state) {
//           case 'paused':
//             console.log('Upload is paused')
//             break
//           case 'running':
//             console.log('Upload is running')
//             break
//         }
//       },
//       (error) => {
//         console.log(error)
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           console.log('File available at', downloadURL)
//           setFormData({
//             ...formData,
//             file: downloadURL,
//           })
//         })
//       }
//     )
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const docRef = await addDoc(collection(db, 'mumbai'), {
//         ...formData,
//       })
//       console.log('Document written with ID: ', docRef.id)
//     } catch (e) {
//       console.error('Error adding document: ', e)
//     }
//     console.log(formData)
//   }

//   return (
//     <form onSubmit={handleSubmit} className='form-container'>
//       <div className='form-group'>
//         <label>Vehicle Name:</label>
//         <input
//           type='text'
//           name='vehiclename'
//           value={formData.vehiclename}
//           onChange={handleChange}
//         />
//       </div>
//       <div className='form-group'>
//         <label>About:</label>
//         <input
//           type='text'
//           name='about'
//           value={formData.about}
//           onChange={handleChange}
//         />
//       </div>
//       <div className='form-group'>
//         <label>Type:</label>
//         <input
//           type='text'
//           name='type'
//           value={formData.type}
//           onChange={handleChange}
//         />
//       </div>
//       <div className='form-group'>
//         <label>Transmission Type:</label>
//         <input
//           type='text'
//           name='transmissionType'
//           value={formData.transmissionType}
//           onChange={handleChange}
//         />
//       </div>
//       <div className='form-group'>
//         <label>Power Type:</label>
//         <input
//           type='text'
//           name='powertype'
//           value={formData.powertype}
//           onChange={handleChange}
//         />
//       </div>
//       <div className='form-group'>
//         <label>Seats:</label>
//         <input
//           type='number'
//           name='seats'
//           value={formData.seats}
//           onChange={handleChange}
//         />
//       </div>
//       <div className='form-group'>
//         <label>Price:</label>
//         <input
//           type='number'
//           name='price'
//           value={formData.price}
//           onChange={handleChange}
//         />
//       </div>
//       <div className='form-group'>
//         <label>Rating:</label>
//         <input
//           type='number'
//           name='rating'
//           value={formData.rating}
//           onChange={handleChange}
//         />
//       </div>
//       <div className='form-group'>
//         <label>Trips:</label>
//         <input
//           type='number'
//           name='trips'
//           value={formData.trips}
//           onChange={handleChange}
//         />
//       </div>
//       <div className='form-group'>
//         <label>Upload File:</label>
//         <input type='file' name='file' onChange={handleFileChange} />
//       </div>
//       <button type='submit' className='submit-button'>
//         Submit
//       </button>
//     </form>
//   )
// }

// export default Upload
