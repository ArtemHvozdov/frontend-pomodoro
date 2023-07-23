import TitleRow from './title-row';
import Island from '../../BasicComponents/Island';
import IslandBodyContainer from '../../BasicComponents/IslandBodyContainer';
import IslandBodyRow from '../../BasicComponents/IslandBodyRow';
import './FontStyle.css'
import {useState} from "react";
import getAllActivities from "../../../service/activity-service";

const ActivityComponent = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const activities = getAllActivities()
    const [selectedItem, setSelectedItem] = useState(activities[0])

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);

    };

    const handleItemClick = (item) => {

        console.log(`Choosing item - ${item}`)
        setSelectedItem(item);
        setIsDropdownOpen(false);

    };

    const activityList = (activities) => {
        return (<IslandBodyContainer>
            <ul>
                {activities.map((activity) => (
                    <li onClick={() => handleItemClick(activity)}>
                        <IslandBodyRow rowClassName='font-row'
                                       rowText={activity}
                                       valueClassName='SnoozeSectionTittle__text'
                                       valueText=''>
                        </IslandBodyRow>
                    </li>
                ))}
            </ul>
        </IslandBodyContainer>)
    }

    const activityBody = () => {
        return (
            <IslandBodyContainer>
                <IslandBodyRow rowClassName='font-row'
                               rowText='Pomodoro closed today:'
                               valueClassName='SnoozeSectionTittle__text'
                               valueText='0'>
                </IslandBodyRow>
                <IslandBodyRow rowClassName='font-row'
                               rowText='Pomodoro total planned:'
                               valueClassName='SnoozeSectionTittle__text'
                               valueText='0'>
                </IslandBodyRow>
                <IslandBodyRow rowClassName='font-row'
                               rowText='Pomodoro total left:'
                               valueClassName='SnoozeSectionTittle__text'
                               valueText='0'>
                </IslandBodyRow>
            </IslandBodyContainer>
        )
    }

    const body = isDropdownOpen ? activityList(activities) : activityBody()

    return (
        <Island>
            <TitleRow className='font-title' text={selectedItem}
                      showSpan={!isDropdownOpen} onClick={toggleDropdown}></TitleRow>
            {body}
        </Island>
    )
}

export default ActivityComponent
