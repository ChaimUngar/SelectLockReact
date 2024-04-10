import React from "react";
import SelectedItem from './SelectedItem'

export class SelectedList extends React.Component {
    render() {
        const { selectedNumbers, lockedNumbers, onLockClick } = this.props;

        return (
            <div className="row p-5 rounded col-md-12" style={{ backgroundColor: 'rgb(233, 236, 239)' }}>
                <div className="col-md-6 col-md-offset-3">
                    <h3>Selected Numbers</h3>
                    <ul className="list-group">
                        {selectedNumbers.map(n => <SelectedItem
                            key={n.id}
                            number={n}
                            isLocked={lockedNumbers.includes(n)}
                            onLockClick={() => onLockClick(n)} />)}
                    </ul>
                </div>
            </div>
        );
    }

}

export default SelectedList
