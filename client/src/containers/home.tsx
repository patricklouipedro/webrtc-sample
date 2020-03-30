import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../app/store';
import { RouteComponentProps } from 'react-router-dom';

import Layout from '../components/Layout';
import CreateRoomForm from '../components/CreateRoomForm';
import Container from '../components/Container';

import { createRoom } from '../actions/app';
import { bindActionCreators, Dispatch } from 'redux';

interface Props extends RouteComponentProps {
  createRoom: Function;
  creating: boolean;
  joining: boolean;
}

class Home extends React.Component<Props> {
  onCreateRoom = async (values: { room: string; name: string }) => {
    const roomId = await this.props.createRoom(values.room, values.name);
    if (roomId) {
      this.props.history.push(`/room/${roomId}`);
    }
  };

  render() {
    return (
      <Layout bg="primary">
        <Container center>
          <CreateRoomForm onSubmit={this.onCreateRoom} />
        </Container>
      </Layout>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  creating: state.app.creating,
  joining: state.app.joining
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ createRoom }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
