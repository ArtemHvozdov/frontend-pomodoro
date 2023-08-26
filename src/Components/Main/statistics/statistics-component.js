import Island from '../../basic-components/island'
import React, { useState } from 'react'
import TitleRow from '../activity/title-row'
import IslandBodyContainer from '../../basic-components/island-body-container'
import IslandBodyRow from '../../basic-components/island-body-row'
import getPeriods from "../../../utility/statistics-utility"

const StatisticsComponent = () => {

    const statisticPeriods = getPeriods()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState(statisticPeriods[0])

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const getReportRows = () => {
        return (
            <IslandBodyContainer>
                <IslandBodyRow
                    rowClassName='font-row'
                    rowText='Total pomodoro:'
                    valueClassName='SnoozeSectionTittle__text'
                    valueText='0'
                />
                <IslandBodyRow
                    rowClassName='font-row'
                    rowText='Working pomodoro:'
                    valueClassName='SnoozeSectionTittle__text'
                    valueText='0'
                />
                <IslandBodyRow
                    rowClassName='font-row'
                    rowText='Educational pomodoro:'
                    valueClassName='SnoozeSectionTittle__text'
                    valueText='0'
                />
                <IslandBodyRow
                    rowClassName='font-row'
                    rowText='Other pomodoro:'
                    valueClassName='SnoozeSectionTittle__text'
                    valueText='0'
                />
            </IslandBodyContainer>
        )
    }

    const getPeriodList = () => {
        return (
            <IslandBodyContainer showSpan={true}>
                <ul>
                    {statisticPeriods.map((statisticPeriod) => (
                        <li key={statisticPeriod} onClick={() => handleItemClick(statisticPeriod)}>
                            <IslandBodyRow
                                rowClassName='font-row'
                                rowText={statisticPeriod}
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

    const handleItemClick = (item) => {
        console.log(`Choosing item - ${item}`)
        setSelectedItem(item)
        setIsDropdownOpen(false)
    }

    const body = isDropdownOpen ? getPeriodList() : getReportRows()

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

export default StatisticsComponent
