import React, { useState, useEffect } from 'react'
import TitleRow from './title-row'
import Island from '../../common/island'
import IslandBody from '../../common/island-body'
import IslandBodyRow from '../../common/island-body-row'
import './activity-style.css'
import getAllActivities from "../../../service/activity-service"
import DropdownArrowComponent from "./dropdown-arrow-component";

const ActivityReport = () => {
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
            <IslandBody showSpan={true}>
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
            </IslandBody>
        )
    }

    const getReportRows = () => {
        return (
            <IslandBody>
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
            </IslandBody>
        )
    }

    const body = isDropdownOpen ? getActivities() : getReportRows()

    return (
        <Island>
            <TitleRow
                className='font-title'
                text={selectedItem}
                showSpan={!isDropdownOpen}
                childComponent={<DropdownArrowComponent onClick={toggleDropdown}/>}
            />
            {body}
        </Island>
    )
}

export default ActivityReport
