import React from 'react';
import { Title, Card } from './Home.styles';
// import { Container } from 'react-awesome-styled-grid'


const Home = () => {
    return (
        <React.Fragment>
            <Title>
                Song List
            </Title>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">

                        <Card background="papayawhip">
                            <h2>Radioactive</h2>
                            <h5>Imagine Dragons</h5>
                        </Card>

                        <Card>
                            <h2>Believer</h2>
                            <h5>Imagine Dragons</h5>
                        </Card>
                        
                    </div>

                    <div className="col-md-6">
                        
                        <Card>
                            <h2>Yellow</h2>
                            <h5>Coldplay</h5>
                        </Card>

                        <Card>
                            <h2>A Sky Full of Stars</h2>
                            <h5>Coldplay</h5>
                        </Card>
                    </div>
                </div>
            </div>
            
        </React.Fragment>

      
    );
};

export default Home;