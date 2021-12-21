
import { CategoryTypes } from '../../../services/data-types'
import { getCategorys } from '../../../services/player'
import { useCallback, useEffect, useState } from 'react'

export default function SignUpCategory() {
    const [CategoryState, setCategoryState] = useState([] as Array<CategoryTypes>)

    const getCategoryList = useCallback(async () => {
        const data = await getCategorys()
        setCategoryState(data)
        localStorage.setItem("favorite", data[0]._id)
    }, [getCategorys])

    useEffect(() => {
        getCategoryList()
    }, [])
    return (
        <div className="pt-50 pb-50">
            <label htmlFor="category" className="form-label text-lg fw-medium color-palette-1 mb-10">Favorite
                Game</label>
            <select id="category" name="category" className="form-select d-block w-100 rounded-pill text-lg"
                aria-label="Favorite Game" onChange={(e) => { localStorage.setItem("favorite", e.target.value) }}>
                {
                    CategoryState.map(val => {
                        return (
                            <option key={val._id} value={val._id}>{val.name}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}