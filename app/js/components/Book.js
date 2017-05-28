import React from "react";

export default class Book extends React.Component {

    render() {
        const {id, title, prefix} = this.props;
        return (
            <tr>
                <td>{id}</td>
                <td>{prefix} {title}</td>
            </tr>
        );
    }
}
