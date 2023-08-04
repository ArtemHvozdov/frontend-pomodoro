import React, {useState, useEffect} from 'react'
import TitleRow from './title-row'
import Island from '../../BasicComponents/Island'
import IslandBodyContainer from '../../BasicComponents/IslandBodyContainer'
import IslandBodyRow from '../../BasicComponents/IslandBodyRow'
import './activity-style.css'
import getAllActivities from "../../../service/activity-service"

const ActivityComponent = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [activities, setActivities] = useState([])
    const [selectedItem, setSelectedItem] = useState("")

    useEffect(() => {
        const fetchActivities = async () => {
            const activityNames = await getAllActivities()
            setActivities(activityNames)

            setSelectedItem(activityNames[0])
        }

        fetchActivities()
    }, [])

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const handleItemClick = (item) => {
        console.log(`Choosing item - ${item}`)
        setSelectedItem(item)
        setIsDropdownOpen(false)
    }

    const getActivities = () => {
        return (
            <IslandBodyContainer showSpan={true}>
                <ul>
                    {activities.map((activity) => (
                        <li key={activity} onClick={() => handleItemClick(activity)}>
                            <IslandBodyRow
                                rowClassName='font-row'
                                rowText={activity}
                                valueClassName='SnoozeSectionTittle__text'
                                valueText=''
                                hoverable={true}
                            />
                        </li>
                    ))}
                </ul>
            </IslandBodyContainer>
        )
    }

    const getReportRows = () => {
        return (
            <IslandBodyContainer>
                <IslandBodyRow
                    rowClassName='font-row'
                    rowText='Pomodoro closed today:'
                    valueClassName='SnoozeSectionTittle__text'
                    valueText='0'
                />
                <IslandBodyRow
                    rowClassName='font-row'
                    rowText='Pomodoro total planned:'
                    valueClassName='SnoozeSectionTittle__text'
                    valueText='0'
                />
                <IslandBodyRow
                    rowClassName='font-row'
                    rowText='Pomodoro total left:'
                    valueClassName='SnoozeSectionTittle__text'
                    valueText='0'
                />
            </IslandBodyContainer>
        )
    }

    const body = isDropdownOpen ? getActivities() : getReportRows()

    return (
        <Island>
            <TitleRow
                className='font-title'
                text={selectedItem}
                showSpan={!isDropdownOpen}
                onClick={toggleDropdown}
            />
            {body}
        </Island>
    )
}

export default ActivityComponent
