import React from 'react';

export default class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: props.show,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(() => ({
      show: nextProps.show,
    }));
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        {show ? <span>hello</span> : null}
      </div>
    );
  }
}

