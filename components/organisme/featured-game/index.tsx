import { useCallback, useEffect, useState } from 'react'
import { GameItemTypes } from '../../../services/data-types'
import { getFeaturedGame } from '../../../services/player'
import FeaturedGameItem from '../../molecules/FeaturedGameItem'

export default function FeaturedGame() {
    const [GameList, setGameList] = useState([]) // set difault value

    const getFeaturedGameList = useCallback(async () => {
        const data = await getFeaturedGame()
        setGameList(data)
    }, [getFeaturedGame])


    useEffect(() => {
        getFeaturedGameList()
    }, [])
    return (
        <section className="featured-game pt-50 pb-50">
            <div className="container-fluid">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Featured<br /> Games This Year
                </h2>
                <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
                    data-aos="fade-up">
                    {
                        GameList.map((value: GameItemTypes) => {
                            return (
                                <FeaturedGameItem
                                    key={value._id}
                                    id={value._id}
                                    name={value.name}
                                    src={value.thumbnail}
                                    device={value.category.name}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}