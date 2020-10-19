import React from 'react';
import Chart from './components/Chart';
import ShowData from './components/ShowData';



const routers = [
    {
        path: '/',
        exact: true,
        main: () => <Chart/>
    },
    {
        path: '/showdata',
        exact: false,
        main: () => <ShowData/>
    },
];
export default routers;