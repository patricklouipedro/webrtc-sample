import React from 'react';
import './create-room-form.css';

import Field from '../FormFields/Field';
import Input from '../FormFields/Input';
import Button from '../Button';

interface Props {
  onSubmit: (values: { room: string; name: string }) => void;
}

interface State {
  values: {
    room: string;
    name: string;
  };
}

class CreateRoomForm extends React.Component<Props, State> {
  state: State = {
    values: { room: '', name: '' }
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSubmit(this.state.values);
  };

  onInputChange = (name: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    // @ts-ignore
    this.setState({ values: { ...this.state.values, [name]: e.target.value } });
  };

  render() {
    return (
      <div className="create-room-form">
        <form onSubmit={this.onSubmit}>
          <Field>
            <Input
              block
              label="What would you like to call the room?"
              variant="lg"
              type="text"
              name="room"
              id="room"
              onChange={this.onInputChange('room')}
            />
          </Field>
          <Field>
            <Input
              block
              label="What is your name?"
              type="text"
              name="name"
              id="name"
              onChange={this.onInputChange('name')}
            />
          </Field>
          <div className="submit-container">
            <Button type="submit" block>
              Create Room
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateRoomForm;
