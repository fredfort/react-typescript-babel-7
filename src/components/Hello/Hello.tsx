import * as React from "react";
import { hot } from 'react-hot-loader'

export interface IHelloProps {
  compiler: string
  framework: string;
}

export interface IHelloState {
  showDetails: boolean
}

export const title = "title";

class Hello extends React.PureComponent<IHelloProps, IHelloState>{
  public state = {
    showDetails: false
  }

  public toggleDetail = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ showDetails: !this.state.showDetails })
  }

  public renderDetails(): JSX.Element{
    return <div>Details</div>
  }

  public render() : JSX.Element{
    const {compiler, framework} = this.props
    return (
      <div>
        <h1 title={process.env.PLATFORM} id={title}>
          Hello from {compiler} and {framework}!
        </h1>
        <button onClick={this.toggleDetail}> Show/Hide details</button>
        {this.state.showDetails && this.renderDetails()}
      </div>
    );
  }
};

export default hot(module)(Hello)