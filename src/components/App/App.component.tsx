
import * as React from "react";
import { hot } from 'react-hot-loader'
import { appStyle } from './App.scss';

export interface IAppProps {
  compiler: string
  framework: string;
}

export interface IAppState {
  showDetails: boolean
}

export const title = "title";

class App extends React.PureComponent<IAppProps, IAppState>{
  public state = {
    showDetails: false
  }

  public toggleDetail = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ showDetails: !this.state.showDetails })
  }

  public renderDetails(): JSX.Element{
    return <div>Details to show HMR</div>
  }

  public render() : JSX.Element{
    const {compiler, framework} = this.props
    return (
      <div className={appStyle}>
        <h1 title={process.env.PLATFORM} id={title}>
          Hello from {compiler} and {framework}!
        </h1>
        <button onClick={this.toggleDetail}> Show/Hide details</button>
        {this.state.showDetails && this.renderDetails()}
      </div>
    );
  }
};

export default hot(module)(App)