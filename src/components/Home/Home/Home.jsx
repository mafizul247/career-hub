import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Jobs from '../Jobs/Jobs';
import useTitle from '../../../utilities/useTitle';
import { useNavigation } from 'react-router-dom';
import Loading from '../../Loading/Loading';


const Home = () => {
    const navigation = useNavigation();
    if(navigation.state === 'loading') {
        return <Loading />
    }
    useTitle('Home');

    return (
        <div className='space-y-8'>
            <Banner />
            <Category />
            <Jobs />
        </div>
    );
};

export default Home;