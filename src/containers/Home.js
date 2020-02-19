import React from 'react';
import { Route, Switch } from 'react-router-dom'

import WorkImageCard from '../components/WorkImageCard';
import VideoShow from '../components/VideoShow';
import RecentWork from '../components/RecentWork';

import { featuredWork } from '../constants/featuredWork';

const Home = () => {


    const renderFeatures = () => {
        return featuredWork.map(work => <WorkImageCard key={work.id} {...work} />)
    }

    return(
    <>
        <div className="home-container">
            
            <Switch>

                <Route path={`/home/:company`} component={VideoShow} />

                <Route exact path={'/home'}>
                    <div className="screengrab-container">
                        {renderFeatures()}
                    </div>
                    <footer>
                        <RecentWork />
                    </footer>
                </Route>

            </Switch>

        </div>

        

    </>

    )
}

export default Home;