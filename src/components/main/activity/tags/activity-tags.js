import Island from '../../../common/island'
import TitleRow from '../title-row'
import NewTagLabel from '../../../common/new-tag-label';
import IslandBody from '../../../common/island-body';
import TagsContainer from './tags-container';

const ActivityTags = () => {

    return (
        <Island>
            <TitleRow
                className='font-title'
                text='Activity tags'
                childComponent={<NewTagLabel/>}
                showSpan={true}
            />
            <IslandBody>
                <TagsContainer></TagsContainer>
            </IslandBody>
        </Island>
)

}

export default ActivityTags
