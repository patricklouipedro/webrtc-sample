import React from 'react';
import clsx from 'clsx';
import './layout.css';

interface Props {
  bg?: 'primary';
  className?: string;
}

class Layout extends React.Component<Props> {
  addBackground = () => {
    const bg = `bg-${this.props.bg}`;
    const el = document.getElementsByTagName('body')[0];
    el.classList.add(bg);
    this.setState({});
  };

  removeBackground = (bgClass: string) => {
    const el = document.getElementsByTagName('body')[0];
    el.classList.remove(`bg-${bgClass}`);
  };

  componentDidMount() {
    if (this.props.bg) {
      this.addBackground();
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.bg && !this.props.bg) {
      this.removeBackground(prevProps.bg);
    }
  }

  render() {
    return (
      <div className={clsx('layout', this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
