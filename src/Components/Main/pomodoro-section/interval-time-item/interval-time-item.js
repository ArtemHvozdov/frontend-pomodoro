import Dote from "./../../../basic-components/dote"
import Text from "./../../../basic-components/text"
import VerticalLine from "./../../../basic-components/vertical-line"
import "./interval-time-item.css"

function IntervalTimeItem({ time, isCurrent, marginLeftValue }) {
    return (
        <div className="intervalItem">
            <div className="intervalItem-tittle">
                <Dote />
                <Text text={time} style={{ 'color': '#ffffff' }} />
                <Dote />
            </div>

            <div className="container-vertical-line">
                <VerticalLine />
            </div>
            {isCurrent && <div className="red-vertical-line" style={{ marginLeft: marginLeftValue + 'px' }}></div>}
        </div>
    )
}

export default IntervalTimeItem
