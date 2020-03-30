import React from 'react';
import { connect } from 'react-redux';
import { getMediaStream } from '../helpers/video';
import { RouteComponentProps } from 'react-router-dom';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Loader from '../components/Loader/loader';

interface Props extends RouteComponentProps {}

interface State {
  loading: boolean;
  hasRoom: boolean;
}

class Room extends React.Component<Props> {
  state: State = {
    loading: true,
    hasRoom: false
  };

  connectToRoom = (id: string) => {
    this.setState({ hasRoom: true });
  };

  initRoom = () => {
    console.log('Initializing Room...');
    console.log(this.props.match);

    // @ts-ignore
    if (this.props.match.params.id) {
      // @ts-ignore
      this.connectToRoom(this.props.match.params.id);
    }

    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  initVideo = async () => {
    try {
      const stream = await getMediaStream();
      this.appendVideoToElement(stream);
    } catch (err) {
      console.error('Error in getting user media');
    }
  };

  appendVideoToElement = (stream: MediaStream) => {
    if (!stream) return;

    const element = document.querySelector('video');
    if (!element) return;
    element.srcObject = stream;
  };

  componentDidMount() {
    this.initRoom();
  }

  render() {
    return (
      <Layout bg={this.state.loading ? 'primary' : undefined}>
        <Container>
          {this.state.loading && <Loader message="Getting the room ready..." />}
        </Container>
      </Layout>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
