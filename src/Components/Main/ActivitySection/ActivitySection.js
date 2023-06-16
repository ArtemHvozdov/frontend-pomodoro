import TitleRow from '../../BasicComponents/TitleRow';
import Island from '../../BasicComponents/Island';
import IslandBodyContainer from '../../BasicComponents/IslandBodyContainer';
import IslandBodyRow from '../../BasicComponents/IslandBodyRow';
import './FontStyle.css'

function ActivitySection() {

    return (
        <Island>
            <TitleRow className='font-title' text='Activity name'></TitleRow>
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
        </Island>
    )
}

export default ActivitySection
