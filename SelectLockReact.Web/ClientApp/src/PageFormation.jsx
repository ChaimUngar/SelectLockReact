import React from "react"
import { v4 as uuidv4 } from 'uuid';
import NumberTable from "./NumberTable";
import SelectedList from "./SelectedList";


class PageFormation extends React.Component {

    state = {
        allNumbers: [],
        selectedNumbers: [],
        lockedNumbers: []
    }

    getNumberForList = () => {
        const num = {
            id: uuidv4(),
            number: Math.floor(Math.random() * 500)
        };

        return num;
    }

    addClicked = () => {
        const { allNumbers } = this.state;
        this.setState({ allNumbers: [...allNumbers, this.getNumberForList()] })
    }

    selectButtonClicked = (n) => {
        const { selectedNumbers } = this.state;
        if (selectedNumbers.includes(n)) {
            this.setState({ selectedNumbers: selectedNumbers.filter(num => num.id !== n.id) });
        } else {
            this.setState({ selectedNumbers: [...selectedNumbers, n] });
        }
    }

    onLockClick = (n) => {
        const { lockedNumbers } = this.state;
        if (lockedNumbers.includes(n)) {
            this.setState({ lockedNumbers: lockedNumbers.filter(num => num.id !== n.id) })
        } else {
            this.setState({ lockedNumbers: [...lockedNumbers, n] })
        }
    }

    buildSelectList = () => {
        const { selectedNumbers, lockedNumbers } = this.state;
        if (selectedNumbers.length !== 0) {
            return (
                <>
                    <SelectedList selectedNumbers={selectedNumbers}
                        lockedNumbers={lockedNumbers}
                        onLockClick={this.onLockClick}
                    />
                </>
            )
        }
    }

    render() {
        const { allNumbers, selectedNumbers, lockedNumbers } = this.state;

        return (
            <>
                <NumberTable addClicked={this.addClicked}
                    numbers={allNumbers}
                    selectedNumbers={selectedNumbers}
                    selectButtonClicked={this.selectButtonClicked}
                    lockedNumbers={lockedNumbers} />

                {this.buildSelectList()}
            </>
        )
    }
}

export default PageFormation