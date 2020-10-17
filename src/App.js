import React from 'react';
import {Grid, Header} from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";

export class App extends React.PureComponent {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Grid style={{padding: '1em 2em'}}>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h1' dividing>
                                Peptalk Toolkit
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

