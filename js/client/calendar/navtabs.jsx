import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

class NavTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: props.initialCount};
    }

    renderItems() {
        var key = 0;
        return this.props.items.map((item) => {
            return <Tab key={++key} label={item.label} >
            {item.content}
            </Tab>
        })
    }

    render() {
        return <Tabs>{this.renderItems()}</Tabs>;
    }
}

export default NavTabs;
