import { useState, useEffect } from 'react'
import DirectusSDK from '@directus/sdk-js'
import sort from 'fast-sort'

export function useTags(categoryId) {
  const [tags, setTags] = useState([])

  useEffect(() => {
    const client = new DirectusSDK({
      url: 'https://directus.coronahilfe-finder.de',
      project: 'coronahilfe-finder',
      storage: window.localStorage,
    })

    client
      .getItems('offer', {
        //filter: { category: categoryId },
      })
      .then(({ data }) => {
        sort(data).asc(offer => offer.name)
        setTags(data)
      })
  }, [categoryId])

  return tags
}
