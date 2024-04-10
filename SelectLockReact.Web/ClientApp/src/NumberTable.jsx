import React from 'react';
import NumberRow from './NumberRow';

class NumberTable extends React.Component {

    render() {
        const { addClicked, numbers, selectedNumbers, selectButtonClicked, lockedNumbers } = this.props;

        return (

            <div id="root">
                <div className="container" style={{ marginTop: '60px' }}>
                    <div className="row">
                        <div className="col-md-12">
                            <button className="btn btn-success btn-lg w-100"
                                onClick={addClicked}>Add
                            </button>
                        </div>
                    </div>
                    <div style={{ maxHeight: '500px', overflowY: 'scroll' }}>
                        <table className="table table-hover table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th style={{ width: '25%' }}>Number</th>
                                    <th>Add/Remove</th>
                                </tr>
                            </thead>

                            <tbody>
                                {numbers.map(n => <NumberRow
                                    key={n.id}
                                    number={n.number}
                                    isSelected={selectedNumbers.includes(n)}
                                    selectButtonClicked={() => selectButtonClicked(n)}
                                    isLocked={lockedNumbers.includes(n)} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default NumberTable;