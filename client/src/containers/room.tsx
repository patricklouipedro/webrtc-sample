import React from 'react';
import { connect } from 'react-redux';

class Room extends React.Component {
  render() {
    return <div>Conference</div>;
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
