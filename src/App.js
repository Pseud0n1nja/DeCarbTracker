import React, { useEffect, useState } from 'react';
import web3 from './web3';

function App() {
    const [account, setAccount] = useState('');

    useEffect(() => {
        const getAccount = async () => {
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
        };

        getAccount();
    }, []);

    return (
        <div>
            <h2>DeCarbTracker</h2>
            <p>Connected Account: {account}</p>
            {/* Additional UI components go here */}
        </div>
    );
}

export default App;
