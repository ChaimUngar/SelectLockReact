import React from "react";

class NumberRow extends React.Component {
    render() {
        const { selectButtonClicked, number, isSelected, isLocked } = this.props;

        return (
            <tr>
                <td>
                    {number}
                </td>
                <td>
                    <button disabled={isLocked} className={`btn btn-${isSelected ? 'danger' : 'primary'}`}
                        onClick={selectButtonClicked}>
                        {isSelected ? 'Remove from Selected' : 'Add to Selected'}
                    </button>
                </td>
            </tr>
        )
    }
}

export default NumberRow;