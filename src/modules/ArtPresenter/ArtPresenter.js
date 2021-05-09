import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { artRequested } from '../../store/slices/art'

function ArtPresenter() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(artRequested())
  }, [])
  const pending = useSelector((state) => state.art.requestStatus === 'pending')
  const rejected = useSelector((state) => state.art.requestStatus === 'rejected')
  const fulfilled = useSelector((state) => state.art.requestStatus === 'fulfilled')
  const object = useSelector((state) => state.art.data)
  const handleArtRequested = () => {
    dispatch(artRequested())
  }

  return (
    <>
      <header className="has-tooltip">
        <p className='tooltip rounded shadow-lg p-1 bg-red-50 text-red-600 -mt-4 py-2 px-4'>Here is a random piece from the Met. Click on the image to see a new one!</p>
        <h2>From the collection</h2>
      </header>
      { pending && <p className="bg-gray-50 p-4 my-2">Loading image...</p> }
      { rejected && <p className="bg-gray-50 p-4 my-2">Something went wrong...</p> }
      { fulfilled && (
        <>
          { object.imageUrl
            ? <img src={object.imageUrl} alt={object.title} />
            : <p>No image available for this object</p>
          }
          <p>{ `title: ${object.title}` }</p>
          <p>{ `data: ${object.date}` }</p>
          <p>{ `medium: ${object.medium}` }</p>
          <p>url: <a href={object.objectUrl} target='_blank' className="underline">{ object.objectUrl }</a></p>
        </>
      )}
      { !pending && <button onClick={handleArtRequested} className="mt-2 mr-3 rounded border border-gray-300 bg-white-50 hover:bg-gray-100 text-gray-500">New object</button> }
  </>)
}

export default ArtPresenter